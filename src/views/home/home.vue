<template>

    <div class="main">

      <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(image, index) in carouseItem" :key="index">
            <img :src="image" width="100%" height="167px" />
          </van-swipe-item>
      </van-swipe>

      <div class="main-nav">
            <van-row>
              <van-col span="8">
                
                <dl>
                  <dt><img :src="head_box.img1"></dt>
                  <dd>创建策略</dd>
                </dl>

              </van-col>
              <van-col span="8">
                 <router-link to="/subscribe">
                    <dl>
                      <dt><img :src="head_box.img2"></dt>
                      <dd>我的订阅</dd>
                    </dl>
                 </router-link>
              </van-col>

              <van-col span="8">
                 <router-link to="/notice">
                    <dl>
                      <dt><img :src="head_box.img3"></dt>
                      <dd>查看公告</dd>
                    </dl>
                 </router-link>
              </van-col>

            </van-row>
      </div>

      <div class="zhishu">
          <van-row  type="flex" justify="center">
            <van-col span="8">
              
              <dl>
                <dt>上证指数</dt>
                <dd class="price_red">{{shangzheng.nowPrice}}</dd>
                <dd>{{shangzheng.swing}}%</dd>
              </dl>

            </van-col>
            <van-col span="8">
             <dl>
                <dt>深证指数</dt>
                <dd class="price_red">{{shenzheng.nowPrice}}</dd>
                <dd>{{shenzheng.swing}}%</dd>
              </dl>
            </van-col>
            <van-col span="8">
              <dl>
                <dt>创业板指</dt>
                <dd class="price_red">{{chuangye.nowPrice}}</dd>
                <dd>{{chuangye.swing}}%</dd>
              </dl>
            </van-col>
          </van-row>
      </div>

      <div>
            <van-tabs v-model="active">
              <van-tab title="实盘策略">
                
                <div class="myAccount">

                <van-row style="margin-bottom:0.3rem;font-size:0.9rem;">
                      <van-col span="24">我的资产</van-col>
                </van-row>

                <van-row>
                      <van-col span="12" class="price-text">总资产：{{user.totalAssets.toFixed(2)}}元</van-col>
                      <van-col span="12" class="price-text">冻结资金：{{user.freezesAssets.toFixed(2)}}元</van-col>
                      <van-col span="12" class="price-text">可用资金：{{user.availableAssets.toFixed(2)}}元</van-col>
                      <van-col span="12" class="price-text">浮动盈亏：0元</van-col>
                </van-row>

                </div>
              
                <van-row type="flex" justify="space-between" class="postion_area">
                  <van-col span="12">策略持仓</van-col>
                       <van-col span="12" style="text-align:right;"><router-link to="/record">历史记录 >> </router-link></van-col>
                </van-row>

               <router-link to="/strategy">
                    <div class="add-strategy">
                        <div class="btn-add-strategy">
                          <van-icon name="plus" size="3rem" class="plus" />
                        </div>
                        <span class="add-txt">点击创建策略</span>
                    </div>
               </router-link>

              </van-tab>
              <van-tab title="模拟策略">内容 2</van-tab>
            </van-tabs>
      </div>


     <TheFooter/>
    </div>

</template>
<script>
import { getShares, postAdd } from '@/api/user.js'

import TheFooter from '../layout/TheFooter'
import { getNews, getNiumans, postSubscirbe } from "../../api/home.js"
import { postExit, getUser } from '@/api/user.js'
import { Toast } from 'vant';

export default {
  components:{
    TheFooter
  },
  data() {
    return {
      carouseItem: [
        "../../../static/home/banner2.jpg",
        "../../../static/home/banner1.jpg",
        "../../../static/home/banner3.jpg"
      ],
      head_box: {
        img1: '../../../static/home/sysmsg.png',
        img2: '../../../static/home/subscribe.png',
        img3: '../../../static/home/notify.png',
      },
      user: {
        name: '',
        userId: '',
        totalAssets: 0,
        availableAssets: 0,
        freezesAssets: 0,
      },
      shenzheng:'',
      shangzheng:'',
      chuangye:'',
      active:''
    };
  },
  mounted () {
    this.user.userId = window.localStorage.getItem('USERID') || ''
    this.user.name = window.localStorage.getItem('USERNAME') || ''

    this.init();
    this.getData();
  },
  methods:{
    init () {
      getUser({
        id: localStorage.getItem('USERID') || ''
      }).then(res => {
        const { state, message } = res
        if (state) {
          this.user = message
        } else {
          localStorage.setItem('USERID', '')
          localStorage.setItem('USERNAME', '')
          this.$emit('userChg', 'out')
        }
      }).catch(() => {
        localStorage.setItem('USERID', '')
        localStorage.setItem('USERNAME', '')
        this.$emit('userChg', 'out')
      })
    },
    getData() {
      $.ajax({
        url: "http://route.showapi.com/131-45", // q
        data: {
          showapi_appid: "83627",
          showapi_sign: "c95f575bc1fe423286b95539f907f517",
          stocks: this.sharesCode
        },
        success: data => {
          if(data.showapi_res_code != 0){
            Toast.fail(data.showapi_res_error);
          }else{
            this.shangzheng = data.showapi_res_body.indexList[0];
            this.shenzheng = data.showapi_res_body.indexList[1];
            this.chuangye = data.showapi_res_body.indexList[3];
          }
        },
        error: data => {
          Toast.fail(data.showapi_res_error);
        }
      });
    },
  }
};
</script>
<style lang="scss">
body{font-size:0.8rem;}
.add-strategy {
    width:30vw;
    height: 35vw;
    margin: 10vw auto;
    text-align: center;
}
.btn-add-strategy {
    width: 17vw;
    height: 17vw;
    margin-bottom:0.5rem;
    margin: 1rem auto;
}
.add-img {
    border-radius: 50%;
    height:2.6rem;
    width:2.6rem;
    bottom:6.5rem;
    right:1.5rem;
    z-index:777;
    font-size:3rem;
    line-height:2.2rem;
    text-align: center;
    color: #ffffff;
    background: rgba(255, 138, 128, 0.79);
    float:right;
    margin-right: 16%;
    margin-top: 15%;
}
.plus {
    font-size:1rem;
    font-weight:500;
    color: #CC413A;
    margin-top:1rem;
    border: 2px solid #CC413A;
    margin: 1rem auto;
    border-radius: 50%;
}
.add-txt {
    font-size:1rem;
    font-weight:500;
    color: #CC413A;
    margin-top:1rem;
    margin: 1rem auto;
}
.main-nav dl{
    background: #f7f8f9;
    float: left;
    text-align: center;
    line-height:1.6rem;
    padding: 1rem;
    margin-top:0.5rem;
    font-size:0.9rem;
}
.main-nav img{
    height:30%;
    width:30%;
    padding-bottom:0.3rem;
}
.zhishu dl{
    height:3.8rem;
    background: #f7f8f9;
    text-align: center;
    line-height:1.6rem;
    padding: 1rem;
    border-right:1px solid #efeff4;
    margin-top:0.5rem;
    font-size: 0.7rem;
}
.myAccount{
	padding:1rem;
    margin-top: 10px;
    background: #CC413A;
    height: 4rem;
    padding-top: 5px;
    border-bottom: 1px solid #c8c7cc;
    border-top: 1px solid #c8c7cc;
    color: #FFFFFF;
}
.price-text{
	float: left;
    width:50%;
    padding-left:3%;
    margin-top:0.5rem;
    font-size:0.8rem;
}
.postion_area{
	margin-top:10px;
    padding-top:0.6rem;
    padding-left:3%;
    padding-right:3%;
    background: #f7f8f9;
    border-bottom:1px solid #c8c7cc;
    border-top:1px solid #c8c7cc;
    height:1.5rem;
}
.price_red{
	font-size:1rem;
    color: red;
}
</style>
