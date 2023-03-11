import { makeAutoObservable } from 'mobx'
import { http, setApiKey, getApiKey, removeApiKey } from '../utils'

class chatStore {
  //chatGPT的apikey
  apiKey = getApiKey() || ''
  constructor() {
    // 响应式
    makeAutoObservable(this)
  }

  getChat = async ({ message }) => {
    // 如果没有apikey,则不请求
    if (!this.apiKey) {
      return
    }

    // 在header中添加apikey
    http.defaults.headers.post['Authorization'] = `Bearer ${this.apiKey}`
    // 调用请求接口
    const res = await http.post('https://api.openai.com/v1/chat/completions', {
      "model": "gpt-3.5-turbo",
      "messages": [{ "role": "user", "content": message }]
    })

    return res

  }


}

export default chatStore