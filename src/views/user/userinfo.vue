<template>
    <div>

        <van-nav-bar title="个人资料" left-arrow @click-left="$router.back(-1)"> </van-nav-bar>

        <div class="my-info">
              <div class="Personal-2">
                  <span>头像</span>
                  <van-uploader :after-read="onRead" accept="image/*" multiple style="float:right;">
                    <img class="head-img" ref="goodsImg" :src="user.avatar">
                  </van-uploader>
              </div>
              
              <div class="Personal-3" @click="edit_name">
                  <span>昵称</span>
                  <span class="r-span">{{userinfo.name}} &gt;</span>
              </div>
              
              <div class="Personal-3" @click="edit_password">
                  <span>修改登录密码</span>
                  <span class="r-span">&gt;</span>
              </div>

              <p class="zc-lc-left-p1" style="text-align: center;" @click="login_out">
                  <input type="button" value="退出登录" class="loginout_btn">
              </p>
        </div>

        <van-dialog v-model="show" show-cancel-button :before-close="beforeClose">
          
          <van-field v-model="password"
            label="旧密码"
            placeholder="请输入旧密码"
          />

          <van-field
            v-model="newpassword"
            type="password"
            label="新密码"
            placeholder="请确认新密码"
          />

        </van-dialog>

         <van-dialog v-model="show_name" show-cancel-button :before-close="nicknameClose">
          
          <van-field v-model="nickname"
            label="修改昵称"
            placeholder="请输入要修改的昵称"
          />

        </van-dialog>

        <TheFooter/>
    </div>
</template>

<script>

import TheFooter from '../layout/TheFooter'
import { Toast } from 'vant';
import { Dialog } from 'vant';
import { postUpPass,postSaveNickname,postUserAvatar,postExit,getUser } from '@/api/user.js'
import { Uploader } from 'vant';

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
      show: false,
      show_name: false,
      newpassword: '',
      password: '',
      nickname: '',
      file: '',
      avatar: '',
      user: {
        name: '',
        phone: '',
        userId: '',
        img:'',
        avatar:'',
      },
      userinfo:{}
    }
  },
  mounted:function()
  {
    this.nickname = window.localStorage.getItem('USERNAME') || ''
    this.get_userinfo();
  },
  methods:
  {

      login_out()
      {
          Dialog.confirm({
            title: '提示',
            message: '你确定要退出登录吗？'
          }).then(() => {
            this.user_exit();
          }).catch(() => {
            // on cancel
          });
      },

      get_userinfo(){
          getUser({
            id: localStorage.getItem('USERID') || '',
          }).then(res => {
            const { state, message } = res
            if (res.state) {
               this.userinfo = message;
               this.user.avatar = 'data:image/png;base64/' + message.img;
            } else {
               Toast.fail('获取用户信息失败');
            }
          }).catch(res => {
              Toast.fail('获取用户信息失败');
          })
          
      },

      user_exit(){
          postExit().then(() => this.$router.replace('/'))
          localStorage.setItem('USERID', '')
          localStorage.setItem('USERNAME', '')
      },

      edit_password()
      {
        this.show = true;
      },

      beforeClose(action, done) {
      if (action === 'confirm') {
        this.submit_edit_passowrd();
        setTimeout(done, 1000);
      } else {
        done();
      }
    },
    
     edit_name(){
        this.show_name = true;
      },

      nicknameClose(action, done) {
        if(action === 'confirm') {
          if(this.nickname == ''){
             Toast.fail('请填写昵称');
          }else{
            this.user.userId = window.localStorage.getItem('USERID') || ''
            postSaveNickname({
            id: this.user.userId,
            name: this.nickname
          }).then(res => {
            if (res.state) {
              this.get_userinfo();
              Toast.success('昵称修改成功');
            } else {
               Toast.fail('昵称修改失败');
            }
          }).catch(res => {
              Toast.fail('昵称修改失败');
          })
          }
           setTimeout(done, 1000);
         
        } else {
          done();
        }
    },

    submit_edit_passowrd(){

        if(this.password=='' || this.newpassword==''){
          Toast.fail('请检查表单填写是否完整');
          return false;
        }
        if(this.password != this.newpassword){
          Toast.fail('密码不一致');
          return false;
        }
          this.user.userId = window.localStorage.getItem('USERID') || ''
          postUpPass({
            oldPassword: this.password,
            newPassword: this.newpassword
          }).then(res => {
            if (res.state) {
              Toast.success('密码修改成功');
            } else {
               Toast.fail('密码修改失败');
            }
          }).catch(res => {
              Toast.fail('密码修改失败');
          })
        
    },

    onRead(file) {
          this.$refs.goodsImg.src = file.content;
          this.user.userId = window.localStorage.getItem('USERID') || ''
          postSaveNickname({
            id: this.user.userId,
            img: file.content
          }).then(res => {
            if (res.state) {
              Toast.success('头像修改成功');
            } else {
               Toast.fail('头像修改失败');
            }
          }).catch(res => {
              Toast.fail('头像修改失败');
          })
		   }
  }
}
</script>

<style>
body{font-size:1rem;background:#efeff4;}
.my-info{
  min-height:40rem;
}
.my-info .head-img{
    width:3.5rem;
    height:3.5rem;
    border-radius: 50%;
    float: right;
    margin-right: 2rem;
    margin-top:0.5rem;
}
/*个人信息*/
.Personal-2{ line-height:4rem; padding:0.8rem 0rem;color:#4e4e4e; background:#FFFFFF;height: 4rem; }
.Personal-2 span{  float:left;padding-left: 1rem;}
.Personal-2 input{ width:64px;border: solid 1px #6ea4e6; background:#f6f7f8; color:#6ea4e6; float:right; margin-right:20px;border-radius: 3px;cursor:pointer;font-family:"Microsoft YaHei";}
.Personal-3{ line-height:3rem; padding:0.8rem 0rem;color:#4e4e4e; background:#FFFFFF;height: 3rem; }
.Personal-3 span{  float:left;padding-left: 1rem;}
.Personal-3 .r-span{ float:right; margin-right:1rem; color: #999;}
.loginout_btn{
  margin:0px auto;
  width: 15rem;
  height:3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	color: #fff;
  margin-top:2rem;
  margin-bottom:1rem;
  background:#CC413A;
   -webkit-appearance: none;
  border:0px;
}
</style>