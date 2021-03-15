// app.js
console.log('============================================');

// 1.小程序不是运行在浏览器当中，没有BOM和DOM对象
// 2.小程序的JS中有一些额外的成员
// App方法用于定义应用程序实例对象
// Page方法，定义页面对象
// getApp方法 获取全局应用程序对象。
// getCurrentPages方法 用来获取当前页面的调用栈(输出的是一个数组，最后一个就是当前页面)
// wx 用来提供当前核心的API

// 3.小程序是支持JS规范的

const foo = require('./utils/foo.js')
foo.say('主人')




console.log('============================================');
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  },
  foo(){
    console.log(345)
  }
})
