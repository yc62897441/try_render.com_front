// 套件
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Axios from 'axios'

// 靜態資源
import '../style/containers/login.scss'
import LogoImg from '../assets/img/logo.png'

// 自定義 components
import LoadingModal from '../components/LoadingModal'
import Form from '../components/miniComponents/Form'

// 自定義函數 or 參數
import { mainUrl } from '../config/api'
import { dispatchLOGIN, dispatchADMIN, dispatchLOADING, dispatchUSER_DATA } from '../actions'
import { apiHelper } from '../utils/helper'
import {
    loginConfig,
    registerConfig,
    forgetPasswordConfig,
    loginApiConfig,
} from '../config/containers/loginPage'

// 向 google oauth 取回 access token(google 提供的範例函式)
async function oauthSignIn() {
    try {
        // Google's OAuth 2.0 endpoint for requesting an access token
        var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth'

        // Create <form> element to submit parameters to OAuth 2.0 endpoint.
        var form = document.createElement('form')
        form.setAttribute('method', 'GET') // Send as a GET request.
        form.setAttribute('action', oauth2Endpoint)

        // Parameters to pass to OAuth 2.0 endpoint.
        var params = {
            client_id: process.env.REACT_APP_GOOGLE_LOGIN_CLIENT_ID,
            redirect_uri: process.env.REACT_APP_GOOGLE_LOGIN_REDIRECT_URI,
            response_type: 'token',
            scope: 'https://www.googleapis.com/auth/drive.metadata.readonly',
            include_granted_scopes: 'true',
            state: 'pass-through value',
        }

        // Add form parameters as hidden input values.
        for (var p in params) {
            var input = document.createElement('input')
            input.setAttribute('type', 'hidden')
            input.setAttribute('name', p)
            input.setAttribute('value', params[p])
            form.appendChild(input)
        }

        // Add form to page and submit it to open the OAuth 2.0 endpoint.
        document.body.appendChild(form)
        form.submit()
    } catch (error) {
        console.log(error)
    }
}

function FormWrapper({ formType, changeFormType, formConfig, reCaptchaSubmit }) {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({})

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
                const apiConfig = loginApiConfig[formType]
                const response = await apiHelper(apiConfig.method, mainUrl + apiConfig.path, {
                    ...formData,
                })
                console.log('response', response)

                if (formType === 'login') {
                    // 成功登入，有 token
                    if (response?.data?.token) {
                        let token = response.data.token
                        sessionStorage.setItem('token', token)
                        dispatch(dispatchLOGIN(true))
                        if (response.data.user.isAdmin === 't') {
                            dispatch(dispatchADMIN(true)) // 是系統管理員
                        }
                        dispatch(
                            dispatchUSER_DATA({
                                ...response.data.user,
                            })
                        )
                    } else {
                        window.alert('登入失敗')
                    }
                }

                // TODO: 註冊功能
                if (formType === 'register') console.log('register')

                // TODO: 忘記密碼功能
                if (formType === 'forgetPassword') console.log('forgetPassword')

                dispatch(dispatchLOADING(false))
            } catch (error) {
                dispatch(dispatchLOADING(false))
                console.log(error)
            }
        }
    }

    let formTitle = '' // 表單標題
    switch (formType) {
        case 'login':
            formTitle = '登入'
            break
        case 'register':
            formTitle = '註冊'
            break
        case 'forgetPassword':
            formTitle = '忘記密碼'
            break
        default:
            formTitle = ''
    }

    return (
        <div className='loginSectionMain'>
            <h2>{formTitle}</h2>

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
                            {/* Google login 按鈕 */}
                            {formType === 'login' && (
                                <div onClick={oauthSignIn}>使用 Google login</div>
                            )}

                            {/* 切換登入、註冊、忘記密碼表單 */}
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
    const dispatch = useDispatch()
    const isLoading = useSelector((state) => state.persistedControlReducer.isLoading)
    const [formType, setFormType] = useState('login')

    let formConfig = '' // 決定要用哪個表單 config 來渲染 Form
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

    function changeFormType(value) {
        setFormType(value)
    }

    // 特別處理 google OAuth2
    // 如果是從 google OAuth2 redirect 回來，則須從 redirect url 解析回傳的參數
    if (location.href.includes('state')) {
        // google OAuth2 redirect 回來的 url 結構如下：'https://xxxxxxxxx.github.io/xxxxxxxxxxx/?state=pass-through%20value&access_token=ya29.a0Ad52N38m2wEhK5Mn2LVPSl1566TkOmn8436ygyH_Cv4sdmnuIPFVJC4pD_rPhNFkCmDDYZPkHuJ5xVMI6o6jLsXwv2IRDwaG0_EmXKXtNlbQJ-j7O9pYEOpwHUtF8JutPfpM_5ZmMhU2qPn0eApkev5fHiRHLCw6AN0aCgYKAZ8SARASFQHGX2MiRur5qqJZVTdYTZgsa2gMmg0170&token_type=Bearer&expires_in=3599&scope=email%20profile%20https://www.googleapis.com/auth/userinfo.profile%20openid%20https://www.googleapis.com/auth/drive.metadata.readonly%20https://www.googleapis.com/auth/userinfo.email&authuser=2&prompt=none'
        const paramsPart = location.href.split('/?')[1]
        const table = {}
        paramsPart.split('&').forEach((pair) => {
            const [key, value] = pair.split('=')
            table[key] = value
        })
        // console.log('table', table)

        // 使用回傳參數 access_token，去向 google API 取回使用者資訊
        fetchGoogleUserInfo(table.access_token)
    }
    // 使用回傳參數 access_token，去向 google API 取回使用者資訊
    async function fetchGoogleUserInfo(access_token) {
        try {
            dispatch(dispatchLOADING(true))
            // console.log('fetchGoogleUserInfo', access_token)

            // 使用 access_token 取得使用者資訊，有 2 個途徑，前端取 or 後端取
            // 1. 直接前端去向 google API 取回使用者資訊
            // const response = await Axios.get(
            //     `https://www.googleapis.com/drive/v3/about?fields=user&access_token=${access_token}`
            // )
            // 2. 往後端送 access_token，讓後端去向 google API 取回使用者資訊
            const response = await apiHelper('post', mainUrl + '/auth/google_signin', {
                access_token: access_token,
            })
            // console.log('response', response)

            // 成功登入，有 token
            if (response?.data?.token) {
                let token = response.data.token
                sessionStorage.setItem('token', token)
                dispatch(dispatchLOGIN(true))
                if (response.data.user.isAdmin === 't') {
                    dispatch(dispatchADMIN(true)) // 是系統管理員
                }
                dispatch(
                    dispatchUSER_DATA({
                        ...response.data.user,
                    })
                )
            }

            dispatch(dispatchLOADING(false))
        } catch (error) {
            dispatch(dispatchLOADING(false))
            console.log(error)
        }
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
