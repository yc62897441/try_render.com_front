// 套件
import React, { lazy, Suspense } from 'react'
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

// 靜態資源
import './index.css'
import './style/index.scss'

// 自定義 components
import HomePage from './containers/HomePage.jsx'
import LoginPage from './containers/LoginPage.jsx'
import LoadingPage from './containers/LoadingPage.jsx'

// 動態載入的頁面
const DeliveryPage = lazy(() => import('./containers/DeliveryPage.jsx'))
const RestaurantPage = lazy(() => import('./containers/RestaurantPage.jsx'))
const ContributionPage = lazy(() => import('./containers/ContributionPage.jsx'))
const Reactflow = lazy(() => import('./containers/Reactflow.jsx'))
const CartPage = lazy(() => import('./containers/CartPage.jsx'))
// const Reactflow = lazy(() => import('./containers/ReactflowWrapper.jsx')) // 這個頁面沒有使用，是在嘗試動態導入頁面 + npm 套件時，所產生的

// 後台頁面
const Orders = lazy(() => import('./containers/backstage/Orders.jsx'))

// 測試環境時使用的頁面
const MiniComponent = lazy(() => import('./containers/MiniComponent.jsx'))
import TryApiPage from './containers/TryApi.jsx'
const TryApiAuthPage = lazy(() => import('./containers/TryApiAuth.jsx'))

import Layout from './components/Layout.jsx'

// 自定義函數 or 參數
import { isDevelopingMode } from './config/api.js'

// 部屬到 github pages 時使用(BrowserRouter)
function App({ basename }) {
    // function App() {
    const isLogin = useSelector((state) => state.persistedControlReducer.isLogin)
    const isAdmin = useSelector((state) => state.persistedControlReducer.isAdmin)

    return (
        // <BrowserRouter
        //     basename={basename} // 部屬到 github pages 時使用(BrowserRouter)
        // >
        <HashRouter>
            {isLogin ? (
                <Layout>
                    <Suspense fallback={<LoadingPage />}>
                        <Routes>
                            <Route path='/' element={<HomePage />} />
                            <Route path='/delivery' element={<DeliveryPage />} />
                            <Route path='/restaurant' element={<RestaurantPage />} />
                            <Route path='/contribution' element={<ContributionPage />} />
                            <Route path='/cart' element={<CartPage />} />

                            {/* 後台頁面，系統管理員才可見 */}
                            {isAdmin && (
                                <>
                                    <Route path='/reactflow' element={<Reactflow />} />
                                    <Route path='/backstage/orders' element={<Orders />} />
                                </>
                            )}
                            {
                                // 開發模式，系統管理員才可見
                                isAdmin && isDevelopingMode && (
                                    <>
                                        <Route path='/miniComponent' element={<MiniComponent />} />
                                        <Route path='/tryApi' element={<TryApiAuthPage />} />
                                    </>
                                )
                            }
                        </Routes>
                    </Suspense>
                </Layout>
            ) : (
                <Routes>
                    {
                        // 開發模式下才顯示的頁面
                        isDevelopingMode && <Route path='/tryApi' element={<TryApiPage />} />
                    }
                    <Route path='*' element={<LoginPage />} />
                </Routes>
            )}
        </HashRouter>
        // </BrowserRouter>
    )
}

export default App
