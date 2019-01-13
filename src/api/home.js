import { _get, _post } from './api.js'

export const getNews = params => _get('/news/list', params) // 模块详情

export const getNiumans = params => _get('/subscirbe/higher', params) // 模块详情

export const postSubscirbe = params => _post('/subscirbe/insert', params) // 模块详情

export const getOrder = params => _get('/order/page', params) // 订单分页

export const getOrderDetail = params => _get('/order/detail', params) // 订单详情

export const deffer = params => _post('/order/deffer', params) // 立即递延

export const orderUpdate = params => _post('/order/update', params) // 修改止亏
