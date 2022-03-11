<template>
  <div class="major">
    <!-- 最顶部的导航开始 -->
    <TopNav />
    <!-- 最顶部的导航结束 -->

    <!--Loader-->
    <div class="loader">
      <div class="bouncybox">
        <div class="bouncy"></div>
      </div>
    </div>

    <!--Header-->
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

    <div class="searchSection">
      <div style="font-size: 40px; font-weight: 400; color: #fff">
        课程信息咨询
      </div>
      <div
        style="font-size: 15px; font-weight: 200; color: #fff; margin-top: 15px"
      >
        了解专业资讯，全面审视自己，推动职业发展，从这里开始
      </div>
      <div class="search">
        <input type="text" placeholder="请输入课程名称" />
        <span class="searchIcon"><i class="iconfont icon-Search"></i></span>
      </div>
    </div>

    <!-- 小tip -->
    <div class="tip">
      如您所查的门类（专业大类)、专业类、专业与专业目录有出入，请以专业目录为准。
    </div>

    <!--专业列表开始-->
    <section id="shop" class="padding" style="padding-top: 0">
      <div class="container">
        <div class="row">
          <div
            class="col-md-3 col-sm-6 margin10 bottom15 wow fadeIn"
            data-wow-delay="300ms"
          >
            <div class="shopping_box" style="height: 300px">
              <div class="image">
                <img
                  src="./img/major1.jpg"
                  alt="Edua"
                  class="img-responsive border-radius"
                />
                <div class="overlay border_radius">
                  <a
                    class="btn_common yellow border_radius btn-cart"
                    style="text-align: center"
                    @click="goto('/major/major_detail')"
                    >探索专业</a
                  >
                </div>
              </div>
              <div class="shop_content text-center">
                <h4>
                  <a href="shop_detail.html" class="title_link">大前端</a>
                </h4>
                <p>
                  前端技术一般分为前端设计和前端开发，前端设计一般可以理解为网站的视觉设计，前端开发则是网站的前台代码实…
                </p>
              </div>
            </div>
          </div>
          <div
            class="col-md-3 col-sm-6 margin10 bottom15 wow fadeIn"
            data-wow-delay="400ms"
          >
            <div class="shopping_box" style="height: 300px">
              <div class="image">
                <img
                  src="./img/major2.jpg"
                  alt="Edua"
                  class="img-responsive border-radius"
                />
                <div class="overlay border_radius">
                  <a
                    class="btn_common yellow border_radius btn-cart"
                    @click="goto('/major/major_detail')"
                    style="text-align: center"
                    >探索专业</a
                  >
                </div>
              </div>
              <div
                class="shop_content text-center"
                style="text-overflow: ellipsis"
              >
                <h4>
                  <a href="shop_detail.html" class="title_link">大数据</a>
                </h4>
                <p>大数据概论和职业规划大数据概论和职业规划</p>
              </div>
            </div>
          </div>
          <div
            class="col-md-3 col-sm-6 margin10 bottom15 wow fadeIn"
            data-wow-delay="500ms"
          >
            <div class="shopping_box" style="height: 300px">
              <div class="image">
                <img
                  src="./img/major3.jpg"
                  alt="Edua"
                  class="img-responsive border-radius"
                />
                <div class="overlay border_radius">
                  <a
                    class="btn_common yellow border_radius btn-cart"
                    @click="goto('/major/major_detail')"
                    style="text-align: center"
                    >探索专业</a
                  >
                </div>
              </div>
              <div class="shop_content text-center">
                <h4>
                  <a href="shop_detail.html" class="title_link">后端</a>
                </h4>
                <p>HDFS分布式文件系统 Hive数据仓库 Zeppelin框架</p>
              </div>
            </div>
          </div>
          <div
            class="col-md-3 col-sm-6 margin10 bottom15 wow fadeIn"
            data-wow-delay="600ms"
          >
            <div class="shopping_box" style="height: 300px">
              <div class="image">
                <img
                  src="./img/major4.jpg"
                  alt="Edua"
                  class="img-responsive border-radius"
                />
                <div class="overlay border_radius">
                  <a
                    class="btn_common yellow border_radius btn-cart"
                    @click="goto('/major/major_detail')"
                    style="text-align: center"
                    >探索专业</a
                  >
                </div>
              </div>
              <div
                class="shop_content text-center"
                style="height: 130px; overflow: hidden; text-overflow: ellipsis"
              >
                <h4>
                  <a href="shop_detail.html" class="title_link">大前端</a>
                </h4>
                <p>
                  前端技术一般分为前端设计和前端开发，前端设计一般可以理解为网站的视觉设计，前端开发则是网站的前台代码实前端技术一般分为前端设计和前端开发，前端设计一般可以理解为网站的视觉设计，前端开发则是网站的前台代码实……
                </p>
              </div>
            </div>
          </div>
          <div
            class="col-md-3 col-sm-6 margin10 bottom15 wow fadeIn"
            data-wow-delay="700ms"
          >
            <div class="shopping_box" style="height: 300px">
              <div class="image">
                <img
                  src="./img/major5.jpg"
                  alt="Edua"
                  class="img-responsive border-radius"
                />
                <div class="overlay border_radius">
                  <a
                    class="btn_common yellow border_radius btn-cart"
                    @click="goto('/major/major_detail')"
                    style="text-align: center"
                    >探索专业</a
                  >
                </div>
              </div>
              <div class="shop_content text-center">
                <h4>
                  <a href="shop_detail.html" class="title_link"
                    >计算机科学与技术</a
                  >
                </h4>
                <p>Sqoop框架 Superset框架 Hive数仓实战项目之滴滴出行</p>
              </div>
            </div>
          </div>
          <div
            class="col-md-3 col-sm-6 margin10 bottom15 wow fadeIn"
            data-wow-delay="800ms"
          >
            <div class="shopping_box" style="height: 300px">
              <div class="image">
                <img
                  src="./img/major6.jpg"
                  alt="Edua"
                  class="img-responsive border-radius"
                />
                <div class="overlay border_radius">
                  <a
                    class="btn_common yellow border_radius btn-cart"
                    @click="goto('/major/major_detail')"
                    style="text-align: center"
                    >探索专业</a
                  >
                </div>
              </div>
              <div class="shop_content text-center">
                <h4>
                  <a href="shop_detail.html" class="title_link">网络工程</a>
                </h4>
                <p>
                  零基础小白，有计算机基础即可。
                  目前职业有进一步提升要求，希望从事大数据行业高薪工作的在职人员。
                  大数据行业有持
                </p>
              </div>
            </div>
          </div>
          <div
            class="col-md-3 col-sm-6 margin10 bottom15 wow fadeIn"
            data-wow-delay="900ms"
          >
            <div class="shopping_box" style="height: 300px">
              <div class="image">
                <img
                  src="./img/major7.jpg"
                  alt="Edua"
                  class="img-responsive border-radius"
                />
                <div class="overlay border_radius">
                  <a
                    class="btn_common yellow border_radius btn-cart"
                    @click="goto('/major/major_detail')"
                    style="text-align: center"
                    >探索专业</a
                  >
                </div>
              </div>
              <div class="shop_content text-center">
                <h4>
                  <a href="shop_detail.html" class="title_link"
                    >电子与计算机科学</a
                  >
                </h4>
                <p>大数据概论大数据应用场景</p>
              </div>
            </div>
          </div>
          <div
            class="col-md-3 col-sm-6 margin10 bottom15 wow fadeIn"
            data-wow-delay="1000ms"
          >
            <div class="shopping_box" style="height: 300px">
              <div class="image">
                <img
                  src="./img/major8.jpg"
                  alt="Edua"
                  class="img-responsive border-radius"
                />
                <div class="overlay border_radius">
                  <a
                    class="btn_common yellow border_radius btn-cart"
                    @click="goto('/major/major_detail')"
                    style="text-align: center"
                    >探索专业</a
                  >
                </div>
              </div>
              <div class="shop_content text-center">
                <h4>
                  <a href="shop_detail.html" class="title_link">软件工程</a>
                </h4>
                <p>大数据特点 大数据分析业务步骤</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--专业列表结束-->

    <!-- 最新资讯开始-->
    <section id="news" class="padding" style="padding-top: 50px">
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
                <a @click="goto('/major/consult_detail')">
                  <div class="item">
                    <div class="content_wrap">
                      <div class="image">
                        <img
                          src="./img/news2.png"
                          alt="Edua"
                          class="img-responsive border_radius"
                        />
                      </div>
                      <div class="news_box border_radius">
                        <h4>
                          <a
                            >博世
                            CEO：芯片需求远远大于生产能力，结构性赤字依然存在</a
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
                          博世已拨款超过 4
                          亿欧元用于明年在德国和马来西亚投资生产芯片，以缓解全球芯片短缺问题，其中最大的一部分预算将用于加快其德国德累斯顿
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a @click="goto('/major/consult_detail')">
                  <div class="item">
                    <div class="content_wrap">
                      <div class="image">
                        <img
                          src="./img/news3.jpg"
                          alt="Edua"
                          class="img-responsive border_radius"
                        />
                      </div>
                      <div class="news_box border_radius">
                        <h4>
                          <a
                            >腾讯回应互联互通：平台间会更加开放，致力于保护用户和中小企业
                          </a>
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
                          腾讯控股 2021 年前三季度总收入为人民币 4159.3
                          亿元，同比增长 19%。净利润 1298.64 亿元，同比增长 29%;
                          经调整后净利润为 989.08 亿元，同比增长 10%。
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a @click="goto('/major/consult_detail')">
                  <div class="item">
                    <div class="content_wrap">
                      <div class="image">
                        <img
                          src="./img/news1.jpg"
                          alt="Edua"
                          class="img-responsive border_radius"
                        />
                      </div>
                      <div class="news_box border_radius">
                        <h4>
                          <a
                            >11.11 巅峰狂欢：天猫/京东双 11 红包最后一天 +
                            最大奖池</a
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
                          天猫双 11 巅峰狂欢开抢，前 1 小时疯抢 0
                          元免单/半价特惠，跨店每满 200 元减 30
                          元，全年底价来袭，就购这一天；
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a @click="goto('/major/consult_detail')">
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
                          <a>百度网盘宣布上线企业版，目前已有三万客户</a>
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
                </a>
                <a @click="goto('/major/consult_detail')">
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
                          <a>百度网盘宣布上线企业版，目前已有三万客户</a>
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
                </a>
                <a @click="goto('/major/consult_detail')">
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
                          <a>百度网盘宣布上线企业版，目前已有三万客户</a>
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
                </a>
                <a @click="goto('/major/consult_detail')">
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
                          <a>百度网盘宣布上线企业版，目前已有三万客户</a>
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
                </a>
                <a @click="goto('/major/consult_detail')">
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
                          <a>百度网盘宣布上线企业版，目前已有三万客户</a>
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
                </a>
                <a @click="goto('/major/consult_detail')">
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
                          <a>百度网盘宣布上线企业版，目前已有三万客户</a>
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
                </a>
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
import Header from "../../components/header/Header.vue";
import PageHeader from "../../components/page_header/PageHeader.vue";
import TopNav from "../../components/topnav/TopNav.vue";
import Footer from "../../components/footer/Footer.vue";
import { mapState } from "vuex";
export default {
  name: "Major",
  data() {
    return {};
  },
  async mounted() {
    $(".loader").fadeOut(500);
    // this.$store.dispatch("getCourseCategoryAction");
    // this.$store.dispatch("getAllMajorInfoAction");
  },

  components: {
    Header,
    PageHeader,
    TopNav,
    Footer,
  },

  computed: {
    // 方式一
    // ...mapState(['address'])
    // 方式二
    ...mapState({
      // 下面的函数的参数是内部 传递过来的大的state对像
      allMajorInfo: (state) => state.allMajorInfo,
      majorDetailInfo: (state) => state.majorDetailInfo,
    }),
  },
  methods: {
    goto(path) {
      if (path !== this.$router.path) {
        this.$router.push(path);
      }
    },
  },
};
</script>

<style scoped>
@import "./css/major.css";
</style>