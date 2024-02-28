// 套件
import React, { useState } from 'react'

// 靜態資源

// 自定義 components

// 自定義函數 or 參數
import { withDebounce } from '../helper/helper'

function Debounce() {
    const [count, setCount] = useState(0)

    function handleClick() {
        setCount((n) => n + 1)
    }

    const handleClickWithDebounce = withDebounce(handleClick, 2000)

    return (
        <section>
            <h1>Debounce</h1>
            <p>
                debounce(防抖): 在 n
                秒內多次觸發，只會執行最後一次觸發，中間其餘的觸發都會被後續的觸發蓋掉。並且最後一次觸發會在
                n 秒後執行。
            </p>
            <div>count: {count}</div>
            <button
                onClick={() => {
                    console.log('click')
                    handleClickWithDebounce()
                }}
            >
                +1
            </button>
        </section>
    )
}

export default Debounce
