<template>
  <div class="CourseIntroduce">
    <!-- 最顶部的导航开始 -->
    <TopNav />
    <!-- 最顶部的导航结束 -->

    <!-- 头部导航开始 -->
    <Header />
    <!-- 头部导航结束 -->

    <!--Page Header-->
    <section class="page_header padding-top">
      <div class="container">
        <div class="row">
          <div class="col-md-12 page-content">
            <h1>Shop</h1>
            <p>
              We offer the most complete house renovating services in the
              country
            </p>
            <div class="page_nav">
              <span>You are here:</span> <a href="index.html">Home</a>
              <span><i class="fa fa-angle-double-right"></i>Shop</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Page Header-->

    <!-- 课程播放开始 -->
    <section id="course_all" class="padding-bottom-half padding-top">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 course_detail wow fadeIn" data-wow-delay="400ms">
            <!-- 下面是放视频的 -->
            <div class="prism-player" id="player-con"></div>
            <div class="detail_course" style="margin-top: 15px">
              <div class="info_label">
                &nbsp;
                <span @click="goto('/course/course_detail')">课程列表</span>
              </div>
            </div>
            <div class="bottom15"></div>
          </div>

          <!-- 右侧的课程介绍 -->
          <aside class="col-sm-6 wow fadeIn" data-wow-delay="400ms">
            <!-- 这里放课程购买 -->
            <div
              class="col-md-12 col-sm-12 shop_info wow fadeInRight"
              data-wow-delay="400ms"
            >
              <h2 class="heading bottom25">
                前端0基础入门 + Web百大项目案例<span
                  class="divider-left"
                ></span>
              </h2>
              <h2 class="price_product">￥1.00</h2>
              <p class="margin10">
                本课程以强大的前端理论知识作为铺垫，让初学者和刚入职的工程师极大程度的深化基础和夯实底层编程能力，在此之上引入了众多企业开发实战案例从而达到学以致用，触类旁通的目的。
                如果你还在技术之路上奔跑，苦苦寻求理论的深化，探索技术的应用，憧憬高薪的offer，那就不要犹豫，来这里磨砺吧！
              </p>

              <div class="quote bottom25" style="margin-top: 20px">
                <a
                  class="btn_common yellow border_radius"
                  style="margin-right: 20px"
                  @click="goto('/shop_cart')"
                  >立即购买</a
                >
                <a class="btn_common yellow border_radius">咨询</a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
    <!-- 课程播放结束 -->



    <section id="shop" class="padding" style="padding-top: 10px">
      <div class="container">
        <div class="row"></div>

        <div class="row">
          <div class="col-md-12 wow fadeInUp" data-wow-delay="300ms">
            <div class="shop_tab margin_top">
              <ul class="tabs">
                <li :class="{ active: num == 1 }" rel="tab1" @click="num = 1">
                  课程概述
                </li>
                <li :class="{ active: num == 2 }" rel="tab1" @click="num = 2">
                  目录
                </li>
                <li :class="{ active: num == 3 }" rel="tab1" @click="num = 3">
                  评论
                </li>
              </ul>
              <div class="tab_container">
                <div id="tab1" class="tab_content" v-show="num == 1">
                  <!-- 主讲老师概述 -->
                  <div class="profile_bg heading_space">
                    <h3 class="bottom20">主讲老师</h3>
                    <div class="profile">
                      <div class="p_pic" @click="$router.replace('/teacher')">
                        <img
                          src="../../assets/images/profile1.png"
                          alt="Course"
                        />
                      </div>
                      <div class="profile_text">
                        <h5>
                          <strong>佩奇老师</strong> - <span>IT 专家</span>
                        </h5>
                        <p>
                          8年前端工作经验,曾在阿里担任前端架构师,作为前端的组长,获得阿里年终奖等等哈哈
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab2" class="tab_content" v-show="num == 2">
                  <ul class="course_lists">
                    <div
                      style="
                        font-weight: 800;
                        font-size: 18px;
                        margin-bottom: 20px;
                      "
                    >
                      01 前端基础
                    </div>
                    <li>这是前端基础01的第一集</li>
                    <li>这是前端基础01的第一集</li>
                    <li>这是前端基础01的第一集</li>
                    <li>这是前端基础01的第一集</li>
                  </ul>
                  <ul class="course_lists">
                    <div
                      style="
                        font-weight: 800;
                        font-size: 18px;
                        margin-bottom: 20px;
                      "
                    >
                      01 前端基础
                    </div>
                    <li>这是前端基础01的第一集</li>
                    <li>这是前端基础01的第一集</li>
                    <li>这是前端基础01的第一集</li>
                    <li>这是前端基础01的第一集</li>
                  </ul>
                  <ul class="course_lists">
                    <div
                      style="
                        font-weight: 800;
                        font-size: 18px;
                        margin-bottom: 20px;
                      "
                    >
                      01 前端基础
                    </div>
                    <li>这是前端基础01的第一集</li>
                    <li>这是前端基础01的第一集</li>
                    <li>这是前端基础01的第一集</li>
                    <li>这是前端基础01的第一集</li>
                  </ul>
                  <ul class="course_lists">
                    <div
                      style="
                        font-weight: 800;
                        font-size: 18px;
                        margin-bottom: 20px;
                      "
                    >
                      01 前端基础
                    </div>
                    <li>这是前端基础01的第一集</li>
                    <li>这是前端基础01的第一集</li>
                    <li>这是前端基础01的第一集</li>
                    <li>这是前端基础01的第一集</li>
                  </ul>
                </div>
                <div id="tab3" class="tab_content" v-show="num == 3">
                  <div class="top30"></div>
                  <div class="profile_bg bottom20">
                    <div class="profile">
                      <div class="p_pic">
                        <img
                          src="./images/h1.jpg"
                          alt="instructure"
                          style="width: 40px; height: 40px;border-radius:50%"
                        />
                      </div>
                      <div class="profile_text">
                        <h5>
                          <strong>佩奇同学</strong>
                        </h5>
                        <p class="margin10">
                          老师讲的还是不错的老师讲的还是不错的老师讲的还是不错的老师讲的还是不错的老师讲的还是不错的老师讲的还是不错的不错的
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="profile_bg bottom20">
                    <div class="profile">
                      <div class="p_pic">
                        <img
                          src="../../assets/images/profile3.png"
                          alt="instructure"
                          style="width: 40px; height: 40px"
                        />
                      </div>
                      <div class="profile_text">
                        <h5>
                          <strong>佩奇同学</strong>
                        </h5>
                        <p class="margin10">
                          老师讲的还是不错的老师讲的还是不错的老师讲的还是不错的老师讲的还是不错的老师讲的还是不错的老师讲的还是不错的不错的
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="clearfix"></div>

          <!-- 相关课程开始 -->
          <div class="related_pro padding-top clearfix">
            <div class="col-md-12 wow fadeInDown">
              <h2 class="heading">
                相关课程<span class="divider-left"></span>
              </h2>
            </div>
            <div
              class="col-md-3 col-sm-6 col-xs-12 margin_tophalf wow fadeIn"
              data-wow-delay="300ms"
            >
              <div class="shopping_box">
                <div class="image">
                  <img
                    src="./images/news1.jpg"
                    alt="Edua"
                    class="img-responsive border-radius"
                  />
                  <div class="overlay border_radius">
                    <a class="btn_common yellow border_radius btn-cart" href="#"
                      >添加到购物车</a
                    >
                  </div>
                </div>
                <div class="shop_content text-center">
                  <h4>
                    <a href="shop_detail.html" class="title_link">Java课程</a>
                  </h4>
                  <p>直接以最小测试核心技能为主干</p>
                  <h4 class="price_product">￥230.00</h4>
                </div>
              </div>
            </div>
            <div
              class="col-md-3 col-sm-6 col-xs-12 margin_tophalf wow fadeIn"
              data-wow-delay="400ms"
            >
              <div class="shopping_box">
                <div class="image">
                  <img
                    src="./images/news2.jpg"
                    alt="Edua"
                    class="img-responsive border-radius"
                  />
                  <div class="overlay border_radius">
                    <a class="btn_common yellow border_radius btn-cart" href="#"
                      >添加到购物车</a
                    >
                  </div>
                </div>
                <div class="shop_content text-center">
                  <h4>
                    <a href="shop_detail.html" class="title_link">前端课程</a>
                  </h4>
                  <p>课程全是干货、绝无废话。</p>
                  <h4 class="price_product">￥230.00</h4>
                </div>
              </div>
            </div>
            <div
              class="col-md-3 col-sm-6 col-xs-12 margin_tophalf wow fadeIn"
              data-wow-delay="500ms"
            >
              <div class="shopping_box">
                <div class="image">
                  <img
                    src="./images/news3.jpg"
                    alt="Edua"
                    class="img-responsive border-radius"
                  />
                  <div class="overlay border_radius">
                    <a class="btn_common yellow border_radius btn-cart" href="#"
                      >添加到购物车</a
                    >
                  </div>
                </div>
                <div class="shop_content text-center">
                  <h4>
                    <a href="shop_detail.html" class="title_link">人工智能</a>
                  </h4>
                  <p>测试行业介绍、用例设计、缺陷</p>
                  <h4 class="price_product">￥230.00</h4>
                </div>
              </div>
            </div>
            <div
              class="col-md-3 col-sm-6 col-xs-12 margin_tophalf wow fadeIn"
              data-wow-delay="600ms"
            >
              <div class="shopping_box">
                <div class="image">
                  <img
                    src="./images/news4.jpg"
                    alt="Edua"
                    class="img-responsive border-radius"
                  />
                  <div class="overlay border_radius">
                    <a class="btn_common yellow border_radius btn-cart" href="#"
                      >添加到购物车</a
                    >
                  </div>
                </div>
                <div class="shop_content text-center">
                  <h4>
                    <a href="shop_detail.html" class="title_link">抓包课程</a>
                  </h4>
                  <p>、Linux应用、数据库应用、项目</p>
                  <h4 class="price_product">￥230.00</h4>
                </div>
              </div>
            </div>
          </div>
          <!-- 相关课程结束 -->
        </div>
      </div>
    </section>

    <!-- 底部开始 -->
    <Footer />
    <!-- 底部结束 -->
  </div>
</template>

<script>
import TopNav from "../topnav/TopNav.vue";
import Header from "../header/Header.vue";
import Footer from "../footer/Footer.vue";
export default {
  name: "CourseDetail",
  data() {
    return {
      value1: null,
      num: 1, //控制tab显示隐藏
      userComment: "", //用户输入的评论
      userComments: [
        {
          userId: 1,
          headPic: "../../assets/images/profile2.png",
          nickName: "小明",
          content: "老师讲课非常的生动",
        },
        {
          userId: 2,
          headPic: "../../assets/images/profile2.png",
          nickName: "小明",
          content: "老师讲课非常的生动",
        },
        {
          userId: 3,
          headPic: "../../assets/images/profile2.png",
          nickName: "小明",
          content: "老师讲课非常的生动",
        },
      ], //用户的所有评论
    };
  },
  mounted() {
    let player = new Aliplayer(
      {
        id: "player-con",
        source: "//player.alicdn.com/video/aliyunmedia.mp4",
        // width: "750px",
        height: "384px",
        autoplay: false,
        isLive: false,
        rePlay: false,
        playsinline: true,
        preload: true,
        controlBarVisibility: "hover",
        useH5Prism: true,
      },
      function (player) {
        console.log("The player is created");
      }
    );
  },
  components: {
    TopNav,
    Header,
    Footer,
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
    goto(path) {
      this.$router.push(path);
    },
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    },
  },
};
</script>

<style>
/* 课程列表ul */
.course_lists {
  background: #fff;
  margin-bottom: 10px;
  overflow-y: hidden;
}
.course_lists li {
  height: 50px;
  width: 100%;
  background: #f4f4f4;
  margin-bottom: 10px;
  line-height: 50px;
  padding-left: 20px;
}
</style>