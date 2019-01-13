<template>
    <div>
        <van-nav-bar title="我的订阅" left-arrow @click-left="$router.back(-1)"> </van-nav-bar>
        
        <div class="sub-count">
            我订阅的人
        </div>

        <ul class="sub-img-ul">
              
                <li v-for="item in tableData1" :key="item.index">
                    <a href="javascript:;" @click="viewDetail(item.userId)">
                      <img :src="avatar">
                      <div class="sub-nickname">{{item.name}}</div>
                    </a>
                </li>
              
       </ul>
       
        <div class="sub-count">
           订阅动态
       </div>
       
        <div class="dynamic_box" v-for="item in tableData2" :key="item.index">
            
            <van-row>
                    <van-col span="8" class="dynamic_item">{{item.name}}</van-col>
                    <van-col span="8" class="dynamic_item">{{item.sharesName}}}</van-col>
                    <van-col span="8" class="dynamic_item">买入{{item.inPrice}}</van-col>
            </van-row>
        
            <van-row>
                    <van-col span="8" class="dynamic_item">{{formatTime(items.dealTime*1000)}}<span style="color:#CC413A;">成交</span></van-col>
                    <van-col span="8" class="dynamic_item">{{item.outCount}}}股</van-col>
                    <van-col span="8" class="dynamic_item">止盈{{item.stopProfit}}</van-col>
            </van-row>

            <input type="button" value="跟买" class="with_buy_s">

         </div>

        

        <TheFooter/>
    </div>
</template>

<script>

import TheFooter from '../layout/TheFooter'
import { Toast } from 'vant';
import { getSubsList, getDynamic,deletDynamic } from '@/api/user.js'

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
      tableData1: [],
      tableData2: [],
      totalPage: 5, // 总页数
      pageSize: 10, // 每页多少
      pageNumber: 1 // 当前第几页
    }
  },
  mounted:function()
  {
    this.user.userId = window.localStorage.getItem('USERID') || ''
    this.getList();
    this.getDongtai();
  },
  methods:
  {

     viewDetail(id){
            this.$router.push({path:"/subscribe_detail",query:{id:id}}); //浏览牛人详情
     },

    //获取订阅的人
    getList () {
      getSubsList({
        id: this.user.userId
      }).then(res => {
        const { state, message } = res
        if (state) {
          this.tableData1 = message
        } else if (message === '请登录') {
          this.$emit('userChg', 'out')
          window.localStorage.removeItem('USERID')
          window.localStorage.removeItem('USERNAME')
        }
      })
    },

    //获取订阅动态
    getDongtai () {
      this.tableData2 = []
      getDynamic({
        id: this.user.userId,
        pageSize: this.pageSize,
        pageNumber: this.pageNumber
      }).then(res => {
        const { state, message } = res
        if (state) {
          this.tableData2 = message.list
          this.totalPage = message.total
        }
      })
    },

    formatTime(str){
      return this.$moment(str).format('YYYY-MM-DD HH:mm:ss')
    }
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
     -webkit-appearance: none;
}
</style>