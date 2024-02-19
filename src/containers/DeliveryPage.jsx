// 套件
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// 靜態資源
import '../style/containers/deliveryPage.scss'

// 自定義 components
import DataListPagination from '../components/DataListPagination'

// 自定義函數 or 參數
import { mainUrl } from '../config/api'
import { dispatchLOADING, dispatchREFETCH } from '../actions'
import { apiHelper } from '../utils/helper'

function DeliveryPage() {
    const dispatch = useDispatch()
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
            <h1>貓咪宅急便</h1>

            <section className='deliveryPageSection'>
                <h2>服務介紹</h2>
                <p>
                    歡迎使用「貓咪宅急便」，我們提供簡便的線上預訂服務，讓您輕鬆享受親切可愛的貓咪送上門的體驗，擁有多款品種、健康檢查完備的貓咪，確保您和貓咪共度美好時光，是打造美好回憶的首選。
                </p>
            </section>

            <section className='deliveryPageSection'>
                <h2>服務流程</h2>
                <ol>
                    <li>選擇喜歡的貓咪</li>
                    <li>填寫您的地址與及預約時間</li>
                    <li>依付款資訊進行付款</li>
                    <li>等待貓咪上門</li>
                </ol>
            </section>

            <DataListPagination propData={data} />
        </main>
    )
}

export default DeliveryPage
