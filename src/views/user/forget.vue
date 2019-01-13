<template>
    <div>
        <van-nav-bar title="忘记密码" left-arrow @click-left="$router.back(-1)"> </van-nav-bar>
        
        <div class="zc-main">
        <div class="zc-lc">
            <div class="zc-lc-left">
                <p>
                    <input type="tel" v-model="phone"  required="true" placeholder="请输入手机号码" class="zc-lc-inp1 ng-pristine ng-invalid ng-invalid-required">
                </p>
                
                <p class="zc-yz-new">
                    <input type="tel" style="width:55%;" v-model="sms_code" placeholder="请输入验证码" class="zc-lc-inp1 ng-pristine ng-valid">
                    <span @click="sendMessage"  style="cursor: pointer;">发送验证码({{count}})</span>
                </p>

                <p><input type="password" v-model="password"  placeholder="请输入你要重置的密码" required="true" class="zc-lc-inp1 ng-pristine ng-invalid ng-invalid-required"></p>

                <p><input type="password" v-model="newpassword" placeholder="请再次输入您要重置的密码" required="true"   class="zc-lc-inp1 ng-pristine ng-invalid ng-invalid-required">
                </p>

                <p style="text-align:center;padding-left:0;color: #ff2c37;margin-bottom: 10px;"></p>

                <p class="zc-lc-left-p1" style="margin:0px;">
                    <input type="button" value="立即找回" class="zc-lc-inp3" @click="fotget">
                </p>
            </div>

        </div>

    </div>
        
    </div>
</template>

<script>

import { postMessage, postUserAdd, postLogin, postForget } from '@/api/user'
import { Toast } from 'vant';

export default {
  name: 'login',
  components: {
    //TheFooter
  },
  data() {
      return {
        phone:'',
        sms_code:'',
        password:'',
        newpassword:'',
        show: true,
        count: 0,
        timer: null,
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

    fotget(){
        if(this.phone){
         postForget({
             phone: this.phone,
             code: this.sms_code,
             newPassword: this.newpassword,
          })
          .then(res => {
            if (res.state) {
               Toast.success('密码已重置');
               this.$router.replace('/login');
            } else {
              Toast.fail(res.message);
            }
          })
          .catch(() => {
              Toast.fail(res.message);
          })
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
.zc-lc-left span{ float:left; width:96px; height:47px; background:#CC413A; line-height:47px; text-align:center; color:#FFFFFF; font-size:14px;border-radius: 3rem; margin-left:20px;}
.zc-lc-right{  float:left; margin-left:80px; padding-top:36px; }
.header-right .header-rh-sy{ font-size:16px; color:#fff; line-height:40px;}
.zc-lc-left .zc-lc-left-p1{ width:100%;text-align: center; padding-left:0;height:50px;line-height:50px;clear:both; overflow:hidden;color:#51575d;}
.zc-lc-left .zc-lc-left-p1 .zc-lc-inp2{ margin-right:5px;}
.zc-lc-left-p1 .zc-lc-inp3{-webkit-appearance: none;width:80%; height:3rem;background:#CC413A; font-size:16px;  color:#fff; border: none;font-family:"Microsoft YaHei";border-radius: 3rem; text-indent:12px;cursor:pointer;}
</style>