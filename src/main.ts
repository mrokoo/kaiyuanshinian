import { createApp } from 'vue'

import App from './App.vue'
import { initApp } from './config/init'

import 'normalize.css/normalize.css'
import './assets/fonts/iconfont.css'
import './assets/styles/global.scss'



(async () => {
    // 初始化系统基础配置信息（保证所有模块的基础数据加载完成后，才创建UI）
    // 全局变量(app), 语言包（lpk）, Ajax, tools的定义  -> 为了能够在vue的template中使用以及在js中方便使用
    // 异步加载基础模块的配置信息
    // 1. 加载系统当前状态信息
    // 2. 加载当前登录用户的个人信息
    // 3. 异步加载业务模块，并完成基本的初始化
    initApp()
    const uiApp = createApp(App)
    uiApp.config.globalProperties.app = window.app
    uiApp.config.globalProperties.Tools = window.Tools
    uiApp.mount('#app')
})()
