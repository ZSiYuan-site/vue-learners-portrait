<template>
  <div class="pageHeader">
    <!--页头部分开始-->
    <section class="page_header padding-top">
      <div class="container">
        <div class="row">
          <div class="col-md-12 page-content" style="padding-top: 20px">
            <h1>Student Courses</h1>
            <p>
              We offer the most complete house renovating services in the
              country
            </p>
            <div class="page_nav">
              <span>当前所在:</span> <a @click="goto('/home')">Home</a>
              <span><i class="iconfont icon-arrow-right" style="vertical-align:-2px"></i>Courses</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--页头部分结束-->
  </div>
</template>

<script>
export default {
  methods:{
    goto(path){
      this.$router.push(path)
    }
  }
};
</script>

<style>
</style>