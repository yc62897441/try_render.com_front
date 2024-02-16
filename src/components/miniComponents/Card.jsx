// 套件
import React from 'react'

// 靜態資源
import '../../style/components/miniComponents/card.scss'

// 自定義 components

// 自定義函數 or 參數

function Card({ datum }) {
    return (
        <div className='cardWrapper'>
            <div className='cardTitle'>{datum.id}</div>
            <div className='cardImgWrapper'>
                <img src={datum.url} alt='' srcSet='' />
            </div>
        </div>
    )
}

export default Card
