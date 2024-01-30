// 套件
import Axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

// 靜態資源

// 自定義 components
import LoadingModal from '../components/LoadingModal'

// 自定義函數 or 參數
import { mainUrl } from '../config/api'
import { dispatchLOGIN, dispatchLOADING, dispatchUSER_DATA } from '../actions'

function Login() {
    const dispatch = useDispatch()
    const isLoading = useSelector((state) => state.persistedControlReducer.isLoading)

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
