import { makeAutoObservable } from 'mobx'
import { http, setApiKey, getApiKey, removeApiKey } from '../utils'

class chatStore {
  //chatGPT的apikey
  apiKey = getApiKey() || ''
  // assistant角色的内容，一般定义为模型的历史响应
  assistant_msg = ''

  constructor() {
    // 响应式
    makeAutoObservable(this)
  }

  addNewAssistantMsg = (msg) => {
    this.assistant_msg = this.assistant_msg + '\n' + msg

  }




  getChat = async ({ system_msg = "", user_msg = "" }) => {
    // 如果没有apikey,则不请求
    if (!this.apiKey) {
      console.log('no api key')
      return
    }

    // 在header中添加apikey
    http.defaults.headers.post['Authorization'] = `Bearer ${this.apiKey}`
    // 调用请求接口
    const res = await http.post('https://api.openai.com/v1/chat/completions', {
      "model": "gpt-3.5-turbo",
      "messages": [
        { "role": "system", "content": system_msg },
        { "role": "assistant", "content": this.assistant_msg },
        { "role": "user", "content": user_msg }
      ]
    })
    this.addNewAssistantMsg(res.choices[0].message.content)
    return res.choices[0].message.content

  }


}

export default chatStore