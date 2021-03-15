// index.js
// 获取应用实例
const app = getApp()
// 为页面提供数据的
// data就是界面和逻辑之间的桥梁
Page({
  data: {
    msg: 'Hello World',
    person:{
      name:'张三',
      age:'18'
    },
    arraydes:"这是我的条件渲染测试内容",
    des:"使用 wx:for-item 可以指定数组当前元素的变量名，",
    des:"arrdesone:使用 wx:for-item 可以指定数组当前元素的变量名，",
    array: [
      { message: 'foo'}, 
      { message: 'bar'}
    ]
  },
  buttonBindtap:function(e) {
    console.log('我的点击测试事件')
    console.dir(e)
    // consolem.dir 将一个对象以树状形式打印到控制台
  },
  oneTap:function(e){
    console.log("one")
  },
  twoTap:function(e){
    console.log("two")
  },
  catchtapOne:function(e){
  // e.target 拿到的是点击的元素
  // dataset 指元素上所有以 data- 开头的属性集合
    console.dir(e.target.dataset)
  },
  catchtapTwo:function(e){
    console.dir(e.target.dataset)
  }
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // canIUseGetUserProfile: false,
    // canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  })
  // // 事件处理函数
  // bindViewTap() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  // onLoad() {
  //   console.log('onload')
  //   app.foo()
  //   if (wx.getUserProfile) {
  //     this.setData({
  //       canIUseGetUserProfile: true
  //     })
  //   }
  // },
  // getUserProfile(e) {
  //   // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
  //   wx.getUserProfile({
  //     desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
  //     success: (res) => {
  //       console.log(res)
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   })
  // },
  // getUserInfo(e) {
  //   // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
  //   console.log(e)
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }

