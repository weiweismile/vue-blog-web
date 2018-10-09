<style lang="scss" scoped>
.blog-page {
  width: 60%;
  height: 100%;
  margin: auto;
  box-shadow: 0 0 2.5em #5d656c;
  background-color: #ffffff;
  .blog-page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    height: 50px;
    border-bottom: 1px solid #dddddd;
    background-color: #f7f5f5;
    .brand-image {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      vertical-align: middle;
      cursor: pointer;
    }
    .brand-title {
      font-size: 18px;
      cursor: pointer;
    }
    .nav-list-item {
      display: inline-block;
      padding: 0 10px;
      cursor: pointer;
      color: $primary-font-color;
      &:last-child {
        padding-right: 0;
      }
    }
  }
  .register {
    text-align: end;
    color: $primary-font-color;
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>

<template>
  <div class="blog-page">
    <div class="blog-page-header">
      <div class="brand-logo"
           @click="goto('/')">
        <img class="brand-image"
             src="~@/assets/image/user.jpg" />
        <span class="brand-title">FAN WEIWEI</span>
      </div>
      <div class="nav-list">
        <div class="nav-list-item"
             v-for="(item, index) in nav"
             :key="index"
             @click.stop="handleClick(item.value)">{{item.name}}</div>
      </div>
    </div>
    <div class="blog-page-content">
      <router-view></router-view>
    </div>

    <!-- 弹出框 -->
    <el-dialog title="登录"
               :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="用户名">
          <el-input v-model="form.username"
                    auto-complete="off"
                    :label-width="formLabelWidth"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"
                    type="password"
                    auto-complete="off"
                    :label-width="formLabelWidth"></el-input>
        </el-form-item>
      </el-form>
      <p class="register"
         @click="goto('/blog/register');dialogFormVisible=false">
        <span>去注册</span>
      </p>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="login">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { getBlog, login } from '@/api/index';
import mixins from './mixins';
import { SET_INFO } from 'types';
// import mask from '@/utils/mask';

export default {
  mixins: [mixins],
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '120px',
      form: {
        username: '',
        password: '',
      },
      nav: [
        {
          path: '',
          name: '全部文章',
          value: 'allBlog',
        },
        {
          path: '',
          name: '我的文章',
          value: 'myBlog',
        },
        {
          path: '',
          name: '关于',
          value: 'about',
        },
        {
          path: '',
          name: '登录',
          value: 'login',
        },
      ],
    };
  },
  created() {
    const data = getBlog();
    console.log(data);
  },
  methods: {
    async handleClick(value) {
      if (value === 'login') {
        this.dialogFormVisible = true;
      } else if (value === 'logout') {
      }
    },
    async login() {
      const data = await login(this.form);
      if (data.data.code === 500) {
        this.$message.error('用户密码不对！');
      } else if (data.data.code === 200) {
        this.$store.commit(SET_INFO, data.data.data);
        this.nav.splice(3, 1, {
          path: '',
          name: '退出',
          value: 'logout',
        });
        this.$router.push('/blog');
        this.form = {
          username: '',
          password: '',
        };
        this.dialogFormVisible = false;
      }
    },
  },
};
</script>
