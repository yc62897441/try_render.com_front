// 套件
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// 靜態資源
import '../style/containers/homepage.scss'

// 自定義 components
import DataListPagination from '../components/DataListPagination'

// 自定義函數 or 參數
import { mainUrl } from '../config/api'
import { dispatchLOADING, dispatchREFETCH, dispatchKEEP_FETCH } from '../actions'
import { apiHelper } from '../utils/helper'

function AllPage() {
    const dispatch = useDispatch()
    const isLoading = useSelector((state) => state.persistedControlReducer.isLoading)
    const reFetch = useSelector((state) => state.persistedControlReducer.reFetch)
    const keepFetch = useSelector((state) => state.persistedControlReducer.keepFetch)
    const [offset, setOffset] = useState(0)
    const [data, setData] = useState([])
    const fetchLimit = 100

    useEffect(() => {
        dispatch(fetch())
    }, [offset])
    useEffect(() => {
        if (keepFetch) setOffset((n) => n + fetchLimit)
    }, [keepFetch])
    useEffect(() => {
        if (reFetch) setOffset(0)
    }, [reFetch])

    function fetch() {
        return async (dispatch) => {
            try {
                dispatch(dispatchLOADING(false))

                const response = await apiHelper('post', mainUrl + '/api/catslist', {
                    offset: offset,
                    limit: fetchLimit,
                })
                // console.log('api catslist response', response)

                if (keepFetch) {
                    // 再繼續 fetch 後續資料
                    setData(data.concat(response?.data?.catsData))
                    // dispatch(dispatchKEEP_FETCH(false))
                } else {
                    // 第一次 fetch，或是重新搜尋
                    setData(response?.data?.catsData || [])
                    dispatch(dispatchREFETCH(false))
                }

                dispatch(dispatchLOADING(false))
            } catch (error) {
                dispatch(dispatchLOADING(false))
                console.log(error)
            }
        }
    }

    return (
        <main>
            <h1>列表</h1>

            <DataListPagination propData={data} />
        </main>
    )
}

export default AllPage
