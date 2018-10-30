<style lang="scss" scoped>
.article-list{
  height: 100%;
  overflow: scroll;
  .article-logo{
    margin: 20px 0;
  }
  .article-time-logo{
      margin: 10px 0;
    }
  .sub-title{
    font-size: 12px;
    color: #888;
    font-style: italic;
    margin-left: 10px;
  }
  .article{
    border-left: 2px solid $primary-border-color1;
    padding: 5px 0 5px 5px;
    margin-left: 20px;
    margin-bottom: 20px;
    &:hover{
      border-left: 4px solid $primary-font-color2;
    }
    .title{
      color: $primary-font-color;
      font-weight: bold;
      margin-bottom: 10px;
      &:hover{
        text-decoration: underline;
        cursor: pointer;
      }
    }
    .content{
      width: 100%;
      font-size: 12px;
      color: $primary-font-color1;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
}
</style>
<template>
  <div class="article-list">
    <h1 class="article-logo">Articles<span class="sub-title">Total {{articleList.length}} posts</span></h1>
    <div>
      <h2 class="article-time-logo">2018<span class="sub-title">Total {{articleList.length}} posts</span></h2>
      <div class="article" v-for="(item, index) in articleList" :key="index">
        <div class="title" @click="pickTheArticle(item)">{{item.title}}</div>
        <p class="content">{{item.content}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { getAllText } from '@/api/index';
import { SET_ARTICLE } from 'types';
export default {
  data() {
    return {
      articleList: [],
    };
  },
  async created() {
    this.fetchArticles();
  },
  methods: {
    async fetchArticles() {
      this.articleList = await getAllText();
    },
    pickTheArticle(item) {
      this.$store.commit(SET_ARTICLE, item);
      this.$router.push('/blog/article');
    }
  }
}
</script>
