// 套件
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Axios from 'axios'
import styled from 'styled-components'

// 靜態資源

// 自定義 components

// 自定義函數 or 參數
import { mainUrl } from '../config/api'
import { dispatchLOADING } from '../actions'
import { apiHelper } from '../utils/helper'

function HomePage() {
    const isLoading = useSelector((state) => state.controlReducer.isLoading)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch()
    }, [])
    async function fetch() {
        try {
            await Axios.post(mainUrl + '/auth/signin', { account: 'a001', password: 'abc123' })
                .then((response) => {
                    let token = response?.data?.token
                    sessionStorage.setItem('token', token)
                })
                .catch((error) => {
                    alert(error)
                })
        } catch (error) {
            console.log(error)
        }
    }

    function handleClick() {
        dispatch(dispatchLOADING(!isLoading))
    }

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
            HomePage
            <div>
                {/* 測試：redux 【{isLoading.toString()}】
                <button onClick={handleClick}>改變 redux</button> */}
                <button onClick={fetchData}>fetchData</button>
            </div>
        </div>
    )
}

export default HomePage
