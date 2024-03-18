// 套件
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Axios from 'axios'

// 靜態資源

// 自定義 components
import LoadingModal from '../components/LoadingModal'

// 自定義函數 or 參數

function LoginPageAPIWaitng() {
    // http://localhost:3000/#/loginPageAPIWaitng

    // https://yc62897441.github.io/try_render.com_front/#state=pass-through%20value&access_token=ya29.a0Ad52N3_Do1cjzTtSTGZFQCv92pAzydp27-QBFA6hNmkTFcW3jaOeD_AAerMMrD7oXxxFcItyM6bKlqs7S7NF6fBTABfYQod1YQrk9mhvNF8UwDubcIgyI7MAUWjZ4uPOjOyaZDhKCoxalOdpzC7W00nPdU_JnoBrUgaCgYKAXcSARASFQHGX2MiJACEqdRs90_7QpbqcM_XTQ0169&token_type=Bearer&expires_in=3599&scope=https://www.googleapis.com/auth/drive.metadata.readonly

    // /#state=pass-through%20value&access_token=ya29.a0Ad52N3_Do1cjzTtSTGZFQCv92pAzydp27-QBFA6hNmkTFcW3jaOeD_AAerMMrD7oXxxFcItyM6bKlqs7S7NF6fBTABfYQod1YQrk9mhvNF8UwDubcIgyI7MAUWjZ4uPOjOyaZDhKCoxalOdpzC7W00nPdU_JnoBrUgaCgYKAXcSARASFQHGX2MiJACEqdRs90_7QpbqcM_XTQ0169&token_type=Bearer&expires_in=3599&scope=https://www.googleapis.com/auth/drive.metadata.readonly

    // http://localhost:3000/#/loginPageAPIWaitng?#state=pass-through%20value&access_token=ya29.a0Ad52N3_Do1cjzTtSTGZFQCv92pAzydp27-QBFA6hNmkTFcW3jaOeD_AAerMMrD7oXxxFcItyM6bKlqs7S7NF6fBTABfYQod1YQrk9mhvNF8UwDubcIgyI7MAUWjZ4uPOjOyaZDhKCoxalOdpzC7W00nPdU_JnoBrUgaCgYKAXcSARASFQHGX2MiJACEqdRs90_7QpbqcM_XTQ0169&token_type=Bearer&expires_in=3599&scope=https://www.googleapis.com/auth/drive.metadata.readonly
    console.log('location', location)
    console.log('location.href', location.href)
    console.log('location.href', location.href.split('?#')[1].split('&'))
    const table = {}
    location.href
        .split('?#')[1]
        .split('&')
        .forEach((pair) => {
            console.log(pair.split('='))
            const [key, value] = pair.split('=')
            table[key] = value
        })
    console.log('table', table)

    return <div>LoginPageAPIWaitng</div>
}

export default LoginPageAPIWaitng
