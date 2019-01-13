<template>
    <div>
        <van-nav-bar title="充值" left-arrow @click-left="$router.back(-1)"> </van-nav-bar>
        
        <div class="recharge">
            <img src="../../../static/home/money.png">
            <input type="tel" v-model="pay_price" placeholder="请输入充值金额" />
        </div>


        <!-- <div class="recharge" style="margin-top:1rem;">
            <input type="text" placeholder="请输入持卡人姓名" />
        </div>

        <div class="recharge">
            <input type="text" placeholder="请输入持卡人卡号" />
        </div>

        <div class="recharge">
            <input type="text" placeholder="请输入身份证号" />
        </div> -->

        <van-radio-group v-model="pay_type">
            <van-cell-group>
                <van-cell title="支付宝支付" clickable @click="pay_type = '1'">
                <van-radio name="1" />
                </van-cell>
                <van-cell title="微信支付" clickable @click="pay_type = '2'">
                <van-radio name="2" />
                </van-cell>
            </van-cell-group>
        </van-radio-group>

        <van-button round type="danger" class="recharge_btn" @click="subMoney(2)">充值</van-button>
        
        <TheFooter/>
    </div>
</template>

<script>

import TheFooter from '../layout/TheFooter'
import { postGetkey } from '@/api/user.js'
import { Toast } from 'vant';
export default {
  name: 'Message',
  components: {
    TheFooter
  },
  data() {
    return {
      head_box: {
        img1: '../../../static/home/sysmsg.png',
        img2: '../../../static/home/subscribe.png',
        img3: '../../../static/home/notify.png',
      },
      pay_type: '1',
      pay_price:'',
    }
  },
  methods: {
    subMoney (info) {
      if(this.pay_price == ''){
          Toast.fail('请填写充值金额');
          return false;
      }else{
            postGetkey({
                istype: this.pay_type,
                price: this.pay_price
            }).then(res => {
                if (res.state) {
                const info = res.message
                this.postss(info.url, info.patsParam)
                }
            })
      }
    },

    postss (URL, PARAMS) {
      var temp = document.createElement("form")
      temp.action = URL
      temp.method = "post"
      temp.style.display = "none"
      for (var x in PARAMS) { 
        var opt = document.createElement("textarea")
        opt.name = x
        opt.value = PARAMS[x] // alert(opt.name) 
        temp.appendChild(opt)
        } 
      document.body.appendChild(temp)
      temp.submit()
      return temp
    }
  },
  mounted () {
   
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