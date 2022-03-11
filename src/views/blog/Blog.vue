<template>
  <div class="blog">
    <!-- 最顶部的导航开始 -->
    <TopNav />
    <!-- 最顶部的导航结束 -->

    <!-- 头部导航开始 -->
    <Header />
    <!-- 头部导航结束 -->

    <!--Search-->
    <div id="search">
      <button type="button" class="close">×</button>
      <form>
        <input type="search" value="" placeholder="Search here...." required />
        <button type="submit" class="btn btn_common blue">Search</button>
      </form>
    </div>

    <!--Page Header-->
    <section class="page_header padding-top">
      <div class="container">
        <div class="row">
          <div class="col-md-12 page-content">
            <h1>Our Blog</h1>
            <p>
              We offer the most complete house renovating services in the
              country
            </p>
            <div class="page_nav">
              <span>You are here:</span> <a href="index.html">Home</a>
              <span><i class="fa fa-angle-double-right"></i>Blog</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--博客内容开始-->
    <section id="blog" class="padding">
      <div class="container">
        <h2 class="hidden">Our Blog</h2>
        <div class="row">
          <!-- 博客左侧内容开始 -->
          <div class="col-md-9">
            <article
              class="blog_item heading_space wow fadeInLeft"
              data-wow-delay="300ms"
            >
              <div class="row">
                <div class="col-md-2 col-sm-2 heading_space">
                  <div class="image">
                    <img
                      src="./img/blog8.jpg"
                      alt="blog"
                      class="border_radius"
                      style="width: 100px; height: 100px"
                    />
                  </div>
                </div>
                <div class="col-md-10 col-sm-10 heading_space">
                  <h4>用JavaScript编写一个非常简单的Markdown解析器</h4>
                  <ul class="comment margin10">
                    <li><a href="#.">May 10, 2016</a></li>
                    <li>
                      <a href="#."><i class="icon-comment"></i> 5</a>
                    </li>
                  </ul>
                  <p class="margin10" style="font-size: 14px">
                    React组件进阶组件通讯介绍组件是独立且封闭的单元，默认情况下，只能使用组件自己的数据。
                    参数 prop...
                  </p>
                </div>
              </div>
            </article>
            <article
              class="blog_item heading_space wow fadeInLeft"
              data-wow-delay="300ms"
            >
              <div class="row">
                <div class="col-md-2 col-sm-2 heading_space">
                  <div class="image">
                    <img
                      src="./img/blog6.jpg"
                      alt="blog"
                      class="border_radius"
                      style="width: 100px; height: 100px"
                    />
                  </div>
                </div>
                <div class="col-md-10 col-sm-10 heading_space">
                  <h4>
                    福厦高铁最新进展：湄洲湾跨海特大桥成功合龙，全长 14.7 公里
                  </h4>
                  <ul class="comment margin10">
                    <li><a href="#.">May 10, 2016</a></li>
                    <li>
                      <a href="#."><i class="icon-comment"></i> 5</a>
                    </li>
                  </ul>
                  <p class="margin10" style="font-size: 14px">
                    昨日，OPPO
                    广东移动通信有限公司公开了“安全防护方法及装置、介质、电子设备及车辆”专利，公开号为
                    CN113642111A
                  </p>
                </div>
              </div>
            </article>
            <article
              class="blog_item heading_space wow fadeInLeft"
              data-wow-delay="300ms"
            >
              <div class="row">
                <div class="col-md-2 col-sm-2 heading_space">
                  <div class="image">
                    <img
                      src="../../assets/images/blog1.jpg"
                      alt="blog"
                      class="border_radius"
                      style="width: 100px; height: 100px"
                    />
                  </div>
                </div>
                <div class="col-md-10 col-sm-10 heading_space">
                  <h4>台积电创始人张忠谋：芯片短缺原因之一是使用方低估需求</h4>
                  <ul class="comment margin10">
                    <li><a href="#.">May 10, 2016</a></li>
                    <li>
                      <a href="#."><i class="icon-comment"></i> 5</a>
                    </li>
                  </ul>
                  <p class="margin10" style="font-size: 14px">
                    代码拖更”的经历，不知你遇到过没？就是你看上了一篇论文或者项目，作者声称代码会开源或者已开源，但你左等右等，每天查查
                    GitHub，代码就是一直没发布。
                  </p>
                </div>
              </div>
            </article>
            <article
              class="blog_item heading_space wow fadeInLeft"
              data-wow-delay="300ms"
            >
              <div class="row">
                <div class="col-md-2 col-sm-2 heading_space">
                  <div class="image">
                    <img
                      src="./img/blog1.jpg"
                      alt="blog"
                      class="border_radius"
                      style="width: 100px; height: 100px"
                    />
                  </div>
                </div>
                <div class="col-md-10 col-sm-10 heading_space">
                  <h4>黑龙江：快递业到 2025 年全面禁用不可降解塑料包装</h4>
                  <ul class="comment margin10">
                    <li><a href="#.">May 10, 2016</a></li>
                    <li>
                      <a href="#."><i class="icon-comment"></i> 5</a>
                    </li>
                  </ul>
                  <p class="margin10" style="font-size: 14px">
                    开发者发现手机加速度计数据可被随意读取：iOS
                    关不掉权限，安卓已做出限制
                    开发者发现手机加速度计数据可被随意读取：iOS
                    关不掉权限，安卓已做出限制 现在 App
                    泄露信息已经不是什么新鲜事了，手机存储，应用列表，定位，剪切板……
                    不过这些都可以通过权限管理关掉。但是有一样权限请求无法关闭，它和被封装在核
                  </p>
                </div>
              </div>
            </article>
            <article
              class="blog_item heading_space wow fadeInLeft"
              data-wow-delay="300ms"
            >
              <div class="row">
                <div class="col-md-2 col-sm-2 heading_space">
                  <div class="image">
                    <img
                      src="./img/blog2.jpg"
                      alt="blog"
                      class="border_radius"
                      style="width: 100px; height: 100px"
                    />
                  </div>
                </div>
                <div class="col-md-10 col-sm-10 heading_space">
                  丰田宣布日本所有工厂将恢复正常运营，12 月计划产 80 万辆车
                  <ul class="comment margin10">
                    <li><a href="#.">May 10, 2016</a></li>
                    <li>
                      <a href="#."><i class="icon-comment"></i> 5</a>
                    </li>
                  </ul>
                  <p class="margin10" style="font-size: 14px">
                    马斯克再抛 120 万特斯拉股票：本周累计抛售 70 亿美元
                    据报道，利用公司市值飙升至 1 万亿美元的迅速上涨机会，特斯拉
                    CEO 埃隆・马斯克（Elon Musk）本周出售了高达 69
                    亿美元的特斯拉股票
                  </p>
                </div>
              </div>
            </article>
            <article
              class="blog_item heading_space wow fadeInLeft"
              data-wow-delay="300ms"
            >
              <div class="row">
                <div class="col-md-2 col-sm-2 heading_space">
                  <div class="image">
                    <img
                      src="./img/blog4.jpg"
                      alt="blog"
                      class="border_radius"
                      style="width: 100px; height: 100px"
                    />
                  </div>
                </div>
                <div class="col-md-10 col-sm-10 heading_space">
                  <h4>OPPO 公开安全防护专利，可模拟危险对象的防护对象特征</h4>
                  <ul class="comment margin10">
                    <li><a href="#.">May 10, 2016</a></li>
                    <li>
                      <a href="#."><i class="icon-comment"></i> 5</a>
                    </li>
                  </ul>
                  <p class="margin10" style="font-size: 14px">
                    据报道，当地时间周四，戴姆勒公司宣布已经以约 3.05 亿欧元（约
                    22.33 亿元人民币）的价格出售了所持有的雷诺公司全部股份
                  </p>
                </div>
              </div>
            </article>
          </div>
          <!-- 博客左侧内容结束 -->

          <!-- 右侧侧边栏开始 -->
          <div class="col-md-3">
            <aside
              class="sidebar bg_grey border-radius wow fadeIn"
              data-wow-delay="300ms"
            >
              <div class="widget heading_space">
                <form class="widget_search border-radius">
                  <el-input placeholder="请输入内容" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                  </el-input>
                </form>
              </div>
              <div class="widget heading_space">
                <h3 class="bottom20">博客专家</h3>
                <div class="media">
                  <a class="media-left" href="#."
                    ><img
                      src="../../assets/images/profile1.png"
                      alt="post"
                      style="width: 50px; height: 50px"
                  /></a>
                  <div class="media-body">
                    <h5 class="bottom5">萝卜欧特</h5>
                    <span class="name">Java开发工程师</span>
                  </div>
                  <p style="margin-top: 5px">欧文，广东科技大学-软件工程...</p>
                </div>
                <div class="media">
                  <a class="media-left" href="#."
                    ><img
                      src="./img/h1.jpg"
                      alt="post"
                      style="width: 50px; height: 50px; border-radius: 50%"
                  /></a>
                  <div class="media-body">
                    <h5 class="bottom5">达瓦</h5>
                    <span class="name">Java开发工程师</span>
                  </div>
                  <p style="margin-top: 5px">雷文，武汉科技大学-软件工程...</p>
                </div>
                <div class="media">
                  <a class="media-left" href="#."
                    ><img
                      src="./img/h2.jpg"
                      alt="post"
                      style="width: 50px; height: 50px; border-radius: 50%"
                  /></a>
                  <div class="media-body">
                    <h5 class="bottom5">萝卜</h5>
                    <span class="name">Java开发工程师</span>
                  </div>
                  <p style="margin-top: 5px">雷文，清华大学-电子信息工程...</p>
                </div>
              </div>
              <div class="widget heading_space">
                <h3 class="bottom20">今日推荐</h3>
                <div class="media">
                  <a class="media-left" href="#."
                    ><img
                      src="../../assets/images/news.png"
                      alt="post"
                      style="width: 50px; height: 50px"
                  /></a>
                  <div class="media-body">
                    <h5 class="bottom5" style="line-height: 20px">
                      HDFS RBF模式RPC吞吐量瓶颈的优化探索
                    </h5>
                  </div>
                </div>
                <div class="media">
                  <a class="media-left" href="#."
                    ><img
                      src="./img/p1.jpg"
                      alt="post"
                      style="width: 50px; height: 50px"
                  /></a>
                  <div class="media-body">
                    <h5 class="bottom5" style="line-height: 20px">
                      斯克再抛 120 万特斯拉股票：本周累计抛售 70 亿美元
                    </h5>
                  </div>
                </div>
                <div class="media">
                  <a class="media-left" href="#."
                    ><img
                      src="./img/p2.jpg"
                      alt="post"
                      style="width: 50px; height: 50px"
                  /></a>
                  <div class="media-body">
                    <h5 class="bottom5" style="line-height: 20px">
                      HDFS 超 3
                      亿欧元，奔驰母公司戴姆勒宣布出售所持雷诺的全部股份
                    </h5>
                  </div>
                </div>
              </div>
            </aside>
          </div>
          <!-- 右侧侧边栏结束 -->
        </div>
      </div>
    </section>
    <!--博客内容结束-->

    <!-- 底部开始 -->
    <Footer />
    <!-- 底部结束 -->
  </div>
</template>

<script>
import TopNav from "../../components/topnav/TopNav.vue";
import Header from "../../components/header/Header.vue";
import Footer from "../../components/footer/Footer.vue";
export default {
  methods: {
    goto(path) {
      if (path !== this.$router.path) {
        this.$router.push(path);
      }
    },
  },
  components: {
    TopNav,
    Header,
    Footer,
  },
};
</script>

<style>
</style>