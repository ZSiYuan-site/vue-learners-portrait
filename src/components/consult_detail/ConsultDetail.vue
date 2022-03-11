<template>
  <div class="consultDetail">
    <!-- 最顶部的导航开始 -->
    <TopNav />
    <!-- 最顶部的导航结束 -->

    <!-- 头部导航开始 -->
    <Header />
    <!-- 头部导航结束 -->

    <!--页头部分开始-->
    <PageHeader />
    <!--页头部分结束-->

    <!-- 资讯主要内容开始 -->
    <div class="content" style="margin-top: 20px">
      <div class="wrap">
        <div class="post">
          <!-- 头部 -->
          <div class="consultHeader">
            <span style="float: left; font-size: 50px; font-weight: bold"
              >IT资讯</span
            >
            <span style="float: right">
              <el-input placeholder="请输入内容" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
              <p style="font-size: 13px; margin-top: 10px">
                <span>热搜: </span>
                <span style="margin-left: 10px"> 微信</span>
                <span style="margin-left: 10px"> 京东</span>
                <span style="margin-left: 10px"> edg</span>
              </p>
            </span>
            <div class="clearfix"></div>
            <h1>
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }"
                  >首页</el-breadcrumb-item
                >
                <el-breadcrumb-item>IT资讯</el-breadcrumb-item>
                <el-breadcrumb-item>通信</el-breadcrumb-item>
              </el-breadcrumb>
            </h1>
          </div>
          <!-- 头部 -->

          <!-- 左边开始 -->
          <div class="post-fl fl">
            <div class="post-a1">百度网盘宣布上线企业版，目前已有三万客户</div>
            <div class="post-a2">
              shuiguodaren<span>2015-11-02</span>
              <div class="col-c">
                <span><img src="./images/col-c1.jpg" />0</span>
                <span><img src="./images/col-c2.jpg" />3</span>
                <em><img src="./images/col-c3.jpg" /></em>
                <em><img src="./images/col-c4.jpg" /></em>
                <em><img src="./images/col-c5.jpg" /></em>
              </div>
            </div>
            <div class="post-a4"><img src="./images/consult5.jpg" /></div>
            <div class="post-b">
              <p>
                行业周知，闻泰科技成功收购安世集团后，一举成为 A 股最大的功率
                IDM 厂商，但鲜为外界所知的是，这其中还包括半导体设备公司
                ITEC。11 月 7 日，闻泰科技旗下半导体设备公司 ITEC
                首次亮相进博会。
              </p>

              <p>
                目前，ITEC 提供以下标杆性解决方案，从而实现先进的半导体制造：
                适用于裸片粘接和芯片测试的 ADAT 组装设备 ——
                最快速的组装设备，每秒处理的裸片数最多达 20
                片，每个系统每天生产的芯片数达 150 万片。 Parset 测试平台 ——
                用于小信号器件和功率 MOS 器件的电气参数测试，速度高达每小时
                92,000 片芯片。
                用于半导体前道和后道制造的智能视觉检测系统，采用深度学习技术。
                工厂自动化和智能制造 ——
                完整的设备控制软件套件，将计划、优化、可追溯性和分析功能组合在一起，利用“大数据”分析和机器学习技术，在大批量半导体制造中实现行业领先的工业
                4.0 生产。
              </p>
              <p>
                总经理 Marcel Vugts 表示：ITEC
                扎根于半导体制造领域，作为飞利浦、恩智浦和 Nexperia
                的合作伙伴，我们将 30
                多年来的自动化专业知识与最先进的设备结合起来。
              </p>
            </div>
            <div class="post-a5"><img src="./images/consultDeatil4.jpg" /></div>
            <div class="post-b">
              <p>
                IT之家 11 月 7 日消息，网络安全公司 Cloudflare 于 11 月 6
                日公布了 2021 年第三季度全球 DDoS 攻击报告。报告显示，该季度全球
                DDoS 攻击数量达到了创纪录的水平，增长
                44%，期间出现过几次创纪录的 HTTP DDoS 攻击，达到 TB
                级别，最高可达 1720 万
                rps（每秒请求次数），这一次是针对金融公司。
              </p>
              <p>
                Cloudflare 表示，摩洛哥在第三季度经历了全球最大规模的 DDoS
                攻击，这期间每 100 个数据包中有 3 个属于 DDoS 攻击。
              </p>
            </div>

            <div class="det-b">
              <div class="det-title">
                <img src="./images/cou-b1.jpg" />在线评论
              </div>
              <div class="det-b1">
                <textarea class="det-area post-area"></textarea>
                <div class="det-b2">
                  <a @click="goto('/login')" style="color: #4587d9">登录</a>发表
                </div>
              </div>
              <div class="det-b3">
                <input
                  type="button"
                  class="det-btn"
                  value="发表"
                  style="background: #4587d9"
                />
              </div>
            </div>
            <div class="skt">
              <div class="skt-title">
                <h3 class="skt-cut" style="margin-top: 30px">全部评论</h3>
              </div>
              <div class="skt-tab">
                <div class="skt-btm">
                  <ul class="skt-ul">
                    <li>
                      <div class="skt-a1">
                        <img src="./upload/det-tx.jpg" />2015-11-02
                        <div class="menu">
                          <a href="#">14楼</a>
                        </div>
                      </div>
                      <div class="skt-a2">怎么报名啊？直接交钱吗？</div>
                      <div class="skt-a3">
                        <a href="#"><img src="./upload/det-b.jpg" />我要回复</a>
                        <div class="menu-a">
                          <img src="./images/menu-a1.jpg" />0
                          <span><img src="./images/menu-a2.jpg" />0</span>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div class="skt-a1">
                        <img src="./upload/det-tx.jpg" />2015-11-02
                        <div class="menu">
                          <a href="#">15楼</a>
                        </div>
                      </div>
                      <div class="skt-a2">怎么报名啊？直接交钱吗？</div>
                      <div class="skt-a3">
                        <a href="#"><img src="./upload/det-b.jpg" />我要回复</a>
                        <div class="menu-a">
                          <img src="./images/menu-a1.jpg" />0
                          <span><img src="./images/menu-a2.jpg" />0</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- 左边结束 -->

          <!-- 右边开始 -->
          <div class="post-fr fr">
            <!-- 近期资讯榜单 -->
            <div class="post-r" style="padding: 15px">
              <div class="post-r1">
                <ul class="consult_lists">
                  <li class="active"><a href="">日榜</a></li>
                  <li><a href="">日榜</a></li>
                  <li><a href="">日榜</a></li>
                </ul>
                <ul>
                  <li>
                    <span class="tegBox">1</span>
                    <span class="newsContent_li"
                      >微软 Win11 安卓子系统已支持</span
                    >
                  </li>
                  <li>
                    <span class="tegBox">1</span>
                    <span class="newsContent_li"
                      >TiDB黄东旭：In Community We</span
                    >
                  </li>
                  <li>
                    <span class="tegBox">1</span>
                    <span class="newsContent_li"
                      >直接学 Vue 3 吧 —— 对话 Vue.</span
                    >
                  </li>
                  <li>
                    <span class="tegBox">1</span>
                    <span class="newsContent_li"
                      >手撸 SpringBoot DDD 微服务</span
                    >
                  </li>
                  <li>
                    <span class="tegBox">1</span>
                    <span class="newsContent_li"
                      >千万不要轻易尝试“熊猫烧香</span
                    >
                  </li>
                  <li>
                    <span class="tegBox">1</span>
                    <span class="newsContent_li"
                      >《关于我横扫一线厂的那些面经</span
                    >
                  </li>
                  <li>
                    <span class="tegBox">1</span>
                    <span class="newsContent_li"
                      >难以置信！一篇文章就梳理清楚</span
                    >
                  </li>
                  <li>
                    <span class="tegBox">1</span>
                    <span class="newsContent_li"
                      >Python OpenCV 的知识体系 </span
                    >
                  </li>
                  <li>
                    <span class="tegBox">1</span>
                    <span class="newsContent_li"
                      >2021弹性计算技术图谱好课上</span
                    >
                  </li>
                  <li>
                    <span class="tegBox">1</span>
                    <span class="newsContent_li"
                      >对标大厂标准，C站（CSDN）</span
                    >
                  </li>
                </ul>
              </div>
            </div>

            <!-- 右边的一张图片 -->
            <div class="post-t">
              <a href="#"><img src="./upload/post-a3.jpg" /></a>
            </div>

            <div class="post-y">
              <div class="post-y1">
                <img src="./images/cou-b1.jpg" />推荐资讯
              </div>
              <ul>
                <a href="#">
                  <li>
                    <div class="post-y2">
                      <img src="./images/img1.jpg" />
                    </div>
                    <div class="post-y3">
                      华为梁华：全球 70 亿人，平均每人每天产生的数据高达 1.5GB
                    </div>
                  </li>
                </a>

                <a href="#">
                  <li>
                    <div class="post-y2">
                      <img src="./images/img2.jpg" />
                    </div>
                    <div class="post-y3">
                      华为梁华：全球 70 亿人，平均每人每天产生的数据高达 1.5GB
                    </div>
                  </li>
                </a>

                <a href="#">
                  <li>
                    <div class="post-y2">
                      <img src="./images/img3.jpg" />
                    </div>
                    <div class="post-y3">
                      华为梁华：全球 70 亿人，平均每人每天产生的数据高达 1.5GB
                    </div>
                  </li>
                </a>

                <a href="#">
                  <li>
                    <div class="post-y2">
                      <img src="./images/img4.jpg" />
                    </div>
                    <div class="post-y3">
                      华为梁华：全球 70 亿人，平均每人每天产生的数据高达 1.5GB
                    </div>
                  </li>
                </a>
              </ul>
            </div>
          </div>
          <!-- 右边结束 -->
        </div>
      </div>
    </div>
    <!-- 资讯主要内容结束 -->

    <!-- 底部开始 -->
    <Footer />
    <!-- 底部结束 -->
  </div>
</template>

<script>
import TopNav from "../topnav/TopNav.vue";
import Header from "../header/Header.vue";
import PageHeader from "../../components/page_header/PageHeader.vue";
import Footer from "../footer/Footer.vue";
export default {
  data() {
    return {};
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    },
  },
  components: {
    TopNav,
    Header,
    PageHeader,
    Footer,
  },
};
</script>

<style>
@import "./css/base.css";
@import "./css/style.css";
.consultHeader {
  margin: 30px 0px 50px 0px;
}
.consult_lists {
  display: flex;
  margin-bottom: 10px;
}
.consult_lists li {
  width: 45px;
  height: 30px;
  font-size: 15px;
  text-align: center;
}
.consult_lists li:hover {
  border-bottom: 2px solid #4587d9;
}
.active {
  border-bottom: 2px solid #4587d9;
}

/* 资讯列表 */

/* 小正方形盒子 */
.tegBox {
  width: 18px;
  height: 18px;
  background: #afb2b7;
  display: inline-block;
  text-align: center;
  line-height: 20px;
  margin-right: 10px;
  color: #fff;
}
/* 每个小的li */
.newsContent_li {
  font-size: 12px;
  margin-bottom: 10px;
  line-height: 24px;
}
</style>