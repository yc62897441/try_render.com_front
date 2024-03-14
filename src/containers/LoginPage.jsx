// 套件
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// 靜態資源
import '../style/containers/login.scss'
import LogoImg from '../assets/img/logo.png'

// 自定義 components
import LoadingModal from '../components/LoadingModal'
import Form from '../components/miniComponents/Form'

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

function FormWrapper({ formType, changeFormType, formConfig, reCaptchaSubmit }) {
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

    let formTitleAndButtonName = ''
    switch (formType) {
        case 'login':
            formTitleAndButtonName = '登入'
            break
        case 'register':
            formTitleAndButtonName = '註冊'
            break
        case 'forgetPassword':
            formTitleAndButtonName = '忘記密碼'
            break
    }

    return (
        <div className='loginSectionMain'>
            <h2>{formTitleAndButtonName}</h2>

            <Form
                formData={formData}
                formConfig={formConfig}
                handleChange={handleChange}
                handleSubmit={function () {
                    if (reCaptchaSubmit) {
                        reCaptchaSubmit(handleSubmit)
                    } else {
                        dispatch(handleSubmit())
                    }
                }}
                AppendComponent={function AppendComponent() {
                    return (
                        <div className='formControlGroup'>
                            {formType !== 'login' && (
                                <div onClick={() => changeFormType('login')}>登入</div>
                            )}
                            {formType !== 'register' && (
                                <div onClick={() => changeFormType('register')}>註冊</div>
                            )}
                            {formType !== 'forgetPassword' && (
                                <div onClick={() => changeFormType('forgetPassword')}>忘記密碼</div>
                            )}
                        </div>
                    )
                }}
            />
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
const ReCaptchaHOC = (WrappedComponent) => {
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
const FormWrapperWithReCaptcha = ReCaptchaHOC(FormWrapper)

function LoginPage() {
    const isLoading = useSelector((state) => state.persistedControlReducer.isLoading)
    const [formType, setFormType] = useState('login')

    function changeFormType(value) {
        setFormType(value)
    }

    let formConfig = ''
    switch (formType) {
        case 'login':
            formConfig = loginConfig
            break
        case 'register':
            formConfig = registerConfig
            break
        case 'forgetPassword':
            formConfig = forgetPasswordConfig
            break
    }

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
                <FormWrapperWithReCaptcha
                    formType={formType}
                    changeFormType={changeFormType}
                    formConfig={formConfig}
                />

                {/* 登入、註冊、忘記密碼表單 */}
                {/* <FormWrapper formType={formType} changeFormType={changeFormType} formConfig={formConfig} /> */}

                {/* LOGO */}
                <div className='loginLogoWrapper'>
                    <img src={LogoImg} alt='貓咪 icon' srcSet='' />
                </div>
            </section>
        </main>
    )
}

export default LoginPage
