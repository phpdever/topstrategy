<template>
    <div>
        <van-nav-bar title="会员登录"> </van-nav-bar>

        <div style="text-align: center;margin-top:3rem;margin-bottom:2rem;">
          <img :src="logo.img" style="width: 30%;">
       </div>

       <div class="login">
          <img src="../../../static/home/sj.jpg">
          <input type="tel" v-model="username" placeholder="手机号码" required="" autofocus="" class="ng-pristine ng-invalid ng-invalid-required">
       </div>

       <div class="login">
          <img src="../../../static/home/mm.jpg">
          <input type="password" v-model="password" placeholder="密码" required="" aria-autocomplete="list" class="ng-pristine ng-invalid ng-invalid-required">
       </div>

      <van-button round type="danger" class="login_btn" @click="userLogin">登录</van-button>
      
       <p style="text-align: center;margin-top:3rem;">
           <router-link to="/forget">
              <a href="javascript:void(0)" data-dismiss="modal">忘记密码</a>&nbsp;
          </router-link>
          |
          <router-link to="/register">
              <a href="javascript:void(0)" data-dismiss="modal">免费注册</a>
          </router-link>
       </p>

        <TheFooter/>
    </div>
</template>

<script>

import TheFooter from '../layout/TheFooter'

import { postMessage, postUserAdd, postLogin } from '@/api/user'
import { Toast } from 'vant';

export default {
  name: 'login',
  components: {
    TheFooter
  },
  data() {
      return {
        logo:{
          img:'../../../static/home/logo.jpg'
        },
        username:'',
        password:'',
      }
    },
  methods: {
      userLogin () {
            postLogin({
              username: this.username,
              password: this.password
            }).then(res => {
              const { message, state } = res
              if (state) {
                window.localStorage.setItem('USERID', message.userId)
                window.localStorage.setItem('USERNAME', message.name)
                window.localStorage.setItem('USERAVATAR', message.img)
                this.$router.replace('/')
                this.$emit('userChg', 'in')
              } else {
                 Toast.fail(message);
              }
            })
            .catch(res => {
                Toast.fail(res.message);
            })
      }
  },
}
</script>
<style>
body{font-size:0.8rem;}
a{color:#CC413A;}
.login{ width:100%; height:49px; border-bottom: solid 1px #cfcece; background:#FFFFFF; margin:0 auto;position:relative;}
.login img{ position:absolute; left:15px; top:12px;}
.login input{ position:absolute; padding-left:50px; height:47px;color:#999a9c; font-size:14px; background:none; border:none;}
.login-wj{width:100%; height:49px;margin:0 auto; height:49px; margin-top:10px; text-align:right;  text-decoration:underline;}
.login-wj a{color:#5c5d5f;}
.login-butt{width:100%; height:49px;margin:0 auto; /*height:49px; */margin-top:10px}
.login-butt input{ width:100%; height:48px; background:#CC413A; font-size:16px; color:#fff; border:none;font-family:"Microsoft YaHei";border-radius: 3px;cursor:pointer;}
.login-zc{width:100%; height:49px;margin:0 auto; /*height:49px;*/ margin-top:10px; text-align:right;  text-decoration:underline;}
.login-zc a{color:#fc6b02;}
.login_btn {
  margin:0px auto;
	width: 15rem;
	display: flex;
	justify-content: center;
	align-items: center;
  font-size: 1.2rem;
	color: #fff;
  margin-top:2rem;
  margin-bottom:1rem;
  background:#CC413A;
   -webkit-appearance: none;
}
</style>