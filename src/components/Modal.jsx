// 套件
import React from 'react'

// 靜態資源
import '../style/components/modal.scss'

function Modal({ children, switchShow }) {
    return (
        <div className='modalWrapper'>
            <div className='modalMain'>{children}</div>

            {/* 遮罩 */}
            <div className='modalMask' onClick={switchShow}></div>
        </div>
    )
}

export default Modal
