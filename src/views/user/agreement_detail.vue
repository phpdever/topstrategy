<template>
    <div>
        <van-nav-bar title="公告详情" left-arrow @click-left="$router.back(-1)"> </van-nav-bar>
        
        <div class="more-news-text ng-binding">
           系统即将上线
        </div>

        <div class="more-news-con">
            本协议由协议正文以及本网站（app）已经发布的或将来可能发布的各类规则和文件的各项规定组成，如发布的规则和文件与协议正文有冲突，以公布生效日期或签署日期在后的规则或文件为准执行。
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
    font-weight:bold;
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