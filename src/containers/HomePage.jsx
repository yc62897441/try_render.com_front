// 套件
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// 靜態資源
import '../style/containers/homepage.scss'

// 自定義 components
import LoadingModal from '../components/LoadingModal'

// 自定義函數 or 參數
import { mainUrl } from '../config/api'
import { dispatchLOADING } from '../actions'
import { apiHelper } from '../utils/helper'

function HomePage() {
    const dispatch = useDispatch()
    const isLoading = useSelector((state) => state.persistedControlReducer.isLoading)
    const isLogin = useSelector((state) => state.persistedControlReducer.isLogin)
    const userData = useSelector((state) => state.persistedControlReducer.userData)

    console.log('REACT_APP_CATSAPIKEY', process.env.REACT_APP_CATSAPIKEY.slice(0, 5) + 'aaaaa')

    async function fetchData() {
        try {
            await apiHelper
                .get(mainUrl + '/')
                .then((response) => {
                    console.log('response', response)
                })
                .catch((error) => {
                    alert(error)
                })

            await apiHelper
                .get(mainUrl + '/api/data')
                .then((response) => {
                    console.log('api data response', response)
                })
                .catch((error) => {
                    alert(error)
                })

            await apiHelper
                .post(mainUrl, { a: 'a' })
                .then((response) => {
                    console.log('post response', response)
                })
                .catch((error) => {
                    alert(error)
                })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            {
                // 是否顯示 loading modal
                isLoading && <LoadingModal text={''} />
            }

            <h1>HomePage</h1>
            <div>
                <button onClick={fetchData}>fetchData</button>
            </div>
        </div>
    )
}

export default HomePage
