// 套件
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// 靜態資源
import '../style/containers/restaurantPage.scss'

// 自定義 components
import DataListPagination from '../components/DataListPagination'
import { RestaurantModalContent } from '../components/Modal'
import { RestaurantCard } from '../components/miniComponents/Card'

// 自定義函數 or 參數
import { mainUrl } from '../config/api'
import { dispatchLOADING, dispatchREFETCH } from '../actions'
import { apiHelper } from '../utils/helper'

function RestaurantPage() {
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

                const response = await apiHelper('post', mainUrl + '/api/restaurantlist', {
                    offset: offset,
                    limit: fetchLimit,
                })
                console.log('api catslist response', response)

                if (keepFetch) {
                    // 再繼續 fetch 後續資料
                    setData(data.concat(response?.data?.restaurantsData))
                    // dispatch(dispatchKEEP_FETCH(false))
                } else {
                    // 第一次 fetch，或是重新搜尋
                    setData(response?.data?.restaurantsData || [])
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
            <h1>貓咪餐廳</h1>

            <section className='restaurantPageSection'>
                <h2>服務介紹</h2>
                <p>
                    歡迎蒞臨「貓咪餐廳」系列，匯聚世界各地迷人的貓咪餐廳，提供多樣風格料理，並搭配可愛的貓迷陪伴您共享美好用餐時光。一同探索菜單，品味來自不同地方的美味，讓每一口都成為一場風味之旅，打造美味和愛貓共同為生活增添色彩的獨特體驗。
                </p>
            </section>

            <DataListPagination
                propData={data}
                PropCard={RestaurantCard}
                PropModalContent={RestaurantModalContent}
            />
        </main>
    )
}

export default RestaurantPage
