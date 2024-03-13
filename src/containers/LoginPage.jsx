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

function LoginForm({ changeForm, reCaptchaSubmit }) {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        account: '',
        password: '',
    })
    // {
    //     account: 'a001',
    //     password: 'abc123',
    // }

    function handleChange(value, key) {
        setFormData({
            ...formData,
            [key]: value,
        })
    }

    function handelLogin() {
        return async (dispatch) => {
            try {
                dispatch(dispatchLOADING(true))

                const response = await apiHelper('post', mainUrl + '/auth/signin', {
                    ...formData,
                })

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
            } catch (error) {
                dispatch(dispatchLOADING(false))
                console.log(error)
            }
        }
    }

    return (
        <div className='loginSectionMain'>
            <h2>登入</h2>

            <form>
                <div className='formGroup'>
                    <label htmlFor='account'>帳號</label>
                    <input
                        type='text'
                        name='account'
                        id='account'
                        onChange={(e) => handleChange(e.target.value, 'account')}
                    />
                </div>
                <div className='formGroup'>
                    <label htmlFor='password'>密碼</label>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        onChange={(e) => handleChange(e.target.value, 'password')}
                        autoComplete='true'
                    />
                </div>

                <div className='formControlGroup'>
                    <button
                        className='button'
                        type='button'
                        onClick={() => {
                            if (reCaptchaSubmit) {
                                reCaptchaSubmit(handelLogin)
                            } else {
                                dispatch(handelLogin())
                            }
                        }}
                    >
                        登入
                    </button>
                </div>

                <div className='formControlGroup'>
                    <div onClick={() => changeForm('register')}>註冊</div>
                    <div onClick={() => changeForm('forgetPassword')}>忘記密碼</div>
                </div>
            </form>
        </div>
    )
}

function RegisterForm({ changeForm }) {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        account: '',
        password: '',
        passwordCheck: '',
    })

    function handleChange(value, key) {
        setFormData({
            ...formData,
            [key]: value,
        })
    }

    function handelLogin() {
        return async (dispatch) => {
            try {
                dispatch(dispatchLOADING(true))

                const response = await apiHelper('post', mainUrl + '/auth/register', {
                    ...formData,
                })
                console.log('response', response)
                dispatch(dispatchLOADING(false))
            } catch (error) {
                dispatch(dispatchLOADING(false))
                console.log(error)
            }
        }
    }

    return (
        <div className='loginSectionMain'>
            <h2>註冊</h2>

            <form>
                <div className='formGroup'>
                    <label htmlFor='account'>帳號</label>
                    <input
                        type='text'
                        name='account'
                        id='account'
                        onChange={(e) => handleChange(e.target.value, 'account')}
                    />
                </div>
                <div className='formGroup'>
                    <label htmlFor='password'>密碼</label>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        onChange={(e) => handleChange(e.target.value, 'password')}
                        autoComplete='false'
                    />
                </div>
                <div className='formGroup'>
                    <label htmlFor='passwordCheck'>密碼確認</label>
                    <input
                        type='password'
                        name='passwordCheck'
                        id='passwordCheck'
                        onChange={(e) => handleChange(e.target.value, 'passwordCheck')}
                        autoComplete='false'
                    />
                </div>

                <div className='formControlGroup'>
                    <button
                        className='button'
                        type='button'
                        onClick={() => {
                            dispatch(handelLogin())
                        }}
                    >
                        註冊
                    </button>
                </div>

                <div className='formControlGroup'>
                    <div onClick={() => changeForm('login')}>登入</div>
                    <div onClick={() => changeForm('forgetPassword')}>忘記密碼</div>
                </div>
            </form>
        </div>
    )
}

function ForgetPasswordForm({ changeForm }) {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        account: '',
        email: '',
    })

    function handleChange(value, key) {
        setFormData({
            ...formData,
            [key]: value,
        })
    }

    function handelLogin() {
        return async (dispatch) => {
            try {
                dispatch(dispatchLOADING(true))

                const response = await apiHelper('post', mainUrl + '/auth/forgetPassword', {
                    ...formData,
                })
                console.log('response', response)
                dispatch(dispatchLOADING(false))
            } catch (error) {
                dispatch(dispatchLOADING(false))
                console.log(error)
            }
        }
    }

    return (
        <div className='loginSectionMain'>
            <h2>忘記密碼</h2>

            <form>
                <div className='formGroup'>
                    <label htmlFor='account'>帳號</label>
                    <input
                        type='text'
                        name='account'
                        id='account'
                        onChange={(e) => handleChange(e.target.value, 'account')}
                    />
                </div>
                <div className='formGroup'>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        onChange={(e) => handleChange(e.target.value, 'email')}
                    />
                </div>

                <div className='formControlGroup'>
                    <button
                        className='button'
                        type='button'
                        onClick={() => {
                            dispatch(handelLogin())
                        }}
                    >
                        忘記密碼
                    </button>
                </div>

                <div className='formControlGroup'>
                    <div onClick={() => changeForm('login')}>登入</div>
                    <div onClick={() => changeForm('register')}>註冊</div>
                </div>
            </form>
        </div>
    )
}

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
const LoginFormWithReCaptch = ReCaptchHOC(LoginForm)
const RegisterFormWithReCaptch = ReCaptchHOC(RegisterForm)
const ForgetPasswordFormWithReCaptch = ReCaptchHOC(ForgetPasswordForm)

function LoginPage() {
    const isLoading = useSelector((state) => state.persistedControlReducer.isLoading)
    const [form, setForm] = useState('login')

    function changeForm(value) {
        setForm(value)
    }

    return (
        <main>
            {
                // 是否顯示 loading modal
                isLoading && <LoadingModal text={''} />
            }

            <section className='loginSection'>
                <div className='loginBackgroundImageWrapper' />

                {/* 跑馬燈 */}
                <LoginMarquee />

                {/* 登入、註冊、忘記密碼表單(with ReCaptcha) */}
                {form === 'login' ? (
                    <LoginFormWithReCaptch changeForm={changeForm} />
                ) : form === 'register' ? (
                    <RegisterFormWithReCaptch changeForm={changeForm} />
                ) : form === 'forgetPassword' ? (
                    <ForgetPasswordFormWithReCaptch changeForm={changeForm} />
                ) : (
                    <></>
                )}

                {/* 登入、註冊、忘記密碼表單 */}
                {/* {form === 'login' ? (
                    <LoginForm changeForm={changeForm} />
                ) : form === 'register' ? (
                    <RegisterForm changeForm={changeForm} />
                ) : form === 'forgetPassword' ? (
                    <ForgetPasswordForm changeForm={changeForm} />
                ) : (
                    <></>
                )} */}

                {/* LOGO */}
                <div className='loginLogoWrapper'>
                    <img src={LogoImg} alt='貓咪 icon' srcSet='' />
                </div>
            </section>
        </main>
    )
}

export default LoginPage
