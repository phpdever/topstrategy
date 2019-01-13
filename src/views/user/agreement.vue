<template>
    <div>
        <van-nav-bar title="相关协议" left-arrow @click-left="$router.back(-1)"> </van-nav-bar>
        
        <div class="agreement ng-scope">
            <ul>
               <router-link to="/agreement_detail">
                  <li>投顾策略交易合作协议</li>
               </router-link>

                <router-link to="/agreement_detail">
                  <li>投顾策略交易居间服务协议</li>
                </router-link>
            </ul>
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
      
    }
  }
}
</script>

<style>
body{background:#efeff4;}

.agreement li,.about li{
    padding-left:1rem;
    line-height:3rem;
    height:3rem;
    font-size:0.9rem;
    color: #333333;
    border-bottom:1px solid #d2d2d2;
}
.agreement li:active,.about li:active{
    background: #d2d2d2;
}
</style>