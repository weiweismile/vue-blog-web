<style lang="scss" scoped>
.article{
  .title{
    margin: 20px 0;
    text-align: center;
  }
  .time{
    text-align: center;
    color: $primary-font-color1;
  }
  .content{
    margin: 20px 0;
  }
}
</style>
<template>
  <div class="article">
    <h1 class="title">{{article.title}}</h1>
    <div class="time">{{article.date}}</div>
    <div class="content" v-html="article.content"></div>
  </div>
</template>
<script>
export default {
  computed: {
    article() {
      console.log(this.$store.article, 999999);
      return this.$store.state.article || {};
    }
  },
  data() {
    return {};
  },
}
</script>
