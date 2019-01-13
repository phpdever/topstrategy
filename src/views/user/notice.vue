<template>
    <div>
        <van-nav-bar title="平台公告" left-arrow @click-left="$router.back(-1)"> </van-nav-bar>
        
        <router-link to="/notice_detail">
            <van-row type="flex" justify="space-between" class="postion_area">
                      <van-col span="12">策略持仓</van-col>
                      <van-col span="12" style="text-align:right;">2018-01-09 12:08:57</van-col>
            </van-row>
        </router-link>
        
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
body{font-size:0.9rem;background:#efeff4;}

.postion_area{
	margin-top:10px;
    padding-top:0.6rem;
    padding-left:3%;
    padding-right:3%;
    height:1.5rem;
    border-bottom:1px solid #dcdcdc;
}
</style>