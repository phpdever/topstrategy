<template>
    <div>
    
     <van-nav-bar title="详情" left-arrow @click-left="$router.back(-1)"> </van-nav-bar>

     <div class="record-box">
         
            <div class="sub-count" style="font-size:0.8rem;">
                <van-row>
                            <van-col span="12" class="dynamic_item" style="text-align:left;">{{orderDetail.sharesName}}</van-col>
                            <van-col span="12" class="dynamic_item" style="text-align:right;padding-right:0.4rem;">状态：
                                    <span v-if="orderDetail.state == 1">持仓中</span>
                                    <span v-if="orderDetail.state == 2">已平仓</span>
                                    <span v-if="orderDetail.state == 3">已结算</span>
                                    <span v-if="orderDetail.state == 4">待结算</span>
                                    <span v-if="orderDetail.state == 5">平仓中</span>
                            </van-col>
                </van-row>
            </div>

            <div class="result-ranking" style="border-bottom:1px solid #dcdcdc;margin:0px;">
                <span class="recommend-s1" style="padding:1rem;">交易明细</span>
                <span class="recommend-s2" style="float: right;padding-right:0.5rem;font-size:0.9rem;">单号 0</span>
            </div>

            <van-row style="background:#fff;height:8rem;padding:1rem;">
                      <van-col span="12" class="price-text">证券简称 <span class="num_color">{{orderDetail.sharesName}}</span></van-col>
                      <van-col span="12" class="price-text">证券代码 <span class="num_color">{{orderDetail.sharesCode}}</span></van-col>
                      <van-col span="12" class="price-text">成交时间 <span class="num_color">{{formatTime(orderDetail.placeTime*1000)}}</span></van-col>
                      <van-col span="12" class="price-text">成交价格 <span class="num_color">{{orderDetail.inPrice}}</span></van-col>
                      <van-col span="12" class="price-text">成交股数 <span class="num_color">{{orderDetail.count}}</span></van-col>
                      <van-col span="12" class="price-text">成交金额 <span class="num_color">{{orderDetail.inDeal}}</span></van-col>
                      <van-col span="12" class="price-text">止盈 <span class="num_color">{{orderDetail.stopProfit}}</span></van-col>
                      <van-col span="12" class="price-text">止亏 <span class="num_color">{{orderDetail.stopLoss}}</span></van-col>
                      <van-col span="12" class="price-text">总盈亏 <span class="num_color">{{orderDetail.profitLoss}}</span></van-col>
                      <van-col span="12" class="price-text">递延费 <span class="num_color">{{orderDetail.stopProfit}}</span></van-col>
                      <van-col span="12" class="price-text">交易本金 <span class="num_color">{{orderDetail.credit*8}}</span></van-col>
            </van-row>
         </div>

        <TheFooter/>
    </div>
</template>

<script>

import TheFooter from '../layout/TheFooter'
import { Toast } from 'vant';
import { getSubsList, getDynamic,deletDynamic } from '@/api/user.js'
import { getOrderDetail } from "../../api/home.js"

export default {
  name: 'Message',
  components: {
    TheFooter
  },
  data() {
    return {
      avatar:'../../../static/home/rank_head.jpg',
      user: {
        name: '',
        userId: ''
      },
      id:'',
      orderDetail:{},
    }
  },
  mounted:function()
  {
    this.user.userId = window.localStorage.getItem('USERID') || ''
    this.id = this.$route.query.id;
    this.getOrderDetail();
  },
  methods:
  {
   //获取订单详情
   getOrderDetail () {
      getOrderDetail({
        id: this.id,
      }).then(res => {
        const { state, message } = res
        if (state) {
          this.orderDetail = message;
        } else if (message === '请登录') {
          Toast.fail('请登录');
          this.$router.push('/login');
          window.localStorage.removeItem('USERID')
          window.localStorage.removeItem('USERNAME')
        }
      }).catch(() => {
        this.$message.error('请求订单失败')
      })
    },

    formatTime(str){
      return this.$moment(str).format('YYYY-MM-DD')
    }
  }
}
</script>

<style>
body{font-size:0.8rem;background:#efeff4;}
.price-text{
  	float: left;
    width:50%;
    font-size:0.8rem;
    padding:0.2rem;
    margin-top:0.3rem;
}
.num_color{
  color:#CC413A;
}
.result-ranking{
    line-height: 3rem;
    height: 3rem;
    font-size: 1rem;
    color: #505050;
    background: #FFFFFF;
    margin-bottom:0.5rem;
}
.result-ranking .rank-head-img{
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    float: left;
    width:2rem;
    height:2rem;
    margin:0.5rem 1rem 1rem 1rem;
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
.dynamic_box{
    height:3.5rem;
	font-size:0.8rem;
    padding-left:0.5rem;
    background:#fff;
    position: relative;
    padding-top:0.5rem;
    margin-bottom:0.5rem;
}
.dynamic_item{
    margin-top:0.5rem;
}
.with_buy_s{
    font-size:0.8rem;
    border:1px solid #CC413A !important;
    color: #CC413A;
    margin-top:1rem;
    width:12%;
    height:2rem;
    line-height:2rem;
    border-radius: 0.1rem;
    position: absolute;
    top:0rem;
    right:0.5rem;
    background: #fff;
}
</style>