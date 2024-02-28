// 套件
import React, { useState } from 'react'

// 靜態資源

// 自定義 components

// 自定義函數 or 參數
import { withThrottle } from '../helper/helper'

function Throttle() {
    const [count, setCount] = useState(0)

    function handleClick() {
        setCount((n) => n + 1)
    }

    const handleClickWithThrottle = withThrottle(handleClick, 2000)

    return (
        <section>
            <h1>Throttle</h1>
            <p>
                throttle(節流): 從第一次觸發開始，在 n 秒後執行 callback
                函數。在第一次觸發到執行其間，無論再觸發多少次都不會執行。
            </p>
            <div>count: {count}</div>
            <button
                onClick={() => {
                    console.log('click')
                    handleClickWithThrottle()
                }}
            >
                +1
            </button>
        </section>
    )
}

export default Throttle
