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

            // const script2 = document.createElement('script')
            // script2.src = 'https://accounts.google.com/gsi/client'
            // // const loadCompleted2 = () => {
            // //     setIsReCaptchaLoaded(true)
            // // }
            // // script2.addEventListener('load', loadCompleted2)
            // document.body.appendChild(script2)

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

    async function oauthSignIn2() {
        try {
            const config = {
                url: '/', // 只有此為必需
                method: 'get', // 大小寫皆可
                headers: { 'Content-Type': 'application/json' },

                // 添加在 url 前面，除非 url 為絕對路徑
                baseURL: 'https://accounts.google.com/o/oauth2/v2/auth',

                // 主要傳送的資料 (只用於 PUT、POST、PATCH )
                // 在沒有 transformRequest 情況下資料型別有限制 (下有補充)
                // data: { name: 'test', title: 777 },

                // params 注意此不等同於 data
                // 此為 URL 上要代的參數
                params: {
                    client_id: process.env.REACT_APP_GOOGLE_LOGIN_CLIENT_ID,
                    redirect_uri: process.env.REACT_APP_GOOGLE_LOGIN_REDIRECT_URI,
                    response_type: 'token',
                    scope: 'https://www.googleapis.com/auth/drive.metadata.readonly',
                    include_granted_scopes: 'true',
                    state: 'pass-through value',
                },

                // // 序列化參數 ???
                // paramsSerializer: function(params) {
                //   return Qs.stringify(params, {arrayFormat: 'brackets'})
                // },

                // maxContentLength: 2000, // 限制傳送大小

                // // 請求時間超過 1000毫秒(1秒)，請求會被中止
                // timeout: 1000,

                // // 選項: 'arraybuffer', 'document', 'json', 'text', 'stream'
                // // 瀏覽器才有 'blob' ， 預設為 'json'
                // responseType: 'json', // 伺服器回應的數據類型

                // // 伺服器回應的編碼模式 預設 'utf8'
                // responseEncoding: 'utf8',

                // // 在上傳、下載途中可執行的事情 (progressBar、Loading)
                // onUploadProgress(progressEvt) { /* 原生 ProgressEvent */  },
                // onDownloadProgress(progressEvt) { /* 原生 ProgressEvent */ },

                // // 允許自定義處理請求，可讓測試更容易 (有看沒懂..)
                // // return promise 並提供有效的回應 (valid response)
                // adapter (config) { /* 下方章節 補充詳細用法 */ },
            }
            const response = await Axios(config) // 預先檢查發送的請求是否安全
            console.log('response', response)
        } catch (error) {
            console.log(error)
        }
    }

    console.log('location', location)
    if (location.href.includes('state')) {
        const paramsPart = location.href.split('/?')[1]
        console.log('location.href paramsPart', paramsPart)

        const table = {}
        paramsPart.split('&').forEach((pair) => {
            console.log(pair.split('='))
            const [key, value] = pair.split('=')
            table[key] = value
        })
        console.log('table', table)

        fetchGoogleUserInfo(table.access_token)
    }

    async function fetchGoogleUserInfo(access_token) {
        try {
            const response = await apiHelper('post', mainUrl + '/auth/google_signin', {
                access_token: access_token,
            })
            // const response = await Axios.get(
            //     `https://www.googleapis.com/drive/v3/about?fields=user&access_token=${access_token}`

            //     // https://www.googleapis.com/drive/v2/files?access_token=access_token
            // )
            console.log('response', response)

            // var xhr = new XMLHttpRequest()
            // xhr.open(
            //     'GET',
            //     `https://www.googleapis.com/drive/v3/about?fields=user&access_token=${access_token}`
            // )
            // xhr.onreadystatechange = function (e) {
            //     console.log(xhr.response)
            // }
            // xhr.send(null)
            // console.log('xhr', xhr)
        } catch (error) {
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
                    {/* <img src={LogoImg} alt='貓咪 icon' srcSet='' /> */}

                    <div onClick={oauthSignIn}>Google login</div>

                    <div onClick={oauthSignIn2}>Google login2</div>

                    <div onClick={() => fetchGoogleUserInfo('aaa')}>測試</div>

                    {/* <div
                        id='g_id_onload'
                        data-client_id={process.env.REACT_APP_GOOGLE_LOGIN_CLIENT_ID}
                        // data-login_uri={process.env.REACT_APP_GOOGLE_LOGIN_REDIRECT_URI}
                        data-login_uri='http://localhost:3000/'
                        data-auto_prompt='false'
                    ></div>
                    <div
                        className='g_id_signin'
                        data-type='standard'
                        data-size='large'
                        data-theme='outline'
                        data-text='sign_in_with'
                        data-shape='rectangular'
                        data-logo_alignment='left'
                    ></div> */}
                    {/* <div
                        id='g_id_onload'
                        data-client_id={process.env.REACT_APP_GOOGLE_LOGIN_CLIENT_ID}
                        data-callback='handleCallback'
                        data-auto_prompt='false'
                    ></div>
                    <div
                        className='g_id_signin'
                        data-type='standard'
                        data-size='large'
                        data-theme='outline'
                        data-text='sign_in_with'
                        data-shape='pill'
                        data-logo_alignment='left'
                    ></div> */}
                </div>
            </section>
        </main>
    )
}

export default LoginPage
