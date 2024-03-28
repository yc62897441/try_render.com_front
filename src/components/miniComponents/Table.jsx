// 套件
import React, { useState, useEffect, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// 靜態資源
import arrowSVG from '../../assets/img/arrow-up-svgrepo-com.svg'

// 自定義 components
import Modal from '../Modal'
import PaginationRaw from './Pagination'

// 自定義函數 or 參數
import { dispatchKEEP_FETCH } from '../../actions'

function Table({ tableData }) {
    return (
        <div className='tableWrapper'>
            <div className='tableContainer'>
                <table>
                    <thead>
                        <tr>
                            {tableData.length > 0 &&
                                Object.keys(tableData[0]).length > 0 &&
                                Object.keys(tableData[0]).map((key) => <th key={key}>{key}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.length > 0 &&
                            tableData.map((item, index) => (
                                <tr key={index}>
                                    {Object.keys(tableData[0]).length > 0 &&
                                        Object.keys(tableData[0]).map((key, keyIndex) => (
                                            <td key={keyIndex + key}>{item[key]}</td>
                                        ))}
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function TableWithSort({ tableData }) {
    const [sortProperty, setSortProperty] = useState(null)
    const [isSortAsc, setIsSortAsc] = useState(true)

    // 切換排序設定
    function handleClickSort(key) {
        if (sortProperty === key) {
            setIsSortAsc((i) => !i) // 切換排序方向
        } else {
            setIsSortAsc(true) // 如果不同，預設升冪排序
            setSortProperty(key)
        }
    }

    // 執行排序
    function doSort(tableData) {
        if (!tableData || tableData?.length === 0 || !sortProperty) return
        const tableDataSorted = [...tableData]
        try {
            tableDataSorted.sort(function (a, b) {
                if (isSortAsc) {
                    return a[sortProperty] > b[sortProperty] ? 1 : -1
                } else {
                    return a[sortProperty] < b[sortProperty] ? 1 : -1
                }
            })
        } catch (error) {
            console.error(error)
        }
        return tableDataSorted
    }
    const tableDataSorted = doSort(tableData) || tableData // 取得排序後的結果

    if (!tableDataSorted || tableDataSorted?.length === 0) return <div>查無資料</div>
    return (
        <div className='tableWrapper'>
            <div className='tableContainer'>
                <table>
                    <thead>
                        <tr>
                            {tableDataSorted.length > 0 &&
                                Object.keys(tableDataSorted[0]).length > 0 &&
                                Object.keys(tableDataSorted[0]).map((key) => (
                                    <th key={key}>
                                        <span
                                            className={
                                                (isSortAsc ? 'acs' : '') +
                                                ' ' +
                                                (sortProperty === key ? 'isSort' : '')
                                            }
                                            onClick={() => {
                                                handleClickSort(key)
                                            }}
                                        >
                                            {key}
                                            <img src={arrowSVG} alt='' srcSet='' />
                                        </span>
                                    </th>
                                ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableDataSorted.length > 0 &&
                            tableDataSorted.map((item, index) => (
                                <tr key={index}>
                                    {Object.keys(tableDataSorted[0]).length > 0 &&
                                        Object.keys(tableDataSorted[0]).map((key, keyIndex) => (
                                            <td key={keyIndex + key}>{item[key]}</td>
                                        ))}
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function TableWithSortPagination({ tableData }) {
    const [sortProperty, setSortProperty] = useState(null)
    const [isSortAsc, setIsSortAsc] = useState(true)

    // 切換排序設定
    function handleClickSort(key) {
        if (sortProperty === key) {
            setIsSortAsc((i) => !i) // 切換排序方向
        } else {
            setIsSortAsc(true) // 如果不同，預設升冪排序
            setSortProperty(key)
        }
    }

    // 執行排序
    function doSort(tableData) {
        if (!tableData || tableData?.length === 0 || !sortProperty) return
        const tableDataSorted = [...tableData]
        try {
            tableDataSorted.sort(function (a, b) {
                if (isSortAsc) {
                    return a[sortProperty] > b[sortProperty] ? 1 : -1
                } else {
                    return a[sortProperty] < b[sortProperty] ? 1 : -1
                }
            })
        } catch (error) {
            console.error(error)
        }
        return tableDataSorted
    }
    const tableDataSorted = doSort(tableData) || tableData // 取得排序後的結果

    return (
        <TableWithPagination
            propData={tableDataSorted}
            handleClickSort={handleClickSort}
            isSortAsc={isSortAsc}
            sortProperty={sortProperty}
        />
    )
}

function TableWithPagination({ propData, handleClickSort, isSortAsc, sortProperty }) {
    const dispatch = useDispatch()
    const keepFetch = useSelector((state) => state.persistedControlReducer.keepFetch)
    const [totalData, setTotalData] = useState([])
    const [showData, setShowData] = useState([])
    // 分頁的預設參數
    const [paginationStates, setPaginationStates] = useState({
        page: 1,
        maxPage: 1,
        numberPerPage: 10,
    })

    useEffect(() => {
        setTotalData(propData)

        if (!keepFetch) {
            // 第一次渲染時，建立 pagination 參數；或是 reFetch(例如重新搜尋)，則分頁自動回到第 1 頁
            setPaginationStates({
                ...paginationStates,
                page: 1,
                maxPage: Math.ceil(propData.length / paginationStates.numberPerPage),
            })
        } else {
            // 如果是 keepFetch，則要更新 maxPage
            setPaginationStates({
                ...paginationStates,
                maxPage: Math.ceil(propData.length / paginationStates.numberPerPage),
            })
            dispatch(dispatchKEEP_FETCH(false))
        }
    }, [propData])

    // 分頁參數變動時，更改要顯示的資料
    useEffect(() => {
        const startIndex = paginationStates.numberPerPage * (paginationStates.page - 1)
        const endIndex = startIndex + paginationStates.numberPerPage
        setShowData(totalData.slice(startIndex, endIndex))
    }, [paginationStates])

    // pagination 使用的函數，改變當前頁面(如上一頁、下一頁)
    function handleChangePage(newPage) {
        const page =
            newPage > paginationStates.maxPage
                ? paginationStates.maxPage
                : newPage < 1
                  ? 1
                  : newPage
        const maxPage = Math.ceil(propData.length / paginationStates.numberPerPage)
        setPaginationStates({
            ...paginationStates,
            page: page,
            maxPage: maxPage,
        })
        if (page === maxPage) triggerKeepFetch()
    }
    // pagination 使用的函數，改變當前每頁顯示數量
    function handleChangeNumberPerPage(newNumberPerPage) {
        // 計算出「改變 numberPerPage」後，應在第幾頁
        const currentPageFirstItemIndex =
            (paginationStates.page - 1) * paginationStates.numberPerPage
        const newPage = Math.floor(currentPageFirstItemIndex / Number(newNumberPerPage)) + 1

        // 改變 numberPerPage
        const page =
            newPage > paginationStates.maxPage
                ? paginationStates.maxPage
                : newPage < 1
                  ? 1
                  : newPage
        const maxPage = Math.ceil(propData.length / Number(newNumberPerPage))
        setPaginationStates({
            ...paginationStates,
            page: page,
            maxPage: maxPage,
            numberPerPage: Number(newNumberPerPage),
        })
        if (page === maxPage) triggerKeepFetch()
    }

    // 如果到了最後一頁，要再去 keepFetch 抓接下來的資料
    function triggerKeepFetch() {
        if (paginationStates.maxPage > 1) {
            dispatch(dispatchKEEP_FETCH(true))
        }
    }

    return (
        <Fragment>
            <div className='tableWrapper'>
                <div className='tableContainer'>
                    <table>
                        <thead>
                            <tr>
                                {showData.length > 0 &&
                                    Object.keys(showData[0]).length > 0 &&
                                    Object.keys(showData[0]).map((key) => (
                                        <th key={key}>
                                            <span
                                                className={
                                                    (isSortAsc ? 'acs' : '') +
                                                    ' ' +
                                                    (sortProperty === key ? 'isSort' : '')
                                                }
                                                onClick={() => {
                                                    handleClickSort(key)
                                                }}
                                            >
                                                {key}
                                                <img src={arrowSVG} alt='' srcSet='' />
                                            </span>
                                        </th>
                                    ))}
                            </tr>
                        </thead>
                        <tbody>
                            {showData.length > 0 &&
                                showData.map((item, index) => (
                                    <tr key={index}>
                                        {Object.keys(showData[0]).length > 0 &&
                                            Object.keys(showData[0]).map((key, keyIndex) => (
                                                <td key={keyIndex + key}>{item[key]}</td>
                                            ))}
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <PaginationRaw
                propPaginationStates={paginationStates}
                handleChangePage={handleChangePage}
                handleChangeNumberPerPage={handleChangeNumberPerPage}
            />
        </Fragment>
    )
}

function TableWithModal({ tableData, ModalContent }) {
    const [openIndex, setOpenIndex] = useState(null) // 選擇開啟的 table 資料的 index
    function handleOpen(index) {
        if (index === null) {
            setOpenIndex(null)
        } else {
            setOpenIndex(index)
        }
    }

    let openIndexData = null // 選擇開啟的 table 資料
    if (openIndex !== null) openIndexData = { ...tableData[openIndex] }

    return (
        <Fragment>
            <div className='tableWrapper'>
                <div className='tableContainer'>
                    <table>
                        <thead>
                            <tr>
                                {tableData.length > 0 &&
                                    Object.keys(tableData[0]).length > 0 &&
                                    Object.keys(tableData[0]).map((key) => (
                                        <th key={key}>{key}</th>
                                    ))}
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.length > 0 &&
                                tableData.map((item, index) => (
                                    <tr key={index} onClick={() => handleOpen(index)}>
                                        {Object.keys(tableData[0]).length > 0 &&
                                            Object.keys(tableData[0]).map((key, keyIndex) => (
                                                <td key={keyIndex + key}>{item[key]}</td>
                                            ))}
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {openIndexData !== null && (
                <Modal
                    switchModal={() => {
                        setOpenIndex(null)
                    }}
                >
                    <ModalContent datum={openIndexData} />
                </Modal>
            )}
        </Fragment>
    )
}

export default Table
export { TableWithModal, TableWithSort, TableWithSortPagination }
