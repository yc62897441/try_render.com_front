// 套件
import React from 'react'

// 靜態資源
import '../style/components/layout.scss'

// 自定義 components
import Header from './Header'

// 自定義函數 or 參數

function Layout({ children }) {
    return (
        <div className='layoutWrapper'>
            <Header />

            {children}
        </div>
    )
}

export default Layout
