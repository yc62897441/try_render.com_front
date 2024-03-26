// 套件
import React from 'react'

// 靜態資源

// 自定義 components

// 自定義函數 or 參數
import { mainUrl } from '../config/api'
import { apiHelper } from '../utils/helper'

function TryApi() {
    async function fetch() {
        try {
            const result = await apiHelper('get', mainUrl + '/default/userController')
            console.log('北台灣行政區', result)
        } catch (error) {
            console.log(error)
        }
    }

    // 使用回傳參數 access_token，去向 google API 取回使用者資訊
    async function fetchGoogleUserInfo() {
        try {
            // 測試時，token 時效到了要更新
            const access_token =
                'ya29.a0Ad52N3_sHVO9EMsx8D9Z_SroH-X2D2yHWBn3327O0m6e9Rm8_rYyedKaI0mLxk8GJhG9T7uMYtX4w42CaQiAdc5ZZIh8vW3bBnMGreZHqcM_7vo-LOFOO4Fwm5tfaRPEPinDcNPohOxvzAbthh2ua3d3mI73xvi7ITAaCgYKAT0SARASFQHGX2Mi8HtY8rgMRCvFj9oW8ZB0cA0170'
            console.log('fetchGoogleUserInfo', access_token)

            // 往後端送 access_token，讓後端去向 google API 取回使用者資訊
            const response = await apiHelper('post', mainUrl + '/auth/google_signin', {
                access_token: access_token,
            })
            console.log('response', response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main>
            <button onClick={fetchGoogleUserInfo}>模擬傳送 Google access_token 到後端</button>
            <button onClick={fetch}>取得北台灣行政區</button>
        </main>
    )
}

export default TryApi
