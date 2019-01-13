<template>
    <div>
        <van-nav-bar title="策略大赛规则" left-arrow @click-left="$router.back(-1)"> </van-nav-bar>
        
        <div class="more-news-text ng-binding">
                顶点策略模拟策略大赛
        </div>

        <div class="more-news-con">
            <p>
                交易前请仔细阅读相关服务协议的具体规则；全部行情与沪深交易所实盘数据一致，交易品种支持沪深上市的A股。不支持基金、权证、ST、新股申购、及不设涨跌停限制的股票（如增发）；
            </p>
            <p style="margin-top:1rem;">
           ★本模拟炒股大赛规则的解释权归顶点策略，顶点策略有权对规则进行修改与完善，并对修改部分不再另行通告，敬请各位用户注意！
           </p>
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
      head_box: {
        img1: '../../../static/home/sysmsg.png',
        img2: '../../../static/home/subscribe.png',
        img3: '../../../static/home/notify.png',
      },
    }
    }
}
</script>

<style>
body{font-size:0.8rem;background:#efeff4;}
.more-news-text {
    text-align: left;
    font-size: 1.2rem;
    color: #ff4100;
    padding-top: 20px;
    font-weight:bold;
    padding-left:1rem;
}
.more-news-con {
    padding-top: 20px;
    width: 90%;
    margin: auto;
    font-size: 0.8rem;
    color: #666666;
    line-height:1.4rem;
}
</style>