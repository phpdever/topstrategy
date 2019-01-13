import { _post, _get } from './api.js'

export const navsTree = params => _get('/navs/tree', params) // 侧边栏获取

export const navsPage = params => _get('/navs/page', params) // 模块分页

export const navsDetail = params => _get('/navs/detail', params) // 模块详情

export const navsSave = params => _post('/navs/save', params) // 模块添加或修改

export const navsDelete = params => _post('/navs/delete', params) // 模块删除

export const dictionaryTree = params => _get('/dictionary/tree', params) // 字典树形菜单

export const dictionaryAdd = params => _post('/dictonary/save', params) // 字典添加

export const dictionaryGetAll = params => _get('/dictionary/getAll', params) // 字典获取全部

export const orderPage = params => _get('/order/page', params) // 订单分页

export const finishPage = params => _get('/finish_order/page', params) // 结算订单分页

export const failPage = params => _get('/fail_order/page', params) // 流单分页

export const defferOrderPage = params => _get('/deffer_order/page', params) // 递延列表

export const memberSelect = params => _get('/member/select', params) // 获取会员下拉列表

export const operatorSelect = params => _get('/operator/select', params) // 获取运营商下拉列表

export const agentSelect = params => _get('/agent/select', params) // 获取代理下拉列表

export const login = params => _post('/login/all', params) // 用户登录

export const exit = params => _post('/operator/exit', params) // 用户退出

export const rechargePage = params => _get('/recharge/page', params) // 充值分页

export const exportRecharge = params => _get('/recharge/export', params) // 充值导出

export const withdrawPage = params => _get('/withdraw/page', params) // 提现分页

export const defferChargePage = params => _get('/defferCharge/page', params) // 递延分页

export const capitalRecordPage = params => _get('/capitalRecord/page', params) // 资金分页

export const memberPage = params => _get('/member/page', params) // 会员分页

export const capitalRecordSelect = params => _get('/capitalRecord/select') // 资金类型下拉框

export const agentSave = params => _post('/agent/save', params) // 代理添加

export const agentPage = params => _get('/agent/page', params) // 代理分页

export const userPage = params => _get('/user/page', params) // 用户分页

export const userSave = params => _post('/user/save', params) // 用户添加

export const updateRef = params => _post('/user/updateBeachOne', params) // 用户批量修改推荐人

export const updateWithdraw = params => _post('/withdraw/update', params) // 更新提现状态

export const memeberAdd = params => _post('/member/add', params) // 添加会员

export const changePassword = params => _post('/login/updatePassword', params) // 修改密码

export const memberDelete = params => _post('/member/delete', params) // 会员删除

export const agentDelete = params => _post('/agent/delete', params) // 代理删除
