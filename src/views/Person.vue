<template>
<div>

  <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="6"><div class="grid-content bg-purple">
      <div class="block" style="margin:30px 30px 10px 30px"><el-avatar :size="100" :src="circleUrl"></el-avatar></div>
      <div style="margin-left: 30px">ID:
        <span>123@qq.com</span>
      </div></div></el-col>
<!--    <el-col :span="1"><div class="grid-content bg-purple-light"></div></el-col>-->
    <el-col :span="6"><div class="grid-content bg-purple">
      <div style="margin:40px 50px 10px 30px ">
        <span>共发布论⽂：</span><span> 9</span> <br>
        <span>论⽂所属研究⽅向：</span><br>
        <span>近⼀周发布论⽂：</span>
      </div>
    </div></el-col>
  </el-row>


</div>
</template>

<script>
export default {
  name: "Person",
  // id:"123@qq.com",
  data:{
      total:15,
      directions:"abc",
      this_week:2,
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
  }
}
</script>

<style scoped>

</style>