<template>
  <div class="wrapper">

    <!-- header部分 -->
    <header>
      <p>用户注册</p>
    </header>

    <!-- 表单部分 -->
    <ul class="form-box">
      <li>
        <div class="title">
          手机号码：
        </div>
        <div class="content">
          <input type="text" placeholder="手机号码" v-model="registerForm.telephone">
        </div>
      </li>
      <li>
        <div class="title">
          密码：
        </div>
        <div class="content">
          <input type="password" placeholder="密码" v-model="registerForm.password">
        </div>
      </li>
      <li>
        <div class="title">
          确认密码：
        </div>
        <div class="content">
          <input type="password" placeholder="确认密码" v-model="password2">
        </div>
      </li>
      <li>
        <div class="title">
          性别：
        </div>
        <div class="content" style="font-size: 3vw;">
          <input type="radio" name="sex" checked style="width:6vw;height: 3.2vw;" value="男" v-model="registerForm.sex"> 男
          <input type="radio" name="sex" style="width:6vw;height: 3.2vw;" value="女" v-model="registerForm.sex">女
        </div>
      </li>
    </ul>

    <div class="button-login">
      <button v-on:click="register">注册</button>
    </div>

    <!-- 底部菜单部分 -->
    <bottom/>
  </div>
</template>

<script>
import router from "../router";
import Bottom from "./bottom";
export default {
  name: "register",
  components: {Bottom},
  data: function (){
    return {
      password2: '',
      registerForm: {
        telephone: '',
        password: '',
        sex: ''
      }
    }
  },
  methods: {
    register: function (){
      if (this.password2 != this.registerForm.password){
        alert("两次输入密码有误")
      }else if (this.registerForm.telephone == '' || this.registerForm.password == ''){
        alert("请输入信息")
      }else if (this.registerForm.sex == ""){
        alert("请选择你的性别")
      }
      else {
        this.$axios({
          url: 'http://localhost:8080/user/register',
          method: 'post',
          data: this.registerForm
        })
          .then(res=>{
            if (res.data != null){
              this.$router.push({name: 'login'})
            }else {
              this.$message.error("输入账号密码不正确")
            }
          })
        router.push('/login')
      }
    },
  }
}
</script>

<style scoped>
/****************** 总容器 ******************/
.wrapper{
  width: 100%;
  height: 100%; }
/****************** header部分 ******************/
.wrapper header{
  width: 100%;
  height: 12vw;
  background-color: #0097FF;
  color: #fff;
  font-size: 4.8vw;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center; }
/****************** 表单部分 ******************/
.wrapper .form-box{
  width: 100%;
  margin-top: 12vw; }
.wrapper .form-box li{
  box-sizing: border-box;
  padding: 4vw 3vw 0 3vw;
  display: flex;
  align-items: center; }
.wrapper .form-box li .title{
  flex: 0 0 18vw;
  font-size: 3vw;
  font-weight: 700;
  color: #666; }
.wrapper .form-box li .content{
  flex: 1; }
.wrapper .form-box li .content input{
  border: none;
  outline: none;
  width: 100%;
  height: 4vw;
  font-size: 3vw; }
.wrapper .button-login{
  width: 100%;
  box-sizing: border-box;
  padding: 4vw 3vw 0 3vw; }
.wrapper .button-login button{
  width: 100%;
  height: 10vw;
  font-size: 3.8vw;
  font-weight: 700;
  color: #fff;
  background-color: #38CA73;
  border-radius: 4px;

  border: none;
  outline: none; }
.wrapper .button-register{
  width: 100%;
  box-sizing: border-box;
  padding: 4vw 3vw 0 3vw; }
.wrapper .button-register button{
  width: 100%;
  height: 10vw;
  font-size: 3.8vw;
  font-weight: 700;
  color: #666;
  background-color: #EEE;
  border-radius: 4px;

  border: none;
  outline: none;
  border: solid 1px #DDD; }
/****************** 底部菜单部分 ******************/
.wrapper .footer{
  width: 100%;
  height: 14vw;
  border-top: solid 1px #DDD;
  background-color: #fff;

  position: fixed;
  left: 0;
  bottom: 0;

  display: flex;
  justify-content: space-around;
  align-items: center; }
.wrapper .footer li{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #999;
  user-select: none;
  cursor: pointer; }
.wrapper .footer li p{
  font-size: 2.8vw; }
.wrapper .footer li i{
  font-size: 5vw; }

</style>
