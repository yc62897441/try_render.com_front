// 套件
import React, { useState, useEffect } from 'react'
import { useImmer } from 'use-immer'

// 靜態資源

// 自定義 components
import Table, { TableWithModal } from '../../components/miniComponents/Table'
import { Textarea, Button } from '../../components/miniComponents/MiniComponents'

// 自定義函數 or 參數
import { mainUrl } from '../../config/api'
import { apiHelper } from '../../utils/helper'

function OrderModalContent({ datum }) {
    const [formData, updateFormData] = useImmer({})

    function handleChange(value, Key, datumIndex) {
        updateFormData((draft) => {
            draft[Key] = value
        })
    }

    async function handleSubmit(submitType) {
        try {
            const data = {
                ...formData,
                orderId: datum?.id,
                submitType: submitType,
            }
            const result = await apiHelper('put', mainUrl + '/api/orders', data)
            console.log('result', result)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='modalContentWrapper'>
            {datum && (
                <>
                    <div className='modalContentInfo'>
                        <div>訂單編號: </div>
                        <div>{datum?.id}</div>
                    </div>
                    <div className='modalContentInfo'>
                        <div>訂單狀態: </div>
                        <div>{datum?.status}</div>
                    </div>
                    <div className='modalContentInfo'>
                        <div>貓咪編號: </div>
                        <div>{datum?.catId}</div>
                    </div>
                    <div className='modalContentInfo'>
                        <div>訂購者編號: </div>
                        <div>{datum?.userId}</div>
                    </div>
                    <div className='modalContentInfo'>
                        <div>訂購者電話: </div>
                        <div>{datum?.tel}</div>
                    </div>
                    <div className='modalContentInfo'>
                        <div>訂購地址: </div>
                        <div>
                            {datum?.city}
                            {datum?.district}
                            {datum?.address}
                        </div>
                    </div>
                    <div className='modalContentInfo'>
                        <div>起始時間: </div>
                        <div>
                            {datum?.startDate}
                            {datum?.startTime}
                        </div>
                    </div>
                    <div className='modalContentInfo'>
                        <div>結束時間: </div>
                        <div>
                            {datum?.endDate}
                            {datum?.endTime}
                        </div>
                    </div>
                    <div className='modalContentInfo'>
                        <div>訂單備註: </div>
                        <div>{datum?.elseInfo}</div>
                    </div>

                    <div className='formGroup'>
                        <label htmlFor={'response'}>回應訂購者</label>
                        <Textarea
                            type={'textarea'}
                            name={'response'}
                            id={'response'}
                            rows='6'
                            onChange={(e) => handleChange(e.target.value, 'response')}
                        />
                    </div>
                    <div className='formGroup'>
                        <label htmlFor={'systemNote'}>系統備註</label>
                        <Textarea
                            type={'textarea'}
                            name={'systemNote'}
                            id={'systemNote'}
                            rows='6'
                            onChange={(e) => handleChange(e.target.value, 'systemNote')}
                        />
                    </div>

                    <Button
                        name='確認訂單'
                        onClick={() => {
                            handleSubmit('confirmOrder')
                        }}
                    />
                    <Button
                        name='取消訂單'
                        onClick={() => {
                            handleSubmit('cancelOrder')
                        }}
                    />
                </>
            )}
        </div>
    )
}

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
            <TableWithModal tableData={tableData} ModalContent={OrderModalContent} />
        </main>
    )
}

export default Orders
