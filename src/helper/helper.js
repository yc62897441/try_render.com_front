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

// 確認起始時間是否晚於結束時間
export function checkTime(formData) {
    const { startDate, startTime, endDate, endTime } = formData
    const startDateTime = new Date(`${startDate} ${startTime}`)
    const endDateTime = new Date(`${endDate} ${endTime}`)
    if (startDateTime > endDateTime) return false
    return true
}
