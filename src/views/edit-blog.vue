<style lang="scss" scoped>
.edit-blog{
  width: 90%;
  height: 100%;
  margin: auto;
  padding: 20px;
  background: #ffffff;
  .edit-blog-inner{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .gap{
    margin-bottom: 20px;
  }
  .return-icon{
    cursor: pointer;
    color: $primary-font-color;
  }
  .blog-edit-title{
    position: absolute;
    width: 100%;
  }
  .blog-edit-area{
    border-radius: 4px;
    padding-top: 100px;
    height: 100%;
    .blog-edit-area-inner{
      position: relative;
      height: 100%;
      border: 1px solid #cccccc;
    }
    .blog-tools{
        position: absolute;
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-bottom: 1px solid #cccccc;
      }
    .edit-area{
      padding-top: 40px;
      display: flex;
      height: 100%;
      overflow: scroll;
      .markdown-area, .result-area{
        flex: 1;
      }
      .markdown-area{
        border-right: 1px solid #cccccc;
      }
      .result-area{
        background: rgba($color: #d7ccc8, $alpha: 0.2);
      }
    }
  }
}
</style>
<template>
  <div class="edit-blog">
    <div class="edit-blog-inner">
      <div class="gap blog-edit-title">
        <div class="gap return-icon" @click="goBack">返回</div>
        <el-input placeholder="请输入内容" v-model="input">
          <template slot="prepend">文章标题</template>
        </el-input>
      </div>
      <div class="blog-edit-area">
        <div class="blog-edit-area-inner">
           <div class="blog-tools">工具栏</div>
            <div class="edit-area">
              <div class="markdown-area"></div>
              <div class="result-area"></div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: '',
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
}
</script>
