// 套件
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// 靜態資源
import '../style/components/header.scss'
import LogoImg from '../assets/img/logo.png'

// 自定義 components

// 自定義函數 or 參數

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
]

function Header() {
    const [isDropdown, setIsDropdown] = useState('non-dropdown')

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
                    <img src={LogoImg} alt='' srcSet='' />
                </Link>
            </div>

            {/* 漢堡排 */}
            <div className='barsWrapper' onClick={handleDropdown}>
                <div className={'bar bar1 ' + isDropdown}></div>
                <div className={'bar bar2 ' + isDropdown}></div>
                <div className={'bar bar3 ' + isDropdown}></div>
            </div>

            <div className={'urlsWrapper ' + isDropdown}>
                {urls.length > 0 &&
                    urls.map((item) => (
                        <div key={item.name} className='urlWrapper'>
                            <Link to={item.url}>{item.name}</Link>
                        </div>
                    ))}
            </div>

            <div className={'urlsWrapperPc'}>
                {urls.length > 0 &&
                    urls.map((item) => (
                        <div key={item.name} className='urlWrapper'>
                            <Link to={item.url}>{item.name}</Link>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Header
