// 套件
import React from 'react'
import { useDispatch } from 'react-redux'

// 靜態資源
import '../style/containers/homepage.scss'

// 自定義 components

// 自定義函數 or 參數
import { mainUrl } from '../config/api'
import { dispatchLOADING } from '../actions'
import { apiHelper } from '../utils/helper'

function HomePage() {
    const dispatch = useDispatch()
    // console.log('REACT_APP_CATSAPIKEY', process.env.REACT_APP_CATSAPIKEY.slice(0, 5) + 'aaaaa')

    async function fetchData() {
        try {
            dispatch(dispatchLOADING(true))
            // const response1 = await apiHelper('get', mainUrl + '/')
            // console.log('response1', response1)

            // const response2 = await apiHelper('get', mainUrl + '/api/data')
            // console.log('response2', response2)

            const response3 = await apiHelper('post', mainUrl + '/api/catslist', {
                offset: 10,
                limit: 10,
            })
            console.log('response3', response3)
            dispatch(dispatchLOADING(false))
        } catch (error) {
            dispatch(dispatchLOADING(false))
            console.log(error)
        }
    }

    return (
        <main>
            <h1>HomePage</h1>
            <div>
                <button onClick={fetchData}>fetchData</button>
            </div>
        </main>
    )
}

export default HomePage
