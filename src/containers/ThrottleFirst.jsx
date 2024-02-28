// 套件
import React, { useState, useCallback } from 'react'

// 靜態資源

// 自定義 components

// 自定義函數 or 參數
import { withThrottleFirst } from '../helper/helper'

function ThrottleFirst() {
    const [count, setCount] = useState(0)

    function handleClick() {
        setCount((n) => n + 1)
    }

    // 這邊要使用 useCallback，如果沒有使用 useCallback，則每一次 setCount 後，都會重新生成一個新的 handleClickWithThrottleFirst，如此閉包內的 idThrottled 都會是初始化的 false，就無法達成功能了。
    const handleClickWithThrottleFirst = useCallback(withThrottleFirst(handleClick, 2000), [])

    return (
        <section>
            <h1>ThrottleFirst</h1>
            <p>
                throttle(節流)(執行第一次觸發版本): 第一次觸發時立刻執行 callback，並且在 n
                秒內忽視其他的觸發。
            </p>
            <div>count: {count}</div>
            <button
                onClick={() => {
                    handleClickWithThrottleFirst()
                }}
            >
                +1
            </button>
        </section>
    )
}

export default ThrottleFirst
