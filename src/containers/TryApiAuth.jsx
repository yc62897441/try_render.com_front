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

    async function readOrderCSVtoDB() {
        try {
            const result = await apiHelper('post', mainUrl + '/api/readOrderCSVtoDB', {})
            console.log('result', result)
        } catch (error) {
            console.log(error)
        }
    }

    // 讀取 Notion DB 資料
    async function fetchNotionDB() {
        try {
            const result = await apiHelper('post', mainUrl + '/api/notion_db', {})
            const results = result.data.results
            console.log('results', results)

            const notionAA = {}
            const notionData = []
            try {
                results.forEach((result) => {
                    notionAA.parent = { ...result.parent }

                    const obj = {}
                    Object.keys(result.properties).forEach((key) => {
                        const type = result?.properties?.[key]?.type // type 有分 'title'、'rich_text'、date、number... 結構會有些不同
                        const plain_text = result?.properties?.[key]?.[type]?.[0]?.plain_text
                        const start = result?.properties?.[key]?.[type]?.start

                        obj[key] = { type }
                        if (plain_text) obj[key].plain_text = plain_text
                        if (start) obj[key].start = start
                    })

                    notionData.push(obj)
                })
            } catch (error) {
                console.error(error)
            }
            notionAA.properties = notionData

            console.log('notionData', notionData)
            console.log('notionAA', notionAA)
        } catch (error) {
            console.log(error)
        }
    }

    // 新增一筆資料到 Notion DB
    async function addNotionDB() {
        try {
            // Add new data to the Notion database
            const data = {
                parent: {
                    type: 'database_id',
                    database_id: 'bf80ff4d-aabb-4f74-9024-78564c44c410',
                },
                properties: {
                    userId: { title: [{ text: { content: 'New item on the table2' } }] },
                    name: { rich_text: [{ text: { content: 'Paul' + new Date().toString() } }] },
                    birthDate: { date: { start: '2023-05-05' } },
                    marryDate: {
                        rich_text: [{ text: { content: new Date() } }],
                    }, // 用文字格式來存時間資料，取出資料後可以再用 new Date(資料) 把文字格式轉回時間格式
                },
            }

            const result = await apiHelper('post', mainUrl + '/api/add_notion_db', data)
            const results = result.data.results
            console.log('results', results)
        } catch (error) {
            console.log(error)
        }
    }

    // 更新一筆資料到 Notion DB
    async function putNotionDB() {
        try {
            // Add new data to the Notion database
            const data = {
                pageId: '908228ef-8304-4774-94c9-1b2ca1495b82', // 要修改的 page
                parent: {
                    type: 'database_id',
                    database_id: 'bf80ff4d-aabb-4f74-9024-78564c44c410',
                },
                properties: {
                    userId: { title: [{ text: { content: '001' } }] },
                    name: { rich_text: [{ text: { content: 'update' + new Date().toString() } }] },
                    birthDate: { date: { start: '2023-05-05' } },
                    marryDate: {
                        rich_text: [{ text: { content: new Date() } }],
                    }, // 用文字格式來存時間資料，取出資料後可以再用 new Date(資料) 把文字格式轉回時間格式
                },
            }

            const result = await apiHelper('post', mainUrl + '/api/put_notion_db', data)
            const results = result.data.results
            console.log('results', results)
        } catch (error) {
            console.log(error)
        }
    }

    // 刪除一筆資料到 Notion DB
    async function deleteNotionDB() {
        try {
            // Add new data to the Notion database
            const data = {
                pageId: '908228ef-8304-4774-94c9-1b2ca1495b82', // 要刪除的 page
                parent: {
                    type: 'database_id',
                    database_id: 'bf80ff4d-aabb-4f74-9024-78564c44c410',
                },
            }

            const result = await apiHelper('post', mainUrl + '/api/delete_notion_db', data)
            const results = result.data.results
            console.log('results', results)
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
            <hr />
            <button onClick={readOrderCSVtoDB}>讀取 order csv 並且寫入到資料庫</button>
            <hr />
            <button onClick={fetchNotionDB}>讀取 Notion DB 資料</button>
            <hr />
            <button onClick={addNotionDB}>新增一筆資料到 Notion DB</button>
            <hr />
            <button onClick={putNotionDB}>更新一筆資料到 Notion DB</button>
            <hr />
            <button onClick={deleteNotionDB}>刪除一筆資料到 Notion DB</button>
        </main>
    )
}

export default TryApiAuth
