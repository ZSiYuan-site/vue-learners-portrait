import axios from 'axios'
import qs from 'qs'

// 生成Axios的伪实例
const instance = axios.create({
    baseURL:'/api'
})


// 添加请求拦截器
instance.interceptors.request.use(config => {
    // config是包含当前请求的所有的请求信息 ： method，url，data
    // 修改post请求的请求参数格式 ： 默认是使用json对象的格式,如果当前服务器能处理
    // 的是urlencoded形式，则要修改
    config.data = qs.stringify(config.data)
    return config
})


// 添加响应拦截器
instance.interceptors.response.use(
    response => response.data,
    error => {
        alert('请求失败了'),
            console.log(error)
        // 因为这里默认是返回一个成功的Promise实例，没有数据，所有要手动返回一个初始化的Promise
        return new Promise(() => {})
    }
)

export default instance
