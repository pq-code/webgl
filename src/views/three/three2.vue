<template>
  <div id="threeContainer">
    <el-upload
		class="upload-demo"
		style="text-align: center"
		drag
		method = "get"
		action="/appBatch/uploadExcel"
		:multiple = "false"
		:auto-upload = "true"
		accept=".xlsx"
		:before-upload="beforeUpload"
		:show-file-list="true"
  	>
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">
      Drop file here or <em>click to upload</em>
    </div>
    <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500kb
      </div>
    </template>
  </el-upload>
  </div>
</template>

<script lang="ts" setup>
import { UploadFilled } from '@element-plus/icons-vue'

const beforeUpload = function() {
	
}





</script>

<style scoped>

</style>
