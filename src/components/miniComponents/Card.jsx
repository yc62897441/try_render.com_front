// 套件
import React from 'react'

// 靜態資源
import '../../style/components/miniComponents/card.scss'

// 自定義 components

// 自定義函數 or 參數

export function CatCard({ datum }) {
    return (
        <div className='cardWrapper pointer'>
            <h2>{datum.id}</h2>
            <div className='cardImgWrapper'>
                <img src={datum.url} alt='貓咪圖片' srcSet='' />
            </div>
        </div>
    )
}

export function RestaurantCard({ datum }) {
    return (
        <div className='cardWrapper pointer'>
            <h2>{datum.name}</h2>
            <div className='cardImgWrapper'>
                <img src={datum.coverUrl} alt='餐廳圖片' srcSet='' />
            </div>
        </div>
    )
}
