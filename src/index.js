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

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <App
                // basename={BASE_NAME}
                />
            </PersistGate>
        </Provider>
    </React.StrictMode>
)
