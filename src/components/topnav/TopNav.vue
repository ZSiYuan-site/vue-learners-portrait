<template>
  <div class="topbar">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="pull-left">
            <span class="info"><a href="#" style="color:#fff"> Have any question?</a></span>
            <span class="info"
              ><i class="icon-phone2"></i>(654) 332-112-222</span
            >
            <span class="info"><i class="icon-mail"></i>support@edua.com</span>
          </div>
          <ul class="social_top pull-right">
            <li>
              <a @click="goto('/login')" style="font-size: 0.5em;color:#fff">登录</a>
            </li>
            <li>
              <a @click="goto('/user')" style="font-size: 0.5em;color:#fff">主页</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopNav",
  data() {
    return {};
  },
  methods: {
    goto(path) {
      if (this.$router.path !== path) {
        this.$router.push(path);
      }
    },
  },
};
</script>

<style>
</style>