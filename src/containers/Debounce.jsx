// 套件
import React, { useState } from 'react'

// 靜態資源

// 自定義 components

// 自定義函數 or 參數

const withDebounce = (callback, time) => {
    let timer = null

    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            callback()
        }, time)
    }
}

// function debounce(func, delay = 250) {
//     let timer = null

//     return function (...args) {
//         let context = this

//         clearTimeout(timer)
//         timer = setTimeout(() => {
//             func.apply(context, args)
//         }, delay)
//     }
// }

function Debounce() {
    const [count, setCount] = useState(0)

    function handleClick() {
        setCount((n) => n + 1)
    }

    const handleClickWithDebounce = withDebounce(handleClick, 2000)

    return (
        <div>
            Debounce
            <div>{count}</div>
            <button
                onClick={() => {
                    console.log('onClick')
                    handleClickWithDebounce()
                }}
            >
                +1
            </button>
        </div>
    )
}

export default Debounce
