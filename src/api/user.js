import { _get, _post } from './api.js'

export const getUser = params => _get('/user/deatil', params) // 获取用户信息

export const getNiumans = params => _get('/subscirbe/higher', params) // 获取牛人榜

export const postMessage = params => _post('/user/sms', params) // 发送短信

export const postForget = params => _post('/user/forgetPasswordUpdate', params) // 找回密码

export const postUserAdd = params => _post('/user/add', params) // 注册

export const postSaveNickname = params => _post('/user/updateMobile', params) // 更新用户昵称

export const postUserAvatar = params => _post('/user/upload', params) // 更新用户头像

export const postLogin = params => _post('/user/login', params) // 登录

export const postExit = params => _post('/user/exit', params) // 退出

export const getShares = params => _get('/shares/page', params) // 获取股票相关信息

export const postAdd = params => _post('/order/add', params) // 点买

export const postGetkey = params => _post('/pays/getkey', params) // 获取支付参数

export const getSubsList = params => _get('/subscirbe/list', params) // 获取用户的订阅

export const getDynamic = params => _get('/subscirbe/dynamic', params) // 获取用户的订阅人的订阅动态

export const deletDynamic = params => _post('/subscirbe/cancel', params) // 取消订阅

export const getCapital = params => _get('/capitalRecord/page', params) // 用户资金明细

export const postUpPass = params => _post('/user/updatePassword', params) // 修改密码

export const postWithdraw = params => _post('/withdraw/add', params) // 用户提现

export const getWithdraw = params => _get('/withdraw/page', params) // 提现明细

export const postPosition = params => _post('/order/position', params) // 平仓

export const getRecharge = params => _get('/recharge/page', params) // 充值分页

export const postBank = params => _post('/user/bindBank', params) // 绑定银行卡

export const postisRepeat = params => _get('/subscirbe/isRepeat', params) // 查询是否已订阅过用户

export const postPopularity = params => _get('/subscirbe/popularity', params) // 获取人气值及其他信息
