<template>
<div>
  <div style="margin: 15px ; width: 70%">
    <el-input placeholder="请输入内容" v-model="input3" class="input-with-select" >
      <el-select v-model="select" slot="prepend" placeholder="选择" >
        <el-option label="论文标题" value="1"></el-option>
        <el-option label="研究方向" value="1"></el-option>
        <el-option label="论文摘要" value="2"></el-option>
        <el-option label="作者" value="3"></el-option>
        <el-option label="发布者" value="3"></el-option>
        <el-option label="会议" value="3"></el-option>
        <el-option label="论文类型" value="3"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </div>
  <div>
    <h2 style="text-align: center">title</h2>
    <el-descriptions class="margin-top" :column="1" :size="size" border style="margin: 10px">

      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user"></i>
          论文id
        </template>
        1234567
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone"></i>
          作者
        </template>
        王小明
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-location-outline"></i>
          链接
        </template>
         <a href="www.xxxx.com">链接</a>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-tickets"></i>
          论文类型
        </template>
        <el-tag size="small">证明型</el-tag>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          上传者
        </template>
        张三
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          研究方向
        </template>
        深度学习/人工智能
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          会议
        </template>
        人工智能会议
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          论文摘要
        </template>
        dfjfadshafdjjkehfeafuwefh
      </el-descriptions-item>

    </el-descriptions>
    <el-button type="primary" icon="el-icon-edit" style="margin: 10px">查看笔记</el-button>
  </div>
</div>
</template>

<script>
export default {
  name: "Thesis",
  data () {
    return {
      size: ''
    };
  }
}
</script>

<style scoped>

</style>