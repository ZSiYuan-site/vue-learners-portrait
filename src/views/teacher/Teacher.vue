<template>
  <div>
    <!-- 最顶部的导航开始 -->
    <TopNav />
    <!-- 最顶部的导航结束 -->

    <!-- 头部导航开始 -->
    <Header />
    <!-- 头部导航结束 -->

    <!--页头部分开始-->
    <PageHeader />
    <!--页头部分结束-->

    <!-- 讲师信息开始 -->
    <div class="teacherInfo" style="margin: 20px">
      <div class="container">
        <div
          class="row"
          style="border: 1px solid #dcdcdc; padding: 30px 30px 50px 30px"
        >
          <div class="col-md-2">
            <img
              src="./img/teacher.png"
              alt=""
              style="width: 130px; height: 130px"
            />
          </div>
          <div class="col-md-8">
            <h3 style="margin-bottom: 10px">渡一前端-陈学辉老师</h3>
            <p>
              5年+大厂开发经验，3年+线上教学工作经验。就职于大厂期间，负责过某大厂搜索引擎相关主要项目的开发。曾创办过海棠学院，线上学员高过万，课程播放量30w+，并获得一致好评。实战教学多年，一直以好的课程质量为信仰，视教书育人为己任！既能在授课风格上体现幽默诙谐，又能在授课内容上做得到大局与细节并重。
            </p>
          </div>
          <div class="col-md-2" style="padding: 30px">
            <h2 style="color: #e85308"><strong>19</strong></h2>
            课程
          </div>
        </div>
      </div>
    </div>
    <!-- 讲师信息结束 -->

    <!--专业列表开始-->
    <section id="shop" class="padding" style="padding-top: 0">
      <div class="container">
        <div class="row">
          <div
            class="col-md-3 col-sm-6 margin10 bottom15 wow fadeIn"
            data-wow-delay="300ms"
          >
            <div class="shopping_box">
              <div class="image">
                <img
                  src="./img/majorImg.jpg"
                  alt="Edua"
                  class="img-responsive border-radius"
                />
                <div class="overlay border_radius">
                  <a
                    class="btn_common yellow border_radius btn-cart"
                    style="text-align: center"
                    @click="goto('/major/major_detail')"
                    >观看视频</a
                  >
                </div>
              </div>
              <div class="shop_content">
                <p style="text-align: left">
                  Web前端开发之VUE入门到进阶实例【金渡教育】
                </p>
                <span style="float: left; font-size: 18px; color: #e85308"
                  >¥4999.00</span
                >
                <span style="float: right; color: #999999; font-size: 14px"
                  >872人购买</span
                >
              </div>
            </div>
          </div>
          <div
            class="col-md-3 col-sm-6 margin10 bottom15 wow fadeIn"
            data-wow-delay="400ms"
          >
            <div class="shopping_box">
              <div class="image">
                <img
                  src="./img/majorImg.jpg"
                  alt="Edua"
                  class="img-responsive border-radius"
                />
                <div class="overlay border_radius">
                  <a
                    class="btn_common yellow border_radius btn-cart"
                    @click="goto('/major/major_detail')"
                    style="text-align: center"
                    >观看视频</a
                  >
                </div>
              </div>
              <div class="shop_content">
                <p style="text-align: left">
                  Web前端开发之VUE入门到进阶实例【金渡教育】
                </p>
                <span style="float: left; font-size: 18px; color: #e85308"
                  >¥4999.00</span
                >
                <span style="float: right; color: #999999; font-size: 14px"
                  >872人购买</span
                >
              </div>
            </div>
          </div>
          <div
            class="col-md-3 col-sm-6 margin10 bottom15 wow fadeIn"
            data-wow-delay="500ms"
          >
            <div class="shopping_box">
              <div class="image">
                <img
                  src="./img/majorImg.jpg"
                  alt="Edua"
                  class="img-responsive border-radius"
                />
                <div class="overlay border_radius">
                  <a
                    class="btn_common yellow border_radius btn-cart"
                    @click="goto('/major/major_detail')"
                    style="text-align: center"
                    >观看视频</a
                  >
                </div>
              </div>
              <div class="shop_content">
                <p style="text-align: left">
                  Web前端开发之VUE入门到进阶实例【金渡教育】
                </p>
                <span style="float: left; font-size: 18px; color: #e85308"
                  >¥4999.00</span
                >
                <span style="float: right; color: #999999; font-size: 14px"
                  >872人购买</span
                >
              </div>
            </div>
          </div>
          <div
            class="col-md-3 col-sm-6 margin10 bottom15 wow fadeIn"
            data-wow-delay="600ms"
          >
            <div class="shopping_box">
              <div class="image">
                <img
                  src="./img/majorImg.jpg"
                  alt="Edua"
                  class="img-responsive border-radius"
                />
                <div class="overlay border_radius">
                  <a
                    class="btn_common yellow border_radius btn-cart"
                    @click="goto('/major/major_detail')"
                    style="text-align: center"
                    >观看视频</a
                  >
                </div>
              </div>
              <div class="shop_content">
                <p style="text-align: left">
                  Web前端开发之VUE入门到进阶实例【金渡教育】
                </p>
                <span style="float: left; font-size: 18px; color: #e85308"
                  >¥4999.00</span
                >
                <span style="float: right; color: #999999; font-size: 14px"
                  >872人购买</span
                >
              </div>
            </div>
          </div>
          <div
            class="col-md-3 col-sm-6 margin10 bottom15 wow fadeIn"
            data-wow-delay="700ms"
          >
            <div class="shopping_box">
              <div class="image">
                <img
                  src="./img/majorImg.jpg"
                  alt="Edua"
                  class="img-responsive border-radius"
                />
                <div class="overlay border_radius">
                  <a
                    class="btn_common yellow border_radius btn-cart"
                    @click="goto('/major/major_detail')"
                    style="text-align: center"
                    >观看视频</a
                  >
                </div>
              </div>
              <div class="shop_content">
                <p style="text-align: left">
                  Web前端开发之VUE入门到进阶实例【金渡教育】
                </p>
                <span style="float: left; font-size: 18px; color: #e85308"
                  >¥4999.00</span
                >
                <span style="float: right; color: #999999; font-size: 14px"
                  >872人购买</span
                >
              </div>
            </div>
          </div>
          <div
            class="col-md-3 col-sm-6 margin10 bottom15 wow fadeIn"
            data-wow-delay="800ms"
          >
            <div class="shopping_box">
              <div class="image">
                <img
                  src="./img/majorImg.jpg"
                  alt="Edua"
                  class="img-responsive border-radius"
                />
                <div class="overlay border_radius">
                  <a
                    class="btn_common yellow border_radius btn-cart"
                    @click="goto('/major/major_detail')"
                    style="text-align: center"
                    >观看视频</a
                  >
                </div>
              </div>
              <div class="shop_content">
                <p style="text-align: left">
                  Web前端开发之VUE入门到进阶实例【金渡教育】
                </p>
                <span style="float: left; font-size: 18px; color: #e85308"
                  >¥4999.00</span
                >
                <span style="float: right; color: #999999; font-size: 14px"
                  >872人购买</span
                >
              </div>
            </div>
          </div>
          <div
            class="col-md-3 col-sm-6 margin10 bottom15 wow fadeIn"
            data-wow-delay="900ms"
          >
            <div class="shopping_box">
              <div class="image">
                <img
                  src="./img/majorImg.jpg"
                  alt="Edua"
                  class="img-responsive border-radius"
                />
                <div class="overlay border_radius">
                  <a
                    class="btn_common yellow border_radius btn-cart"
                    @click="goto('/major/major_detail')"
                    style="text-align: center"
                    >观看视频</a
                  >
                </div>
              </div>
              <div class="shop_content">
                <p style="text-align: left">
                  Web前端开发之VUE入门到进阶实例【金渡教育】
                </p>
                <span style="float: left; font-size: 18px; color: #e85308"
                  >¥4999.00</span
                >
                <span style="float: right; color: #999999; font-size: 14px"
                  >872人购买</span
                >
              </div>
            </div>
          </div>

          <div
            class="col-md-3 col-sm-6 margin10 bottom15 wow fadeIn"
            data-wow-delay="1000ms"
          >
            <div class="shopping_box">
              <div class="image">
                <img
                  src="./img/majorImg.jpg"
                  alt="Edua"
                  class="img-responsive border-radius"
                />
                <div class="overlay border_radius">
                  <a
                    class="btn_common yellow border_radius btn-cart"
                    @click="goto('/major/major_detail')"
                    style="text-align: center"
                    >观看视频</a
                  >
                </div>
              </div>
              <div class="shop_content">
                <p style="text-align: left">
                  Web前端开发之VUE入门到进阶实例【金渡教育】
                </p>
                <span style="float: left; font-size: 18px; color: #e85308"
                  >¥4999.00</span
                >
                <span style="float: right; color: #999999; font-size: 14px"
                  >872人购买</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--专业列表结束-->

    <!-- 底部开始 -->
    <Footer />
    <!-- 底部结束 -->
  </div>
</template>

<script>
import TopNav from "../../components/topnav/TopNav.vue";
import Header from "../../components/header/Header.vue";
import PageHeader from "../../components/page_header/PageHeader.vue";
import Footer from "../../components/footer/Footer.vue";
export default {
  components: {
    TopNav,
    Header,
    PageHeader,
    Footer,
  },
};
</script>

<style>
</style>