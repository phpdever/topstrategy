<template>
    <div>
        <van-nav-bar title="详情" left-arrow @click-left="$router.back(-1)"> </van-nav-bar>

        <div class="result-info">
          <p class="result-p1">总收益</p>
          <p class="result-p2">0.00%</p>
          <ul>
              <li>日收益率</li>
              <li>周收益率</li>
              <li>月收益率</li>
              <li>0.00%</li>
              <li>0.00%</li>
              <li>0.00%</li>
          </ul>
      </div>

      <div class="result-ranking bottom-bold-line">
            <img  class="rank-head-img" :src="avatar">
            <span class="recommend-s1">{{user_renqi.name}}</span>
            <span class="recommend-s2" style="float: right;padding-right:0.5rem;">♥ {{user_renqi.popularity}}</span>
      </div>

      <div  style="padding-bottom:5rem;min-height:10rem;width:100%;float:left;">
          
      <div class="ranking-box" v-for="item in data1" :key="item.index">

            <div class="result-ranking" style="border-bottom:1px solid #dcdcdc;margin:0px;">
                        <span class="recommend-s1" style="padding:1rem;">{{item.sharesName}}</span>
                        <span class="recommend-s2" style="float: right;color:#CC413A;padding-right:0.5rem;"></span>
            </div>

            <van-row style="background:#fff;height:7rem;padding:1rem;">
                    <van-col span="12" class="price-text">信用金 <span class="num_color">{{item.credit}}</span></van-col>
                    <van-col span="12" class="price-text">买入价 <span class="num_color">{{item.inPrice}}</span></van-col>
                    <van-col span="12" class="price-text">买入数量 <span class="num_color">{{item.count}}</span></van-col>
                    <van-col span="12" class="price-text">买入总价 <span class="num_color">{{item.inDeal}}</span></van-col>
                    <van-col span="12" class="price-text">卖出数量 <span class="num_color">{{item.outCount}}</span></van-col>
                    <van-col span="12" class="price-text">卖出价格 <span class="num_color">{{item.outPrice}}</span></van-col>
                    <van-col span="12" class="price-text">平仓时间 <span class="num_color">{{formatTime(item.positioTime*1000)}}</span></van-col>
                    <van-col span="12" class="price-text">卖出总价 <span class="num_color">{{item.outMoney}}</span></van-col>
                    <van-col span="12" class="price-text">盈亏 <span class="num_color">{{item.profitLoss}}</span></van-col>
                    <van-col span="12" class="price-text">订单状态 
                        
                        <span class="num_color" v-if="item.state == 1">持仓中</span>
                        <span class="num_color" v-if="item.state == 2">已平仓</span>
                        <span class="num_color" v-if="item.state == 3">已结算</span>
                        <span class="num_color" v-if="item.state == 4">待结算</span>
                        <span class="num_color" v-if="item.state == 5">平仓中</span>
                    
                    </van-col>
            
            </van-row>

            <div class="result-ranking" style="height:4rem;text-align:center;border-bottom:1px solid #dcdcdc;border-top:1px solid #dcdcdc;margin:0px;">
                    <input type="button" value="实盘跟买" class="with_buy">
            </div>

      </div>

      </div>

      <div class="subscribe-div">
          <input type="button" value="立即订阅" v-if="!isRepeat" style="background:#0e90d2" @click="postSubscirbe(id)">
          <input type="button" value="取消订阅" v-if="isRepeat" @click="deletDynamic(id)">
      </div>

    </div>
</template>

<script>

import TheFooter from '../layout/TheFooter'
import { Toast } from 'vant';
import { getNews, getNiumans, postSubscirbe,getOrder } from "../../api/home.js"
import { deletDynamic,postisRepeat,postPopularity } from '@/api/user.js'

export default {
  name: 'Message',
  components: {
    TheFooter
  },
  data() {
    return {
      avatar:'../../../static/home/rank_head.jpg',
      id:'',
      user: {
        name: '',
        phone: '',
        userId: '',
        img:'',
        avatar:''
      },
      data1:[],
      isRepeat:'',
      user_renqi:{}
    }
  },
  mounted:function()
  {
    this.id = this.$route.query.id;
    this.user.userId = window.localStorage.getItem('USERID') || ''
    this.getOrders();
    this.isRepeat_s();
    this.query_popularity();

  },
  methods:
  {
    
   //获取用户人气
   query_popularity(){
        postPopularity({
        id: this.id,
        }).then(res => {
            this.user_renqi = res.message;
        })
   },
   
   //是否已经订阅
   isRepeat_s(){
     postisRepeat({
        fansId: this.user.userId,
        subscribeId: this.id
      }).then(res => {
        if(res.state == 2 && res.message == true){
            this.isRepeat = 1;
        }else{
            this.isRepeat = 0;
        }
      })
   },

   //获取持仓记录
   getOrders () {
      getOrder({
        userId: this.id,
      }).then(res => {
        const { state, message } = res
        if (state) {
          this.data1 = message.list;
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

   deletDynamic(id){
      deletDynamic({
        fansId: this.user.userId,
        subscribeId: id
      }).then(res => {
        if(res.state == 2){
            this.isRepeat = false;
            Toast.success('取消订阅成功');
        }else{
            Toast.fail('取消订阅失败');
        }
      })
    },

    postSubscirbe (id) {
      postSubscirbe({
        fansId: this.user.userId,
        subscribeId: id
      }).then(res => {
        const {message, state} = res
        if (state) {
            this.isRepeat = true;
            Toast.success('订阅动态成功');
        } else {
            Toast.fail(message);
        }
      }).catch(() => {
          Toast.fail('服务器出错，请稍后再试');
      })
    },
    formatTime(str){
      return this.$moment(str).format('YYYY-MM-DD')
    }
  }
}
</script>

<style>
.ranking-box{width:100%;min-height:10rem;background:red;float:left;}
body{font-size:0.9rem;background:#efeff4;padding-bottom:20rem;}
.result-info{
    width:100%;
    height:11rem;
    text-align: center;
    background:#fec52d; /* 一些不支持背景渐变的浏览器 */
    background:-moz-linear-gradient(top, #ffe479, #fec52d);
    background:-webkit-gradient(linear, 0 0, 0 bottom, from(#ffe479), to(#fec52d));
    background:-o-linear-gradient(top, #ffe479, #fec52d);
}
.result-info ul{
    margin-top:1rem;
}
.result-info li{
    float: left;
    width:33.3%;
    line-height:2rem;
    height:2rem;
    font-size:0.8rem;
    color: #FFFFFF;
}
.result-info .result-p1{
    font-size:1.2rem;
    line-height:3rem;
    height:3rem;
    color: #FFFFFF;
}
.result-info .result-p2{
    font-size:2rem;
    line-height:2rem;
    height:2rem;
    color: #FFFFFF;
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
/*记录选项卡*/
.biderItem-ul li{
    float: left;
    color: #6b6b6b;
}
.biderItem-ul .bider-title{
    font-size: 0.8rem;
    height: 3.5rem;
    line-height: 3.5rem;
    color: #515151;
    padding-left:0.5rem;
}
.biderItem-ul .bider-profit{
    font-size:0.5rem;
    height: 3.5rem;
    line-height: 3.5rem;
    text-align: right;
    float:right;
    padding-right:0.5rem;
}

.biderItem-ul .trade-amount {
    color:#58ad39;
    font-size:0.9rem;
}
.biderItem-ul input{
    height: 1.5rem;
    width: 4rem;
    line-height: 1.5rem;
    background: #02aeec;
    color: #FFFFFF;
    font-size: 0.8rem;
    border: 0;
    margin-top: 0.5rem;
    margin-left: 1rem;
}
.win-icon{
    background: #fdc52c;
    width: 2.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
    text-align: center;
    color: #FFFFFF;
    border-radius: 0.3rem;
    float: left;
    margin-top: 0.5rem;
    margin-right: 1rem;
}
.subscribe-div{
    line-height:4rem;
    height:4rem;
    position: fixed;
    bottom:0;
    left:0;
    width:100%;
    text-align: center;
    border-top:1px solid #c8c7cc;
    z-index:10;
    background:#f7f7f7;
    box-shadow: 0px 0px 10px #868686;
}
.subscribe-div input{
    font-size:0.8rem;
    background: #CC413A;
    color: #FFFFFF;
    border:0px;
    margin-top:1rem;
    height:2rem;
    line-height:2rem;
    -webkit-appearance: none;
}
.with_buy{
    font-size:0.8rem;
    background: #CC413A;
    color: #FFFFFF;
    border:0px;
    margin-top:1rem;
    width:50%;
    height:2rem;
    line-height:2rem;
    border-radius: 0.1rem;
    -webkit-appearance: none;
    
}
</style>