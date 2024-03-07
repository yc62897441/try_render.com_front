// 套件
import React, { lazy, Suspense } from 'react'
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

// 自定義 components
import HomePage from './containers/HomePage.jsx'
import LoginPage from './containers/LoginPage.jsx'
import LoadingPage from './containers/LoadingPage.jsx'
// 動態載入的頁面
const DeliveryPage = lazy(() => import('./containers/DeliveryPage.jsx'))
const RestaurantPage = lazy(() => import('./containers/RestaurantPage.jsx'))
const ContributionPage = lazy(() => import('./containers/ContributionPage.jsx'))
const Reactflow = lazy(() => import('./containers/Reactflow.jsx'))

import Layout from './components/Layout.jsx'

// style
import './index.css'
import './style/index.scss'

// 部屬到 github pages 時使用(BrowserRouter)
function App({ basename }) {
    // function App() {
    const isLogin = useSelector((state) => state.persistedControlReducer.isLogin)

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
                            <Route path='/reactflow' element={<Reactflow />} />
                        </Routes>
                    </Suspense>
                </Layout>
            ) : (
                <Routes>
                    <Route path='*' element={<LoginPage />} />
                </Routes>
            )}
        </HashRouter>
        // </BrowserRouter>
    )
}

export default App
