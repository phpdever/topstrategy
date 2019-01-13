<template>
    <div>
        <van-nav-bar title="资金明细" left-arrow @click-left="$router.back(-1)"> </van-nav-bar>

        <van-tabs v-model="active">
              <van-tab title="充值">

                  <div  style="padding-bottom:5rem;min-height:10rem;width:100%;float:left;">
                
                   <div class="fund_box" v-for="item in tableData" :key="item.index">
                      <van-row>
                              <van-col span="24" class="fund_item">充值 / {{item.typeName}}</van-col>
                      </van-row>
                      <van-row>
                              <van-col span="24" class="fund_item">{{formatTime(item.rechargeTime*1000)}}</van-col>
                      </van-row>
                    <div class="fund_type">+{{item.rechargeMoney.toFixed(2)}}</div>
                  </div>

                  </div>

              </van-tab>

              <van-tab title="提现">
                  <div  style="padding-bottom:5rem;min-height:10rem;width:100%;float:left;">
                    <div class="fund_box" v-for="items in withdraw" :key="items.index">
                            <van-row>
                                    <van-col span="24" class="fund_item">提现 / {{items.typeName}}</van-col>
                            </van-row>
                            <van-row>
                                    <van-col span="24" class="fund_item">{{formatTime(items.withdrawTime*1000)}}</van-col>
                            </van-row>
                          <div class="fund_type">-{{items.withdrawMoney.toFixed(2)}}</div>
                      </div>
                   </div>
              </van-tab>
        </van-tabs>

        <TheFooter/>
    </div>
</template>

<script>

import TheFooter from '../layout/TheFooter'
import { Toast } from 'vant';
import { getRecharge,getWithdraw } from '@/api/user.js'

export default {
  name: 'Message',
  components: {
    TheFooter
  },
  data() {
    return {
      avatar:'../../../static/home/rank_head.jpg',
      tableData: [],
      withdraw: [],
      user: {
        userId: ''
      }
    }
  },
  mounted:function()
  {
    this.user.userId = localStorage.getItem('USERID') || ''
    this.getRecharge(); //充值记录
    this.getWithdraw(); //提现记录
  },
  methods:
  {
    getRecharge () {
      this.tableData = []
      getRecharge({
        userId: this.user.userId
      }).then(res => {
        const { state, message } = res
        if (!state) {
          this.tableData = message.list
        }
      })
    },

    getWithdraw () {
      this.withdraw = []
      getWithdraw(
          { userId: this.user.userId}
      ).then(res => {
        const { state, message } = res
        if (state) {
          this.withdraw = message.list
        }
      })
    },

    formatTime(str){
      return this.$moment(str).format('YYYY-MM-DD HH:mm:ss')
    },
  }
}
</script>

<style>
body{font-size:0.9rem;background:#efeff4;}
.sub-count{
    height: 3rem;
    line-height: 3rem;
    background: #FFF;
    font-size: 1rem;
    padding-left: 1rem;
    border-bottom:1px solid #dcdcdc;
}
.sub-img-ul{
    min-height: 5rem;
    background: #FFF;
    overflow-x: scroll;
    margin-bottom:1rem;
    padding-bottom:0.5rem;
}
.sub-img-ul li{
    min-width: 1rem;
    float: left;
    margin-right:1rem;
    margin-left:1rem;
}
.sub-img-ul img{
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    float: left;
    width: 3rem;
    height: 3rem;
    margin: 0.6rem;
}
.sub-nickname{
    text-align: center;
    font-size: 0.7rem;
    color: #5d5d5d;
}
.fund_box{
    height:3rem;
	  font-size:0.8rem;
    padding-left:0.5rem;
    background:#fff;
    position: relative;
    padding-top:0rem;
    margin-bottom:0.5rem;
}
.fund_item{
    margin-top:0.5rem;
}
.fund_type{
    font-size:0.8rem;
    margin-top:0.6rem;
    width:12%;
    height:2rem;
    line-height:2rem;
    border-radius: 0.1rem;
    position: absolute;
    top:0rem;
    right:0.5rem;
    color:#e46a63;
}
</style>