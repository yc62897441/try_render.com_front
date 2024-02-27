// 套件
import React, { useState } from 'react'

// 靜態資源

// 自定義 components

// 自定義函數 or 參數

// throttle(節流): 從第一次觸發開始，在 n 秒後執行 callback 函數。在第一次觸發到執行其間，無論再觸發多少次都不會執行。
const withThrottle = (callback, time) => {
    let idThrottled = false

    return () => {
        if (idThrottled) return

        idThrottled = true
        setTimeout(() => {
            idThrottled = false
            callback()
        }, time)
    }
}

function Throttle() {
    const [count, setCount] = useState(0)

    function handleClick() {
        setCount((n) => n + 1)
    }

    const handleClickWithThrottle = withThrottle(handleClick, 2000)

    return (
        <div>
            Throttle
            <div>{count}</div>
            <button
                onClick={() => {
                    console.log('onClick')
                    handleClickWithThrottle()
                }}
            >
                +1
            </button>
        </div>
    )
}

export default Throttle
