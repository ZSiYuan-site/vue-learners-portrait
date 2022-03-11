import Vue from 'vue'
import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'

Vue.use(VeeValidate)

// 提示信息本地化----让提示的信息是中文的
VeeValidate.Validator.localize('zh_CN', {
    messages: zh_CN.messages,
    attributes: {
        phone: '手机号',
        code: '验证码',
        username: '用户名/邮箱',
        pwd: '密码',
        captcha: '验证码'
    }
})

// phone 是验证器的名称 --- 对应【v-validate="'required|phone'"】中的phone
// 手机号码验证器 
VeeValidate.Validator.extend('phone', {
    validate: value => {
        return /^1(3|4|5|6|7|8|9)\d{9}$/.test(value)
    },
    getMessage: field => field + "必须是11为手机号"
})

// 验证码验证器 
VeeValidate.Validator.extend('code', {
    validate: value => {
        return /^\d{4,6}$/.test(value)
    },
    getMessage: field => field + "必须是4-6位数字"
})

