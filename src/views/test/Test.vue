<template>
  <div class="test">
    <a-button type="primary">Button</a-button>
    <div class="content">
      <ul>
        <li v-for="(item, index) in currentPageData" :key="index">
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="pre" @click="prePage">上一页</div>
    <div class="next" @click="nextPage">下一页</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 所有的数据
      allDate: [
        { name: "钱到位" },
        { name: "的味道" },
        { name: "钱d到位" },
        { name: "钱dw到位" },
        { name: "发a" },
        { name: "钱fwa到位" },
        { name: "wa" },
        { name: "钱w到f位" },
        { name: "dwd" },
      ],
      // 所有的页面
      totalPage: 1,
      // 当前页面
      currentPage: 1,
      // 每页显示的条数
      pageSize: 4,
      // 当前页面显示的数据
      currentPageData: [],
    };
  },
  mounted() {
    // 计算一共有多少页
    this.totalPage = Math.ceil(this.allDate.length / this.pageSize);
    this.setCurrentPage();
  },
  methods: {
    setCurrentPage() {
      let begin = (this.currentPage - 1) * this.pageSize;
      let end = this.currentPage * this.pageSize;
      this.currentPageData = this.allDate.slice(begin, end);
    },
    // 上一页
    prePage() {
      this.currentPage--;
      if (this.currentPage <= 0) {
        this.currentPage = 1;
      }
      this.setCurrentPage();
    },
    nextPage() {
      this.currentPage++;
      this.setCurrentPage();
    },
  },
};
</script>

<style scoped>
.content {
  width: 300px;
  height: 300px;
  margin: 100px auto;
  background: pink;
}
.content ul {
  display: flex;
  flex-wrap: wrap;
}
.content ul li {
  width: 50px;
  height: 50px;
  background: red;
  margin: 10px;
}
.pre {
  float: left;
  width: 50px;
  height: 30px;
  background: green;
  margin: 10px;
}
.next {
  width: 50px;
  height: 30px;
  background: green;
  float: left;
}
</style>