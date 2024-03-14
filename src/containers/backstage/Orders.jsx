// 套件
import React, { useState, useEffect } from 'react'
import { useImmer } from 'use-immer'

// 靜態資源

// 自定義 components
import Table from '../../components/miniComponents/Table'

// 自定義函數 or 參數
import { mainUrl } from '../../config/api'
import { apiHelper } from '../../utils/helper'

function Orders() {
    const [tableData, updateTableData] = useImmer([])

    useEffect(() => {
        async function fetch() {
            try {
                const resultOrders = await apiHelper('post', mainUrl + '/api/orders', {})
                updateTableData(resultOrders?.data?.data || [])
            } catch (error) {
                console.log(error)
            }
        }
        fetch()
    }, [])

    return (
        <main>
            <Table tableData={tableData} />
        </main>
    )
}

export default Orders
