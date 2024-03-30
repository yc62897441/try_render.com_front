// 套件
import React, { useState, useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

// 靜態資源
import '../style/components/header.scss'
import LogoImg from '../assets/img/logo.png'

// 自定義 components

// 自定義函數 or 參數
import { isDevelopingMode } from '../config/api'
import { dispatchCART_CHANGED } from '../actions'

const urls = [
    {
        name: 'Home',
        url: '/',
    },
    {
        name: '貓咪宅急便',
        url: '/delivery',
    },
    {
        name: '貓咪餐廳',
        url: '/restaurant',
    },
    {
        name: '線上認養',
        url: '/contribution',
    },

    {
        name: '購物車',
        url: '/cart',
        isCart: true,
    },
]

// 後台頁面
const backStageUrls = [
    {
        name: 'Reactflow',
        url: '/reactflow',
    },
    {
        name: '訂單管理',
        url: '/backstage/orders',
    },
]

// 開發模式下才顯示的頁面
const developingModeUrls = [
    {
        name: 'MiniComponent',
        url: '/miniComponent',
    },
    {
        name: 'TryApi',
        url: '/tryApi',
    },
]

// TODO: 待優化。當 isCartChanged 變為 true，CartItemsNum 元件會 re-render 更新正確的 cartItemsNum，但是為了要把 isCartChanged 改回 false，會多造成 CartItemsNum 元件在 render 一次。
// 把 isCartChanged 從 Header 移到 CartItemsNum 之中，如此 isCartChanged 改變時不會造成 Header 重新渲染。
function CartItemsNum() {
    const dispatch = useDispatch()
    const isCartChanged = useSelector((state) => state.persistedControlReducer.isCartChanged)
    // console.log('CartItemsNum render')

    useEffect(() => {
        if (isCartChanged) {
            dispatch(dispatchCART_CHANGED(false))
        }
    }, [isCartChanged])

    // 取得購物車內項目的數量
    const cart = JSON.parse(localStorage.getItem('cart'))
    const cartListTable = cart?.cartList || {}
    const cartItemsNum = Object.keys(cartListTable).length

    // 項目數量 > 0 才顯示
    if (cartItemsNum === 0) return null
    return <div className='cartItemsNum'>{cartItemsNum}</div>
}

function Header() {
    const isAdmin = useSelector((state) => state.persistedControlReducer.isAdmin)
    const [isDropdown, setIsDropdown] = useState('non-dropdown')

    // 建立 header 選項
    const headerUrls = useMemo(() => {
        const outputUrls = [...urls] // 一般使用者可使用 urls
        if (isAdmin) {
            outputUrls.push(...backStageUrls) // 系統管理員可使用 urls
            if (isDevelopingMode) outputUrls.push(...developingModeUrls) // 開發模式下，系統管理員可使用 urls
        }
        return outputUrls
    }, [isAdmin])

    function handleDropdown() {
        if (isDropdown === 'non-dropdown') {
            setIsDropdown('dropdown')
        } else {
            setIsDropdown('non-dropdown')
        }
    }

    return (
        <div className='headerWrapper'>
            {/* Logo */}
            <div className='logoWrapper'>
                <Link to={'/'}>
                    <img src={LogoImg} alt='貓咪 icon' srcSet='' />
                </Link>
            </div>

            {/* 漢堡排 */}
            <div className='barsWrapper' onClick={handleDropdown}>
                <div className={'bar bar1 ' + isDropdown}></div>
                <div className={'bar bar2 ' + isDropdown}></div>
                <div className={'bar bar3 ' + isDropdown}></div>
            </div>

            <div className={'urlsWrapper ' + isDropdown}>
                {headerUrls.length > 0 &&
                    headerUrls.map((item) => (
                        <div key={item.name} className='urlWrapper'>
                            <Link to={item.url}>
                                <div>{item.name}</div>
                                {
                                    // 如果是購物車，則顯示數量
                                    item.isCart && <CartItemsNum />
                                }
                            </Link>
                        </div>
                    ))}
            </div>

            <div className={'urlsWrapperPc'}>
                {headerUrls.length > 0 &&
                    headerUrls.map((item) => (
                        <div key={item.name} className='urlWrapper'>
                            <Link to={item.url}>
                                {item.name}
                                {
                                    // 如果是購物車，則顯示數量
                                    item.isCart && <CartItemsNum />
                                }
                            </Link>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Header
