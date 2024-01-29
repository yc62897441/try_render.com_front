// 套件
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

// 自定義 components
import HomePage from './containers/HomePage.jsx'
import Login from './containers/Login.jsx'

// style
import './index.css'
import './style/index.scss'

function App() {
    const isLogin = useSelector((state) => state.controlReducer.isLogin)
    const isLoginToken = sessionStorage.getItem('token') ? true : false

    return (
        <BrowserRouter>
            {isLoginToken || isLogin ? (
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            ) : (
                <Routes>
                    <Route path="*" element={<Login />} />
                </Routes>
            )}
        </BrowserRouter>
    )
}

export default App
