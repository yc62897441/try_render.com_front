// 套件
import React from 'react'

// 靜態資源
import '../style/components/loadingModal.scss'

// 自定義 components

// 自定義函數 or 參數

function LoadingModal({ text }) {
    return (
        <div className='loadingModalWrapper'>
            <div className='modalLoadingMain'>
                <div className='modalLoadingMainText'>{text || 'Loading...'}</div>

                {/* 轉圈圈 */}
                <div className='lds-roller'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            {/* 遮罩 */}
            <div className='mask'></div>
        </div>
    )
}

export default LoadingModal
