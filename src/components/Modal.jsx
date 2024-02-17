// 套件
import React from 'react'

// 靜態資源
import '../style/components/modal.scss'

function Modal({ children, switchModal }) {
    return (
        <div className='modalWrapper'>
            <div className='modalMain'>{children}</div>

            {/* 遮罩 */}
            <div className='modalMask' onClick={switchModal}></div>
        </div>
    )
}

export default Modal
