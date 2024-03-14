// 套件
import React, { useEffect } from 'react'

// 靜態資源

// 自定義 components

// 自定義函數 or 參數
import { mainUrl } from '../config/api'
import { apiHelper } from '../utils/helper'

function TryApiAuth() {
    useEffect(() => {
        async function fetch() {
            try {
                const resultOrders = await apiHelper('post', mainUrl + '/api/orders', {})
                console.log('訂單', resultOrders)
            } catch (error) {
                console.log(error)
            }
        }
        fetch()
    }, [])

    return <main></main>
}

export default TryApiAuth
