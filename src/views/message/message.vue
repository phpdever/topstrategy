<template>
    <div>
       <van-nav-bar title="消息中心"> </van-nav-bar>

        <img :src="message_banner" style="width: 100%;height:180px;">

        <div class="main-message">
            <router-link to="/subscribe">
                <div class="message-line bottom-line" ui-sref="clNotify" href="#/clNotify">
                    <div class="message-line-title icon-notify">
                        
                        策略通知
                        <p>策略通知</p>
                    </div>
                </div>
            </router-link>

            <router-link to="/subscribe">
                <div class="message-line bottom-line" ui-sref="subscribe" href="#/subscribe">
                    <div class="message-line-title icon-subscribe">
                        订阅动态
                        <p>查看我订阅的高手</p>
                    </div>
                </div>
            </router-link>

             <router-link to="/notice">
                    <div class="message-line bottom-line" ui-sref="sysSms" href="#/sysSms">
                        <div class="message-line-title icon-sysmsg">
                            系统消息
                            <p>查看平台公告</p>
                        </div>
                    </div>
             </router-link>

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
      message_banner:'../../../static/home/message_banner.png'
        
    }
    }
}
</script>

<style>
.main-message .message-line{
    background: #FFFFFF;
    height: 6rem;
    border-bottom:1px solid #efeff5;
}
.main-message .message-line:active{
    background: #dddddd;
}

.main-message .message-line .message-line-title{
    font-size:0.8rem;
    line-height:2rem;
    padding-left:5rem;
    padding-top:1.2rem;
}
.main-message .message-line .message-line-title p{
    font-size:0.8rem;

}
.icon-notify{
    background: url('../../../static/home/sysmsg.png') no-repeat;
    background-position: 1.1rem 1.5rem;
    -webkit-background-size: 4rem 4rem;
    background-size: 3rem 3rem;
}
.icon-subscribe{
    background: url('../../../static/home/subscribe.png') no-repeat;
    background-position: 1.1rem 1.5rem;
    -webkit-background-size: 4rem 4rem;
    background-size: 3rem 3rem;
}
.icon-sysmsg{
    background: url('../../../static/home/notify.png') no-repeat;
    background-position: 1.1rem 1.5rem;
    -webkit-background-size: 4rem 4rem;
     background-size: 3rem 3rem;
}
</style>