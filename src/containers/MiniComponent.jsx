// 套件
import React, { useEffect } from 'react'
import { useImmer } from 'use-immer'

// 靜態資源
import '../style/containers/homepage.scss'
import '../style/containers/miniComponent.scss'

// 自定義 components
import Form from '../components/miniComponents/Form'

// 自定義函數 or 參數
import { dummyTableData } from '../assets/dummyTableData'
import { dummyFormConfig } from '../assets/dummyFormConfig'

function ContributionPage() {
    const [formData, updateFormData] = useImmer({})
    const [tableData, updateTableData] = useImmer({})

    useEffect(() => {
        updateTableData(dummyTableData)
    }, [])

    function handleChange(value, Key, datumIndex) {
        updateFormData((draft) => {
            draft[Key] = value
        })
    }

    function handleSubmit() {
        console.log('handleSubmit')
    }

    return (
        <main>
            <section
                style={{
                    position: 'relative',
                    height: '920px',
                }}
            >
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
                <hr />

                <Form
                    formData={formData}
                    formConfig={dummyFormConfig}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    AppendComponent={function A() {
                        return <div className='formControlGroup'>其他</div>
                    }}
                />
            </section>
        </main>
    )
}

export default ContributionPage
