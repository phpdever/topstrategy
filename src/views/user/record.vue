<template>
    <div>
        <van-nav-bar title="历史记录" left-arrow @click-left="$router.back(-1)"> </van-nav-bar>
    

        <a href="javascript:;" v-for="item in orderList" :key="item.index" @click="viewDetail(item.id)">
            <div class="sub-count" style="font-size:0.8rem;">
                <van-row>
                            <van-col span="12" class="dynamic_item" style="text-align:left;">{{item.sharesName}}</van-col>
                            <van-col span="12" class="dynamic_item" style="text-align:right;padding-right:0.5rem;">{{formatTime(item.dealTime*1000)}} ></van-col>
                    </van-row>
            </div>
            
                <div class="dynamic_box">
                    
                    <van-row>
                            <van-col span="6" class="dynamic_item">{{item.count}}</van-col>
                            <van-col span="6" class="dynamic_item">{{item.inPrice}}</van-col>
                            <van-col span="6" class="dynamic_item">{{item.profitLoss}}</van-col>
                            <van-col span="6" class="dynamic_item">{{item.outMoney}}</van-col>
                    </van-row>
                
                    <van-row>
                            <van-col span="6" class="dynamic_item">买入数量</van-col>
                            <van-col span="6" class="dynamic_item">买入价格</van-col>
                            <van-col span="6" class="dynamic_item">交易盈亏</van-col>
                            <van-col span="6" class="dynamic_item">卖出总价</van-col>
                    </van-row>

                </div>
        </a>

        <TheFooter/>
    </div>
</template>

<script>

import TheFooter from '../layout/TheFooter'
import { Toast } from 'vant';
import { getSubsList, getDynamic,deletDynamic } from '@/api/user.js'
import { getNews, getNiumans, postSubscirbe,getOrder } from "../../api/home.js"

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
      orderList: [],
    }
  },
  mounted:function()
  {
    this.user.userId = window.localStorage.getItem('USERID') || ''
    this.id = this.$route.query.id;
    this.getOrders();
  },
  methods:
  {

   viewDetail(id){
        this.$router.push({path:"/record_detail",query:{id:id}}); //浏览牛人详情
   },
   
   //获取持仓记录
   getOrders () {
      getOrder({
        userId: this.user.userId,
      }).then(res => {
        const { state, message } = res
        if (state) {
          this.orderList = message.list
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
body{font-size:0.9rem;background:#efeff4;}
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
    text-align: center;
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