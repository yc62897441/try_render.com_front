// 套件
import React, { useState, Fragment } from 'react'

// 靜態資源

// 自定義 components
import Modal from '../Modal'

// 自定義函數 or 參數

function Table({ tableData }) {
    return (
        <div className='tableWrapper'>
            <div className='tableContainer'>
                <table>
                    <thead>
                        <tr>
                            {tableData.length > 0 &&
                                Object.keys(tableData[0]).length > 0 &&
                                Object.keys(tableData[0]).map((key) => <th key={key}>{key}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.length > 0 &&
                            tableData.map((item, index) => (
                                <tr key={index}>
                                    {Object.keys(tableData[0]).length > 0 &&
                                        Object.keys(tableData[0]).map((key, keyIndex) => (
                                            <td key={keyIndex + key}>{item[key]}</td>
                                        ))}
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function TableWithModal({ tableData, ModalContent }) {
    const [openIndex, setOpenIndex] = useState(null) // 選擇開啟的 table 資料的 index
    function handleOpen(index) {
        if (index === null) {
            setOpenIndex(null)
        } else {
            setOpenIndex(index)
        }
    }

    let openIndexData = null // 選擇開啟的 table 資料
    if (openIndex !== null) openIndexData = { ...tableData[openIndex] }

    return (
        <Fragment>
            <div className='tableWrapper'>
                <div className='tableContainer'>
                    <table>
                        <thead>
                            <tr>
                                {tableData.length > 0 &&
                                    Object.keys(tableData[0]).length > 0 &&
                                    Object.keys(tableData[0]).map((key) => (
                                        <th key={key}>{key}</th>
                                    ))}
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.length > 0 &&
                                tableData.map((item, index) => (
                                    <tr key={index} onClick={() => handleOpen(index)}>
                                        {Object.keys(tableData[0]).length > 0 &&
                                            Object.keys(tableData[0]).map((key, keyIndex) => (
                                                <td key={keyIndex + key}>{item[key]}</td>
                                            ))}
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {openIndexData !== null && (
                <Modal
                    switchModal={() => {
                        setOpenIndex(null)
                    }}
                >
                    <ModalContent datum={openIndexData} />
                </Modal>
            )}
        </Fragment>
    )
}

export default Table
export { TableWithModal }
