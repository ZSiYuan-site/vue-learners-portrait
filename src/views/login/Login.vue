<template>
  <div class="login">
    <!-- 遮罩 -->
    <div class="veil"></div>
    <!-- 顶部开始 -->
    <div class="login_nav">
      <div class="login_nav_left">Learn.</div>
      <div class="login_nav_right">
        <span @click="goto('/home')">首页</span>
        <span @click="goto('/course')">课程</span>
        <span @click="goto('/major')">专业</span>
        <span @click="goto('/exercise')">题库</span>
        <span @click="goto('/blog')">博客</span>
        <span @click="goto('/contact')">联系</span>
      </div>
    </div>
    <!-- 顶部结束 -->

    <!-- 主体开始 -->
    <div class="login_main">
      <div class="login_main_text">Welcome to Learn. platform Test</div>
      <div class="login_wrap">
        <div class="login_title">
          <span
            @click="isPhoneLogin = false"
            :class="{ showTitle: !isPhoneLogin }"
            >手机登录</span
          >
          <span
            @click="isPhoneLogin = true"
            :class="{ showTitle: isPhoneLogin }"
            >密码登录</span
          >
        </div>
        <div class="login_form">
          <form class="register_page" :class="{ showPage: !isPhoneLogin }">
            <div class="phone_input_wrap">
              <input
                type="text"
                v-model="phone"
                placeholder="手机号"
                class="phone_input"
                maxlength="11"
                name="phone"
                v-validate="'required|phone'"
              />
              <!-- disabled的值设置为变量false的时候就可以干掉disabled属性本身 -->
              <button
                @click.prevent="getCode"
                class="getCode_text"
                :disabled="!(rightPhoneNumber && countDownTime === 0)"
                :class="{ right_phone: rightPhoneNumber }"
              >
                {{
                  countDownTime > 0
                    ? `${countDownTime}s后重新获取`
                    : "获取验证码"
                }}
              </button>
            </div>
            <span
              style="color: red; font-size: 13px"
              v-show="errors.has('phone')"
              >{{ errors.first("phone") }}</span
            >
            <input
              type="text"
              placeholder="验证码"
              name="code"
              v-validate="'required|code'"
            />
            <span
              style="color: red; font-size: 13px"
              v-show="errors.has('code')"
              >{{ errors.first("code") }}</span
            >
            <p>
              温馨提醒:未注册的用户,使用手机号登录将自动注册,且代表同意《用户服务协议》
            </p>
          </form>
          <form class="login_page" :class="{ showPage: isPhoneLogin }">
            <input
              type="text"
              placeholder="用户名/邮箱"
              name="username"
              v-validate="'required'"
            />
            <span
              style="color: red; font-size: 13px"
              v-show="errors.has('username')"
              >{{ errors.first("username") }}</span
            >
            <input
              type="password"
              placeholder="密码"
              name="pwd"
              v-validate="'required'"
            />
            <span
              style="color: red; font-size: 13px"
              v-show="errors.has('pwd')"
              >{{ errors.first("pwd") }}</span
            >
            <div class="code_wrap">
              <input
                type="text"
                placeholder="验证码"
                name="captcha"
                v-validate="'required'"
              />
              <img src="./img/captcha.svg" alt="" />
            </div>
            <span
              style="color: red; font-size: 13px"
              v-show="errors.has('captcha')"
              >{{ errors.first("captcha") }}</span
            >
          </form>
          <input
            type="button"
            value="登录"
            class="login_button"
            @click.prevent="login"
          />
        </div>
      </div>
    </div>
    <!-- 主体结束 -->
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      isPhoneLogin: true, //控制显示的页面
      phone: "", //手机号
      countDownTime: 0, //倒计时的时间
    };
  },
  methods: {
    // 路由跳转
    goto(path) {
      if (this.$router.path !== path) {
        this.$router.push(path);
      }
    },
    // 点击发送验证码
    getCode() {
      this.countDownTime = 5;
      let intervalId = setInterval(() => {
        this.countDownTime--;
        this.countDownTime === 0 && clearInterval(intervalId);
      }, 1000);
    },
    // 点击登录后的表单验证
    login() {
      // 进行前台表单验证
      let names = this.isPhoneLogin
        ? ["phone", "code"]
        : ["username", "pwd", "captcha"];
      const success = this.$validator.validateAll(names); // 对指定的所有表单项进行验证
      if (success) {
        alert("前端验证成功");
        // 验证通过后发登陆的请求
      } else {
        alert("前端验证失败");
      }
    },
  },
  computed: {
    rightPhoneNumber() {
      // 验证手机号的合法性
      return /^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phone);
    },
  },
};
</script>

<style scoped>
@import "./css/login.css";
</style>