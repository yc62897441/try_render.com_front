// 套件
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// 自定義 components
import HomePage from './containers/HomePage.jsx'

// style
import './index.css'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
