<template>

<!--  <div class="home">-->
  <div>
<!--搜索框-->
      <div style="margin-top: 15px; width: 70%;margin-left: 30px">
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

<!--   左侧侧边栏-->
    <div style="float: left">
      <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
        <el-submenu index="1" popper-append-to-body=“false”>
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>主题</span>
          </template>
          <el-menu-item-group>
            <template slot="title">主题1</template>
            <el-menu-item index="1-1">主题1-1</el-menu-item>
            <el-menu-item index="1-2">主题1-2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="主题2">
            <el-menu-item index="1-3">主题2-1</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">主题2-2</template>
            <el-menu-item index="1-4-1">主题2-2-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">研究方向</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">作者</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">文献类型</span>
        </el-menu-item>
      </el-menu>
    </div>

<!--表格-->
<!--  <h1>{{ msg }}</h1>-->
    <div style="">
    <el-table
        :data="tableData"
        border
        stripe
        style="width: 100%;float: right;width: 90%">
      <el-table-column
          prop="publishDate"
          label="发表时间"
          sortable
      >
      </el-table-column>
      <el-table-column
          prop="referenced"
          label="被引用次数"
          sortable
      >
      </el-table-column>
      <el-table-column
          prop="relevance"
          label="相关度"
          sortable
      >
      </el-table-column>
      <el-table-column
          prop="title"
          label="标题">
      </el-table-column>
      <el-table-column
          prop="author"
          label="作者">
      </el-table-column>
      <el-table-column
          prop="conference"
          label="会议">
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          width="200px">
        <template #default="scope">
          <el-button @click="handleClick(scope.row)" type="button" size="small" padding="20px">查看</el-button>
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
      <br>
    </div>
<br>
    <div style="margin: 400px 300px 0 300px">
    页码
      <el-pagination
          layout="prev, pager, next"
          :total="1000">
      </el-pagination></div>
<!--    <div >-->
<!--      <el-pagination-->
<!--          :page-size="20"-->
<!--          :pager-count="11"-->
<!--          layout="prev, pager, next"-->
<!--          :total="1000">-->
<!--      </el-pagination>-->

<!--    </div>-->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import Aside from "@/components/Aside";
export default {
  name: 'HomeView',
  components: {
    Aside
    // HelloWorld
  },
  data(){
    return {
      tableData: [{
        publishDate: '2016-05-02',
        referenced:3,
        relevance:'2022-03-02',
        title:"堤防工程数据库安全保障体系构建研究",
        author: '王小虎',
        conference:" 水利规划与设计",
      }, {
        publishDate: '2016-05-04',
        referenced:2,
        relevance:'2022-01-02',
        title:" 基于中值滤波去噪算法的激光光谱图像数据库构建",
        author: '王小虎',
        conference:" 激光杂志",
      }, {
        publishDate: '2016-05-01',
        referenced:5,
        relevance:'2022-03-04',
        title:" 临床医学研究数据库的创建和质量控制要点",
        author: '王小虎',
        conference:" 上海医药",
      }, {
        publishDate: '2016-05-03',
        referenced:8,
        relevance:'2022-03-16',
        title:"数据库技术在信息管理系统中的应用",
        author: '王小虎',
        conference:" 集成电路应用",
      }],
      currentPage4:1,
      total:10
    }
  },
  methods: {
    handleClick() {

    },
    handleSizeChange(){

    },
    handleCurrentChange(){

    }

  }
}
</script>
