<template>
<div>
  <div style="margin-top: 15px; width: 70%;">
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
</div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      select: ''
    }
  }
}
</script>

<style scoped>
/*.el-select .el-input {*/
/*  width: 200px;*/
/*}*/
el-select{
  width: 100%;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
div{
  position: absolute;
  top: 15%;
  bottom:0;
  left: 0;
  right: 0;
  margin: auto;

}
</style>