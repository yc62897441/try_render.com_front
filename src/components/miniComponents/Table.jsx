// 套件
import React from 'react'

// 靜態資源

// 自定義 components

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

export default Table
