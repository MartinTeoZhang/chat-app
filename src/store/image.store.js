import { makeAutoObservable } from 'mobx'
import { http, setApiKey, getApiKey, removeApiKey } from '../utils'

class imageStore {
  //chatGPT的apikey
  apiKey = getApiKey() || ''

  constructor() {
    // 响应式
    makeAutoObservable(this)
  }

  getImage = async ({ prompt = "", n = "1", size = "1024x1024" }) => {
    // 如果没有apikey,则不请求
    if (!this.apiKey) {
      console.log('no api key')
      return
    }

    // 在header中添加apikey
    http.defaults.headers.post['Authorization'] = `Bearer ${this.apiKey}`
    const res = await http.post('https://api.openai.com/v1/images/generations', {
      "prompt": prompt,
      "n": n,
      "size": size
    })
    return res.data[0].url
  }
}

export default imageStore