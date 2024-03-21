// 套件
import React, { useEffect } from 'react'

// 靜態資源

// 自定義 components

// 自定義函數 or 參數
import { mainUrl } from '../config/api'
import { apiHelper } from '../utils/helper'

function TryApiAuth() {
    useEffect(() => {}, [])

    async function fetchOrders() {
        try {
            const resultOrders = await apiHelper('post', mainUrl + '/api/orders', {
                userId: 'a004',
            })
            console.log('訂單', resultOrders)
        } catch (error) {
            console.log(error)
        }
    }

    async function fetchOrder() {
        try {
            const resultOrders = await apiHelper('post', mainUrl + '/api/order/id', {
                orderId: 'fa5b1ced-97d2-4c0d-9762-51025b58cb0f',
            })
            console.log('訂單', resultOrders)
        } catch (error) {
            console.log(error)
        }
    }

    async function newOrder() {
        try {
            const result = await apiHelper('post', mainUrl + '/api/order', {
                userId: 'a004',
                orderPhone: '0911-111-111',
                orderAddress: '新北市板橋區OO路OO號',
                startDateTime: new Date('2024-03-19 10:19'),
                endDateTime: new Date('2024-03-19 10:20'),
                totalPrice: 1000,
                status: 0,
                catId: ['JFPROfGtQ', 'LxcLIxuVT'],
            })
            console.log('result', result)
        } catch (error) {
            console.log(error)
        }
    }

    async function putOrder() {
        try {
            const formData = {
                id: '430006f9-3871-4170-9195-28e73af07abd',
                status: 1,
            }
            const result = await apiHelper('put', mainUrl + '/api/order', {
                ...formData,
            })
            console.log('result', result)
        } catch (error) {
            console.log(error)
        }
    }

    async function deleteOrder() {
        try {
            const formData = {
                id: '7aaa58c9-c713-4416-9aab-e57cd83a7886',
            }
            const result = await apiHelper('delete', mainUrl + '/api/order', {
                ...formData,
            })
            console.log('result', result)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main>
            <button onClick={fetchOrders}>取回 orders</button>
            <hr />
            <button onClick={fetchOrder}>取回 order</button>
            <hr />
            <button onClick={newOrder}>新增一筆新的 order</button>
            <hr />
            <button onClick={putOrder}>更新 order</button>
            <hr />
            <button onClick={deleteOrder}>刪除 order</button>
        </main>
    )
}

export default TryApiAuth
