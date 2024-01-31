// 套件
import Axios from 'axios'

// 靜態資源

// 自定義 components

// 自定義函數 or 參數
import { mainUrl } from '../config/api'
const REACT_APP_CATSAPIKEY = process.env.REACT_APP_CATSAPIKEY

// 打後端的 API
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

// 打 cats API
const requestOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': REACT_APP_CATSAPIKEY,
    },
    redirect: 'follow',
}
const axiosCatsApiInstance = Axios.create({
    requestOptions,
})
axiosCatsApiInstance.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => Promise.reject(error)
)
export const apiCatsApiHelper = axiosCatsApiInstance

// 暫時用來抓 cats API 使用
export async function fetchCatsData() {
    try {
        const response = await apiCatsApiHelper
            .get(
                // 'https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1'
                'https://api.thecatapi.com/v1/images/search?limit=100'
            )
            .then((response) => {
                console.log('response', response)
                return response
            })
            .catch((error) => {
                alert(error)
            })
        return response
    } catch (error) {
        console.log(error)
    }
}
export async function fetchCatsData50times() {
    try {
        const tempList = []

        for (let i = 0; i < 100; i++) {
            const response = await fetchCatsData()
            console.log('response 2', response)

            const newData = response.data
            tempList.push(...newData)
        }

        return tempList
        // setList(tempList)
    } catch (error) {
        console.log(error)
    }
}
