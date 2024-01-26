import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'

const domContainer = document.querySelector('#root')
const root = ReactDOM.createRoot(domContainer)

// 配合 webpack.config.js 是否有設定 publicPath
// export const BASE_NAME = '/basename'

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App
            // basename={BASE_NAME}
            />
        </Provider>
    </React.StrictMode>
)
