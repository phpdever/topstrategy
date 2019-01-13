<template>
    <div>
        <van-nav-bar title="绑定银行卡" left-arrow @click-left="$router.back(-1)"> </van-nav-bar>

         <div class="recharge" style="margin-top:1rem;">
           <img src="../../../static/home/name_icon.png">
            <input type="text" v-model="user.realname" placeholder="请输入持卡人姓名" />
        </div>

        <div class="recharge">
            <img src="../../../static/home/bank_icon.png">
            <input type="tel" v-model="bankCard" placeholder="请输入持卡人卡号" />
        </div>

        <van-button round type="danger" class="recharge_btn" @click="bankBind">立即绑定</van-button>
        
        <TheFooter/>
    </div>
</template>

<script>

import TheFooter from '../layout/TheFooter'
import { postBank,getUser } from '@/api/user.js'
import { Toast } from 'vant';

export default {
  name: 'Message',
  components: {
    TheFooter
  },
  data() {
    return {
      bankCard: '',
      user: {
        realname: '',
      },
    }
  },
  methods: {
    bankBind () {
      postBank({
        realname: this.user.realname,
        bankCard: this.bankCard
      }).then(res => {
        if (res.state) {
            Toast.success('银行卡绑定成功');
            this.$router.replace('/withdraw')
        }else{
            Toast.fail(res.message);
        }
      })
    },

    get_userinfo(){
          getUser({
            id: localStorage.getItem('USERID') || '',
          }).then(res => {
            const { state, message } = res
            if (res.state) {
               this.user = message;
            } else {
               Toast.fail('获取用户信息失败');
            }
          }).catch(res => {
              Toast.fail('获取用户信息失败');
          })
          
      }
  },
  mounted () {
      this.get_userinfo();
  }

}
</script>

<style>
body{font-size:0.9rem;background:#efeff4;}
.recharge{ width:100%; height:49px; border-bottom: solid 1px #cfcece; background:#FFFFFF; margin:0 auto;position:relative;}
.recharge img{ position:absolute; left:15px; top:12px;}
.recharge input{position:absolute; padding-left:50px; height:47px;color:#999a9c; font-size:14px; background:none; border:none;}
.recharge_btn{
  margin:0px auto;
	width: 12rem;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	color: #fff;
  margin-top:2rem;
  margin-bottom:1rem;
  background:#CC413A;
}
</style>