<template>
    <div>
        <van-nav-bar title="协议详情" left-arrow @click-left="$router.back(-1)"> </van-nav-bar>
        
        <div class="more-news-text ng-binding">
           系统即将上线
        </div>

        <div class="more-news-time ng-binding">发布时间：2018-01-09 12:08:57</div>

        <div class="more-news-con clear">
        <p ng-bind-html="trustHtml" class="ng-binding">敬请期待。。。。。。</p>

        <div style="float: right;margin-top: 30px;">
            <p style="text-align: center;">顶点策略</p>
            <p style="margin-top:10px;">2018-01-09</p>
        </div>
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
    text-align: center;
    font-size: 1.2rem;
    color: #333;
    padding-top: 20px;
}
.more-news-time {
    text-align: center;
    color: #666666;
    margin-top: 10px;
}
.more-news-con {
    padding-top: 20px;
    width: 90%;
    margin: auto;
    font-size: 0.8rem;
    color: #666666;
}
</style>