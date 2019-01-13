<template>
    <div>
        <van-nav-bar title="提现" left-arrow @click-left="$router.back(-1)"> </van-nav-bar>
        
    
        <div class="withdraw_price">可提现余额{{user.totalAssets.toFixed(2)}}元</div>

        <router-link to="/bind_bank" v-if="user.bankCard==''">
            <input type="button" value="当前未绑定提现银行卡，前去绑定" class="withdraw_btn" />
        </router-link>

        <router-link to="/bind_bank" v-if="user.bankCard!=''">
            <input type="button" value="点此更换银行卡" class="withdraw_btn_reset" />
        </router-link>

        <div class="withdraw">
            <img src="../../../static/home/price_icon.png">
            <input type="tel" v-model="withdraw_price" placeholder="请输入提现金额" />
        </div>

        <van-button round type="danger" class="withdraw_btn_s" @click="confirm_withdraw">申请提现</van-button>

        <div class="withdraw_tips">
            <p>温馨提示：</p><br>
            <p>提款T+0到账</p>
            <p>最快30分钟，一般情况T+0(当天)到账</p>
            <p>法定节假日或银行特殊原因除外</p>
            <br>
            <p>禁止洗钱、信用卡套现、虚假交易等行为，一经发现并确认，将终止该账户的使用。</p>
       </div>
        
        <TheFooter/>
    </div>
</template>

<script>
import TheFooter from '../layout/TheFooter'
import { postGetkey,postExit,getUser,postWithdraw } from '@/api/user.js'
import { Dialog } from 'vant';
import { Toast } from 'vant';
export default {
  name: 'Message',
  components: {
    TheFooter
  },
  data() {
    return {
      user: {
        name: '',
        phone: '',
        userId: '',
        img:'',
        avatar:'',
        freezesAssets:'',
        totalAssets:'',
        bankCard:'',
      },
      withdraw_price:''
    }
  },
  methods: {
    
    init () {
      getUser({
        id: localStorage.getItem('USERID') || ''
      }).then(res => {
        const { state, message } = res
        if (state) {
          this.user = message
        } else {
          postExit().then(() => this.$router.replace('/login'))
          localStorage.setItem('USERID', '')
          localStorage.setItem('USERNAME', '')
          this.$emit('userChg', 'out')
        }
      }).catch(() => {
        postExit().then(() => this.$router.replace('/login'))
        localStorage.setItem('USERID', '')
        localStorage.setItem('USERNAME', '')
        this.$emit('userChg', 'out')
      })
    },

    confirm_withdraw()
    {
       if(this.withdraw_price==''){
          Toast.fail('请填写提现金额');
       }else{

         if(this.withdraw_price > this.user.totalAssets) {
              Toast.fail('提现金额不能超出账户余额');
              return
        }
          Dialog.confirm({
            title: '提示',
            message: '请确认你要提现的金额('+this.withdraw_price.toFixed(2)+')元'
          }).then(() => {
               postWithdraw({
                amount: parseFloat(this.withdraw_price).toFixed(2)
                }).then(res => {
                  const { state, message } = res
                  if (state) {
                    Toast.success(''+message+'');
                    this.$router.replace('/userdetail')
                  } else {
                    Toast.fail('服务器出错，请稍后再试');
                  }
              })
          }).catch(() => {
            // on cancel
          });
       }
    },

  },
  mounted () {
    this.init();
  }
}
</script>

<style>
body{font-size:0.9rem;background:#efeff4;}

.withdraw_tips{
    padding:2rem;
}
.withdraw_tips p{
    font-size:0.8rem;
    color: #111111;
    line-height:1.5rem;
}
.withdraw_btn
{
  margin:0px auto;
  width: 18rem;
  height:3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: #fff;
  margin-top:1rem;
  margin-bottom:1rem;
  background:#CC413A;
  -webkit-appearance: none;
  border: 0px;
  border-radius: 0.5rem;
}
.withdraw_btn_reset
{
  margin:0px auto;
  width: 10rem;
  height:2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: #fff;
  margin-top:1rem;
  margin-bottom:1rem;
  background:#CC413A;
  -webkit-appearance: none;
  border: 0px;
  border-radius: 0.5rem;
}
.withdraw_price{
    width:70%;
    margin-left:2.5rem;
    font-size:1.2rem;
    margin-top:1rem;
}
.withdraw{ width:100%; height:49px; border-bottom: solid 1px #cfcece; background:#FFFFFF; margin:0 auto;position:relative;}
.withdraw img{ position:absolute; left:15px; top:12px;}
.withdraw input{position:absolute; padding-left:50px; height:47px;color:#999a9c; font-size:14px; background:none; border:none;}
.withdraw_btn_s{
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