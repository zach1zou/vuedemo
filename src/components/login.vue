<template>
    <div class="login_background">
        <div class="login_box">
            <div class="login_txt">登录界面</div>
            <el-form :label-position="labelPosition" :model="ruleForm" :rules="rules" ref="ruleForm">


                <el-form-item label="" prop="username">
                    <el-input type="" v-model="ruleForm.username" autocomplete="off" placeholder="号码">
                        <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
                    </el-input>
                </el-form-item>

                <el-form-item label="" prop="password">
                    <el-input type="password" v-model="ruleForm.password" autocomplete="off" placeholder="密码">
                        <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                    </el-input>
                </el-form-item>


                <el-form-item label="">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>






export default {
  props: [],
  components: {
  },
  data () {
      return {
          labelPosition: 'right',
          ruleForm: {
              username: 'adminzzl',
              password: '123456',
            
          },
          rules: {
              username: [
                  { required: true, message: '请输入号码', trigger: 'blur' },
                  { min: 5, max: 15, message: '长度在 5到 15 个字符', trigger: 'blur' }
              ],
              password: [
                  { required: true, message: '请输入密码', trigger: 'blur' },
                  { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
              ],
          }
          
    }
  },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(async (valid) => {
                if (valid) {
                    // alert('submit!');
                    // console.log(this);
                    var param = new URLSearchParams()
                    param.append('username', this.ruleForm.username)
                    param.append('password',this.ruleForm.password) 
                    const result = await this.$http.post('/api/login', param, {
                        headers: {
                            'content-type': 'application/x-www-form-urlencoded',
                    } })
                  
                    const { status } = result.data;
          
                  const { token } = result.data;
                       
                    if (status !== 0) {
                        return alert('error!');
                    } else {
                        window.localStorage.setItem('token', token);
                        location.href ='/#/index'
                     }
                } else {
                    // console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
,
  created () {
  },
  mounted () {
  },
  filters: {
  },
  computed: {
  },
  watch: {
  },
}
</script>
<style lang="less" scoped>









 .login_background{
    height: 100vh;
    width: 100vw;

            background: linear-gradient(to right, rgb(198, 255, 221), rgb(251, 215, 134), rgb(247, 121, 125));
   padding: 0;
   margin: 0;
   display: flex;
   align-items: center;
   justify-content: center;
        .login_box{
            height: 450px;
                width: 600px;
                border: 1px solid white;
                border-radius: 25px;
            background-color: pink;
           
         
            .login_txt{
                font-size:20px ;
                color: white;
                padding-top:100px ;
                padding-bottom:40px ;
            }
            
            .el-input{
              width: 80%;
            }
             
        }
 }


</style>
