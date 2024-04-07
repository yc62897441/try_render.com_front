// 套件
import React, { useState, useEffect } from 'react'
import { useImmer } from 'use-immer'

// 靜態資源

// 自定義 components
import { Textarea, Button } from '../../components/miniComponents/MiniComponents'
import { TableWithModalPaginationSort } from '../../components/miniComponents/TableHOC'

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
                        <div>
                            {datum?.catIds?.length > 0 && datum.catIds.map((catId) => `${catId}; `)}
                        </div>
                    </div>
                    <div className='modalContentInfo'>
                        <div>訂購者編號: </div>
                        <div>{datum?.userId}</div>
                    </div>
                    <div className='modalContentInfo'>
                        <div>訂單聯絡電話: </div>
                        <div>{datum?.orderPhone}</div>
                    </div>
                    <div className='modalContentInfo'>
                        <div>訂單地址: </div>
                        <div>{datum?.orderAddress}</div>
                    </div>
                    <div className='modalContentInfo'>
                        <div>起始時間: </div>
                        <div>{new Date(datum?.startDateTime).toString().split(' GMT')[0]}</div>
                    </div>
                    <div className='modalContentInfo'>
                        <div>結束時間: </div>
                        <div>{new Date(datum?.endDateTime).toString().split(' GMT')[0]}</div>
                    </div>
                    {/* <div className='modalContentInfo'>
                        <div>訂單備註: </div>
                        <div>{datum?.elseInfo}</div>
                    </div> */}

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
        async function fetchOrders() {
            try {
                const resultOrders = await apiHelper('post', mainUrl + '/api/orders', {
                    userId: '',
                })
                updateTableData(resultOrders?.data?.data || [])
                console.log('訂單', resultOrders)
            } catch (error) {
                console.log(error)
            }
        }
        fetchOrders()
    }, [])

    return (
        <main>
            {tableData.length > 0 && (
                <TableWithModalPaginationSort
                    tableData={tableData}
                    ModalContent={OrderModalContent}
                />
            )}
        </main>
    )
}

export default Orders
