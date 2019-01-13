<template>
    <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o" url="../">策略</van-tabbar-item>
        <van-tabbar-item icon="search" url="../message">消息</van-tabbar-item>
        <van-tabbar-item icon="fire-o" url="../ranking">排行</van-tabbar-item>
        <van-tabbar-item icon="user-o" url="../user">我的</van-tabbar-item>
    </van-tabbar>    
</template>

<script>

export default {
  name: 'TheFooter',
  data() {
    return {
      active: this.active
    }
  },
  mounted () {
      this.change_active_tab();
  },
  methods:{
      change_active_tab(){
          let path_name = location.pathname;
          if(path_name == '/'){
              this.active = 0;
          }else if(path_name == '/message'){
              this.active = 1;
          }else if(path_name == '/ranking'){
              this.active = 2;
          }else if(path_name == '/user'){
              this.active = 3;
          }
      }
  }
}
</script>