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
    <span style="margin: 20px">引用文献：</span>
    <el-link type="primary">主要链接1 &nbsp</el-link>
    <el-link type="primary">主要链接2 &nbsp</el-link>
    <el-link type="primary">主要链接3</el-link>
  </div>
  <el-divider></el-divider>
  <div style="margin: 20px 0 10px 20px">
    <i class="el-icon-edit" > 笔记内容</i>
  </div>
<!--  <el-divider></el-divider>-->
  <div style="margin:0 2em 0 2em">
    <p >
      作为重要的政治制度安排，国家审计在保障社会经济健康发展的过程中起着重要作用。随着人工智能技术的推广应用，取证方式的变化提高了国家审计的质
      量和效率，工作重心由业务前端转移到决策端，大量非结构化数据及学习算法导致审计风险更为隐蔽、审计责任难以界定。基于此，本文进一步讨论人工智能
      对审计业务流程的影响、给审计带来的风险与挑战、与审计基本理论及原则的关系、对审计人员地位和作用的影响等问题，为推进国家治理体系和治理能力
      现代化提供借鉴和参考。</p><p>
      作为重要的政治制度安排，国家审计在保障社会经济健康发展的过程中起着重要作用。随着人工智能技术的推广应用，取证方式的变化提高了国家审计的质
      量和效率，工作重心由业务前端转移到决策端，大量非结构化数据及学习算法导致审计风险更为隐蔽、审计责任难以界定。基于此，本文进一步讨论人工智能
      对审计业务流程的影响、给审计带来的风险与挑战、与审计基本理论及原则的关系、对审计人员地位和作用的影响等问题，为推进国家治理体系和治理能力
      现代化提供借鉴和参考。
    </p>
  </div>
  <el-divider></el-divider>
  <div style="margin:2em">
    <i class="el-icon-chat-line-round"> 评论区</i>
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
  </div>
  <div>

    <el-input type="textarea" v-model="desc" style="width: 50%;margin: 30px"></el-input>
    <br>
    <el-button type="primary" style="margin-left: 30px">发布评论</el-button>


  </div>
</div>
</template>

<script>
export default {
  name: "Note",
  data() {
    return {
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },


        desc: ''

    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    }
  }
}
</script>

<style scoped>

</style>