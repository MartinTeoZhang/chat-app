// 封装ls存取token

const key = 'chat-api-key'

const setApiKey = (token) => {
  return window.localStorage.setItem(key, token)
}

const getApiKey = () => {
  return window.localStorage.getItem(key)
}

const removeApiKey = () => {
  return window.localStorage.removeItem(key)
}

export {
  setApiKey,
  getApiKey,
  removeApiKey
}