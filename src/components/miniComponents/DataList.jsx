// 套件
import React, { Fragment, useState } from 'react'

// 靜態資源
import '../../style/components/miniComponents/dataList.scss'

// 自定義 components
import Card from './Card'
import Modal from '../Modal'

// 自定義函數 or 參數

function DataList({ propData }) {
    const [modalState, setModalState] = useState({
        showIndex: null,
        showDatum: null,
    })

    function switchModal(index) {
        if (modalState.showIndex === null) {
            const tempModalState = {
                showIndex: index,
                showDatum: propData[index],
            }
            setModalState(tempModalState)
        } else {
            setModalState({
                showIndex: null,
                showDatum: null,
            })
        }
    }

    return (
        <Fragment>
            <div className='dataListWrapper'>
                {propData?.length > 0 &&
                    propData.map((datum, index) => (
                        <div key={index} onClick={() => switchModal(index)}>
                            <Card datum={datum}></Card>
                        </div>
                    ))}
            </div>

            {modalState.showIndex !== null && (
                <Modal switchModal={switchModal}>{modalState.showDatum.id}</Modal>
            )}
        </Fragment>
    )
}

export default DataList
