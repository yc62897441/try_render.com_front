// 套件
import React from 'react'

// 靜態資源
import '../../style/containers/miniComponent.scss'

// 自定義 components
import { Input, Textarea, Select, Ratio, Checkbox, Button } from './MiniComponents'

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
                    // selectDistrict 是為了行政區客製。在 city select 切換縣市時，行政區的 select UI 以及 formDate state 都要更新。
                    return formConfig[key]?.type === 'selectDistrict' ? (
                        // 「formConfig[key]?.selectList?.[Number(formData?.city)] &&」是因為 Form 一開始渲染時，formData?.city 還是 undefined，在取得 formConfig['district']?.selectList?.[Number(formData?.city)] 會是 undefined，在生成 Select 時會 error。所以，等到 Form 渲染好，formData?.city 取得初始值後，再來處理 selectDistrict select 的渲染。
                        formConfig[key]?.selectList?.[Number(formData?.city)] && (
                            <div
                                className='formGroup'
                                // key 加上 city 的 value，確保 city 改變時，selectDistrict select UI 會更新
                                key={index + key + Number(formData?.city)}
                            >
                                <label htmlFor={key}>{formConfig[key]?.label}</label>
                                <Select
                                    selectList={
                                        formConfig[key]?.selectList?.[Number(formData?.city)]
                                    }
                                    onChangeFunc={handleChange}
                                    onChangeKey={key}
                                    name={null}
                                    defaultValue={null} // defaultValue 為 null，讓 Select 初始化建立時，自動去找 selectList 第一項作為 value
                                    datumIndex={null}
                                    disabled={false}
                                    id={null}
                                />
                            </div>
                        )
                    ) : formConfig[key]?.type === 'select' ? (
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
                            <Textarea
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
                            <Input
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
