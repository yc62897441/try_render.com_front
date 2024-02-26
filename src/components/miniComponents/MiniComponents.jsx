// 套件
import React, { useEffect } from 'react'

// 靜態資源
import '../../style/components/miniComponents/miniComponents.scss'

// 自定義 components

// 自定義函數 or 參數

export function Button({ name, isActive, onClick }) {
    let className = 'button'
    if (isActive) className += ' isActive'

    return (
        <button className={className} onClick={onClick}>
            {name}
        </button>
    )
}

export function Select({
    name,
    defaultValue,
    selectList,
    onChangeFunc,
    datumIndex,
    onChangeKey,
    disabled,
    id,
}) {
    // 預選設定 state 為 selectList 第一筆資料的 value
    useEffect(() => {
        // 如果資料是來自於由父層的 state，則 UI 操作的變動結果需要透過父層傳下來的函數，一同更新父層的 state
        if (onChangeFunc && onChangeKey && !defaultValue) {
            if (datumIndex === undefined || datumIndex === null) {
                onChangeFunc(selectList[0]?.value, onChangeKey)
            } else {
                onChangeFunc(selectList[0]?.value, datumIndex, onChangeKey)
            }
        }
    }, [])

    function handleChange(e) {
        // 如果資料是來自於由父層的 state，則 UI 操作的變動結果需要透過父層傳下來的函數，一同更新父層的 state
        if (onChangeFunc && onChangeKey) {
            if (datumIndex === undefined || datumIndex === null) {
                onChangeFunc(e.target.value, onChangeKey)
            } else {
                onChangeFunc(e.target.value, datumIndex, onChangeKey)
            }
        }
    }

    return (
        <select
            className='selectWrapper'
            name={name}
            onChange={(e) => {
                handleChange(e)
            }}
            defaultValue={selectList.length === 0 ? '無資料' : defaultValue}
            disabled={disabled}
            id={id}
        >
            {
                // 如果沒有 defaultValue，則顯示「請選擇」並且使用者不能選這個選項
                selectList.length > 0 && !defaultValue && (
                    <option className='option' key={'請選擇'} value='' disabled>
                        請選擇
                    </option>
                )
            }
            {selectList.length > 0 &&
                selectList.map((selectItem) => (
                    <option
                        className='option'
                        key={selectItem.label}
                        selected={defaultValue === selectItem.value}
                        value={selectItem.value}
                    >
                        {selectItem.label}
                    </option>
                ))}

            {selectList.length === 0 && (
                <option className='option' key={'無資料'} value='無資料' selected disabled>
                    無資料
                </option>
            )}
        </select>
    )
}
