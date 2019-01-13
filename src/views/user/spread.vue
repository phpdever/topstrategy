<template>
    <div>
        <van-nav-bar title="我的推广" left-arrow @click-left="$router.back(-1)"> </van-nav-bar>
        
        <div class="share-qrcode">

            <p>邀请你的小伙伴来赚钱啦</p>

            <p>你的邀请码为你的手机号码</p>
            
        </div>

        <div class="icon-list">
            <div class="bottom-bold-line"><img :src="share_icon.img1"><br>微信</div>
            <div class="bottom-bold-line"><img :src="share_icon.img2"><br>QQ</div>
            <div class="bottom-bold-line"><img :src="share_icon.img3"><br>朋友圈</div>
            <div class="bottom-bold-line"><img :src="share_icon.img4"><br>微博</div>
        </div>

        
         <div class="share_list">

                <van-row style="margin-bottom:0.3rem;font-size:0.9rem;margin-top:0.5rem;">
                      <van-col span="12">推广列表</van-col>
                      <van-col span="12" style="text-align:right;">已推广：0人</van-col>
                </van-row>

                <van-row style="margin-top:1rem;">
                      <van-col span="12" class="price-text">昨日提成：0元</van-col>
                      <van-col span="12" class="price-text" style="text-align:right;">昨日策略：0元</van-col>
                      
                      <van-col span="12" class="price-text">提成总计：0元</van-col>
                      <van-col span="12" class="price-text" style="text-align:right;">策略总计：0元</van-col>
                </van-row>

        </div>
     

    
         
        <TheFooter/>
    </div>
</template>

<script>

import TheFooter from '../layout/TheFooter'

export default {
  name: 'Message',
  components: {
    TheFooter
  },
  data() {
    return {
      share_icon: {
        img1: '../../../static/home/wechat.png',
        img2: '../../../static/home/qq.png',
        img3: '../../../static/home/moments.png',
        img4: '../../../static/home/weibo.png',
      },
    }
    }
}
</script>

<style>
body{font-size:0.8rem;background:#efeff4;}

.share-qrcode p{
    font-size:1rem;
    font-weight:600;
    color: #000;
    line-height:3rem;
    height:3rem;
    text-align:center;
}

.icon-list div{
    width: 25%;
    float: left;
    height: 5rem;
    background: #FFFFFF;
    font-size: 1rem;
    line-height: 1.8rem;
    color: #585858;
    text-align: center;
    padding-top:1rem;
}
.icon-list img{
    width:12vw;
}
.share_list{
	padding:1rem;
    margin-top: 10px;
    background: #fff;
    height: 4.5rem;
    padding-top: 5px;
    float:left;
}
.price-text{
	float: left;
    width:50%;
    padding-left:1%;
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
</style>