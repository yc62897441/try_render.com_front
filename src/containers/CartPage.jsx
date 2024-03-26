// 套件
import React, { useEffect } from 'react'
import { useImmer } from 'use-immer'
import { useSelector, useDispatch } from 'react-redux'

// 靜態資源
import '../style/containers/cartPage.scss'

// 自定義 components
import { Button } from '../components/miniComponents/MiniComponents'
import Form from '../components/miniComponents/Form'

// 自定義函數 or 參數
import { apiHelper } from '../utils/helper'
import { dispatchLOADING } from '../actions'
import { cartPageFormConfig } from '../config/containers/cartPage'
import { checkTime } from '../helper/helper'
import { mainUrl } from '../config/api'

import { northTaiwanCitiesTable, northTaiwanDistrictsTable } from '../config/cityAndDistrict'

function Carts() {
    const dispatch = useDispatch()
    const userData = useSelector((state) => state.persistedControlReducer.userData)
    const [formData, updateFormData] = useImmer({})

    useEffect(() => {
        async function fetch() {
            try {
                // 取得購物車內項目
                const cart = JSON.parse(localStorage.getItem('cart'))
                const cartListTable = cart?.cartList || {}
                if (Object.keys(cartListTable) === 0) return // 購物車內無東西

                // 透過購物車內的 catIds，取回 cats' 詳細資料
                dispatch(dispatchLOADING(true))
                const promiseArray = Object.keys(cartListTable).map((catId) => {
                    return apiHelper('get', 'https://api.thecatapi.com/v1/images/' + catId)
                })
                const responses = await Promise.all(promiseArray)
                dispatch(dispatchLOADING(false))

                // 建立發送購物車資料的表單
                const items = []
                responses.forEach((result) => {
                    if (result?.data) {
                        const obj = {
                            catId: result.data?.id,
                            name: result.data?.breeds?.[0]?.name,
                            url: result.data?.url,
                            quantity: cartListTable[result.data.id] || 1,
                        }
                        items.push(obj)
                    }
                })
                updateFormData((draft) => {
                    draft.items = items
                })
            } catch (error) {
                console.log(error)
            }
        }
        fetch()
    }, [])

    // 更改購物車內項目的數量，目前商業邏輯用不上
    // function handleChangeQuantity(catId, value) {
    //     const itemIndex = formData.items.findIndex((item) => item.catId === catId)

    //     // localStorage 儲存的資訊
    //     let tempCart = localStorage.getItem('cart')
    //     tempCart = JSON.parse(tempCart)

    //     // 數量變為 0 時，刪除項目
    //     if (formData.items[itemIndex].quantity + value <= 0) {
    //         updateFormData({
    //             ...formData,
    //             items: formData.items.filter((item) => item.catId !== catId),
    //         })

    //         // 處理 localStorage 儲存的資訊
    //         // 建立新的清單，排除掉目前數量要變為 0 的這項 catId
    //         const newCartList = {}
    //         Object.keys(tempCart.cartList).forEach((key) => {
    //             if (key !== catId) {
    //                 newCartList[key] = tempCart.cartList[key]
    //             }
    //         })
    //         tempCart.cartList = newCartList
    //     } else {
    //         // +-數量
    //         updateFormData((draft) => {
    //             draft.items[itemIndex].quantity = draft.items[itemIndex].quantity + value
    //         })

    //         // 處理 localStorage 儲存的資訊
    //         // 目前 catId 的數量要 + value
    //         Object.keys(tempCart.cartList).forEach((key) => {
    //             if (key === catId) {
    //                 tempCart.cartList[key] = tempCart.cartList[key] + value
    //             }
    //         })
    //     }

    //     localStorage.setItem('cart', JSON.stringify(tempCart))
    // }

    // 刪除購物車項目
    function handleRemoveCartItem(catId) {
        // 更新 formData 儲存的資訊
        updateFormData({
            ...formData,
            items: formData.items.filter((item) => item.catId !== catId),
        })

        // 更新 localStorage 儲存的資訊
        let tempCart = localStorage.getItem('cart')
        tempCart = JSON.parse(tempCart)

        // 建立新的清單，排除掉目前數量要變為 0 的這項 catId
        const newCartList = {}
        Object.keys(tempCart.cartList).forEach((key) => {
            if (key !== catId) {
                newCartList[key] = tempCart.cartList[key]
            }
        })
        tempCart.cartList = newCartList
        localStorage.setItem('cart', JSON.stringify(tempCart))
    }

    function handleChange(value, Key) {
        updateFormData((draft) => {
            draft[Key] = value
        })
    }

    async function handleSubmit() {
        if (!checkTime(formData)) return window.alert('起始時間不可晚於結束時間')

        // 建立訂單資訊
        const orderAddress = `${northTaiwanCitiesTable[Number(formData.city)]}${northTaiwanDistrictsTable[Number(formData.city)][Number(formData.district)]}${formData.address}` // 拼回縣市完整地址
        const startDateTime = `${formData.startDate} ${formData.startTime}`
        const endDateTime = `${formData.endDate} ${formData.endTime}`
        const catId = formData.items.map((item) => item.catId) // 儲存 catId 的陣列
        const totalPrice = formData.items.reduce((accumulator, item) => accumulator + 1000, 0)

        const response = await apiHelper('post', mainUrl + '/api/order', {
            userId: userData.id, // 加入 userId 到 formData 中
            orderPhone: formData.tel,
            orderAddress: orderAddress,
            startDateTime,
            endDateTime,
            totalPrice: totalPrice,
            status: 0, // 新增訂單時預設狀態為 0
            catId,
            // elseInfo: formData.elseInfo,
        })
        console.log('response', response)

        if (response?.data?.status === 'success') return window.alert('訂單成功送出\n專人處理中')
        return window.alert('訂單失敗\n請稍後再試')
    }

    if (!formData?.items) return <main></main>

    return (
        <main>
            {/* TODO: 1 清單 UI style */}
            <div className='cart-items-wrapper'>
                {formData?.items?.length === 0 ? (
                    <div className='cart-item-wrapper'>
                        <div className='cart-item-wrapper-content'>購物車內無項目</div>
                    </div>
                ) : (
                    formData?.items?.map((datum) => (
                        <div key={datum.catId} className='cart-item-wrapper'>
                            <div className='cart-item-wrapper-content'>
                                <img src={datum?.url} alt='貓咪圖片' srcSet='' />
                            </div>
                            <div className='cart-item-wrapper-content cart-item-wrapper-content-name'>
                                {datum?.name}
                            </div>
                            {/* 「數量增減」目前商業邏輯用不上 */}
                            {/* <div className='cart-item-wrapper-content cart-item-wrapper-content-control'>
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
                              </div> */}
                            <div className='cart-item-wrapper-content'>
                                小計：{datum?.quantity}000
                            </div>
                            <div className='cart-item-wrapper-content cart-item-wrapper-content-control'>
                                <div
                                    className='cart-item-wrapper-content-control-remove'
                                    onClick={() => {
                                        if (window.confirm(`確定刪除：${datum.name}?`)) {
                                            handleRemoveCartItem(datum.catId)
                                        }
                                    }}
                                >
                                    ✖
                                </div>
                            </div>
                        </div>
                    ))
                )}

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
