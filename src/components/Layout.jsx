// 套件
import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

// 靜態資源
import '../style/components/layout.scss'

// 自定義 components
import Header from './Header'
import LoadingModal from './LoadingModal'

// 自定義函數 or 參數

// 把 isLoading，移到 Main 之中，不要放在 Layout 層。避免 isLoading 改變時，整個 Layout(包含 Header) 都要 re-render。
function Main({ children }) {
    const isLoading = useSelector((state) => state.persistedControlReducer.isLoading)

    return (
        <Fragment>
            {
                // 是否顯示 loading modal
                isLoading && <LoadingModal text={''} />
            }
            {children}
        </Fragment>
    )
}

function Layout({ children }) {
    return (
        <div className='layoutWrapper'>
            <Header />
            <Main>{children}</Main>
        </div>
    )
}

export default Layout
