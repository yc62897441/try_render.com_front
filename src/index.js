import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './store'
import App from './App'

const domContainer = document.querySelector('#root')
const root = ReactDOM.createRoot(domContainer)

// 配合 webpack.config.js 是否有設定 publicPath
// export const BASE_NAME = '/basename'
export const BASE_NAME = '/try_render.com_front' // 部屬到 github pages 時使用(BrowserRouter)

if (
    window.location.href.includes('#state')
    // && window.location.href.includes('code')
    // && /#\/$/.test(window.location.href)
) {
    // window.location.href = window.location.href.replace(/(\/\?code=.*)#(.*)/, '/#$2$1')
    window.location.href = window.location.href.replace('/#state', '?state')
}

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <App
                    basename={BASE_NAME} // 部屬到 github pages 時使用(BrowserRouter)
                />
            </PersistGate>
        </Provider>
    </React.StrictMode>
)
