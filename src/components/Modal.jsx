// 套件
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

// 靜態資源
import '../style/components/modal.scss'

// 自定義 components

// 自定義函數 or 參數
import { apiHelper } from '../utils/helper'
import { dispatchLOADING } from '../actions'

function Modal({ children, switchModal }) {
    return (
        <div className='modalWrapper'>
            <div className='modalMain'>{children}</div>

            {/* 遮罩 */}
            <div className='modalMask' onClick={switchModal}></div>
        </div>
    )
}

export default Modal

export function CatModalContent({ datum }) {
    const dispatch = useDispatch()
    const [data, setData] = useState(null)

    useEffect(() => {
        dispatch(fetch(datum))
    }, [])

    function fetch(datum) {
        return async () => {
            try {
                dispatch(dispatchLOADING(true))
                const response = await apiHelper(
                    'get',
                    'https://api.thecatapi.com/v1/images/' + datum.id
                )
                setData(response?.data)
                dispatch(dispatchLOADING(false))
            } catch (error) {
                console.log(error)
                dispatch(dispatchLOADING(false))
            }
        }
    }

    return (
        <div className='catModalContentWrapper'>
            {data !== null &&
                (data.breeds ? (
                    <>
                        <div className='catModalContentInfo'>
                            <div>品種: </div>
                            <div>{data?.breeds[0]?.name}</div>
                        </div>
                        <div className='catModalContentInfo'>
                            <div>性情: </div>
                            <div>{data?.breeds[0]?.temperament}</div>
                        </div>
                        <div className='catModalContentInfo'>
                            <div>起源地: </div>
                            <div>{data?.breeds[0]?.origin}</div>
                        </div>
                        <div className='catModalContentInfo'>
                            <div>描述: </div>
                            <div>{data?.breeds[0]?.description}</div>
                        </div>
                        <div className='catModalContentInfo'>
                            <div>壽命長度: </div>
                            <div>{data?.breeds[0]?.life_span}</div>
                        </div>
                        <div className='catModalContentInfo'>
                            <a href={data?.breeds[0]?.wikipedia_url}>維基介紹</a>
                        </div>
                        <div className='catModalContentImgWrapper'>
                            <img src={data?.url} alt='' srcSet='' />
                        </div>
                    </>
                ) : (
                    <>
                        <div className='catModalContentInfo'>name: {data?.categories[0]?.name}</div>
                        <div className='catModalContentImgWrapper'>
                            <img src={data?.url} alt='' srcSet='' />
                        </div>
                    </>
                ))}
        </div>
    )
}
