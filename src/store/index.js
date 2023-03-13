import { configure } from "mobx"
import React from "react"
import chatStore from './chat.store'
import imageStore from "./image.store"

configure({
  enforceActions: "never",
})

class RootStore {
  chatStore = new chatStore()
  imageStore = new imageStore()
}

// 实例化根
// 导出useStore context
const rootStore = new RootStore()
const context = React.createContext(rootStore)

const useStore = () => React.useContext(context)

export { useStore }