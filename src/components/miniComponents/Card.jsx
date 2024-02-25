// 套件
import React from 'react'

// 靜態資源
import DefaultCatImg from '../../assets/img/cats-6614088_640.jpg'
import '../../style/components/miniComponents/card.scss'

// 自定義 components

// 自定義函數 or 參數

export function CatCard({ datum }) {
    return (
        <div className='cardWrapper pointer'>
            <h2>{datum.id}</h2>
            <div className='cardImgWrapper'>
                <img
                    className='lazy' // 標記為要使用 Lazy Loading 的對象
                    src={DefaultCatImg} // 預設圖片
                    data-src={datum.url} // 實際要載入的圖片
                    alt='貓咪圖片'
                    srcSet=''
                />
            </div>
        </div>
    )
}

export function RestaurantCard({ datum }) {
    return (
        <div className='cardWrapper pointer'>
            <h2>{datum.name}</h2>
            <div className='cardImgWrapper'>
                <img
                    className='lazy' // 標記為要使用 Lazy Loading 的對象
                    src={DefaultCatImg} // 預設圖片
                    data-src={datum.coverUrl} // 實際要載入的圖片
                    alt='餐廳圖片'
                    srcSet=''
                />
            </div>
        </div>
    )
}
