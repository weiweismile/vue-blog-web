<style lang="scss" scoped>
.home-page {
  position: relative;
  height: 100%;
  .list-box{
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -35%;
    margin-top: -150px;
    width: 70%;
    min-width: 800px;
    height: 300px;
    text-align: center;
    background-color: #ecf0f1;
    border-radius: 10px;
    opacity: 0.85;
    .user-box{
      display: inline-block;
      margin-top: -75px;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background-color: #ecf0f1;
      background: url(~@/assets/image/user.jpg) no-repeat;
      background-position: center;
      background-size: cover;
    }
    .detail-box{
      margin: 20px 0;
      .title{
        font-size: 28px;
        font-weight: 900;
        margin-bottom: 20px;
      }
      .link-item{
        display: inline-block;
        color: #3a539b;
        margin: 0 20px;
        font-size: 18px;
        cursor: pointer;
        &:hover{
          text-decoration: underline;
        }
      }
      .iconfont-box{
        margin-top: 20px;
        .iconfont{
          color:#808080;
          font-size: 23px;
          margin: 0 10px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>

<template>
  <div class="home-page">
    <div class="list-box">

      <div class="user-box"></div>

      <div class="detail-box">
        <p class="title">FAN WEIWEI BLOG</p>
        <p class="sub-title">不知道说点什么</p>
        <div class="under-line"></div>
        <div class="link-box">
          <div class="link-item" v-for="(list, index) in lists" :key="index" @click="goto(list.path)">{{list.name}}</div>
        </div>
        <div class="iconfont-box"><i v-for="info in contactInfo" :key="info.name" class="iconfont" :class="[info.icon]"></i></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      lists: [
        {
          path: '/blog',
          name: '博客'
        },
        {
          path: '/',
          name: '关于'
        },
        {
          path: '/',
          name: '订阅'
        }
      ],
      contactInfo: [
        {
          link: '#',
          icon: 'icon-GitHub',
          name: 'gitHub'
        },
        {
          link: '#',
          icon: 'icon-youxiang',
          name: 'email'
        },
        {
          link: '#',
          icon: 'icon-weibo',
          name: 'weibo'
        },
        {
          link: '#',
          icon: 'icon-twitter',
          name: 'twitter'
        }
      ]
    }
  },
  methods: {
    goto (path) {
      this.$router.push(path)
    }
  }
}
</script>
