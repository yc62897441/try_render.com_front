// 套件
import React, { useState, useEffect, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// 靜態資源

// 自定義 components
import PaginationRaw from './miniComponents/Pagination'
import DataList from './miniComponents/DataList'

// 自定義函數 or 參數
import { dispatchKEEP_FETCH } from '../actions'

function DataListPagination({ propData }) {
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

        const page =
            newPage > paginationStates.maxPage
                ? paginationStates.maxPage
                : newPage < 1
                  ? 1
                  : newPage
        const maxPage = Math.ceil(propData.length / Number(newNumberPerPage))

        // 改變 numberPerPage
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
            <DataList propData={showData} />

            <PaginationRaw
                propPaginationStates={paginationStates}
                handleChangePage={handleChangePage}
                handleChangeNumberPerPage={handleChangeNumberPerPage}
            />
        </Fragment>
    )
}

export default DataListPagination
