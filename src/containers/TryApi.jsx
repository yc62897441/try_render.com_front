// 套件
import React, { useEffect } from 'react'

// 靜態資源

// 自定義 components

// 自定義函數 or 參數
import { mainUrl } from '../config/api'
import { apiHelper } from '../utils/helper'

function TryApi() {
    useEffect(() => {
        async function fetch() {
            try {
                const result = await apiHelper('get', mainUrl + '/default/userController')
                console.log('result', result)
            } catch (error) {
                console.log(error)
            }
        }
        fetch()
    }, [])

    return <main></main>
}

export default TryApi
