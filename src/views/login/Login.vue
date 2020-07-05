<template>
<div id="login-container">
   <div class="logo-box">
     <img src="~assets/images/img/big-logo.png" alt="">
   </div>
  <div class="login-input-container">
    <div class="login-title">登录</div>
    <div class="login-content">
      <p><i class="iconfont icon-jinzhi"></i><span>账户名与密码不匹配，请重新输入。</span></p>
      <div class="login-input-box">
        <div class="input-title"><i class="iconfont icon-xingmingyonghumingnicheng"></i></div>
        <div class="input-box">
          <input type="text" placeholder="用户名">
        </div>
      </div>
      <div class="login-input-box">
        <div class="input-title"><i class="iconfont icon-icon-"></i></div>
        <div class="input-box">
          <input type="password" placeholder="请输入密码">
        </div>
      </div>
    </div>
    <div class="memberpass">
      <div class="pull-left">
        <label for="">
          <input type="checkbox">
          <span>记住密码</span>
        </label>
      </div>
      <div class="pull-right">
        <a href="#">忘记密码？</a>
      </div>
    </div>
    <div class="login-btn">
      <input type="button" value="登录" @click="goHome">
    </div>
  </div>

</div>
</template>

<script>
  export default {
    name: "Login",
    data(){
      return {

      }
    },
    methods:{
      goHome(){
        this.$router.push({
          path:'/dashboard'
        })
      }
    },
    created() {

    }
  }
</script>

<style  lang="scss" scoped>
 #login-container {
    background: url("~assets/images/img/login-bg.png") no-repeat center center fixed;
    width: 100%;
    height: 100%;
    position: relative;
   .logo-box {
      display: flex;
      justify-content: center;
       padding-top: 2%;
   }
   .login-input-container {
     background: rgba(255,255,255,.5);
     border-radius: 5px;
     width: 465px;
     padding: 40px;
     position: absolute;
     right: 200px;
     top: 50%;
     transform: translateY(-50%);
     -webkit-transform: translateY(-50%);
     .login-title {
       font-weight: bold;
       font-size: 18px;
       text-align: center;
     }
     .login-content {
        p:first-child{

          margin: 10px 0px;
          color: #e60012;
          span{
            vertical-align: middle;
            font-size: 14px;
          }
          i{
            vertical-align: middle;
            margin: 0 10px;
          }
        }
       .login-input-box {
         display: flex;

         margin-bottom:20px;
         .input-title {
           width: 40px;
           height: 40px;
           background: #f3f3f3;
           color: #d4d4d4;
           text-align: center;
           line-height: 40px;
         }
         .input-box {
           width: calc(100% - 40px);
           height: 40px;
           background: #42b983;
           input {
             width: 100%;
             height: 40px;
             border: none;
             outline:none;
             padding: 0 10px;
           }

         }
       }
     }
     .memberpass {
       display: flex;
       justify-content: space-between;
       margin-bottom: 10px;
       color: #333;
       span{
         font-size: 14px;
         margin-left: 5px;
       }
       a{
         color: #333;
         text-decoration: none;
         font-size: 14px;
       }
       label{
         font-weight: normal;
       }
     }
     .login-btn{
       margin-top: 15px;
       input{
         width: 100%;
         height: 50px;
         line-height: 50px;
         font-size: 22px;
         color: #fff;
         background: #005db1;
         border: 1px solid #005db1;
         border-radius: 5px;
         transition: all linear .3s;
         outline: none;
         &:hover{
           color: #005db1;
           background: transparent;
           cursor: pointer;
         }
       }
     }

   }

 }
</style>