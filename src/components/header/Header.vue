<template>
  <header>
    <nav class="navbar navbar-default navbar-sticky bootsnav">
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target="#navbar-menu"
          >
            <i class="fa fa-bars"></i>
          </button>
          <a
            class="navbar-brand"
            @click="goto('/home')"
            style="font-size: 2.5em; color: #2e2e2e; font-weight: 800"
            >Learn.
          </a>
        </div>
        <div class="collapse navbar-collapse" id="navbar-menu">
          <ul
            class="nav navbar-nav navbar-right"
            data-in="fadeInDown"
            data-out="fadeOut"
          >
            <li><a @click="goto('/home')" style="font-size: 1em">首页</a></li>
            <li>
              <a @click="goto('/course')" style="font-size: 1em">课程</a>
            </li>
            <li>
              <a @click="goto('/major')" style="font-size: 1em">专业</a>
            </li>
            <li>
              <a @click="goto('/exercise')" style="font-size: 1em">题库</a>
            </li>
            <li><a @click="goto('/blog')" style="font-size: 1em">博客</a></li>
            <li>
              <a @click="goto('/contact')" style="font-size: 1em">联系我们</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
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

<style scoped>
/* 头部文字 */
.commonFont {
  font-size: 17px !important;
  font-weight: 600 !important;
}
/* 点击文字 高亮*/
.highLight {
  color: #4587d9 !important;
}
</style>