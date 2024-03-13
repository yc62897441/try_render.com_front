// 套件
import React, { useEffect } from 'react'
import { useImmer } from 'use-immer'

// 靜態資源
import '../style/containers/homepage.scss'
import '../style/containers/miniComponent.scss'

// 自定義 components
import { Button, Select, Ratio, Checkbox } from '../components/miniComponents/MiniComponents'

// 自定義函數 or 參數
import { dummyTableData } from '../assets/dummyTableData'

const config = {
    name: {
        label: '姓名',
        type: 'text',
        required: true,
        readOnly: false,
    },
    email: {
        label: 'email',
        type: 'email',
    },
    tel: {
        label: '手機',
        type: 'tel',
        required: true,
        pattern: '[0-9]{4}-[0-9]{3}-[0-9]{3}',
        patternDemo: ' Format: 0900-001-001',
    },
    gender: {
        label: '性別',
        type: 'ratio',
        ratioList: [
            { label: '女', value: 0 },
            { label: '男', value: 1 },
            { label: '其他', value: 2 },
        ],
    },
    residencePlace: {
        label: '居住地',
        type: 'select',
        selectList: [
            { label: '台北市', value: 0 },
            { label: '新北市', value: 1 },
            { label: '桃園市', value: 2 },
            { label: '新竹縣', value: 3 },
            { label: '新竹市', value: 4 },
            { label: '基隆市', value: 5 },
            { label: '宜蘭市', value: 6 },
        ],
    },
    preference: {
        label: '偏好',
        type: 'checkbox',
        checkList: [
            { label: '短毛貓', value: 0 },
            { label: '長毛貓', value: 1 },
            { label: '波絲貓', value: 2 },
            { label: '玳瑁貓', value: 3 },
            { label: '虎斑貓', value: 4 },
        ],
    },
    startDate: {
        label: '起日',
        type: 'date',
        required: true,
    },
    startTime: {
        label: '起時',
        type: 'time',
        required: true,
    },
    endDate: {
        label: '迄日',
        type: 'date',
        required: true,
    },
    endTime: {
        label: '迄時',
        type: 'time',
        required: true,
    },
    elseInfo: {
        label: '其他',
        type: 'textarea',
    },
}

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

                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                    }}
                >
                    {Object.keys(config)?.length > 0 &&
                        Object.keys(config).map((key, index) => {
                            return config[key]?.type === 'text' ? (
                                <div className='formGroup' key={index + key}>
                                    <label htmlFor={key}>{config[key]?.label}</label>
                                    <input
                                        type={config[key]?.type}
                                        name={key}
                                        id={key}
                                        onChange={(e) => handleChange(e.target.value, key)}
                                        required={config[key]?.required}
                                        readOnly={config[key]?.readOnly}
                                    />
                                </div>
                            ) : config[key]?.type === 'email' ? (
                                <div className='formGroup' key={index + key}>
                                    <label htmlFor={key}>{config[key]?.label}</label>
                                    <input
                                        type={config[key]?.type}
                                        name={key}
                                        id={key}
                                        onChange={(e) => handleChange(e.target.value, key)}
                                        required={config[key]?.required}
                                    />
                                </div>
                            ) : config[key]?.type === 'tel' ? (
                                <div className='formGroup' key={index + key}>
                                    <label htmlFor={key}>
                                        {config[key]?.label}
                                        <small>{config[key]?.patternDemo}</small>
                                    </label>
                                    <input
                                        type={config[key]?.type}
                                        name={key}
                                        id={key}
                                        pattern={config[key]?.pattern}
                                        onChange={(e) => handleChange(e.target.value, key)}
                                        required={config[key]?.required}
                                    />
                                </div>
                            ) : config[key]?.type === 'date' ? (
                                <div className='formGroup' key={index + key}>
                                    <label htmlFor={key}>{config[key]?.label}</label>
                                    <input
                                        type={config[key]?.type}
                                        name={key}
                                        id={key}
                                        onChange={(e) => handleChange(e.target.value, key)}
                                        required={config[key]?.required}
                                    />
                                </div>
                            ) : config[key]?.type === 'time' ? (
                                <div className='formGroup' key={index + key}>
                                    <label htmlFor={key}>{config[key]?.label}</label>
                                    <input
                                        type={config[key]?.type}
                                        name={key}
                                        id={key}
                                        onChange={(e) => handleChange(e.target.value, key)}
                                        required={config[key]?.required}
                                    />
                                </div>
                            ) : config[key]?.type === 'textarea' ? (
                                <div className='formGroup' key={index + key}>
                                    <label htmlFor={key}>{config[key]?.label}</label>
                                    <textarea
                                        type={config[key]?.type}
                                        name={key}
                                        id={key}
                                        rows='6'
                                        onChange={(e) => handleChange(e.target.value, key)}
                                    />
                                </div>
                            ) : config[key]?.type === 'select' ? (
                                <div className='formGroup' key={index + key}>
                                    <label htmlFor={key}>{config[key]?.label}</label>
                                    <Select
                                        selectList={config[key]?.selectList}
                                        onChangeFunc={handleChange}
                                        onChangeKey={key}
                                        name={null}
                                        defaultValue={formData[key]}
                                        datumIndex={null}
                                        disabled={false}
                                        id={null}
                                    />
                                </div>
                            ) : config[key]?.type === 'ratio' ? (
                                <div className='formGroup' key={index + key}>
                                    <label htmlFor={key}>{config[key]?.label}</label>
                                    <Ratio
                                        ratioList={config[key]?.ratioList}
                                        onChangeFunc={handleChange}
                                        onChangeKey={key}
                                        defaultValue={formData[key]}
                                    />
                                </div>
                            ) : config[key]?.type === 'checkbox' ? (
                                <div className='formGroup' key={index + key}>
                                    <label htmlFor={key}>{config[key]?.label}</label>
                                    <Checkbox
                                        checkList={config[key]?.checkList}
                                        onChangeFunc={handleChange}
                                        onChangeKey={key}
                                        defaultValue={formData[key]}
                                    />
                                </div>
                            ) : null
                        })}

                    <Button name={'A按鈕'} type='submit' />
                </form>
            </section>
        </main>
    )
}

export default ContributionPage
