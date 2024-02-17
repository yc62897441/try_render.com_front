// 套件
import React, { Fragment, useState } from 'react'

// 靜態資源
import '../../style/components/miniComponents/card.scss'

// 自定義 components
import Modal from '../Modal'

// 自定義函數 or 參數

function Card({ datum }) {
    return (
        <div className='cardWrapper'>
            <h2>{datum.id}</h2>
            <div className='cardImgWrapper'>
                <img src={datum.url} alt='' srcSet='' />
            </div>
        </div>
    )
}

export default Card

export function CardWithModal({ datum }) {
    const [showModal, setShowModal] = useState(false)

    function switchShow() {
        setShowModal((n) => !n)
    }

    return (
        <Fragment>
            <div onClick={switchShow}>
                <Card datum={datum} />
            </div>

            {showModal && <Modal switchShow={switchShow}>sdasd</Modal>}
        </Fragment>
    )
}
