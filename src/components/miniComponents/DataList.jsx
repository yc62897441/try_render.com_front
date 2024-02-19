// 套件
import React, { Fragment, useState } from 'react'

// 靜態資源
import '../../style/components/miniComponents/dataList.scss'

// 自定義 components
import Modal from '../Modal'

// 自定義函數 or 參數

function DataList({ propData, PropCard, PropModalContent }) {
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
                {PropCard &&
                    propData?.length > 0 &&
                    propData.map((datum, index) => (
                        <div key={index} onClick={() => switchModal(index)}>
                            <PropCard datum={datum} />
                        </div>
                    ))}
            </div>

            {modalState.showIndex !== null && (
                <Modal switchModal={switchModal}>
                    {PropModalContent && <PropModalContent datum={modalState.showDatum} />}
                </Modal>
            )}
        </Fragment>
    )
}

export default DataList
