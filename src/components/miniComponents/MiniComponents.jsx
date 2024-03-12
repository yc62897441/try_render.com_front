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
                onChangeFunc(selectList[0]?.value, onChangeKey, datumIndex)
            }
        }
    }, [])

    function handleChange(e) {
        // 如果資料是來自於由父層的 state，則 UI 操作的變動結果需要透過父層傳下來的函數，一同更新父層的 state
        if (onChangeFunc && onChangeKey) {
            if (datumIndex === undefined || datumIndex === null) {
                onChangeFunc(e.target.value, onChangeKey)
            } else {
                onChangeFunc(e.target.value, onChangeKey, datumIndex)
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
            value={selectList.length === 0 ? '無資料' : defaultValue}
            // defaultValue={selectList.length === 0 ? '無資料' : defaultValue}
            disabled={disabled}
            id={id}
        >
            {
                // 如果沒有 defaultValue，則顯示「請選擇」並且使用者不能選這個選項
                !defaultValue && selectList.length > 0 && (
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
                        // selected={defaultValue.toString() === selectItem.value.toString()}
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

export function Ratio({
    defaultValue,
    ratioList,
    onChangeFunc,
    datumIndex,
    onChangeKey,
    disabled,
}) {
    // 預選設定 state 為 ratioList 第一筆資料的 value
    useEffect(() => {
        // 如果資料是來自於由父層的 state，則 UI 操作的變動結果需要透過父層傳下來的函數，一同更新父層的 state
        if (onChangeFunc && onChangeKey && !defaultValue) {
            if (datumIndex === undefined || datumIndex === null) {
                onChangeFunc(ratioList[0]?.value, onChangeKey)
            } else {
                onChangeFunc(ratioList[0]?.value, onChangeKey, datumIndex)
            }
        }
    }, [])

    function handleChange(e) {
        // 如果資料是來自於由父層的 state，則 UI 操作的變動結果需要透過父層傳下來的函數，一同更新父層的 state
        if (onChangeFunc && onChangeKey) {
            if (datumIndex === undefined || datumIndex === null) {
                onChangeFunc(e.target.value, onChangeKey)
            } else {
                onChangeFunc(e.target.value, onChangeKey, datumIndex)
            }
        }
    }

    return (
        <fieldset disabled={disabled}>
            {ratioList.length > 0 &&
                ratioList.map((ratioItem, index) => (
                    <div className='fieldsetItemWrapper' key={index + ratioItem.label}>
                        <label htmlFor={ratioItem.label}>{ratioItem.label}</label>
                        <input
                            type='radio'
                            id={ratioItem.label}
                            name='radio'
                            value={ratioItem.value}
                            onChange={(e) => {
                                handleChange(e)
                            }}
                            checked={defaultValue?.toString() === ratioItem.value.toString()}
                        />
                    </div>
                ))}
        </fieldset>
    )
}

export function Checkbox({
    defaultValue,
    checkList,
    onChangeFunc,
    datumIndex,
    onChangeKey,
    disabled,
}) {
    // 預選設定 state 為 checkList 第一筆資料的 value
    useEffect(() => {
        // 如果資料是來自於由父層的 state，則 UI 操作的變動結果需要透過父層傳下來的函數，一同更新父層的 state
        if (onChangeFunc && onChangeKey && !defaultValue) {
            if (datumIndex === undefined || datumIndex === null) {
                onChangeFunc(checkList[0]?.value, onChangeKey)
            } else {
                onChangeFunc(checkList[0]?.value, onChangeKey, datumIndex)
            }
        }
    }, [])

    function handleChange(e) {
        // 如果資料是來自於由父層的 state，則 UI 操作的變動結果需要透過父層傳下來的函數，一同更新父層的 state
        if (onChangeFunc && onChangeKey) {
            const newValue = generateNewValue(e.target.value.toString())
            if (datumIndex === undefined || datumIndex === null) {
                onChangeFunc(newValue, onChangeKey)
            } else {
                onChangeFunc(newValue, onChangeKey, datumIndex)
            }
        }
    }

    function generateNewValue(checkItemValue) {
        let newValue = ''
        if (defaultValueArr?.includes(checkItemValue)) {
            // 取消選取
            defaultValueArr.forEach((item) => {
                if (item !== checkItemValue && item) {
                    newValue += item.toString() + ';'
                }
            })
        } else {
            // 新增選取
            defaultValueArr.forEach((item) => {
                if (item) newValue += item.toString() + ';'
            })
            newValue += checkItemValue.toString()
        }
        return newValue
    }

    // 把 check 的選項，切分成 arr
    const defaultValueArr = defaultValue?.toString().split(';')

    return (
        <fieldset disabled={disabled}>
            {checkList.length > 0 &&
                checkList.map((checkItem, index) => (
                    <div className='fieldsetItemWrapper' key={index + checkItem.label}>
                        <label htmlFor={checkItem.label}>{checkItem.label}</label>
                        <input
                            type='checkbox'
                            id={checkItem.label}
                            value={checkItem.value}
                            onChange={(e) => {
                                handleChange(e)
                            }}
                            checked={defaultValueArr?.includes(checkItem.value.toString())}
                        />
                    </div>
                ))}
        </fieldset>
    )
}
