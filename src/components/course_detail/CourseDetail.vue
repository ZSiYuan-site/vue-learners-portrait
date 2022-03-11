<template>
  <div class="courseDetail">
      <!-- 最顶部的导航开始 -->
      <TopNav />
      <!-- 最顶部的导航结束 -->

      <!-- 头部导航开始 -->
      <Header />
      <!-- 头部导航结束 -->

      <!--页头部分开始-->
      <PageHeader />
      <!--页头部分结束-->

      <!-- Courses -->
      <section id="course_all" class="padding-bottom-half padding-top">
        <div class="container">
          <div class="row">
            <div
              class="col-sm-8 course_detail wow fadeIn"
              data-wow-delay="400ms"
            >
              <!-- 下面是放视频的 -->
              <div class="prism-player" id="player-con"></div>

              <div class="detail_course" style="margin-top: 15px">
                <div class="info_label">
                  <span
                    ><i
                      class="iconfont icon-dianzan_kuai"
                      style="font-size: 25px"
                    ></i
                  ></span>
                  &nbsp;
                  <span style="font-size: 18px">3.3万</span>
                  &nbsp; &nbsp; &nbsp;
                </div>
              </div>
              <div class="bottom15"></div>

              <!-- 主讲老师概述 -->
              <div class="profile_bg heading_space">
                <h3 class="bottom20">主讲老师</h3>
                <div class="profile">
                  <div class="p_pic">
                    <img src="../../assets/images/profile1.png" alt="Course" />
                  </div>
                  <div class="profile_text">
                    <h5><strong>佩奇老师</strong> - <span>IT 专家</span></h5>
                    <p>
                      8年前端工作经验,曾在阿里担任前端架构师,作为前端的组长,获得阿里年终奖等等哈哈
                    </p>
                  </div>
                </div>
              </div>

              <p
                style="
                  font-size: 30px;
                  border-bottom: 1px solid #c8c8c8;
                  height: 50px;
                "
              >
                评论
              </p>

              <!-- 添加评论区域 -->
              <div class="profile_border" style="border-top: 0">
                <div class="profile top20 bottom20">
                  <div class="p_pic">
                    <img src="../../assets/images/profile2.png" alt="Course" />
                  </div>
                  <div class="profile_text">
                    <h5>
                      <textarea
                        name=""
                        id=""
                        placeholder="发一条友善的评论"
                        v-model="userComment"
                        style="
                          box-sizing: border-box;
                          background: #f4f5f7;
                          border-radius: 3px;
                          margin-left: 1em;
                          padding: 10px;
                          width: 500px;
                          height: 90px;
                        "
                      ></textarea>
                    </h5>
                  </div>
                  <div>
                    <button
                      type="submit"
                      @click="submitComment"
                      style="
                        color: #fff;
                        background: #ffb600;
                        width: 90px;
                        height: 90px;
                        border: 0;
                        border-radius: 3px;
                      "
                    >
                      发表评论
                    </button>
                  </div>
                </div>
              </div>

              <!-- 所有的评论 -->
              <div class="allComments">
                <div
                  class="profile_border"
                  v-for="(item, index) in userComments"
                  :key="index"
                >
                  <div class="profile top20 bottom20">
                    <div class="p_pic">
                      <img
                        src="../../assets/images/profile1.png"
                        alt="Course"
                        style="width:40px;height:40px"
                      />
                    </div>
                    <div class="profile_text">
                      <h5>
                        <strong>{{ item.nickName }}</strong>
                      </h5>
                      <p class="margin10">{{ item.content }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 右侧的课程列表 -->
            <aside class="col-sm-4 wow fadeIn" data-wow-delay="400ms">
              <div class="widget heading_space">
                <h3 class="bottom15">课程列表</h3>
                <!-- 侧边的课程列表 -->
                <div class="course_lists">
                  <el-tree
                    :data="data"
                    :props="defaultProps"
                    accordion
                    @node-click="handleNodeClick"
                    style="background: #f4f4f4"
                  >
                  </el-tree>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <!-- Courses -->

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
import { reqAddComment } from "../../api/index";
export default {
  name: "CourseDetail",
  mounted() {
    $(".loader").fadeOut(800);
  },
  data() {
    return {
      value1: null,
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
      data: [
        {
          label: "前端介绍",
          children: [
            {
              label: "前端介绍01",
            },
            {
              label: "前端介绍02",
            },
          ],
        },
        {
          label: "前端入门",
          children: [
            {
              label: "前端入门01",
            },
            {
              label: "前端入门02",
            },
          ],
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
            },
            {
              label: "二级 3-2",
            },
          ],
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
            },
            {
              label: "二级 3-2",
            },
          ],
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
            },
            {
              label: "二级 3-2",
            },
          ],
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
            },
            {
              label: "二级 3-2",
            },
          ],
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
            },
            {
              label: "二级 3-2",
            },
          ],
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
            },
            {
              label: "二级 3-2",
            },
          ],
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
            },
            {
              label: "二级 3-2",
            },
          ],
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
            },
            {
              label: "二级 3-2",
            },
          ],
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
            },
            {
              label: "二级 3-2",
            },
          ],
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
            },
            {
              label: "二级 3-2",
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
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
    PageHeader,
    Footer,
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },

    // 点击提交评论的回调函数
    async submitComment() {
      console.log(this.userComment);
      let result = await reqAddComment(
        this.userComment,
        "id1",
        "佩奇",
        "course01"
      );
      const { code, msg, data } = result;
      if (code === 200) {
        alert("添加评论成功");
        // 前端新增
      }
      if (aode === 101) alert("添加评论失败");
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
@import "./course_detail.css";

/* 视频列表的样式开始 */
.el-tree-node__content {
  height: 45px !important;
  margin-bottom: 5px;
  border-radius: 5px;
  color: #212121;
}
.el-tree-node__content:hover {
  background: #fff !important;
}
/* 视频列表的样式结束 */
</style>