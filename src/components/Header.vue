<template>
  <div style="height: 50px; line-height: 50px;border-bottom: 1px solid #ccc; display:flex">
<!--/*    <div style="width: 200px;padding-left: 30px;font-weight: bold;color: dodgerblue">后台管理</div>*/-->
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">返回主页</el-menu-item>
      <el-menu-item index="2">论文管理</el-menu-item>
      <el-menu-item index="3">研究方向</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank" style="text-decoration: none">个人主页</a></el-menu-item>
    </el-menu>


    <div style="flex:1"></div>
    <div style="width: 100px">
        <el-button >退出账号</el-button>
    </div>
  </div>

</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>