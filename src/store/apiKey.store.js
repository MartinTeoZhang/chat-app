import { makeAutoObservable } from 'mobx'
import { setApiKey, getApiKey, removeApiKey } from '@/utils'

class apiKey {
  apiKey = getApiKey() || ''

}