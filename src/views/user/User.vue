<template>
  <div class="user">
    <!-- 最顶部的导航 -->
    <TopNav />
    <!-- 最顶部的导航 -->

    <!-- 头部开始 -->
    <Header />
    <!-- 头部结束 -->

    <div class="admin" style="background: #ebeff2; padding: 0px 100px">
      <!-- 左侧的所有内容 -->
      <div
        class="admin-sidebar am-offcanvas am-padding-0"
        id="admin-offcanvas"
        style="z-index: 0; margin-top: 0"
      >
        <div class="am-offcanvas-bar admin-offcanvas-bar">
          <div class="user-box am-hide-sm-only">
            <div class="user-img">
              <img
                src="./img/avatar-1.jpg"
                alt="user-img"
                title="Mat Helme"
                class="img-circle img-thumbnail img-responsive"
              />
            </div>
            <h5><a href="#">Mat Helme</a></h5>
          </div>

          <!-- elementui 左侧侧边栏-->
          <el-row class="tac">
            <el-col
              :span="12"
              style="
                width: 100%;
                border-bottom: 1.5px solid #cecece;
                background: #fff;
                height: 510px;
              "
            >
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                style="padding-left: 0"
              >
                <router-link to="/user/schedule">
                  <el-menu-item index="1">
                    <i
                      class="iconfont icon-kechengbiao"
                      style="font-size: 20px"
                    ></i
                    >&nbsp;&nbsp;
                    <span slot="title">课程表</span>
                  </el-menu-item>
                </router-link>
                <router-link to="/user/order">
                  <el-menu-item index="3">
                    <i class="iconfont icon-dingdan" style="font-size: 20px"></i
                    >&nbsp;&nbsp;
                    <span slot="title">全部订单</span>
                  </el-menu-item>
                </router-link>
                <el-menu-item index="4">
                  <i class="iconfont icon-shoucang" style="font-size: 20px"></i
                  >&nbsp;&nbsp;
                  <span slot="title">收藏</span>
                </el-menu-item>
                <el-menu-item index="5">
                  <i
                    class="iconfont icon-wodeyouhuiquan"
                    style="font-size: 20px"
                  ></i
                  >&nbsp;&nbsp;
                  <span slot="title">优惠券</span>
                </el-menu-item>
                <el-menu-item index="7">
                  <i class="iconfont icon-wode" style="font-size: 20px"></i
                  >&nbsp;&nbsp;
                  <span slot="title">个人信息</span>
                </el-menu-item>
                <el-menu-item index="8">
                  <i
                    class="iconfont icon-chuangxinnenglifenxixitong"
                    style="font-size: 20px"
                  ></i
                  >&nbsp;&nbsp;
                  <span slot="title">能力画像分析</span>
                </el-menu-item>
                <el-menu-item index="9">
                  <i
                    class="iconfont icon-zhanghaoyuanquan"
                    style="font-size: 20px"
                  ></i
                  >&nbsp;&nbsp;
                  <span slot="title">账号与安全</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </div>
      </div>

      <!-- 右侧的所有内容 ,在此处显示子路由-->
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import "./js/charts/echarts.min.js";
import Header from "../../components/header/Header.vue";
import TopNav from "../../components/topnav/TopNav.vue";
import Footer from "../../components/footer/Footer.vue";
export default {
  mounted() {
    $(".loader").fadeOut(800);
  },
  components: {
    TopNav,
    Header,
    Footer,
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style scoped src="./css/amazeui.css"></style>
<style scoped src="./css/core.css"></style>
<style scoped src="./css/menu.css"></style>
<style scoped src="./css/admin.css"></style>
<style scoped src="./css/page/typography.css"></style>
<style scoped src="./css/admin.css"></style>
<style scoped src="./css/page/form.css"></style>
<style scoped src="./css/component.css"></style>
