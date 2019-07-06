<template>
  <div>
    <div>
      <el-upload
        :file-list="fileList"
        :limit="2"
        accept="image/jpeg,image/png"
        :on-exceed="handleExceed"
        :on-change="handleChange"
        :on-remove="handleRemove"
        :action="action"
        :data="postData"
        class="upload-demo"
        drag
        multiple>

        <em>点击上传头像</em>
        </el-upload>
    </div>
  </div>

</template>

<script>
  import {token,action,domain} from "../plugins/qiniuToken";
  export default {
    data() {
      return {
        input:'',
        maxlength:10,
        fileList:[],
        postData:{
          token: token()
        },
        action: action,
        url: '',
        domain: domain
      };
    },
    mounted(){
    },
    methods: {
      handleChange(file, fileList){
        var _this = this;
        this.fileList = fileList;
        var test1 = this.fileList[0].response;
        if(fileList[0].response)
          this.$emit("listenToChildEvent",this.domain+test1.hash);
      },
      handleRemove(file, fileList){
        this.fileList = fileList
      },
      handlePictureCardPreview(file) {
        this.bigImg(file.url)
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      bigImg(url) {
        this.url = url;
        this.bigImgDialog = true;
      }
    }
  }

</script>

<style lang="scss">
  .title{
    margin-bottom: 10px;
  }
  .el-upload-list__item{
    img{
      object-fit: contain;
    }
  }
  .info{
    li{
      margin-bottom: 10px;
    }
  }
</style>
