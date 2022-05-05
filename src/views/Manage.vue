<template>
<div>
  <div>
    <div style="margin: 15px ; width: 70%;display: flex">
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
<!--      <el-button type="primary" style="margin-left: 10px">上传<i class="el-icon-upload el-icon&#45;&#45;right"></i></el-button>-->
    </div>
    <br>
  </div>

  <div>
    <div style="margin: 20px 0 20px 20px;">
      <i class="el-icon-edit" >论文信息</i>
    </div>
    <div style="width: 90%">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="论文标题" prop="title">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="论文作者" prop="author">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="发布会议" prop="conference">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="发表日期" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="论文摘要" prop="summary">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item label="引用文献" prop="referencing">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="研究方向" prop="direction">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="论文类型" prop="type">
        <el-select v-model="ruleForm.region" placeholder="请选择论文类型">
          <el-option label="证明型" value="type1"></el-option>
          <el-option label="综述型" value="type2"></el-option>
          <el-option label="实验型" value="type3"></el-option>
          <el-option label="工具型" value="type4"></el-option>
          <el-option label="数据集型" value="type5"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即上传</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Manage",
  data() {
    return {
      ruleForm: {
        title: '',
        author: '',
        conference:'',
        summary:'',
        referencing:'',
        direction:'',
        date1: '',
        date2: '',

        type: [],

      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>

</style>