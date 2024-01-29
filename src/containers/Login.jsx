// 套件
import Axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

// 靜態資源

// 自定義 components
import LoadingModal from '../components/LoadingModal'

// 自定義函數 or 參數
import { mainUrl } from '../config/api'
import { dispatchLOGIN, dispatchLOADING } from '../actions'

function Login() {
    const dispatch = useDispatch()
    const isLoading = useSelector((state) => state.controlReducer.isLoading)

    function handelLogin() {
        return async (dispatch) => {
            try {
                dispatch(dispatchLOADING(true))
                await Axios.post(mainUrl + '/auth/signin', {
                    account: 'a001',
                    password: 'abc123',
                }).then((response) => {
                    if (response?.data?.token) {
                        let token = response.data.token
                        sessionStorage.setItem('token', token)
                        dispatch(dispatchLOGIN(true))
                        dispatch(dispatchLOADING(false))
                    } else {
                        dispatch(dispatchLOADING(false))
                    }
                })
            } catch (error) {
                dispatch(dispatchLOADING(false))
                console.log(error)
            }
        }
    }

    return (
        <div>
            {
                // 是否顯示 loading modal
                isLoading && <LoadingModal text={''} />
            }

            <h1>Login</h1>
            <button
                onClick={() => {
                    dispatch(handelLogin())
                }}
            >
                登入
            </button>
        </div>
    )
}

export default Login
