<template>
    <div>
        <van-nav-bar title="关于我们" left-arrow @click-left="$router.back(-1)"> </van-nav-bar>
        
        <div class="agreement">
          <ul>
              <li>当前版本：顶点策略V1.0</li>
          </ul>
      </div>
        
        <TheFooter/>
    </div>
</template>

<script>

import TheFooter from '../layout/TheFooter'
import { Toast } from 'vant';

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
  },
  mounted:function()
  {
    
  },
  methods:
  {
       
  }
}
</script>

<style>
body{font-size:0.9rem;background:#efeff4;}
.agreement li{
    padding-left:1rem;
    line-height:3rem;
    height:3rem;
    color: #333333;
    border-bottom:1px solid #d2d2d2;
}
</style>