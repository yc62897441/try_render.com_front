// 套件
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// 靜態資源
import '../style/containers/homepage.scss'

// 自定義 components
import LoadingModal from '../components/LoadingModal'
import DataListPagination from '../components/DataListPagination'

// 自定義函數 or 參數
import { mainUrl } from '../config/api'
import { dispatchLOADING } from '../actions'
import { apiHelper } from '../utils/helper'

function AllPage() {
    const dispatch = useDispatch()
    const isLoading = useSelector((state) => state.persistedControlReducer.isLoading)
    const [offset, setOffset] = useState(0)
    const [data, setData] = useState([])

    useEffect(() => {
        dispatch(fetch())
    }, [])

    function fetch() {
        return async (dispatch) => {
            try {
                dispatch(dispatchLOADING(false))
                const response = await apiHelper
                    .post(mainUrl + '/api/catslist', { offset: offset, limit: 100 })
                    .then((response) => {
                        return response
                    })
                    .catch((error) => {
                        alert(error)
                    })
                // console.log('api catslist response', response)
                setData(response?.data?.catsData || [])
                dispatch(dispatchLOADING(false))
            } catch (error) {
                dispatch(dispatchLOADING(false))
                console.log(error)
            }
        }
    }

    return (
        <main>
            {
                // 是否顯示 loading modal
                isLoading && <LoadingModal text={''} />
            }

            <h1>All</h1>
            <DataListPagination propData={data} />
        </main>
    )
}

export default AllPage
