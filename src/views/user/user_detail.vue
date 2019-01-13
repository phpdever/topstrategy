<template>
    <div>
        <van-nav-bar title="我的账户" left-arrow @click-left="$router.back(-1)"> </van-nav-bar>

         <div class="pay_box">

                <van-row style="margin-bottom:0.3rem;font-size:0.9rem;margin-top:0.5rem;">
                      <van-col span="12">可用余额</van-col>
                      <van-col span="12" style="text-align:right;">冻结信用金(元)</van-col>
                </van-row>

                <van-row style="margin-top:1rem;">
                      <van-col span="12" class="price-text">{{user.totalAssets.toFixed(2)}}元</van-col>
                      <van-col span="12" class="price-text" style="text-align:right;">{{user.freezesAssets.toFixed(2)}}元</van-col>
                      
                      <van-col span="12" class="price-text">
                          <router-link to="/recharge">
                              <input type="button" value="充值" class="pay_btn">
                          </router-link>
                      </van-col>

                      <van-col span="12" class="price-text" style="text-align:right;">
                         <router-link to="/withdraw">
                            <input type="button" value="提现" class="pay_btn">
                          </router-link>
                      </van-col>

                </van-row>

        </div>

        <router-link to="/fund_detail">
            <div class="line-d2">钱包流水<div class="icon-more"></div></div>
        </router-link>

     
         
        <TheFooter/>
    </div>
</template>

<script>

import TheFooter from '../layout/TheFooter'
import { postGetkey,postExit, getUser } from '@/api/user.js'

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
      user: {
        name: '',
        phone: '',
        userId: '',
        img:'',
        avatar:'',
        freezesAssets:'',
        totalAssets:'',
      }
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
    },

    init () {
      getUser({
        id: localStorage.getItem('USERID') || ''
      }).then(res => {
        const { state, message } = res
        if (state) {
          this.user = message
          this.user.avatar = 'data:image/png;base64/' + message.img;
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
    }
  },
  mounted () {
    this.init();
  }
}
</script>

<style>
body{font-size:0.9rem;background:#efeff4;}
.line-d2 {
    line-height: 3rem;
    background: #FFFFFF;
    font-size: 0.9rem;
    color: #999;
    padding-left: 1rem;
    border-bottom:1px solid #efefef;
}
.icon-more {
    width: 4rem;
    height: 3rem;
    background: url(../../../static/home/more.png) no-repeat;
    background-position: 2rem 0.8rem;
    -webkit-background-size: 1.8rem 1.8rem;
    background-size: 1rem 1.5rem;
    float: right;
}
.pay_box{
	padding:1rem;
    background: #fff;
    height: 6.5rem;
    padding-top: 5px;
}
.price-text{
	  float: left;
    padding-left:1%;
    margin-top:0.5rem;
    font-size:0.8rem;
}
.pay_btn{
    padding: 0.4rem 2rem;
    font-size: 0.8rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    border: 1px solid #CC413A;
    background: #CC413A;
    color: #FFFFFF;
    border-radius: 0.2rem;
    -webkit-appearance: none;

}
</style>