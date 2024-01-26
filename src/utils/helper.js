// 套件
import Axios from 'axios'

// 靜態資源

// 自定義 components

// 自定義函數 or 參數
import { mainUrl } from '../config/api'

const axiosInstance = Axios.create({
    mainUrl,
})

axiosInstance.interceptors.request.use(
    (config) => {
        // 從 sessionStorage 將 token 取出
        const token = sessionStorage.getItem('token')
        // 如果 token 存在的話，則帶入到 headers 當中
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

export const apiHelper = axiosInstance
