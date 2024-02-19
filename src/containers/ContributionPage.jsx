// 套件
import React from 'react'
import { useDispatch } from 'react-redux'

// 靜態資源
import '../style/containers/homepage.scss'
import '../style/containers/contributionPage.scss'

// 自定義 components

// 自定義函數 or 參數
import { mainUrl } from '../config/api'
import { dispatchLOADING } from '../actions'
import { apiHelper } from '../utils/helper'

function ContributionPage() {
    const dispatch = useDispatch()

    async function handleContribute() {
        try {
            dispatch(dispatchLOADING(true))
            const response = await apiHelper('post', mainUrl + '/contribute', {})
            console.log('response', response)

            const { PayGateWay, MerchantID, TradeInfo, TradeSha, Version } = response.data.TradeInfo
            const response2 = await apiHelper('post', PayGateWay, {
                MerchantID,
                TradeInfo,
                TradeSha,
                Version,
            })
            console.log('response2', response2)

            dispatch(dispatchLOADING(false))
        } catch (error) {
            dispatch(dispatchLOADING(false))
            console.log(error)
        }
    }

    return (
        <main>
            <section className='contributionPageSection'>
                <div className='backgroundImageWrapper backgroundImageWrapper1' />

                <div className='contributionPageContent'>
                    <p>
                        歡迎參與「線上認養」，透過定期信用卡捐款支援無家可歸的貓咪，提供溫暖和希望的緊急計畫。您的捐款將改善貓咪的生活，提供穩定食物、溫暖庇護所，並享受專屬貓咪故事和照片更新，共同為每一隻貓咪創造幸福的家。
                    </p>
                    <button className='button' onClick={handleContribute}>
                        立刻捐款
                    </button>
                </div>

                <div className='marqueeWrapper'>
                    <div className='marqueeContainer'>
                        <div className='imgWrapper'>
                            <img
                                src={
                                    'https://images.pexels.com/photos/2173872/pexels-photo-2173872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                }
                                alt='貓咪圖片'
                                srcSet=''
                            />
                        </div>
                        <div className='imgWrapper'>
                            <img
                                src={
                                    'https://images.pexels.com/photos/2361952/pexels-photo-2361952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                }
                                alt='貓咪圖片'
                                srcSet=''
                            />
                        </div>
                        <div className='imgWrapper'>
                            <img
                                src={
                                    'https://images.pexels.com/photos/2646483/pexels-photo-2646483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                }
                                alt='貓咪圖片'
                                srcSet=''
                            />
                        </div>
                        <div className='imgWrapper'>
                            <img
                                src={
                                    'https://images.pexels.com/photos/1107807/pexels-photo-1107807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                }
                                alt='貓咪圖片'
                                srcSet=''
                            />
                        </div>
                        <div className='imgWrapper'>
                            <img
                                src={
                                    'https://images.pexels.com/photos/179237/pexels-photo-179237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                }
                                alt='貓咪圖片'
                                srcSet=''
                            />
                        </div>
                        <div className='imgWrapper'>
                            <img
                                src={
                                    'https://images.pexels.com/photos/2173872/pexels-photo-2173872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                }
                                alt='貓咪圖片'
                                srcSet=''
                            />
                        </div>
                        <div className='imgWrapper'>
                            <img
                                src={
                                    'https://images.pexels.com/photos/2361952/pexels-photo-2361952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                }
                                alt='貓咪圖片'
                                srcSet=''
                            />
                        </div>
                        <div className='imgWrapper'>
                            <img
                                src={
                                    'https://images.pexels.com/photos/2646483/pexels-photo-2646483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                }
                                alt='貓咪圖片'
                                srcSet=''
                            />
                        </div>
                        <div className='imgWrapper'>
                            <img
                                src={
                                    'https://images.pexels.com/photos/1107807/pexels-photo-1107807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                }
                                alt='貓咪圖片'
                                srcSet=''
                            />
                        </div>
                        <div className='imgWrapper'>
                            <img
                                src={
                                    'https://images.pexels.com/photos/179237/pexels-photo-179237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                }
                                alt='貓咪圖片'
                                srcSet=''
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ContributionPage
