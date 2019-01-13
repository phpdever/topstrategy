<template>
    <div>
        <van-nav-bar title="搜索股票" left-arrow @click-left="$router.back(-1)"> </van-nav-bar>

         <div class="header-search">
              <van-search
                v-model="value"
                placeholder="请输入股票名称"
                show-action
                @search="onSearch"
              >
                <div slot="action" @click="onSearch">搜索</div>
              </van-search>
         </div>

          <div  style="padding-bottom:5rem;min-height:10rem;width:100%;float:left;">
                <div class="main-nav">

                  <van-row class="title">
                            <van-col span="24">热门股票</van-col>
                  </van-row>

                  <van-row>
                    
                    <router-link to="/strategy_create">
                          <van-col span="8">
                            <dl>
                              <dt>大华股份</dt>
                              <dd>sz002236</dd>
                              <dd class="center-num">12.14</dd>
                              <dd><span class="left_num">+0.15</span> <span class="right_num">+1.25</span></dd>
                            </dl>
                          </van-col>
                    </router-link>

                </van-row>

             </div>
        </div>

        <TheFooter/>
    </div>
</template>

<script>
import TheFooter from '../layout/TheFooter'
import { Toast } from 'vant';
import { Search } from 'vant';

export default {
  name: 'Message',
  components: {
    TheFooter
  },
  data() {
    return {
      
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
body{font-size:1rem;background:#fff;}
.header-search{
  width:100%;
  height:3rem;
}
.main-nav{
  background: #fff;
}
.main-nav dl{
    float: left;
    text-align: center;
    line-height:1.5rem;
    padding: 0.5rem;
    margin:0.5rem;
    font-size:0.8rem;
    border:1px solid #dcdcdc;
}
.title{
  height:2rem;
  line-height:2rem;
  margin-bottom:0.3rem;
  font-size:0.9rem;
  color:#000;
  background:#fff;
  padding-left:1rem;
}
.left_num{
  float:left;
}
.right_num{
  float:right;
}
.center-num{
  color:#ff0000;
}
</style>