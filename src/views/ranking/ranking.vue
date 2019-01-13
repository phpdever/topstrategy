<template>
    <div>
        <van-nav-bar title="模拟策略大赛" right-text="规则" @click-right="toRule">
        </van-nav-bar>

        <van-row type="flex" justify="space-between" class="postion_area">
            <van-col span="12">高手排行</van-col>
            
                 <van-col span="12" style="text-align:right;">
                      <router-link to="/subscribe">
                             我的订阅 >>
                      </router-link>
                 </van-col>
             
        </van-row>

        <van-tabs v-model="active">
            <van-tab title="总收益">
            
            <div  style="padding-bottom:5rem;min-height:10rem;width:100%;float:left;">
                    <ul class="mui-table-view">
                            <li class="mui-table-view-cell" v-for="(item,index) in niurens" :key="index">
                                <a href="javascript:;" @click="viewDetail(item.userId)">
                                        <span class="number">&nbsp;</span>
                                        <img class="rank-head-img" src="../../../static/headimg.png">
                                        <span class="recommend-s1">{{item.userName}}</span>
                                        <span class="recommend-s2" style="float: right;">总收益率:<font color="red">{{item.yield}}%</font>&nbsp;&gt;</span>
                                </a>
                            </li>
                    </ul>
             </div>
             
            </van-tab>

            <van-tab title="日收益">
                <div  style="padding-bottom:5rem;min-height:10rem;width:100%;float:left;">
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell" v-for="(item,index) in niurens_ri" :key="index">
                            <a href="javascript:;" @click="viewDetail(item.userId)">
                                    <span class="number">&nbsp;</span>
                                    <img class="rank-head-img" src="../../../static/headimg.png">
                                    <span class="recommend-s1">{{item.userName}}</span>
                                    <span class="recommend-s2" style="float: right;">总收益率:<font color="red">{{item.yield}}%</font>&nbsp;&gt;</span>
                            </a>
                        </li>
                    </ul>
                 </div>
            </van-tab>

            <van-tab title="周收益">
                <div  style="padding-bottom:5rem;min-height:10rem;width:100%;float:left;">
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell" v-for="(item,index) in niurens_zhou" :key="index">
                            <a href="javascript:;" @click="viewDetail(item.userId)">
                                    <span class="number">&nbsp;</span>
                                    <img class="rank-head-img" src="../../../static/headimg.png">
                                    <span class="recommend-s1">{{item.userName}}</span>
                                    <span class="recommend-s2" style="float: right;">总收益率:<font color="red">{{item.yield}}%</font>&nbsp;&gt;</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </van-tab>

            <van-tab title="月收益">
                <div  style="padding-bottom:5rem;min-height:10rem;width:100%;float:left;">
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell" v-for="(item,index) in niurens_yue" :key="index">
                            <a href="javascript:;" @click="viewDetail(item.userId)">
                                    <span class="number">&nbsp;</span>
                                    <img class="rank-head-img" src="../../../static/headimg.png">
                                    <span class="recommend-s1">{{item.userName}}</span>
                                    <span class="recommend-s2" style="float: right;">总收益率:<font color="red">{{item.yield}}%</font>&nbsp;&gt;</span>
                            </a>
                        </li>
                    </ul>
                 </div>
            </van-tab>
        </van-tabs>

        <TheFooter/>
    </div>
</template>

<script>

import TheFooter from '../layout/TheFooter'
import { getNews, getNiumans, postSubscirbe } from "../../api/home.js"
import { Toast } from 'vant';

export default {
  name: 'ranking',
  components: {
    TheFooter
  },
  data() {
        return {
            head_img: {
                img1: '../../../static/home/rank_head.jpg',
            },
            user: {
                name: '',
                userId: ''
            },
            niurens: [],
            niurens_ri: [],
            niurens_zhou: [],
            niurens_yue: [],
        }
    },
    mounted(){
        this.user.userId = window.localStorage.getItem('USERID') || ''
        this.user.name = window.localStorage.getItem('USERNAME') || ''
        if (this.user.userId) {
             this.getNiumans();
             this.getNiumans_ri();
             this.getNiumans_zhou();
             this.getNiumans_yue();
        }else{
            Toast.fail('请登录');
        }
    },
    methods:{

        viewDetail(id){
            this.$router.push({path:"/subscribe_detail",query:{id:id}}); //浏览牛人详情
        },

        toRule(){
            this.$router.push('/ranking/rule'); // 规则
        },

        getNiumans () {
            getNiumans({type:1})
                .then(res => {
                const {message, state} = res
                if (state) {
                   this.niurens = message
                } else if (message === '请登录') {
                    this.$emit('userChg', 'out')
                    window.localStorage.removeItem('USERID')
                    window.localStorage.removeItem('USERNAME')
                }
                })
        },

        getNiumans_ri () {
            getNiumans({type:2})
                .then(res => {
                const {message, state} = res
                if (state) {
                   this.niurens_ri = message
                } else if (message === '请登录') {
                    this.$emit('userChg', 'out')
                    window.localStorage.removeItem('USERID')
                    window.localStorage.removeItem('USERNAME')
                }
                })
        },

        getNiumans_zhou () {
            getNiumans({type:3})
                .then(res => {
                const {message, state} = res
                if (state) {
                    this.niurens_zhou = message
                } else if (message === '请登录') {
                    this.$emit('userChg', 'out')
                    window.localStorage.removeItem('USERID')
                    window.localStorage.removeItem('USERNAME')
                }
                })
        },

        getNiumans_yue () {
            getNiumans({type:4})
                .then(res => {
                const {message, state} = res
                if (state) {
                   this.niurens_yue = message
                } else if (message === '请登录') {
                    this.$emit('userChg', 'out')
                    window.localStorage.removeItem('USERID')
                    window.localStorage.removeItem('USERNAME')
                }
                })
        },
    }
}
</script>

<style>
body{font-size:0.9rem;}
.postion_area{
	margin-top:10px;
    padding-top:0.6rem;
    padding-left:3%;
    padding-right:3%;
    height:1.5rem;
    border-bottom:1px solid #dcdcdc;
}
.mui-table-view{
    margin-top:1rem;
}
.mui-table-view li{
    width:100%;
    border-bottom:0.3rem solid #efeff4;
    height: 4rem;
    line-height: 4rem;
    background:#fff;
}
.mui-table-view-cell span{
    float: left;
}
.mui-table-view-cell:after{
    background-color: #FFFFFF;
}
.number{
    font-size:3rem;
    color: #CC413A;
}
.rank-head-img{
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    float: left;
    width:3rem;
    height:3rem;
    margin:0.3rem 1rem 0 0.5rem;
}
 .recommend-s2{
    padding-right:0.3rem;
}
</style>