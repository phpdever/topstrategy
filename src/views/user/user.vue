<template>
    <div>

        <div class="user-info">

            <img class="head-img" :src="user.avatar">
            
            <div style="float:left;margin-top:1rem;">
                <p class="user-mobile" href="#/userTab/myAccount">我的账户：{{user.name}}</p>
                <p class="user-account">可用余额：{{user.totalAssets.toFixed(2)}}元</p>
            </div>

        </div>

         <div class="main-message">

                <router-link to="/spread">
                    <div class="message-line bottom-line">
                        <div class="message-line-title icon-seo">
                            我的推广
                        </div>
                    </div>
                </router-link>


                <router-link to="/userdetail">
                    <div class="message-line bottom-line">
                        <div class="message-line-title icon-detail">
                            账户详情
                        </div>
                    </div>
                </router-link>


                 <router-link to="/userinfo">
                    <div class="message-line bottom-line">
                        <div class="message-line-title icon-info">
                            个人信息
                        </div>
                    </div>
                 </router-link>

                 
                <router-link to="/agreement">
                    <div class="message-line bottom-line">
                        <div class="message-line-title icon-xieyi">
                            相关协议
                        </div>
                    </div>
                </router-link>


                <router-link to="/notice">
                    <div class="message-line bottom-line">
                        <div class="message-line-title icon-public">
                            平台公告
                        </div>
                    </div>
                </router-link>
                
                
                <router-link to="/about">
                        <div class="message-line bottom-line">
                            <div class="message-line-title icon-about">
                                关于我们
                            </div>
                        </div>
                </router-link>
               
        </div>

        <TheFooter/>
    </div>
</template>

<script>

import TheFooter from '../layout/TheFooter'
import { postExit, getUser } from '@/api/user.js'
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
      user: {
        name: '',
        phone: '',
        userId: '',
        img:'',
        avatar:''
      }
    }
   },
   computed: {
    routePath () {
      return this.$route.path
    }
  },
  methods: {
    showUser () {
      this.$router.push('/user')
    },
    goLogin () {
      this.$router.push('/login')
    },
    userChg (val) {
      this.user.userId = window.localStorage.getItem('USERID') || ''
      this.user.name = window.localStorage.getItem('USERNAME') || ''
    },
    init () {
      getUser({
        id: localStorage.getItem('USERID') || ''
      }).then(res => {
        const { state, message } = res
        if (state) {
          this.user = message
          this.user.avatar = 'data:image/png;base64/' + message.img;
        } else {
          postExit().then(() => this.$router.replace('/login'))
          localStorage.setItem('USERID', '')
          localStorage.setItem('USERNAME', '')
          this.$emit('userChg', 'out')
        }
      }).catch(() => {
        postExit().then(() => this.$router.replace('/login'))
        localStorage.setItem('USERID', '')
        localStorage.setItem('USERNAME', '')
        this.$emit('userChg', 'out')
      })
    }
  },
  mounted () {
    this.user.userId = window.localStorage.getItem('USERID') || ''
    this.user.name = window.localStorage.getItem('USERNAME') || ''
    if(!this.user.userId) {
         this.$router.push('/login')
    }
    this.init();
  }
}
</script>

<style>
.user-info{
    width:100%;
    text-align: center;
    background:#e46a63; /* 一些不支持背景渐变的浏览器 */
    height: 7rem;
}
.user-info .head-img{
    width: 5rem;
    height: 5rem;
    margin: 0 auto;
    border-radius: 50%;
    margin-top: 1rem;
    float: left;
    margin-left: 1rem;
}
.user-info .user-mobile{
    color: #fff;
    line-height: 2.5rem;
    height: 2.5rem;
    font-size: 0.7rem;
    margin-left: 1rem;
    text-align: left;
    width: 100%;
}

.user-info .user-account {
    color: #fff;
    line-height:2rem;
    height:3rem;
    float: left;
    margin-left: 1rem;
}

.main-message .message-line{
    background: #FFFFFF;
    height: 3.5rem;
    border-bottom:1px solid #efeff5;
}

.main-message .message-line .message-line-title{
    font-size:0.8rem;
    height:2rem;
    line-height:2rem;
    padding-left:3.5rem;
    padding-top:1.3rem;
}

.icon-seo{
    background: url('../../../static/home/icon-tui.png') no-repeat;
    background-position: 1.1rem 1.5rem;
    -webkit-background-size: 4rem 4rem;
    background-size: 1.6rem 1.6rem;
}
.icon-detail{
    background: url('../../../static/home/icon-sharebag.png') no-repeat;
    background-position: 1.1rem 1.5rem;
    -webkit-background-size: 4rem 4rem;
    background-size: 1.6rem 1.6rem;
}
.icon-info{
    background: url('../../../static/home/icon-about.png') no-repeat;
    background-position: 1.1rem 1.5rem;
    -webkit-background-size: 4rem 4rem;
    background-size: 1.6rem 1.6rem;
}
.icon-xieyi{
    background: url('../../../static/home/icon-xieyi.png') no-repeat;
    background-position: 1.1rem 1.5rem;
    -webkit-background-size: 4rem 4rem;
    background-size: 1.6rem 1.6rem;
}
.icon-public{
    background: url('../../../static/home/plamicon.png') no-repeat;
    background-position: 1.1rem 1.5rem;
    -webkit-background-size: 4rem 4rem;
    background-size: 1.6rem 1.6rem;
}
.icon-about{
    background: url('../../../static/home/icon-about.png') no-repeat;
    background-position: 1.1rem 1.5rem;
    -webkit-background-size: 4rem 4rem;
    background-size: 1.6rem 1.6rem;
}
</style>