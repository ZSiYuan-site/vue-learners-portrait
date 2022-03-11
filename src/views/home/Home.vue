<template>
  <div class="home">
    <!-- 回到顶部开始 -->
    <a href="#" class="scrollToTop" style="background: #4492e3"
      ><i class="iconfont icon-jiantou_xiangshang"></i
    ></a>
    <!-- 回到顶部结束 -->

    <!--Loader-->
    <div class="loader">
      <div class="bouncybox">
        <div class="bouncy"></div>
      </div>
    </div>

    <!-- 最顶部的导航开始 -->
    <TopNav />
    <!-- 最顶部的导航结束 -->

    <!--Header-->
    <header>
      <nav
        class="navbar navbar-default navbar-fixed white no-background bootsnav"
      >
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
              style="font-size: 2.5em; color: #fff; font-weight: 800"
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

    <!--轮播图开始-->
    <section class="rev_slider_wrapper text-center">
      <div class="slideShowWrap">
        <el-carousel :interval="5000" arrow="always" height="600px">
          <el-carousel-item v-for="(item, index) in bgImg" :key="index">
            <img
              src="../../assets/images/banner2.jpg"
              alt=""
              style="width: 100%; height: 100%"
            />
          </el-carousel-item>

          <div class="slideText">
            <span class="slideTextTop">Welcome to our platform</span>
            <span class="slideTextBottom"
              >It is a platform dedicated to providing students with better and
              more convenient learning situation analysis and employment
              planning guidelines</span
            >
          </div>
        </el-carousel>
      </div>
    </section>
    <!--轮播图结束-->

    <!--ABout US-->
    <section id="about" class="padding" style="padding-top: 0">
      <div class="container margin_top">
        <div class="row">
          <div
            class="col-md-7 col-sm-6 priorty wow fadeInLeft"
            data-wow-delay="300ms"
          >
            <h2 class="heading bottom25">
              欢迎来到学习使者平台 <span class="divider-left"></span>
            </h2>
            <p class="half_space">
              Learn.作为中国专业IT职业在线教育平台,拥有海量高清IT职业课程,涵盖30+个技术领域,如Android,iOS
              ,Flash,Java,Python,HTML5,Swift,Cocos2dx等视频教程.根据IT在线学习特点,极客学院推出IT学习知识体系图,IT职业学习实战路径图,帮助IT学习者从零基础起步,结合
              ...
            </p>

            <div class="row">
              <div class="col-md-6">
                <div class="about-post">
                  <a href="#." class="border_radius fourIcon">
                    <!-- <img
                      src="../../assets/images/hands.png"
                      alt="hands"
                      style="color: #fff"
                  /> -->
                    <span
                      class="iconfont icon-jihua"
                      style="color: #fff; font-size: 40px; line-height: 60px"
                    ></span>
                  </a>
                  <h4>明确计划</h4>
                  <p style="font-size: 14px">为每个学生制定了明确的计划</p>
                </div>
                <div class="about-post">
                  <a href="#." class="border_radius fourIcon">
                    <!-- <img src="../../assets/images/awesome.png" alt="hands"
                  /> -->
                    <span
                      class="iconfont icon-kaixin"
                      style="color: #fff; font-size: 35px; line-height: 60px"
                    ></span>
                  </a>
                  <h4>趣味教学</h4>
                  <p style="font-size: 14px">增添课堂趣味性</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="about-post">
                  <a href="#." class="border_radius fourIcon">
                    <!-- <img src="../../assets/images/maintenance.png" alt="hands"
                  /> -->
                    <span
                      class="iconfont icon-xinrenkecheng"
                      style="color: #fff; font-size: 33px; line-height: 60px"
                    ></span>
                  </a>
                  <h4>多元化课程</h4>
                  <p style="font-size: 14px">为每个学生提供多元课程</p>
                </div>
                <div class="about-post">
                  <a href="#." class="border_radius fourIcon">
                    <!-- <img src="../../assets/images/home.png" alt="hands"
                  /> -->
                    <span
                      class="iconfont icon-laoshi"
                      style="color: #fff; font-size: 40px; line-height: 60px"
                    ></span>
                  </a>
                  <h4>细心教学</h4>
                  <p style="font-size: 14px">细心对待每一位学生</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5 col-sm-6 wow fadeInRight" data-wow-delay="300ms">
            <img
              src="../../assets/images/about.jpg"
              alt="our priorties"
              class="img-responsive"
              style="width: 100%"
            />
          </div>
        </div>
      </div>
    </section>
    <!--ABout US-->

    <!--数据分析开始-->
    <div style="wdith: 100%; background: #fbfbfc">
      <div class="container">
        <div class="row">
          <div class="analyse">
            <div class="analyseTop">
              <div style="font-size: 2em; font-weight: bold; line-height: 80px">
                30 多个用户正在 笃学网 上学习。
              </div>
              <div style="font-size: 16px; margin-bottom: 45px">
                看看他们如何实现目标：
              </div>
            </div>
            <div class="analyseMiddle">
              <div class="analyseMiddleLeft">
                <div class="bigNumber">78%</div>
                <span style="line-height: 30px; font-size: 1em"
                  ><i class="smallFont">的求学者获得了一定的优势，</i
                  >例如确定目标，找到学习方向</span
                >
              </div>
              <div class="analyseMiddleLeft">
                <div class="bigNumber">98%</div>
                <span style="line-height: 30px; font-size: 1em"
                  ><i class="smallFont">的求学者获得了一定的优势，</i
                  >例如成功准备考试或致力于研究某个领域</span
                >
              </div>
              <div class="analyseMiddleLeft">
                <div class="bigNumber">64%</div>
                <span style="line-height: 30px; font-size: 1em"
                  ><i class="smallFont">的学生表示在 笃学网 上学习后信心倍增</i
                  >例如确定目标，找到学习方向</span
                >
              </div>
            </div>
            <div class="analyseBottom">
              <div style="font-size: 16px; line-height: 50px">
                来源：笃学网 学生结果调查* 2021
              </div>
              <div style="font-size: 16px; color: gray; line-height: 50px">
                *学生在 笃学网 上完成课程 6 个月之后会收到 笃学网 学生结果调查。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--数据分析结束-->

    <!-- 推荐课程开始 -->
    <!-- <section id="courses" class="padding parallax" style="padding-top: 50px">
      <div class="container">
        <div class="row">
          <div class="col-md-12 course_father_arrow">
            <h2
              class="heading heading_space wow fadeInDown"
              style="color: #fff"
            >
              推荐课程<span class="divider-left"></span>
            </h2>
            <div class="course_left_arrow">
              <i
                class="iconfont icon-arrow-left"
                style="display: inline-block; font-size: 30px"
              ></i>
            </div>
            <div class="course_right_arrow">
              <i
                class="iconfont icon-arrow-right"
                style="display: inline-block; font-size: 30px"
              ></i>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="slider_wrapper">
              <div id="course_slider" class="owl-carousel">
                <div class="item">
                  <div class="image bottom20">
                    <img
                      src="../../assets/images/recCourse.png"
                      alt="Courses"
                      class="img-responsive border_radius"
                    />
                  </div>

                  <h3 class="bottom15" style="color: #fff">
                    <a href="#" style="color: #fff">前端开发实战教学</a>
                  </h3>
                  <p class="bottom15" style="font-size: 14px; color: #fff">
                    Web前端开发是创建网页或APP界面呈现给用户的过程。Web前端开发技术主要包括HTML，CSS及JavaScript、JQuery以及衍生出来的各种技术、框架。本课程由高校与企业联合打造，百度......
                  </p>
                </div>
                <div class="item">
                  <div class="image bottom20">
                    <img
                      src="../../assets/images/recCourse.png"
                      alt="Courses"
                      class="img-responsive border_radius"
                    />
                  </div>
                  <h3 class="bottom15" style="color: #fff">
                    <a href="#" style="color: #fff">前端开发实战教学</a>
                  </h3>
                  <p class="bottom15" style="font-size: 14px; color: #fff">
                    Web前端开发是创建网页或APP界面呈现给用户的过程。Web前端开发技术主要包括HTML，CSS及JavaScript、JQuery以及衍生出来的各种技术、框架。本课程由高校与企业联合打造，百度......
                  </p>
                </div>
                <div class="item">
                  <div class="image bottom20">
                    <img
                      src="../../assets/images/recCourse.png"
                      alt="Courses"
                      class="img-responsive border_radius"
                    />
                  </div>
                  <h3 class="bottom15" style="color: #fff">
                    <a href="#" style="color: #fff">前端开发实战教学</a>
                  </h3>
                  <p class="bottom15" style="font-size: 14px; color: #fff">
                    Web前端开发是创建网页或APP界面呈现给用户的过程。Web前端开发技术主要包括HTML，CSS及JavaScript、JQuery以及衍生出来的各种技术、框架。本课程由高校与企业联合打造，百度......
                  </p>
                </div>
                <div class="item">
                  <div class="image bottom20">
                    <img
                      src="../../assets/images/recCourse.png"
                      alt="Courses"
                      class="img-responsive border_radius"
                    />
                  </div>
                  <h3 class="bottom15" style="color: #fff">
                    <a href="#" style="color: #fff">前端开发实战教学</a>
                  </h3>
                  <p class="bottom15" style="font-size: 14px; color: #fff">
                    Web前端开发是创建网页或APP界面呈现给用户的过程。Web前端开发技术主要包括HTML，CSS及JavaScript、JQuery以及衍生出来的各种技术、框架。本课程由高校与企业联合打造，百度......
                  </p>
                </div>
                <div class="item">
                  <div class="image bottom20">
                    <img
                      src="../../assets/images/recCourse.png"
                      alt="Courses"
                      class="img-responsive border_radius"
                    />
                  </div>
                  <h3 class="bottom15" style="color: #fff">
                    <a href="#" style="color: #fff">前端开发实战教学</a>
                  </h3>
                  <p class="bottom15" style="font-size: 14px; color: #fff">
                    Web前端开发是创建网页或APP界面呈现给用户的过程。Web前端开发技术主要包括HTML，CSS及JavaScript、JQuery以及衍生出来的各种技术、框架。本课程由高校与企业联合打造，百度......
                  </p>
                </div>
                <div class="item">
                  <div class="image bottom20">
                    <img
                      src="../../assets/images/recCourse.png"
                      alt="Courses"
                      class="img-responsive border_radius"
                    />
                  </div>
                  <h3 class="bottom15" style="color: #fff">
                    <a href="#" style="color: #fff">前端开发实战教学</a>
                  </h3>
                  <p class="bottom15" style="font-size: 14px; color: #fff">
                    Web前端开发是创建网页或APP界面呈现给用户的过程。Web前端开发技术主要包括HTML，CSS及JavaScript、JQuery以及衍生出来的各种技术、框架。本课程由高校与企业联合打造，百度......
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- 推荐课程结束 -->

    <!-- 学习路线开始 -->
    <div class="experience" id="experience">
      <div class="container">
        <h2 class="heading bottom25">
          学习路线 <span class="divider-left"></span>
        </h2>
        <div class="experience-main">
          <span class="devide-line"></span>
          <div class="experience-left">
            <span class="glyphicon glyphicon-book" aria-hidden="true"></span>
            <h4 style="color: #4492e3">第一阶段</h4>
            <h5>基础入门</h5>
            <p>
              使用案例场景式教学，提升学习兴趣，降低入门难度高级前端工程师必备技能，SEO
              优化策略之一，网站性能监控与埋点方案。熟练运用 HTML
              语法•掌握语义化的本质•合理使用 HTML
              标签编写网页的结构•通过浮动、定位、Flex 精细控制网页布局
            </p>
          </div>
          <div class="experience-left-snd">
            <span
              class="glyphicon glyphicon-briefcase"
              aria-hidden="true"
            ></span>
          </div>
          <div class="experience-right-snd">
            <h4 style="color: #4492e3">第二阶段</h4>
            <h5>进阶提升</h5>
            <p>
              融合 ES6-11 新语法，重新设计案例•了解 PC
              屏幕与移动设备屏幕的差异•结合视口、媒体查询、rem
              等知识整合出稳定高效的移动屏幕适配方案•基于设计稿编写高还原度的网页•针对移动设备的特征应用差异化的技术解决方案•借助蓝湖协同平台，体验真实团队开发流程•基于媒体查询技术适配多终端网页•运用
            </p>
          </div>
          <div class="experience-left-trd">
            <span class="glyphicon glyphicon-gift" aria-hidden="true"></span>
            <h4 style="color: #4492e3">第三阶段</h4>
            <h5>高级教程</h5>
            <p>
              优化课程，新增防抖节流，JWT 权鉴，优化资讯后台管理项目，新增 2
              天团队实战优化课程，新增防抖节流，JWT
              权鉴，优化资讯后台管理项目，新增 2 天团队实战
            </p>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
    <!-- 学习路线结束 -->

    <!-- 平台时间 -->
    <!-- <section id="parallax" class="parallax">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center wow bounceIn">
            <h2>We Believe that Education for Everyone Since</h2>
            <h1 class="margin10">1942</h1>
            <a href="#." class="border_radius btn_common white_border margin10"
              >Gaet a Quote</a
            >
          </div>
        </div>
      </div>
    </section> -->
    <!--平台时间 -->

    <!-- 最新资讯开始-->
    <section
      id="news"
      class="padding"
      style="padding-top: 50px; background: #fbfbfc"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-12 wow fadeInDown news_father_arrow">
            <h2 class="heading heading_space">
              最新资讯<span class="divider-left"></span>
            </h2>
            <div class="news_left_arrow">
              <i
                class="iconfont icon-arrow-left"
                style="display: inline-block; font-size: 30px"
              ></i>
            </div>
            <div class="news_right_arrow">
              <i
                class="iconfont icon-arrow-right"
                style="display: inline-block; font-size: 30px"
              ></i>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="slider_wrapper">
              <div id="news_slider" class="owl-carousel">
                <div class="item">
                  <div class="content_wrap">
                    <div class="image">
                      <img
                        src="./images/freecourse1.jpg"
                        alt="Edua"
                        class="img-responsive border_radius"
                      />
                    </div>
                    <div class="news_box border_radius">
                      <h4>
                        <a href="blog_detail.html"
                          >百度网盘宣布上线企业版，目前已有三万客户</a
                        >
                      </h4>
                      <ul class="commment">
                        <li>
                          <a href="#.">9月6日, 2021</a>
                        </li>
                        <li>
                          <a href="#."> 02</a>
                        </li>
                      </ul>
                      <p>
                        苹果 WWDC21 全球开发者大会将于北京时间 6 月 8 日凌晨 1
                        点召开。届时，IT之家将带来视频直播，敬请关注
                      </p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="content_wrap">
                    <div class="image">
                      <img
                        src="./images/freecourse2.png"
                        alt="Edua"
                        class="img-responsive border_radius"
                      />
                    </div>
                    <div class="news_box border_radius">
                      <h4>
                        <a href="blog_detail.html"
                          >马化腾：腾讯拥有大量探索和开发元宇宙的技术和能力
                        </a>
                      </h4>
                      <ul class="commment">
                        <li>
                          <a href="#.">June 6, 2016</a>
                        </li>
                        <li>
                          <a href="#."> 02</a>
                        </li>
                      </ul>
                      <p>
                        11 月 10 日消息，腾讯今日发布 2021
                        年度第三季度财报。财报显示，腾讯第三季度营收 1423.68
                      </p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="content_wrap">
                    <div class="image">
                      <img
                        src="./images/freecourse3.jpg"
                        alt="Edua"
                        class="img-responsive border_radius"
                      />
                    </div>
                    <div class="news_box border_radius">
                      <h4>
                        <a href="blog_detail.html"
                          >手机 ODM 产业喜迎利好：传 vivo 手机正式释放 ODM
                          订单</a
                        >
                      </h4>
                      <ul class="commment">
                        <li>
                          <a href="#.">June 6, 2016</a>
                        </li>
                        <li>
                          <a href="#."> 02</a>
                        </li>
                      </ul>
                      <p>
                        作为手机产业不可或缺的环节，手机 ODM
                        产业近几年已经成为手机厂商十分重要的合作伙伴，从最初的智能手机，
                      </p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="content_wrap">
                    <div class="image">
                      <img
                        src="../../assets/images/news.png"
                        alt="Edua"
                        class="img-responsive border_radius"
                      />
                    </div>
                    <div class="news_box border_radius">
                      <h4>
                        <a href="blog_detail.html"
                          >百度网盘宣布上线企业版，目前已有三万客户</a
                        >
                      </h4>
                      <ul class="commment">
                        <li>
                          <a href="#.">June 6, 2016</a>
                        </li>
                        <li>
                          <a href="#."> 02</a>
                        </li>
                      </ul>
                      <p>
                        苹果 WWDC21 全球开发者大会将于北京时间 6 月 8 日凌晨 1
                        点召开。届时，IT之家将带来视频直播，敬请关注
                      </p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="content_wrap">
                    <div class="image">
                      <img
                        src="../../assets/images/news.png"
                        alt="Edua"
                        class="img-responsive border_radius"
                      />
                    </div>
                    <div class="news_box border_radius">
                      <h4>
                        <a href="blog_detail.html"
                          >百度网盘宣布上线企业版，目前已有三万客户</a
                        >
                      </h4>
                      <ul class="commment">
                        <li>
                          <a href="#.">June 6, 2016</a>
                        </li>
                        <li>
                          <a href="#."> 02</a>
                        </li>
                      </ul>
                      <p>
                        苹果 WWDC21 全球开发者大会将于北京时间 6 月 8 日凌晨 1
                        点召开。届时，IT之家将带来视频直播，敬请关注
                      </p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="content_wrap">
                    <div class="image">
                      <img
                        src="../../assets/images/news.png"
                        alt="Edua"
                        class="img-responsive border_radius"
                      />
                    </div>
                    <div class="news_box border_radius">
                      <h4>
                        <a href="blog_detail.html"
                          >百度网盘宣布上线企业版，目前已有三万客户</a
                        >
                      </h4>
                      <ul class="commment">
                        <li>
                          <a href="#.">June 6, 2016</a>
                        </li>
                        <li>
                          <a href="#."> 02</a>
                        </li>
                      </ul>
                      <p>
                        苹果 WWDC21 全球开发者大会将于北京时间 6 月 8 日凌晨 1
                        点召开。届时，IT之家将带来视频直播，敬请关注
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 最新资讯结束-->

    <!-- 底部开始 -->
    <Footer />
    <!-- 底部结束 -->
  </div>
</template>

<script>
import TopNav from "../../components/topnav/TopNav.vue";
import Footer from "../../components/footer/Footer.vue";
export default {
  data() {
    return {
      bgImg: [
        {
          index: 0,
          imgSrc: "../../assets/images/banner2.jpg",
        },
        {
          index: 1,
          imgSrc: "../../assets/images/banner2.jpg",
        },
        {
          index: 2,
          imgSrc: "../../assets/images/banner2.jpg",
        },
        {
          index: 3,
          imgSrc: "../../assets/images/banner2.jpg",
        },
      ],
    };
  },
  methods: {
    goto(path) {
      if (path !== this.$router.path) {
        this.$router.push(path);
      }
    },
  },
  components: { TopNav, Footer },
  mounted() {
    $(".loader").fadeOut(800);
  },
};
</script>

<style scoped>
@import "../../assets/css/bootstrap.min.css";
@import "../../assets/css/animate.min.css";
@import "../../assets/css/owl.carousel.css";
@import "../../assets/css/owl.transitions.css";
@import "../../assets/css/cubeportfolio.min.css";
@import "../../assets/css/settings.css";
@import "../../assets/css/bootsnav.css";
@import "../../assets/css/style.css";
@import "../../assets/css/loader.css";
@import "./dataAnalysis.css";
@import "./arrow.css";

@import "./css/style.css";
.fourIcon {
  background: rgb(64, 136, 212);
}
</style>
