// 套件
import React, { useState, useEffect, Fragment } from 'react'

// 靜態資源

// 自定義 components
import PaginationRaw from './miniComponents/Pagination'
import DataList from './miniComponents/DataList'

// 自定義函數 or 參數

function DataListPagination({ propData }) {
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

        // 第一次渲染時，建立 pagination 參數；或是 propData 更新後(例如重新搜尋)，則分頁自動回到第 1 頁
        setPaginationStates({
            ...paginationStates,
            page: 1,
            maxPage: Math.ceil(propData.length / paginationStates.numberPerPage),
        })
    }, [propData])

    // 分頁參數變動時，更改要顯示的資料
    useEffect(() => {
        const startIndex = paginationStates.numberPerPage * (paginationStates.page - 1)
        const endIndex = startIndex + paginationStates.numberPerPage
        setShowData(totalData.slice(startIndex, endIndex))
    }, [paginationStates])

    // pagination 使用的函數，改變當前頁面(如上一頁、下一頁)
    function handleChangePage(newPage) {
        setPaginationStates({
            ...paginationStates,
            page:
                newPage > paginationStates.maxPage
                    ? paginationStates.maxPage
                    : newPage < 1
                      ? 1
                      : newPage,
            maxPage: Math.ceil(propData.length / paginationStates.numberPerPage),
        })
    }
    // pagination 使用的函數，改變當前每頁顯示數量
    function handleChangeNumberPerPage(newNumberPerPage) {
        // 計算出「改變 numberPerPage」後，應在第幾頁
        const currentPageFirstItemIndex =
            (paginationStates.page - 1) * paginationStates.numberPerPage
        const newPage = Math.floor(currentPageFirstItemIndex / Number(newNumberPerPage)) + 1

        // 改變 numberPerPage
        setPaginationStates({
            ...paginationStates,
            page:
                newPage > paginationStates.maxPage
                    ? paginationStates.maxPage
                    : newPage < 1
                      ? 1
                      : newPage,
            maxPage: Math.ceil(propData.length / Number(newNumberPerPage)),
            numberPerPage: Number(newNumberPerPage),
        })
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