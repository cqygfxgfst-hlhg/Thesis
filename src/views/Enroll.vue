<template>
  <div>
    <el-row type="flex" class="row-bg" justify="center">
      <!--    <el-col :span="6"><div class="grid-content bg-purple">-->
      <!--      <h2>欢迎来到论文管理系统</h2>-->
      <!--    </div></el-col>-->
      <!--    <el-col :span="6"><div class="grid-content bg-purple-light">-->

      <!--    </div></el-col>-->
      <el-col :span="10"><div class="grid-content bg-purple">
        <h2 align-item="center" style="line-height: 100px">请注册</h2>
        <el-form :model="loginForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="邮箱" prop="username">
            <el-input v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item type="password" label="密码" prop="password">
            <el-input type="password"  v-model="loginForm.password" autocomplete="off"></el-input>
          </el-form-item>
          <div style="display: flex">
            <el-form-item type="code" label="验证码" prop="code">
              <el-input  v-model="loginForm.code" ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="getCode" size="small">获取验证码</el-button>
            </el-form-item>

          </div>


          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
            <!--          <el-button @click="resetForm('ruleForm')">重置</el-button>-->
<!--            <el-button @click="resetForm('ruleForm')">注册</el-button>-->
          </el-form-item>
        </el-form>

      </div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Enroll",
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        code:''
      },
      rules: {
        username: [
          { required: true, message: '请输入邮箱', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
        ],
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
    },
    getCode(){

    }
  }
}
</script>

<style scoped>

</style>