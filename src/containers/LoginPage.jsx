// 套件
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// 靜態資源
import '../style/containers/login.scss'
import LogoImg from '../assets/img/logo.png'

// 自定義 components
import LoadingModal from '../components/LoadingModal'

// 自定義函數 or 參數
import { mainUrl } from '../config/api'
import { dispatchLOGIN, dispatchLOADING, dispatchUSER_DATA } from '../actions'
import { apiHelper } from '../utils/helper'

const loginConfig = {
    account: {
        label: '帳號',
        type: 'text',
        required: true,
    },
    password: {
        label: '密碼',
        type: 'password',
        autoComplete: true,
        required: true,
    },
}
const registerConfig = {
    account: {
        label: '帳號',
        type: 'text',
        required: true,
    },
    password: {
        label: '密碼',
        type: 'password',
        autoComplete: false,
        required: true,
    },
    passwordCheck: {
        label: '密碼確認',
        type: 'password',
        autoComplete: false,
        required: true,
    },
}
const forgetPasswordConfig = {
    account: {
        label: '帳號',
        type: 'text',
        required: true,
    },
    email: {
        label: 'email',
        type: 'email',
        required: true,
    },
}

function Form({ changeFormType, formType, formConfig, reCaptchaSubmit }) {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({}) // 帳號a001 密碼abc123

    function handleChange(value, key) {
        setFormData({
            ...formData,
            [key]: value,
        })
    }

    function handleSubmit() {
        return async (dispatch) => {
            try {
                dispatch(dispatchLOADING(true))
                const apiUrl =
                    formType === 'login'
                        ? '/auth/signin'
                        : formType === 'register'
                          ? '/auth/register'
                          : formType === 'forgetPassword'
                            ? '/auth/forgetPassword'
                            : ''
                const response = await apiHelper('post', mainUrl + apiUrl, {
                    ...formData,
                })

                if (formType === 'login') {
                    if (response?.data?.token) {
                        let token = response.data.token
                        sessionStorage.setItem('token', token)
                        dispatch(dispatchLOGIN(true))

                        // 測試 redux persist 的假資料
                        dispatch(
                            dispatchUSER_DATA({
                                name: 'John',
                                age: 18,
                                address: {
                                    city: 'Taipei',
                                    street: 'Da An',
                                    else: {
                                        no: 1,
                                        room: 'a1',
                                    },
                                },
                            })
                        )
                        dispatch(dispatchLOADING(false))
                    } else {
                        dispatch(dispatchLOADING(false))
                    }
                }
                if (formType === 'register') {
                    console.log('response', response)
                    dispatch(dispatchLOADING(false))
                }
                if (formType === 'forgetPassword') {
                    console.log('response', response)
                    dispatch(dispatchLOADING(false))
                }
            } catch (error) {
                dispatch(dispatchLOADING(false))
                console.log(error)
            }
        }
    }

    const formTitleAndButtonName =
        formType === 'login'
            ? '登入'
            : formType === 'register'
              ? '註冊'
              : formType === 'forgetPassword'
                ? '忘記密碼'
                : ''

    return (
        <div className='loginSectionMain'>
            <h2>{formTitleAndButtonName}</h2>

            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    if (reCaptchaSubmit) {
                        reCaptchaSubmit(handleSubmit)
                    } else {
                        dispatch(handleSubmit())
                    }
                }}
            >
                {Object.keys(formConfig).map((key) => (
                    <div key={key} className='formGroup'>
                        <label htmlFor={key}>{formConfig[key].label}</label>
                        <input
                            type={formConfig[key].type}
                            name={key}
                            id={key}
                            onChange={(e) => handleChange(e.target.value, key)}
                            autoComplete={formConfig[key].autoComplete}
                            required={formConfig[key].required}
                        />
                    </div>
                ))}

                <div className='formControlGroup'>
                    <button className='button' type='submit'>
                        {formTitleAndButtonName}
                    </button>
                </div>

                <div className='formControlGroup'>
                    {formType !== 'login' && <div onClick={() => changeFormType('login')}>登入</div>}
                    {formType !== 'register' && <div onClick={() => changeFormType('register')}>註冊</div>}
                    {formType !== 'forgetPassword' && (
                        <div onClick={() => changeFormType('forgetPassword')}>忘記密碼</div>
                    )}
                </div>
            </form>
        </div>
    )
}

// 跑馬燈輪播標題
function LoginMarquee() {
    return (
        <div className='loginMarquee'>
            <h1 className='loginMarqueeItem loginMarqueeItem1'>Cat Express Delivered with Love</h1>
            <h1 className='loginMarqueeItem loginMarqueeItem2'>
                Dining Delights with Feline Friends
            </h1>
            <h1 className='loginMarqueeItem loginMarqueeItem3'>
                A Lifeline of Love for Furry Souls
            </h1>
        </div>
    )
}

// ReCaptcha HOC
const ReCaptchHOC = (WrappedComponent) => {
    function ReturnWrappedComponent(props) {
        const dispatch = useDispatch()
        const [isReCaptchaLoaded, setIsReCaptchaLoaded] = useState(false) // reCaptcha API 資源是否已經載入
        const REACT_APP_RECAPTCHA_KEY = process.env.REACT_APP_RECAPTCHA_KEY
        // console.log('REACT_APP_RECAPTCHA_KEY', REACT_APP_RECAPTCHA_KEY?.slice(0, 5))

        useEffect(() => {
            // 載入 reCaptcha API 資源
            const script = document.createElement('script')
            script.src = 'https://www.google.com/recaptcha/api.js?render=explicit'
            const loadCompleted = () => {
                setIsReCaptchaLoaded(true)
            }
            script.addEventListener('load', loadCompleted)
            document.body.appendChild(script)

            return () => {
                script.removeEventListener('load', loadCompleted)
            }
        }, [])
        useEffect(() => {
            // 確認 reCaptcha API 資源已載入完成後，再去綁定  reCaptcha invisible 到 submit 按鈕上
            if (isReCaptchaLoaded === true) {
                window.grecaptcha.ready(function () {
                    window.grecaptcha.render('submit', {
                        sitekey: REACT_APP_RECAPTCHA_KEY,
                        callback: reCaptchaSubmit,
                    })
                })
            }
        }, [isReCaptchaLoaded])

        function reCaptchaSubmit(callback) {
            dispatch(callback())
        }

        return (
            <>
                <WrappedComponent {...props} reCaptchaSubmit={reCaptchaSubmit} />
                <button className='reCaptchaButton' id='submit' />
            </>
        )
    }
    return ReturnWrappedComponent
}
const FormWithReCaptch = ReCaptchHOC(Form)

function LoginPage() {
    const isLoading = useSelector((state) => state.persistedControlReducer.isLoading)
    const [formType, setFormType] = useState('login')

    function changeFormType(value) {
        setFormType(value)
    }

    const formConfig =
        formType === 'login'
            ? loginConfig
            : formType === 'register'
              ? registerConfig
              : formType === 'forgetPassword'
                ? forgetPasswordConfig
                : {}

    return (
        <main>
            {
                // 是否顯示 loading modal
                isLoading && <LoadingModal text={''} />
            }

            <section className='loginSection'>
                <div className='loginBackgroundImageWrapper' />

                {/* 跑馬燈輪播標題 */}
                <LoginMarquee />

                {/* 登入、註冊、忘記密碼表單(with ReCaptcha) */}
                <FormWithReCaptch changeFormType={changeFormType} formType={formType} formConfig={formConfig} />

                {/* 登入、註冊、忘記密碼表單 */}
                {/* <Form changeFormType={changeFormType} formType={formType} formConfig={formConfig} /> */}

                {/* LOGO */}
                <div className='loginLogoWrapper'>
                    <img src={LogoImg} alt='貓咪 icon' srcSet='' />
                </div>
            </section>
        </main>
    )
}

export default LoginPage
