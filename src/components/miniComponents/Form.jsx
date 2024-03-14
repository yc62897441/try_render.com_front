// 套件
import React from 'react'

// 靜態資源
import '../../style/containers/miniComponent.scss'

// 自定義 components
import { Select, Ratio, Checkbox, Button } from './MiniComponents'

// 自定義函數 or 參數

function Form({ formData, formConfig, handleChange, handleSubmit, AppendComponent }) {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                if (handleSubmit) handleSubmit()
            }}
        >
            {Object.keys(formConfig)?.length > 0 &&
                Object.keys(formConfig).map((key, index) => {
                    return formConfig[key]?.type === 'select' ? (
                        <div className='formGroup' key={index + key}>
                            <label htmlFor={key}>{formConfig[key]?.label}</label>
                            <Select
                                selectList={formConfig[key]?.selectList}
                                onChangeFunc={handleChange}
                                onChangeKey={key}
                                name={null}
                                defaultValue={formData[key]}
                                datumIndex={null}
                                disabled={false}
                                id={null}
                            />
                        </div>
                    ) : formConfig[key]?.type === 'ratio' ? (
                        <div className='formGroup' key={index + key}>
                            <label htmlFor={key}>{formConfig[key]?.label}</label>
                            <Ratio
                                ratioList={formConfig[key]?.ratioList}
                                onChangeFunc={handleChange}
                                onChangeKey={key}
                                defaultValue={formData[key]}
                            />
                        </div>
                    ) : formConfig[key]?.type === 'checkbox' ? (
                        <div className='formGroup' key={index + key}>
                            <label htmlFor={key}>{formConfig[key]?.label}</label>
                            <Checkbox
                                checkList={formConfig[key]?.checkList}
                                onChangeFunc={handleChange}
                                onChangeKey={key}
                                defaultValue={formData[key]}
                            />
                        </div>
                    ) : formConfig[key]?.type === 'textarea' ? (
                        <div className='formGroup' key={index + key}>
                            <label htmlFor={key}>{formConfig[key]?.label}</label>
                            <textarea
                                type={formConfig[key]?.type}
                                name={key}
                                id={key}
                                rows='6'
                                onChange={(e) => handleChange(e.target.value, key)}
                            />
                        </div>
                    ) : (
                        <div className='formGroup' key={index + key}>
                            <label htmlFor={key}>{formConfig[key].label}</label>
                            <input
                                type={formConfig[key].type}
                                name={key}
                                id={key}
                                onChange={(e) => handleChange(e.target.value, key)}
                                autoComplete={formConfig[key].autoComplete}
                                required={formConfig[key].required}
                                readOnly={formConfig[key]?.readOnly}
                            />
                        </div>
                    )
                })}

            <div className='formControlGroup'>
                <Button name={'送出'} type='submit' />
            </div>

            {/* 支援額外附加元件 */}
            {AppendComponent && <AppendComponent />}
        </form>
    )
}

export default Form
