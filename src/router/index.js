import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/home') //首页
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('@/views/message/message') //消息
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/user/user') //会员中心
  }
  ,
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/user/login') //登录
  }
  ,
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/user/register') //注册
  }
  ,
  {
    path: '/ranking',
    name: 'ranking',
    component: () => import('@/views/ranking/ranking') //排行
  }
  ,
  {
    path: '/ranking/rule',
    name: 'ranking_rule',
    component: () => import('@/views/ranking/rule') //规则
  }
  ,
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/user/about') //关于我们
  }
  ,
  {
    path: '/notice',
    name: 'notice',
    component: () => import('@/views/user/notice') //平台公告
  }
  ,
  {
    path: '/notice_detail',
    name: 'notice_detail',
    component: () => import('@/views/user/notice_detail') //相关协议详情
  }
  ,
  {
    path: '/agreement',
    name: 'agreement',
    component: () => import('@/views/user/agreement') //平台公告
  }
  ,
  {
    path: '/agreement_detail',
    name: 'agreement_detail',
    component: () => import('@/views/user/agreement_detail') //公告详情
  }
  ,
  {
    path: '/spread',
    name: 'spread',
    component: () => import('@/views/user/spread') //我的推广
  }
  ,
  {
    path: '/forget',
    name: 'forget',
    component: () => import('@/views/user/forget') //忘记密码
  }
  ,
  {
    path: '/userdetail',
    name: 'userdetail',
    component: () => import('@/views/user/user_detail') //我的账户
  }
  ,
  {
    path: '/recharge',
    name: 'recharge',
    component: () => import('@/views/user/recharge') //余额充值
  }
  ,
  {
    path: '/withdraw',
    name: 'withdraw',
    component: () => import('@/views/user/withdraw') //金额提现
  }
  ,
  {
    path: '/userinfo',
    name: 'userinfo',
    component: () => import('@/views/user/userinfo') //会员信息
  }
  ,
  {
    path: '/subscribe',
    name: 'subscribe',
    component: () => import('@/views/ranking/subscribe') //我的订阅
  }
  ,
  {
    path: '/subscribe_detail',
    name: 'subscribe_detail',
    component: () => import('@/views/ranking/subscribe_detail') //订阅详情
  }
  ,
  {
    path: '/fund_detail',
    name: 'fund_detail',
    component: () => import('@/views/user/fund_detail') //资金明细
  }
  ,
  {
    path: '/record',
    name: 'record',
    component: () => import('@/views/user/record') //历史记录
  }
  ,
  {
    path: '/record_detail',
    name: 'record_detail',
    component: () => import('@/views/user/record_detail') //历史记录详情
  }
  ,
  {
    path: '/bind_bank',
    name: 'bind_bank',
    component: () => import('@/views/user/bind_bank') //银行卡绑定
  }
  ,
  {
    path: '/strategy',
    name: 'strategy',
    component: () => import('@/views/strategy/strategy') //创建策略 - 股票选择
  }
  ,
  {
    path: '/strategy_create',
    name: 'strategy_create',
    component: () => import('@/views/strategy/strategy_create') //创建策略
  }
]
const router = new Router({
  //mode: 'history',
  routes
})
export default router