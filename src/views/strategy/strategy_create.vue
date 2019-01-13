<template>
    <div>
          <van-nav-bar title="创建策略" left-arrow @click-left="$router.back(-1)"> </van-nav-bar>


        <div  style="padding-bottom:5rem;min-height:10rem;width:100%;float:left;">
          <div class="bottom-line" style="height: 6rem;">

            <div class="stock-info">
                <ul>
                    <li class="stock-title">浙江世宝</li>
                    <li class="sj1">4.70</li>
                    <li class="stock-code">002703</li>

                    <li class="sj3">
                        <span>0.04</span>
                        <span>0.86%</span>
                    </li>
                </ul>
            </div>
            <input type="button"  value="查看行情" class="read_detail">
        </div>

       <div class="bj2 bottom-line">

            <div style="width: 18%;float: left;text-align: right;margin-right:0.5rem;">
                信用金
            </div>

            <ul style="float: left;width: 75%;">
              <li class="bj1-click">
                    3000
                </li>

                <li>
                    5000
                </li>

                <li>
                    10000
                </li>

                <li>
                    20000
                </li>
                
                <li>
                    30000
                </li>

                <li>
                    50000
                </li>

                <li>
                    70000
                </li>

                <li>
                    80000
                </li>
            </ul>
      </div>

      <div class="bj4 bottom-line">
          <div class="buy-title">交易数量</div>
          <div class="bj3-d1">700股</div>
          <div class="bj3-d2">(市值：7,140.00)</div>
      </div>

      <div class="bj5">
          <div class="buy-title">止盈：</div>
          <div class="wc-change">
              <div ng-click="computeChoose('spr', 'sub')">-</div>
              <input type="text" class="sj1" value="11.50">
              <div ng-click="computeChoose('spr', 'add')">+</div>
          </div>
      </div>

              
      <div class="bj5">
          <div class="buy-title">止亏：</div>
          <div class="wc-change">
              <div ng-click="computeChoose('spr', 'sub')">-</div>
              <input type="text" class="sj1" value="11.50">
              <div ng-click="computeChoose('spr', 'add')">+</div>
          </div>
      </div>


      <div class="bj4 bottom-line">
          <div class="buy-title">是否自动递延</div>
          <div class="bj3-d2" style="margin-top:0.7rem;">
            <van-switch
              v-model="checked"
              size="24px"
            /></div>
      </div>

      <div class="bj4 bottom-line">
          <div class="buy-title">卖出时间</div>
          <div class="bj3-d1">下个交易日</div>
      </div>

      <div class="bj4 bottom-line">
          <div class="buy-title">综合交易费</div>
          <div class="bj3-d1">96.00元</div>
      </div>

       <div class="bj4 bottom-line">
          <div class="buy-title">说明：</div>
          <div class="bj3-d1" @click="show_tips">查看禁买说明 >></div>
      </div>

      <div class="bj5">
            <div class="buy-title">合计：<span style="color: #ff6c02" class="ng-binding">1,000.00</span>元</div>
            <div class="buy-title" style="float: right;">
                <span ng-if="!simulate" class="ng-binding ng-scope">余额：0.00&nbsp;&nbsp;</span>
            </div>
      </div>

      <div class="bj7">
            <input type="button" value="创建策略" ng-disabled="!isBuyBtnForbidden" ng-class="{'forbidden-click':!isBuyBtnForbidden,'bj7-in1':isBuyBtnForbidden}" ng-click="buy()" class="forbidden-click" disabled="disabled">
        </div>

  </div> 
        <TheFooter/>

    </div>
</template>

<script>

import TheFooter from '../layout/TheFooter'
import { Toast } from 'vant';
import { Switch } from 'vant';


export default {
  name: 'Message',
  components: {
    TheFooter
  },
  data() {
    return {
      checked:false
    }
  },
  mounted:function()
  {
    
  },
  methods:
  {
    show_tips(){
      Toast('"在禁买名单内，禁止买入"或"涨幅超过9%禁止买入，不在指定点买时间内"');

    }    
  }
}
</script>

<style>
body{font-size:1rem;background:#fff;}
.bottom-line{
    border-bottom:1px solid #efeff5;
}
.stock-info{
    width:70%;
    padding-top:1rem;
    padding-left:0.8rem;
    float: left;
}
.stock-info li{
    float: left;
    padding-top:10px;
}
.stock-title{
    width:40%;
    font-size:1rem;
    color: #000;
}
.stock-code{
    width: 40%;
    font-size: 1rem;
    color: #6b6b6b;
}
.read_detail{
    border:1px solid #CC413A;color: #CC413A;background:#FFFFFF;
    margin-top:2rem;
    position: absolute;
    right:1rem;
    width:5rem;
    height:1.8rem;
    line-height:1.8rem;
    font-size:0.8rem;
}
.sj3{ float:left;padding-top:3px; color:#ea4949;}
.sj1{ color:#ea4949; font-size:1rem; font-weight:bold;width:5rem;}

.bj1{ padding-top:5px;font-size:1.5rem; clear:both; overflow:hidden;}
.bj1 div{
    float: left;
    line-height:4.5rem;
}
.buy-title{
    font-size:0.8rem;
    font-weight:500;
    margin-left:0.7rem;
    float: left;
    margin-top:0.3rem;
}
.icon-yen{
    font-size:1rem;
    color: #999;
    position:absolute;
    margin-top:-4.25rem;
    margin-left:1.3rem;
}
.icon-yuan{
    font-size:1rem;
    color: #999;
    position:absolute;
    margin-top: -4.25rem;
    margin-left: 8rem;
}
 .touru-tishi{
    min-width:10rem;
    height:1.5rem;
    line-height:1.5rem;
    font-size:1rem;
    color: #999;
    float:left;
    font-size:0.9rem;
    padding-left:0.6rem;
}

.bj1 input{
    width:5rem;
    height:1.5rem;
    line-height:1.5rem;
    line-height:1.2rem;
    padding-left:1.3rem;
    font-size:0.8rem;
}
.bj2 li.bj1-click{color:#CC413A; border:#CC413A solid 1px;}

.bj2 {
    font-size: 14px;
    float: left;
    overflow: hidden;
    width: 100%;
    margin-top:1rem;
}
.bj2 li{ margin-right:10px;margin-bottom:12px; width:20%; height:3rem; text-align:center; line-height:3rem; border: solid 1px #cac5c5; float:left;border-radius: 3px;}
.bj4{
    height:2.5rem;
    line-height:2.5rem;
    clear: both;
}
.bj3-d1{color:#5b5959; margin-left:16px;float:left;font-size: 0.6rem !important;margin-top:0.2rem}
.bj3-d2{ margin-left:1rem; color:#4b85cb; font-size:12px;float:left;margin-top:0.2rem;}
.icon-edit{
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 2rem;
    margin-top:0.5rem;
    float: left;
    background: url(../../../static/home/edit_icon.png) no-repeat;
    
}
.bj5{
    line-height:2rem;
    clear: both;
    padding:0.5rem;
    height:2rem;
}
.wc-change div{
    float: left;
    height: 2rem;
    line-height: 2rem;
    color: #bbb;
    width: 2rem;
    margin: 0.1rem 0.2rem;
    text-align: center;
    font-size: 2.5rem;
    background: #f9f9f9;
}
.wc-change input{
    width: 4rem;
    height: 2rem;
    line-height: 2rem;
    border-radius: 0;
    float: left;
    background: #f1f1f1;
    border: 0;
    font-size: 1rem;
    text-align: center;
}
.bj5 .bj4-span1{ 
  color:#CC413A;
  font-size:1rem;
}
.bj7 .forbidden-click{
  background: #CC413A;
  float: left;
  margin-left:3%; 
  width: 94%; 
  height:3rem; 
  border:none; 
  font-size:1.3rem;
  color:#fff; 
  border-radius: 3px;
}
</style>