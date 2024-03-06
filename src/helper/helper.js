// 套件

// 靜態資源

// 自定義 components

// 自定義函數 or 參數

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
