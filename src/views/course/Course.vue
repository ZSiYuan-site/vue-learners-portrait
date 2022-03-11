<template>
  <div class="video">
    <!-- <a href="#" class="scrollToTop"><i class="fa fa-angle-up"></i></a> -->
    <!--Loader-->
    <!-- <div class="loader">
      <div class="bouncybox">
        <div class="bouncy"></div>
      </div>
    </div> -->

    <!-- 最顶部的导航开始 -->
    <TopNav />
    <!-- 最顶部的导航结束 -->

    <!-- 头部导航开始 -->
    <Header />
    <!-- 头部导航结束 -->

    <!--页头部分开始-->
    <PageHeader />
    <!--页头部分结束-->

    <!-- 搜索课程开始 -->
    <section class="search_course_nav">
      <ul class="coursesLists">
        <li
          @click="showAllCourseHandle"
          :class="{ allCourseText: isAllCourseHightLight }"
        >
          全部
        </li>
        <li
          v-for="(course, index) in allCoursesInfo"
          :key="index"
          @click="chooseCourse(index)"
          :class="{ allCourseText: index === navIndex }"
        >
          {{ course.name }}
        </li>
      </ul>
      <div class="searchCourse">
        <div style="margin-top: 15px">
          <el-input placeholder="请输入内容" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
    </section>
    <!-- 搜索课程结束 -->

    <!-- 主要课程开始 -->
    <section id="course_all" class="padding-bottom">
      <div class="container">
        <div class="row">
          <div
            class="col-sm-6 col-md-4"
            v-for="(item, index) in showAllCourse === true
              ? allCourseLists
              : currentShowCourse"
            :key="index"
          >
            <div
              class="course margin_top wow fadeIn"
              data-wow-delay="400ms"
              style="margin-top: 20px"
            >
              <a @click="gotoCourseDetail('/course/course_introduce')">
                <div class="image bottom25">
                  <img
                    src="./courseImg/course1.jpg"
                    alt="Course"
                    class="border_radius"
                  />
                </div>
                <h3 class="bottom10">
                  {{ item.name }}
                </h3>
                <p
                  class="bottom20"
                  style="margin-bottom: 10px; margin-top: 10px"
                >
                  大前端技术课程是目前最流行的课程，作为一个前端工程师的必备知识储备
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 主要课程结束 -->


    <!-- 分页器开始 -->
    <div style="width: 100%; text-align: center; margin-bottom: 20px">
      <div class="pagination_wrap">
        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
      </div>
    </div>
    <!-- 分页器结束 -->

    <!-- 底部开始 -->
    <Footer />
    <!-- 底部结束 -->
  </div>
</template>

<script>
import Header from "../../components/header/Header.vue";
import TopNav from "../../components/topnav/TopNav.vue";
import PageHeader from "../../components/page_header/PageHeader.vue";
import Footer from "../../components/footer/Footer.vue";
import { mapState } from "vuex";
export default {
  name: "Video",
  data() {
    return {
      currentShowCourse: [], //当前展示的课程数据
      showAllCourse: true, //标识当前是否是展示所有的课程视频
      isAllCourseHightLight: true, //控制 【全部】高亮效果
      navIndex: -1, //控制文字高亮效果
    };
  },
  mounted() {
    $(".loader").fadeOut(800);
    this.$store.dispatch("getAllCoursesInfoAction");
  },
  methods: {
    gotoCourseDetail(path) {
      this.$router.push(path);
    },
    goto(path) {
      if (path !== this.$router.path) {
        this.$router.push(path);
      }
    },
    // 视频--选择的回调函数
    chooseCourse(index) {
      this.isAllCourseHightLight = false; //干掉【全部】 高亮效果
      this.navIndex = index;
      this.showAllCourse = false; // 当前不展示所有视频
      this.currentShowCourse = this.allCoursesInfo[index].children;
    },
    // 点击展示所有视频的回调函数
    showAllCourseHandle() {
      this.showAllCourse = true; //是 展示全部课程
      this.isAllCourseHightLight = true; //让【全部】 高亮
      this.navIndex = -1; //干掉其他文字高亮
    },
  },
  computed: {
    ...mapState({
      allCoursesInfo: (state) => state.allCoursesInfo,
      allCourseLists: (state) => state.allCourseLists,
    }),
  },
  components: {
    TopNav,
    Header,
    PageHeader,
    Footer,
  },
};
</script>

<style scoped>
@import "./css/course.css";
a {
  cursor: pointer;
}

/* 搜索框样式开始 */
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
/* 搜索框样式开始 */
</style>