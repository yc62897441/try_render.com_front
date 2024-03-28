// 套件
import React, { useState, Fragment } from 'react'

// 靜態資源
import arrowSVG from '../../assets/img/arrow-up-svgrepo-com.svg'

// 自定義 components
import Modal from '../Modal'

// 自定義函數 or 參數

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
export { TableWithModal, TableWithSort }
