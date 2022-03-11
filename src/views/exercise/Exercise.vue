<template>
  <div class="exercise">
    <!-- 最顶部的导航开始 -->
    <TopNav />
    <!-- 最顶部的导航结束 -->

    <!-- 头部导航开始 -->
    <Header />
    <!-- 头部导航结束 -->

    <!-- 题目搜索开始 -->
    <div class="searchSection">
      <div style="font-size: 40px; font-weight: 400; color: #fff">题库</div>
      <div
        style="font-size: 15px; font-weight: 200; color: #fff; margin-top: 15px"
      >
        刷题的好处在于一方面可以不断的巩固学过的知识，帮助对考点有更深入更全面的理解。
        另一方面可以培养应试状态，增加解题的熟练度，加快答题的速度。
      </div>
      <div class="search">
        <input type="text" placeholder="请输入课程名称" />
        <span class="searchIcon"><i class="iconfont icon-Search"></i></span>
      </div>
    </div>
    <!-- 题目搜索结束 -->

    <!-- 题目按照职位排序开始 -->
    <div class="cate_exercise">
      <div class="container">
        <div class="col-md-1 position_text">职位</div>
        <div class="col-md-11 position_nav">
          <ul>
            <li><a href="#">Java工程师</a></li>
            <li><a href="#">前端工程师</a></li>
            <li><a href="#">大数据</a></li>
            <li><a href="#">网络工程师</a></li>
            <li><a href="#">c++工程师</a></li>
            <li><a href="#">安卓工程师</a></li>
            <li><a href="#">IOS工程师</a></li>
            <li><a href="#">算法工程师</a></li>
            <li><a href="#">信息技术岗位</a></li>
            <li><a href="#">游戏研发工程师</a></li>
            <li><a href="#">区块链</a></li>
            <li><a href="#">测试开发工程师</a></li>
            <li><a href="#">安全工程师</a></li>
            <li><a href="#">运维工程师</a></li>
            <li><a href="#">测试工程师</a></li>
            <li><a href="#">Java工程师</a></li>
            <li><a href="#">Java工程师</a></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 题目按照职位排序结束 -->

    <!-- 题目按照年份排序开始 -->
    <div class="year_exercise">
      <div class="container">
        <div class="col-md-1 position_text">年份</div>
        <div class="col-md-11 position_nav">
          <ul>
            <li><a href="#">2021</a></li>
            <li><a href="#">2020</a></li>
            <li><a href="#">2019</a></li>
            <li><a href="#">2018</a></li>
            <li><a href="#">2017</a></li>
            <li><a href="#">2016</a></li>
            <li><a href="#">2015</a></li>
            <li><a href="#">2014</a></li>
            <li><a href="#">2013</a></li>
            <li><a href="#">2012</a></li>
            <li><a href="#">2011</a></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 题目按照年份排序结束 -->

    <!-- 具体题目开始 -->
    <div id="team" class="team">
      <div class="container">
        <div class="team-members">
          <div class="col-md-3" style="margin-bottom: 10px">
            <div class="team-member text-center">
              <img
                class="t-pic"
                src="./exerciseImg/exercise1.png"
                style="width: 86px; height: 86px"
                title="name"
              />
              <h3>映客2020春招算法A卷</h3>
              <span style="font-size: 14px">热度指数:107</span>
              <ul class="t-social unstyled-list list-inline">
                <li style="color: #303030">难度系数:</li>
                <li>
                  <a
                    href="#"
                    class="iconfont icon-shoucang2"
                    style="color: #feb200"
                  ></a>
                  <a
                    href="#"
                    class="iconfont icon-shoucang2"
                    style="color: #feb200"
                  ></a>
                  <a
                    href="#"
                    class="iconfont icon-shoucang2"
                    style="color: #feb200"
                  ></a>
                </li>
                <div class="clearfix"></div>
              </ul>
            </div>
          </div>

          <div class="col-md-3" style="margin-bottom: 10px">
            <div class="team-member text-center">
              <img
                class="t-pic"
                src="./exerciseImg/exercise2.png"
                style="width: 86px; height: 86px"
                title="name"
              />
              <h3>浩鲸科技2020届算法B类</h3>
              <span style="font-size: 14px">热度指数:107</span>
              <ul class="t-social unstyled-list list-inline">
                <li style="color: #303030">难度系数:</li>
                <li>
                  <a
                    href="#"
                    class="iconfont icon-shoucang2"
                    style="color: #feb200"
                  ></a>
                  <a
                    href="#"
                    class="iconfont icon-shoucang2"
                    style="color: #feb200"
                  ></a>
                  <a
                    href="#"
                    class="iconfont icon-shoucang2"
                    style="color: #feb200"
                  ></a>
                </li>
                <div class="clearfix"></div>
              </ul>
            </div>
          </div>

          <div class="col-md-3" style="margin-bottom: 10px">
            <div class="team-member text-center">
              <img
                class="t-pic"
                src="./exerciseImg/exercise3.png"
                style="width: 86px; height: 86px"
                title="name"
              />
              <h3>网易2021校招笔试-文本挖掘算</h3>
              <span style="font-size: 14px">热度指数:107</span>
              <ul class="t-social unstyled-list list-inline">
                <li style="color: #303030">难度系数:</li>
                <li>
                  <a
                    href="#"
                    class="iconfont icon-shoucang2"
                    style="color: #feb200"
                  ></a>
                  
                  <a
                    href="#"
                    class="iconfont icon-shoucang2"
                    style="color: #feb200"
                  ></a>
                </li>
                <div class="clearfix"></div>
              </ul>
            </div>
          </div>

          <div class="col-md-3" style="margin-bottom: 10px">
            <div class="team-member text-center">
              <img
                class="t-pic"
                src="./exerciseImg/exercise4.png"
                style="width: 86px; height: 86px"
                title="name"
              />
              <h3>2021届阅文PHP方向笔试卷</h3>
              <span style="font-size: 14px">热度指数:107</span>
              <ul class="t-social unstyled-list list-inline">
                <li style="color: #303030">难度系数:</li>
                <li>
                  <a
                    href="#"
                    class="iconfont icon-shoucang2"
                    style="color: #feb200"
                  ></a>
                  <a
                    href="#"
                    class="iconfont icon-shoucang2"
                    style="color: #feb200"
                  ></a>
                  <a
                    href="#"
                    class="iconfont icon-shoucang2"
                    style="color: #feb200"
                  ></a>
                </li>
                <div class="clearfix"></div>
              </ul>
            </div>
          </div>

          <div class="col-md-3" style="margin-bottom: 10px">
            <div class="team-member text-center">
              <img
                class="t-pic"
                src="./exerciseImg/exercise5.png"
                style="width: 86px; height: 86px"
                title="name"
              />
              <h3>爱奇艺2020校招Android方向笔试题（第二场）</h3>
              <span style="font-size: 14px">热度指数:107</span>
              <ul class="t-social unstyled-list list-inline">
                <li style="color: #303030">难度系数:</li>
                <li>
                  <a
                    href="#"
                    class="iconfont icon-shoucang2"
                    style="color: #feb200"
                  ></a>
                  <a
                    href="#"
                    class="iconfont icon-shoucang2"
                    style="color: #feb200"
                  ></a>
                  <a
                    href="#"
                    class="iconfont icon-shoucang2"
                    style="color: #feb200"
                  ></a>
                </li>
                <div class="clearfix"></div>
              </ul>
            </div>
          </div>

          <div class="col-md-3" style="margin-bottom: 10px">
            <div class="team-member text-center">
              <img
                class="t-pic"
                src="./exerciseImg/exercise6.png"
                style="width: 86px; height: 86px"
                title="name"
              />
              <h3>小红书2020校招Android方向笔试题卷三</h3>
              <span style="font-size: 14px">热度指数:107</span>
              <ul class="t-social unstyled-list list-inline">
                <li style="color: #303030">难度系数:</li>
                <li>
                  <a
                    href="#"
                    class="iconfont icon-shoucang2"
                    style="color: #feb200"
                  ></a>
                </li>
                <div class="clearfix"></div>
              </ul>
            </div>
          </div>
          <div class="col-md-3" style="margin-bottom: 10px">
            <div class="team-member text-center">
              <img
                class="t-pic"
                src="./exerciseImg/exercise7.png"
                style="width: 86px; height: 86px"
                title="name"
              />
              <h3>金山办公2020校招大数据和机器学习算法笔试题（一）</h3>
              <span style="font-size: 14px">热度指数:107</span>
              <ul class="t-social unstyled-list list-inline">
                <li style="color: #303030">难度系数:</li>
                <li>
                  <a
                    href="#"
                    class="iconfont icon-shoucang2"
                    style="color: #feb200"
                  ></a>
                  <a
                    href="#"
                    class="iconfont icon-shoucang2"
                    style="color: #feb200"
                  ></a>
                  <a
                    href="#"
                    class="iconfont icon-shoucang2"
                    style="color: #feb200"
                  ></a>
                </li>
                <div class="clearfix"></div>
              </ul>
            </div>
          </div>
          <div class="col-md-3" style="margin-bottom: 10px">
            <div class="team-member text-center">
              <img
                class="t-pic"
                src="./exerciseImg/exercise8.png"
                style="width: 86px; height: 86px"
                title="name"
              />
              <h3>奇安信2019春招客户端开发试题</h3>
              <span style="font-size: 14px">热度指数:107</span>
              <ul class="t-social unstyled-list list-inline">
                <li style="color: #303030">难度系数:</li>
                <li>
                  <a
                    href="#"
                    class="iconfont icon-shoucang2"
                    style="color: #feb200"
                  ></a>
                  <a
                    href="#"
                    class="iconfont icon-shoucang2"
                    style="color: #feb200"
                  ></a>
                  <a
                    href="#"
                    class="iconfont icon-shoucang2"
                    style="color: #feb200"
                  ></a>
                </li>
                <div class="clearfix"></div>
              </ul>
            </div>
          </div>
          <div class="col-md-3" style="margin-bottom: 10px">
            <div class="team-member text-center">
              <img
                class="t-pic"
                src="./exerciseImg/exercise9.png"
                style="width: 86px; height: 86px"
                title="name"
              />
              <h3>途虎养车2021秋招算法笔试试卷B</h3>
              <span style="font-size: 14px">热度指数:107</span>
              <ul class="t-social unstyled-list list-inline">
                <li style="color: #303030">难度系数:</li>
                <li>
                  <a
                    href="#"
                    class="iconfont icon-shoucang2"
                    style="color: #feb200"
                  ></a>
                  <a
                    href="#"
                    class="iconfont icon-shoucang2"
                    style="color: #feb200"
                  ></a>
                </li>
                <div class="clearfix"></div>
              </ul>
            </div>
          </div>
          <div class="col-md-3" style="margin-bottom: 10px">
            <div class="team-member text-center">
              <img
                class="t-pic"
                src="./exerciseImg/exercise10.png"
                style="width: 86px; height: 86px"
                title="name"
              />
              <h3>途虎养车2021秋招算法笔试试卷B</h3>
              <span style="font-size: 14px">热度指数:107</span>
              <ul class="t-social unstyled-list list-inline">
                <li style="color: #303030">难度系数:</li>
                <li>
                  <a
                    href="#"
                    class="iconfont icon-shoucang2"
                    style="color: #feb200"
                  ></a>
                  <a
                    href="#"
                    class="iconfont icon-shoucang2"
                    style="color: #feb200"
                  ></a>
                  <a
                    href="#"
                    class="iconfont icon-shoucang2"
                    style="color: #feb200"
                  ></a>
                </li>
                <div class="clearfix"></div>
              </ul>
            </div>
          </div>

          <div class="col-md-3" style="margin-bottom: 10px">
            <div class="team-member text-center">
              <img
                class="t-pic"
                src="./exerciseImg/exercise11.png"
                style="width: 86px; height: 86px"
                title="name"
              />
              <h3>TME2022校园招聘移动客户端类岗位笔试（II）</h3>
              <span style="font-size: 14px">热度指数:107</span>
              <ul class="t-social unstyled-list list-inline">
                <li style="color: #303030">难度系数:</li>
                <li>
                  <a
                    href="#"
                    class="iconfont icon-shoucang2"
                    style="color: #feb200"
                  ></a>
                  <a
                    href="#"
                    class="iconfont icon-shoucang2"
                    style="color: #feb200"
                  ></a>
                </li>
                <div class="clearfix"></div>
              </ul>
            </div>
          </div>

          <div class="col-md-3" style="margin-bottom: 10px">
            <div class="team-member text-center">
              <img
                class="t-pic"
                src="./exerciseImg/exercise12.png"
                style="width: 86px; height: 86px"
                title="name"
              />
              <h3>小米2020校招Android工程师笔试题一</h3>
              <span style="font-size: 14px">热度指数:107</span>
              <ul class="t-social unstyled-list list-inline">
                <li style="color: #303030">难度系数:</li>
                <li>
                  <a
                    href="#"
                    class="iconfont icon-shoucang2"
                    style="color: #feb200"
                  ></a>
                  <a
                    href="#"
                    class="iconfont icon-shoucang2"
                    style="color: #feb200"
                  ></a>
                  <a
                    href="#"
                    class="iconfont icon-shoucang2"
                    style="color: #feb200"
                  ></a>
                </li>
                <div class="clearfix"></div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 具体题目结束 -->

    <!-- 底部开始 -->
    <Footer />
    <!-- 底部结束 -->
  </div>
</template>

<script>
import TopNav from "../../components/topnav/TopNav.vue";
import Header from "../../components/header/Header.vue";
import Footer from "../../components/footer/Footer.vue";
import PageHeader from "../../components/page_header/PageHeader.vue";
export default {
  name: "Exercise",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  mounted() {
    $(".loader").fadeOut(800);
  },
  components: {
    Footer,
    Header,
    PageHeader,
    TopNav,
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
@import "./exercise.css";
@import "./css/style.css";
</style>