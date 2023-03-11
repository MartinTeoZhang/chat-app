// 先把所有的工具函数导出的模块在这里导入
// 然后再统一导出
import { http } from './http'
import {
  setApiKey,
  getApiKey,
  removeApiKey
} from './apikey'

import { history } from './history'

export {
  http,
  setApiKey,
  getApiKey,
  removeApiKey,
  history
}

// import {http} from '@/utils'