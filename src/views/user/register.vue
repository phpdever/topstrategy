<template>
    <div>
        <van-nav-bar title="会员注册" left-arrow  @click-left="$router.back(-1)"> </van-nav-bar>
        
        <div class="zc-main">
        <div class="zc-lc">
            <div class="zc-lc-left">

                <p>
                    <input type="tel" v-model="phone"  required="true" placeholder="请输入手机号码" class="zc-lc-inp1 ng-pristine ng-invalid ng-invalid-required">
                </p>
                
                <p class="zc-yz-new">
                    <input type="tel" v-model="code" style="width:55%;" placeholder="请输入验证码" class="zc-lc-inp1 ng-pristine ng-valid">
                    <span style="cursor: pointer;" @click="sendMessage">发送验证码({{count}})</span>
                </p>

                <p><input type="password" v-model="password"  placeholder="请设定您的登录密码" required="true" class="zc-lc-inp1 ng-pristine ng-invalid ng-invalid-required"></p>

                <p><input type="password"  v-model="repassword"  placeholder="请再次输入您设定的登录密码" required="true"   class="zc-lc-inp1 ng-pristine ng-invalid ng-invalid-required">
                </p>

                <p><input type="tel"  v-model="refphone"  placeholder="请输入邀请人手机号" required="true"   class="zc-lc-inp1 ng-pristine ng-invalid ng-invalid-required">
                </p>

                
                 <p><input type="text" v-model="name"  placeholder="请输入昵称" required="true"   class="zc-lc-inp1 ng-pristine ng-invalid ng-invalid-required">
                </p>

                 <p><input type="text" v-model="realname"  placeholder="请输入真实姓名" required="true"   class="zc-lc-inp1 ng-pristine ng-invalid ng-invalid-required">
                </p>

                <p style="text-align:center;padding-left:0;color: #ff2c37;margin-bottom: 10px;"></p>

                <p class="zc-lc-left-p1" style="margin:0px;">
                    <input type="button" value="注册" class="zc-lc-inp3" @click="addUser">
                </p>
            </div>

        </div>

    </div>
        
    </div>
</template>

<script>

import { postMessage, postUserAdd, postLogin } from '@/api/user'
import { Toast } from 'vant';

export default {
  name: 'login',
  components: {
    //TheFooter
  },
  data() {
      return {
        show: true,
        count: 0,
        timer: null,
        phone: '',
        code: '',
        password: '',
        repassword: '',
        refphone: '',
        realname: '',
        name: '',

      }
    },
  methods: {

       // 发送短信
        sendMessage () {
        if(this.phone) { // 手机号验证
            postMessage({phone: this.phone})
            .then(res => {
                if (res.state) {
                Toast.success('短信验证码已发送');
                this.getCode();
                } else {
                Toast.fail(res.message);
                }
            })
            .catch(() => {
                Toast.fail(res.message);
            })
        } else {
            Toast.fail('请输入手机号');
        }
        },

        getCode(){
            const TIME_COUNT = 60;
            if (!this.timer) {
            this.count = TIME_COUNT;
            this.show = false;
            this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
                this.count--;
                } else {
                this.show = true;
                clearInterval(this.timer);
                this.timer = null;
                }
            }, 1000)
            }
        },

        addUser(){
         if(this.phone){
                postUserAdd({
                    phone: this.phone,
                    password: this.password,
                    name: this.name,
                    refphone: this.refphone,
                    code: this.code,
                    realname: this.realname,
                })
                .then(res => {
                    if (res.state) {
                    Toast.success('注册成功');
                    this.$router.replace('/login');
                    } else {
                        Toast.fail(res.message);
                    }
                })
                .catch(() => {
                     Toast.fail(res.message);
                })
            }else{
                Toast.fail('请填写手机号');
            }
        }
  },
}
</script>

<style>
body{font-size:0.9rem;background:#efeff4;}
.zc-bg{ background:#e9f0f7; width:100%; height:100%; clear:both; overflow:hidden;}
.zc-main{ width:100%; margin:0 auto;height:35rem;}
.zc-bt{ width:100%; text-align: center; height:60px; line-height:60px; margin:0 auto; color:#51575d; font-size:24px; border-bottom: solid 1px #e9f0f7;}
.zc-lc{ width:100%;   margin:0 auto; margin-top:25px;}
.zc-lc-left{ width:100%; overflow:hidden; }
.zc-lc-left p{ width:100%;padding-left:10px;clear:both; overflow:hidden;margin-top:1rem; }
.zc-lc-left .zc-lc-inp1{ width:90%; height:47px;float:left;background:#f7f7f7; font-size:14px;  color:#51575d; border: solid 1px #cfcece;font-family:"Microsoft YaHei";border-radius: 3rem; text-indent:12px;}
.zc-lc-left font{ width:90px; float:left; font-size:14px; color:#51575d; height:47px; line-height:47px;}
.zc-lc-left span{ float:left; width:96px; height:47px; background:#CC413A; line-height:47px; text-align:center; color:#FFFFFF; font-size:12px;border-radius: 3rem; margin-left:20px;}
.zc-lc-right{  float:left; margin-left:80px; padding-top:36px; }
.header-right .header-rh-sy{ font-size:16px; color:#fff; line-height:40px;}
.zc-lc-left .zc-lc-left-p1{ width:100%;text-align: center; padding-left:0;height:50px;line-height:50px;clear:both; overflow:hidden;color:#51575d;}
.zc-lc-left .zc-lc-left-p1 .zc-lc-inp2{ margin-right:5px;}
.zc-lc-left-p1 .zc-lc-inp3{-webkit-appearance: none;width:92%; height:3rem;background:#CC413A; font-size:16px;  color:#fff; border: none;font-family:"Microsoft YaHei";border-radius: 3rem; text-indent:12px;cursor:pointer;}
</style>