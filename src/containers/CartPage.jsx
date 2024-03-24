// 套件
import React, { useState, useEffect } from 'react'
import { useImmer } from 'use-immer'
import { useSelector, useDispatch } from 'react-redux'

// 靜態資源
import '../style/containers/cartPage.scss'

// 自定義 components
import { Button } from '../components/miniComponents/MiniComponents'
import Form from '../components/miniComponents/Form'

// 自定義函數 or 參數
import { mainUrl } from '../config/api'
import { apiHelper } from '../utils/helper'
import { dispatchLOADING } from '../actions'
import { cartPageFormConfig } from '../config/containers/cartPage'

function Carts() {
    const dispatch = useDispatch()
    const userData = useSelector((state) => state.persistedControlReducer.userData)
    const [formData, updateFormData] = useImmer({})

    useEffect(() => {
        async function fetch() {
            try {
                const cart = JSON.parse(localStorage.getItem('cart'))
                const cartListTable = cart?.cartList || {}
                // console.log('cartListTable', cartListTable)
                if (Object.keys(cartListTable) === 0) return // 購物車內無東西

                // 透過購物車內的 catIds，取回 cats' 詳細資料
                dispatch(dispatchLOADING(true))
                const promiseArray = Object.keys(cartListTable).map((catId) => {
                    return apiHelper('get', 'https://api.thecatapi.com/v1/images/' + catId)
                })
                const response = await Promise.all(promiseArray)
                // console.log('response', response)
                dispatch(dispatchLOADING(false))

                // 建立發送購物車資料的表單
                const tempFormData = {
                    items: [],
                }
                response.forEach((result) => {
                    if (result?.data) {
                        const obj = {
                            catId: result.data.id,
                            name: result.data?.breeds?.[0]?.name,
                            url: result.data?.url,
                            quantity: cartListTable[result.data.id] || 1,
                        }
                        tempFormData.items.push(obj)
                    }
                })
                updateFormData(tempFormData)
            } catch (error) {
                console.log(error)
            }
        }
        fetch()
    }, [])

    // 更改購物車內項目的數量
    function handleChangeQuantity(catId, value) {
        const itemIndex = formData.items.findIndex((item) => item.catId === catId)

        // localStorage 儲存的資訊
        let tempCart = localStorage.getItem('cart')
        tempCart = JSON.parse(tempCart)

        // 數量變為 0 時，刪除項目
        if (formData.items[itemIndex].quantity + value <= 0) {
            updateFormData({
                ...formData,
                items: formData.items.filter((item) => item.catId !== catId),
            })

            // 處理 localStorage 儲存的資訊
            // 建立新的清單，排除掉目前數量要變為 0 的這項 catId
            const newCartList = {}
            Object.keys(tempCart.cartList).forEach((key) => {
                if (key !== catId) {
                    newCartList[key] = tempCart.cartList[key]
                }
            })
            tempCart.cartList = newCartList
        } else {
            // +-數量
            updateFormData((draft) => {
                draft.items[itemIndex].quantity = draft.items[itemIndex].quantity + value
            })

            // 處理 localStorage 儲存的資訊
            // 目前 catId 的數量要 + value
            Object.keys(tempCart.cartList).forEach((key) => {
                if (key === catId) {
                    tempCart.cartList[key] = tempCart.cartList[key] + value
                }
            })
        }

        localStorage.setItem('cart', JSON.stringify(tempCart))
    }

    function handleChange(value, Key) {
        updateFormData((draft) => {
            draft[Key] = value
        })
    }

    function handleSubmit() {
        // TODO: 1 送出訂單的 API

        // TODO: 1 加入 userId 到 formData 中
        const userId = userData.id
        console.log('userId', userId)

        // TODO: 1 縣市與行政區清單
        // TODO: 1 設為必填，或是有 default value
        console.log('handleSubmit formData', formData)
    }

    if (!formData?.items) return <main></main>

    return (
        <main>
            {/* TODO: 1 清單 UI style */}
            <div className='cart-items-wrapper'>
                {formData?.items?.length === 0
                    ? '購物車內無項目'
                    : formData?.items.map((datum) => (
                          <div key={datum.catId} className='cart-item-wrapper '>
                              <div className='cart-item-wrapper-content'>
                                  <img src={datum?.url} alt='貓咪圖片' srcSet='' />
                              </div>
                              <div className='cart-item-wrapper-content cart-item-wrapper-content-name'>
                                  {datum?.name}
                              </div>
                              <div className='cart-item-wrapper-content cart-item-wrapper-content-control'>
                                  <div>
                                      <Button
                                          name='+'
                                          onClick={() => {
                                              handleChangeQuantity(datum.catId, 1)
                                          }}
                                      />{' '}
                                      <Button
                                          name='-'
                                          onClick={() => {
                                              handleChangeQuantity(datum.catId, -1)
                                          }}
                                      />
                                  </div>
                                  <div>數量：{datum?.quantity}</div>
                              </div>
                              <div className='cart-item-wrapper-content'>
                                  小計：{datum?.quantity}000
                              </div>
                          </div>
                      ))}

                <div className='cart-item-wrapper-content cart-item-wrapper-content-total'>
                    <div>總計：</div>
                    <div>1000</div>
                </div>
            </div>

            <Form
                formData={formData}
                formConfig={cartPageFormConfig}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                // TODO: 0 AppendComponent，一些提醒資訊
                // AppendComponent={function A() {
                //     return <div className='formControlGroup'>其他提醒</div>
                // }}
            />
        </main>
    )
}

export default Carts
