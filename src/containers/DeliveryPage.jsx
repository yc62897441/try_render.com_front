// 套件
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useImmer } from 'use-immer'

// 靜態資源

// 自定義 components
import DataListPagination from '../components/DataListPagination'
import { CatModalContent } from '../components/Modal'
import { CatCard } from '../components/miniComponents/Card'
import Form from '../components/miniComponents/Form'

// 自定義函數 or 參數
import { mainUrl } from '../config/api'
import { dispatchLOADING, dispatchREFETCH, dispatchKEEP_FETCH } from '../actions'
import { apiHelper } from '../utils/helper'

// 依時間區間搜尋時間上允許的貓咪
const queryTimeFormConfig = {
    startDate: {
        label: '起日',
        type: 'date',
        required: true,
    },
    startTime: {
        label: '起時',
        type: 'time',
        required: true,
    },
    endDate: {
        label: '迄日',
        type: 'date',
        required: true,
    },
    endTime: {
        label: '迄時',
        type: 'time',
        required: true,
    },
}

function DeliveryPage() {
    const dispatch = useDispatch()
    const reFetch = useSelector((state) => state.persistedControlReducer.reFetch)
    const keepFetch = useSelector((state) => state.persistedControlReducer.keepFetch)
    const [offset, setOffset] = useState(0)
    const [data, setData] = useState([])
    const [timeSpanFormData, updateTimeSpanFormData] = useImmer({})
    const fetchLimit = 100

    useEffect(() => {
        dispatch(fetch())
    }, [offset])
    // 繼續搜尋 offset 以後的資料
    useEffect(() => {
        if (keepFetch) setOffset((n) => n + fetchLimit)
    }, [keepFetch])
    // 重新搜尋
    useEffect(() => {
        if (reFetch) setOffset(0)
    }, [reFetch])

    function fetch() {
        return async (dispatch) => {
            try {
                dispatch(dispatchLOADING(false))

                const postData = {
                    offset: offset,
                    limit: fetchLimit,
                    timeSpanFormData: timeSpanFormData, // 依時間區間搜尋時間上允許的貓咪
                    // timeSpanFormData: {
                    //     startDate: '2024-03-19',
                    //     startTime: '10:15',
                    //     endDate: '2024-03-19',
                    //     endTime: '10:20',
                    // }, // 測試資料
                }
                // console.log('2024-03-19 10:20' > '2024-03-19 10:19')
                // console.log(new Date('2024-03-19 10:20').toString())
                // console.log(new Date('2024-03-19 10:20') > new Date('2024-03-19 10:19'))
                console.log('postData', postData)
                const response = await apiHelper('post', mainUrl + '/api/catslist', postData)
                // console.log('api catslist response', response)

                if (keepFetch) {
                    // 再繼續 fetch 後續資料
                    setData(data.concat(response?.data?.catsData))
                    dispatch(dispatchKEEP_FETCH(false))
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

    function handleChange(value, Key, datumIndex) {
        updateTimeSpanFormData((draft) => {
            draft[Key] = value
        })
    }

    return (
        <main>
            <h1>貓咪宅急便</h1>

            <section className='pageSection'>
                <h2>服務介紹</h2>
                <p>
                    歡迎使用「貓咪宅急便」，我們提供簡便的線上預訂服務，讓您輕鬆享受親切可愛的貓咪送上門的體驗，擁有多款品種、健康檢查完備的貓咪，確保您和貓咪共度美好時光，是打造美好回憶的首選。
                </p>
            </section>

            <section className='pageSection'>
                <h2>服務流程</h2>
                <ol>
                    <li>選擇您想預約的時間</li>
                    <li>選擇喜歡的貓咪</li>
                    <li>填寫您的預定地址</li>
                    <li>依付款資訊進行付款</li>
                    <li>等待貓咪上門&#x2665;</li>
                </ol>
            </section>

            {/* 依時間區間搜尋時間上允許的貓咪 */}
            <section className='pageSection'>
                <Form
                    formData={timeSpanFormData}
                    formConfig={queryTimeFormConfig}
                    handleChange={handleChange}
                    handleSubmit={() => {
                        dispatch(dispatchREFETCH(true))
                        dispatch(fetch())
                    }}
                />
            </section>

            <DataListPagination
                propData={data}
                PropCard={CatCard}
                PropModalContent={CatModalContent}
            />
        </main>
    )
}

export default DeliveryPage
