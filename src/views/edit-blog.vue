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
        display: flex;
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-bottom: 1px solid #cccccc;
        .btn-tool{
          padding: 0 10px;
          cursor: pointer;
        }
      }
    .edit-area{
      padding-top: 40px;
      display: flex;
      height: 100%;
      .markdown-area, .result-area{
        flex: 1;
      }
      .markdown-area{
        border: none;
        // border-right: 1px solid #cccccc;
      }
      .result-area{
        background: rgba($color: #d7ccc8, $alpha: 0.2);
      }
    }
  }
}
</style>
<template>
  <div class="edit-blog" id="markdown-it">
    <div class="edit-blog-inner">
      <div class="gap blog-edit-title">
        <div class="gap return-icon" @click="goBack">返回</div>
        <el-input placeholder="请输入内容" v-model="inputTitle">
          <template slot="prepend">文章标题</template>
        </el-input>
      </div>
      <div class="blog-edit-area">
        <div class="blog-edit-area-inner">
           <div class="blog-tools">
             <div class="btn-tool">图片</div>
             <div class="btn-tool" @click="publishText">发布</div>
           </div>
            <div class="edit-area">
              <textarea class="markdown-area" v-model="inputText"></textarea>
              <div class="result-area markdown-body" v-html="renderText"></div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { publishText } from '@/api';
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt();
export default {
  data() {
    return {
      inputTitle: '',
      inputText: '',
    };
  },
  computed: {
    renderText() {
      return md.render(this.inputText);
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    async publishText() {
      const params = {
        title: this.inputTitle,
        content: this.inputText,
        publishDate: `${new Date().valueOf()}`,
      };
      try {
        await publishText(params);
        this.$message.success('发布成功');
      } catch (error) {
        console.log(error);
        this.$message.error('发布失败');
      }
    },
  },
}
</script>
