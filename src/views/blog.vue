<style lang="scss" scoped>
@import '~@/assets/css/theme.scss';
.blog-page{
  width: 60%;
  height: 100%;
  margin: auto;
  box-shadow: 0 0 2.5em #5d656c;
  background-color: #ffffff;
  .blog-page-header{
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 0 10px;
    height: 50px;
    border-bottom: 1px solid #dddddd;
    background-color: #F7F5F5;
    .brand-image{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      vertical-align: middle;
      cursor: pointer;
    }
    .brand-title{
      font-size: 18px;
      cursor: pointer;
    }
    .nav-list-item{
      display: inline-block;
      padding: 0 10px;
      cursor: pointer;
      color: $primary-font-color;
      &:last-child{
        padding-right: 0;
      }
    }
  }
}
</style>

<template>
  <div class="blog-page">
    <div class="blog-page-header">
      <div class="brand-logo" @click="goto('/')">
        <img class="brand-image" src="~@/assets/image/user.jpg"/>
        <span class="brand-title">FAN WEIWEI</span>
      </div>
      <div class="nav-list">
        <div class="nav-list-item" v-for="(item, index) in nav" :key="index">{{item.name}}</div>
      </div>
    </div>
    <div class="blog-page-content"></div>
  </div>
</template>
<script>
import { getBlog } from '@/api/index';
import mixins from './mixins';

export default {
  mixins: [mixins],
  data () {
    return {
      nav: [
        {
          path: '',
          name: '全部文章',
        },
        {
          path: '',
          name: '我的文章',
        },
        {
          path: '',
          name: '关于',
        },
        {
          path: '',
          name: '登录',
        },
      ],
    }
  },
  created () {
    const data = getBlog();
    console.log(data, 88888);
  },
}
</script>
