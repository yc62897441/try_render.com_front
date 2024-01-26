// 判斷環境。開發 or 正式
let isDevelopingMode = true
if (!location?.host?.includes('localhost')) {
    isDevelopingMode = false
}

// 依照環境設置參數
let mainUrl
switch (isDevelopingMode) {
    case true:
        mainUrl = 'http://localhost:3001'
    case false:
        mainUrl = 'https://try-render-com.onrender.com'
}

// 輸出參數
export { mainUrl }
