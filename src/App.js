// 套件
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

// 自定義 components
import HomePage from './containers/HomePage.jsx'
import DeliveryPage from './containers/DeliveryPage.jsx'
import RestaurantPage from './containers/RestaurantPage.jsx'
import ContributionPage from './containers/ContributionPage.jsx'
import Reactflow from './containers/Reactflow.jsx'
import LoginPage from './containers/LoginPage.jsx'
import Layout from './components/Layout.jsx'

// style
import './index.css'
import './style/index.scss'

function App() {
    const isLogin = useSelector((state) => state.persistedControlReducer.isLogin)
    const isLoginToken = sessionStorage.getItem('token') ? true : false

    return (
        <BrowserRouter>
            {isLoginToken || isLogin ? (
                <Layout>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/delivery' element={<DeliveryPage />} />
                        <Route path='/restaurant' element={<RestaurantPage />} />
                        <Route path='/contribution' element={<ContributionPage />} />
                        <Route path='/reactflow' element={<Reactflow />} />
                    </Routes>
                </Layout>
            ) : (
                <Routes>
                    <Route path='*' element={<LoginPage />} />
                </Routes>
            )}
        </BrowserRouter>
    )
}

export default App
