<template>
  <div>
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
            <h1>Shop</h1>
            <p>
              We offer the most complete house renovating services in the
              country
            </p>
            <div class="page_nav">
              <span>You are here:</span> <a href="index.html">Home</a>
              <span><i class="fa fa-angle-double-right"></i>Shop</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Page Header-->

    <!--SERVICE SECTION-->
    <section id="shop" class="padding">
      <div class="container">
        <div class="row">
          <div class="col-md-12 cart_table wow fadeInUp" data-wow-delay="300ms">
            <div class="table-responsive">
              <table class="table table-bordered border-radius">
                <thead>
                  <tr>
                    <th>课程</th>
                    <th>课程价格</th>
                    <th>机构优惠</th>
                    <th>应付价格</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img
                        class="shopping-product"
                        src="./images/course.png"
                        alt="your product"
                        style="width: 80px; height: 80px"
                      />
                      <div class="product-name" style="margin-left: 20px">
                        <h4>前端0基础入门 + Web百大项目案例</h4>
                      </div>
                    </td>
                    <td>
                      <h4 class="singl-pricet text-center">￥130.00</h4>
                    </td>
                    <td>
                      <h4 class="singl-pricet text-center">￥129.00</h4>
                    </td>
                    <td>
                      <h4 class="price_product text-center">￥1.00</h4>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        class="shopping-product"
                        src="./images/course.png"
                        alt="your product"
                        style="width: 80px; height: 80px"
                      />
                      <div class="product-name" style="margin-left: 20px">
                        <h4>前端0基础入门 + Web百大项目案例</h4>
                      </div>
                    </td>
                    <td>
                      <h4 class="singl-pricet text-center">￥130.00</h4>
                    </td>
                    <td>
                      <h4 class="singl-pricet text-center">￥129.00</h4>
                    </td>
                    <td>
                      <h4 class="price_product text-center">￥1.00</h4>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="apply_coupon clearfix" style="height:70px">
              <div class="row">
                <div class="col-md-6 col-sm-6 coupon"></div>
                <div class="col-md-6 col-sm-6 coupon text-right" style="position:relative;top:-10px;">
                  <a href="#." class="btn_common blue border_radius"
                    >清空购物车</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 wow fadeInLeft" data-wow-delay="300ms">
            <div class="border-radius totals margin_tophalf">
              <h3 class="bottom20">结算 :</h3>
              <table class="table table-responsive heading_space">
                <tbody>
                  <tr>
                    <td>课程价格 :</td>
                    <td class="text-right">
                      <strong>￥272.00</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>优惠价格 :</td>
                    <td class="text-right">
                      <strong>￥299.00</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>应付金额 :</td>
                    <td class="yellow_t text-right"><strong>￥1.00</strong></td>
                  </tr>
                </tbody>
              </table>
              <a href="#." class="btn_common yellow border_radius">去付款</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 底部开始 -->
    <Footer />
    <!-- 底部结束 -->
  </div>
</template>

<script>
import TopNav from "../topnav/TopNav.vue";
import Header from "../header/Header.vue";
import Footer from "../footer/Footer.vue";
export default {
  name: "ShopCart",
  components: {
    TopNav,
    Header,
    Footer,
  },
};
</script>

<style>
</style>