<template>
<div>
  <div style="margin: 15px ; width: 40%;display: flex">
    <el-input placeholder="请输入希望查找的用户id" v-model="input3" class="input-with-select" >
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
    <!--      <el-button type="primary" style="margin-left: 10px">上传<i class="el-icon-upload el-icon&#45;&#45;right"></i></el-button>-->
  </div>
  <div>
    <el-table
        :data="tableData"
        border
        style="width: 100%">
      <el-table-column
          prop="ID"
          label="ID"
          width="180">
      </el-table-column>
      <el-table-column
          prop="username"
          label="用户名"
          width="180">
      </el-table-column>
      <el-table-column
          prop="admin"
          label="权限">
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          width="200px">
        <template #default="scope">
          <el-button @click="handleClick(scope.row)" type="button" size="small" >提升权限</el-button>
          &nbsp
          <!--          <el-button type="primary" size="small">新增</el-button>-->
          <!--          <el-button type="text" size="small">编辑       </el-button>-->
          <el-popconfirm
              title="确定删除吗？"
              margin="30px">
            <template #reference>
              <el-button type="danger"  size="small" >删除</el-button>

            </template>
          </el-popconfirm>

        </template>
      </el-table-column>
    </el-table>
  </div>
</div>
</template>

<script>
export default {
  name: "UserManage",
  data() {
    return {
      tableData: [{
        ID: '2016-05-02',
        username: '王小虎',
        admin: '上海市普陀区金沙江路 1518 弄'
      }, {
        ID: '2016-05-04',
        username: '王小虎',
        admin: '上海市普陀区金沙江路 1517 弄'
      }]
    }
  }
}
</script>

<style scoped>

</style>