<template>
  <div class="contact">
    <!-- 最顶部的导航开始 -->
    <TopNav />
    <!-- 最顶部的导航结束 -->

    <!-- 头部导航开始 -->
    <Header />
    <!-- 头部导航结束 -->

    <!--页头部分开始-->
    <PageHeader />
    <!--页头部分结束-->

    <!--主体内容开始 -->
    <section id="contact" class="padding" style="margin-top: 20px">
      <div class="container">
        <div class="row padding-bottom">
          <div
            class="col-md-4 contact_address heading_space wow fadeInLeft"
            data-wow-delay="4500ms"
          >
            <h2 class="heading heading_space">
              联系我们 <span class="divider-left"></span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod
            </p>
            <div class="address">
              <i class="icon icon-map-pin border_radius"></i>
              <h4>联系地址</h4>
              <p>广州软件学院 中国</p>
            </div>
            <div class="address">
              <i class="icon icon-mail border_radius"></i>
              <h4>邮箱联系</h4>
              <p><a href="mailto:Edua@info.com">7823913891@qq.com</a></p>
            </div>
            <div class="address">
              <i class="icon icon-phone4 border_radius"></i>
              <h4>电话联系</h4>
              <p>(+86) 123 456 7890</p>
            </div>
          </div>
          <div class="col-md-8 wow fadeInRight" data-wow-delay="4500ms">
            <h2 class="heading heading_space">
              填写联系信息<span class="divider-left"></span>
            </h2>
            <form
              class="form-inline findus"
              id="contact-form"
              onSubmit="return false"
            >
              <div class="row">
                <div class="col-md-12">
                  <div id="result"></div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 col-sm-4">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="昵称"
                      name="name"
                      id="name"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-4 col-sm-4">
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="邮箱"
                      name="email"
                      id="email"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-4 col-sm-4">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="联系电话"
                      name="website"
                      id="website"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <textarea
                    placeholder="请填写信息"
                    name="message"
                    id="message"
                  ></textarea>
                  <button
                    class="btn_common yellow border_radius"
                    id="btn_submit"
                  >
                    提交
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!--主体内容结束 -->

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
  mounted() {
    $(".loader").fadeOut(800);
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
</style>