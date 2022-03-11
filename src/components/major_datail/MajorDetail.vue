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

    <!-- 头部开始 -->
    <div class="major_detail_header" style="margin-top: 30px">
      <div class="container">
        <div class="row">
          <div class="col-md-12 title_l">
            <h2 style="margin-bottom: 10px">计算机科学与技术</h2>
            <div style="height: 1px; width: 600px; background: #eeeeee"></div>
            <p>
              <span>本科</span>
              <span>专业代码：080901</span>
              <span>修业年限：四年</span>
              <span>授予学位：理学学士,工学学士</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 头部结束 -->

    <!-- 导航开始 -->
    <div class="major_detail_nav">
      <div class="container">
        <div class="row">
          <div class="col-md-9">
            <div class="nav">
              <span :class="{ active: num == 1 }" @click="handleMajor"
                >专业概况</span
              >
              <span :class="{ active: num == 2 }" @click="handleEmployment"
                >相关就业</span
              >
            </div>
          </div>
          <div class="col-md-3"></div>
        </div>
      </div>
    </div>
    <!-- 导航结束 -->

    <!-- 专业介绍内容开始 -->
    <div class="major_detail_content">
      <div class="container">
        <div class="row">
          <!-- 左侧的 -->
          <div class="col-md-9">
            <!-- 专业概况的具体内容 -->
            <div class="major_infor" v-show="num == 1">
              <!-- 专业简介 -->
              <div class="major_des">
                <h3>专业简介</h3>
                <h4>是什么</h4>
                <p>
                  计算机科学与技术主要研究计算机的设计与制造，包含计算机软件、硬件的基本理论、技能与方法，进行计算机系统和软件的开发与维护、硬件的组装等。例如：Windows系统的维护，手机APP的开发，台式电脑的整机装配等。相较于网络工程、软件工程，计算机科学与技术专业所学范围更广。
                  关键词：计算机 Windows 软件 电脑主机
                </p>
                <h4>学什么</h4>
                <p>
                  《C++程序设计》、《Java语言程序设计》、《数据库系统原理》、《计算机网络原理》、《计算机系统结构》、《数据结构》、《操作系统》、《软件工程》、《离散数学》
                  部分高校按以下专业方向培养：NET、JAVA、大数据、云计算、软件工程、金融信息化、嵌入式软件、传媒设计与制作、计算机网络技术、移动互联网信息与技术。
                </p>
                <h4>干什么</h4>
                <p>
                  IT类企业：技术开发、程序设计、软件工程、硬件工程、产品经理、产品运营、产品设计；
                  政府、科研单位：网络安全、网络开发、系统维护、配置管理。
                </p>
              </div>
              <!-- 详解 -->
              <div class="details">
                <h3 style="margin-bottom: 10px">详解</h3>
                <p>
                  培养目标：本专业培养德、智、体等方面全面发展，掌握数学与自然科学基础知识以及计算
                  机、网络与信息系统相关的基本理论、基本知识、基本技能和基本方法，具有较强的专业能力和良
                  好的综合素质，能胜任计算机科学研究、计算机系统设计、开发与应用等工作的高级专门人才。
                  培养要求：
                  1．掌握马列主义、毛泽东思想与中国特色社会主义基本理论，具有良好的人文社会科学素
                  养、职业道德和心理素质，社会责任感强；
                  2．掌握从事本专业工作所需的数学（特别是离散数学）和其他相关的自然科学知识以及一
                  定的经济学与管理学知识；
                </p>
              </div>
            </div>

            <!-- 相关就业的具体内容 -->
            <div class="rel_job" v-show="num == 2">
              <!-- 就业行业分布 -->
              <div class="employment">
                <h3 style="margin-bottom: 10px">就业行业分布</h3>
                <div
                  style="width: auto; height: 400px"
                  id="employment_chart"
                ></div>
              </div>
              <!-- 就业岗位分布 -->
              <div class="position">
                <h3 style="margin-bottom: 10px">就业岗位分布</h3>
                <div
                  style="width: auto; height: 400px"
                  id="position_chart"
                ></div>
              </div>
              <!-- 就业地区分布 -->
              <div class="employment_area">
                <h3 style="margin-bottom: 10px">就业地区分布</h3>
                <div
                  style="width: auto; height: 400px"
                  id="employment_area_charts"
                ></div>
              </div>
            </div>
          </div>
          <!-- 右侧的 -->
          <div class="col-md-3">
            <div style="margin-bottom: 20px">
              <img
                src="./img/major_detail_one.jpg"
                alt=""
                style="height: auto; width: 100%"
              />
            </div>
            <div style="margin-bottom: 20px">
              <img
                src="./img/major_detail_two.jpg"
                alt=""
                style="height: auto; width: 100%"
              />
            </div>
            <div class="major_recommend">
              <h4 style="margin-bottom: 10px">相关专业推荐</h4>
              <div class="major_recommend_box">
                <ul>
                  <li>软件工程</li>
                  <li>网络工程</li>
                  <li>电子与计算机科学</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 专业介绍内容结束 -->

    <!-- 底部开始 -->
    <Footer />
    <!-- 底部结束 -->
  </div>
</template>

<script>
import TopNav from "../topnav/TopNav.vue";
import Footer from "../footer/Footer.vue";
import Header from "../header/Header.vue";
import PageHeader from "../page_header/PageHeader.vue";
export default {
  data() {
    return {
      value1: null,
      num: 1,
      employment_chart: "",
      position_chart: "",
      employment_area_charts: "",
    };
  },
  mounted() {
    $(".loader").fadeOut(800);
    // 在通过mounted调用即可
    // this.echartsInit();
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    },
    //初始化echarts
    echartsInit() {
      //就业行业
      this.employment_chart = this.$echarts
        .init(document.getElementById("employment_chart"))
        .setOption({
          dataset: {
            source: [
              ["score", "百分比", "product"],
              [89.3, 58212, "电信运营"],
              [57.1, 78254, "房地产"],
              [74.4, 41032, "金融投资"],
              [50.1, 12755, "教育培训"],
              [89.7, 20145, "电信设备"],
              [68.1, 79146, "系统集成"],
              [19.6, 91852, "互联网"],
              [10.6, 101852, "其他行业"],
              [32.7, 20112, "IT硬件"],
            ],
          },
          grid: { containLabel: true },
          xAxis: { name: "百分比" },
          yAxis: { type: "category" },
          visualMap: {
            orient: "horizontal",
            left: "center",
            min: 10,
            max: 100,
            text: ["高热度", "低热度"],
            dimension: 0,
            inRange: {
              color: ["#4587d9", "#136bcc", "#2e5cef"],
            },
          },
          series: [
            {
              type: "bar",
              encode: {
                // Map the "amount" column to X axis.
                x: "amount",
                // Map the "product" column to Y axis
                y: "product",
              },
            },
          ],
        });
      // 饼图（主要职业分布）
      this.position_chart = this.$echarts
        .init(document.getElementById("position_chart"))
        .setOption({
          title: {
            // text: "Referer of a Website",
            // subtext: "Fake Data",
            left: "center",
          },
          tooltip: {
            trigger: "item",
          },
          legend: {
            orient: "vertical",
            left: "left",
          },
          series: [
            {
              name: "Access From",
              type: "pie",
              radius: "50%",
              data: [
                { value: 1048, name: "前端开发" },
                { value: 735, name: "后端开发" },
                { value: 580, name: "技术支持" },
                { value: 484, name: "移动开发" },
                { value: 300, name: "测试" },
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)",
                },
              },
            },
          ],
        });
      // 就业地区分布
      this.employment_area_charts = this.$echarts
        .init(document.getElementById("employment_area_charts"))
        .setOption({
          dataset: [
            {
              dimensions: ["name", "age", "profession", "score", "date"],
              source: [
                ["Hannah Krause", 41, "Engineer", 314, "2011-02-12"],
                ["Zhao Qian", 20, "Teacher", 351, "2011-03-01"],
                ["Jasmin Krause ", 52, "Musician", 287, "2011-02-14"],
                ["Li Lei", 37, "Teacher", 219, "2011-02-18"],
                ["Karle Neumann", 25, "Engineer", 253, "2011-04-02"],
                ["Adrian Groß", 19, "Teacher", "-", "2011-01-16"],
                ["Mia Neumann", 71, "Engineer", 165, "2011-03-19"],
                ["Böhm Fuchs", 36, "Musician", 318, "2011-02-24"],
                ["Han Meimei", 67, "Engineer", 366, "2011-03-12"],
              ],
            },
            {
              transform: {
                type: "sort",
                config: { dimension: "score", order: "desc" },
              },
            },
          ],
          xAxis: {
            type: "category",
            axisLabel: { interval: 0, rotate: 30 },
          },
          yAxis: {},
          series: {
            type: "bar",
            encode: { x: "name", y: "score" },
            datasetIndex: 1,
          },
        });
    },
    // 点击【专业概况】 回调函数
    handleMajor() {
      this.num = 1;
      this.employment_chart = "";
      this.position_chart = "";
      this.employment_area_charts = "";
    },
    // 点击【相关就业】 回调函数
    handleEmployment() {
      this.num = 2;
      this.$nextTick(() => {
        this.echartsInit();
      });
    },
  },
  components: {
    TopNav,
    Footer,
    Header,
    PageHeader,
  },
};
</script>


<style>
@import "./major_detail.css";
</style>