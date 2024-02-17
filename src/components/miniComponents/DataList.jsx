// 套件
import React, { Component } from 'react'

// 靜態資源
import '../../style/components/miniComponents/dataList.scss'

// 自定義 components

import Card, { CardWithModal } from './Card'

// 自定義函數 or 參數

function DataList({ propData }) {
    return (
        <div className='dataListWrapper'>
            {propData?.length > 0 &&
                propData.map((datum, index) => (
                    <CardWithModal key={index} datum={datum}></CardWithModal>
                ))}
        </div>
    )
}

export default DataList

const DataListHOC = (WrappedComponent) => (propData) => {
    return class simpleHOC extends Component {
        render() {
            return (
                <WrappedComponent propData={propData}>
                    {propData?.length > 0 &&
                        propData.map((datum, index) => <Card key={index} datum={datum}></Card>)}
                </WrappedComponent>
            )
        }
    }
}

export { DataListHOC }
