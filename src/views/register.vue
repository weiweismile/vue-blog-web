<style lang="scss">
@import '~@/assets/css/theme.scss';
.register-box{
  width: 400px;
  margin: 50px auto;
  padding: 20px;
  padding-left: 0px;
  border: 1px solid $primary-border-color;
  box-shadow: 0 0 2.5em $primary-border-color;
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  .avatar {
    width: 60px;
    height: 60px;
    display: block;
  }
}
</style>

<template>
 <div class="register-box">
    <div class="register-box-inner">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="头像">
            <el-upload
              class="avatar-uploader"
              action=""
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button @click="resetForm">取消</el-button>
          <el-button type="primary" @click="submitForm">确定</el-button>
        </el-form-item>
      </el-form>
    </div>
 </div>
</template>

<script>
import { register } from '@/api/index';

export default {
  data() {
    return {
      imageUrl: '',
      form: {
        username: '',
        password: '',
        avatar: ''
      }
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    resetForm() {
      this.form = {
        username: '',
        password: '',
        avatar: ''
      };
    },
    async submitForm() {
      const rsp = await register(this.form);
      if (rsp.data.code === 200) {
        this.$router.push('/blog');
      }
    }
  }
}
</script>
