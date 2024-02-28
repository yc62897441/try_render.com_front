// 參考來源：Lazy Loading 延遲載入圖片
// https://mingjun.lu/blog/lazy-loading-images-with-intersection-observer
export function onEnterView(entries, observer) {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            const img = entry.target
            img.setAttribute('src', img.dataset.src)
            observer.unobserve(img)
        }
    }
}

// 參考來源
// https://medium.com/@steven234/throttle%E8%B7%9F-debounce%E6%9C%89%E4%BB%80%E9%BA%BC%E5%8D%80%E5%88%A5-e0b1979b1b4f
// throttle(節流): 從第一次觸發開始，在 n 秒後執行 callback 函數。在第一次觸發到執行 callback 其間，無論再觸發多少次都不會執行。
export function withThrottle(callback, time) {
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
// throttle(節流)(執行第一次觸發版本): 第一次觸發時立刻執行 callback，並且在 n 秒內忽視其他的觸發。
export function withThrottleFirst(callback, time) {
    let idThrottled = false

    return function () {
        if (idThrottled) return

        idThrottled = true
        callback()

        setTimeout(() => {
            idThrottled = false
        }, time)
    }
}
// debounce(防抖): 在 n 秒內多次觸發，只會執行最後一次觸發，中間其餘的觸發都會被後續的觸發蓋掉。並且最後一次觸發會在 n 秒後執行。
export function withDebounce(callback, time) {
    let timer = null

    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            callback()
        }, time)
    }
}
