import { _get } from './api.js'
export const newsList = params => _get('/api/toutiao/index', params) // 模块详情
