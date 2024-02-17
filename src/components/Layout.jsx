// 套件
import React from 'react'
import { useSelector } from 'react-redux'

// 靜態資源
import '../style/components/layout.scss'

// 自定義 components
import Header from './Header'
import LoadingModal from './LoadingModal'

// 自定義函數 or 參數

function Layout({ children }) {
    const isLoading = useSelector((state) => state.persistedControlReducer.isLoading)

    return (
        <div className='layoutWrapper'>
            {
                // 是否顯示 loading modal
                isLoading && <LoadingModal text={''} />
            }

            <Header />

            {children}
        </div>
    )
}

export default Layout
