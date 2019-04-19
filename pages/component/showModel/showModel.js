// pages/component/showModel/showModel.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    showModel:true,

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onGotUserInfo(e) {
      console.log(e.detail.errMsg)
      console.log(e.detail.userInfo)
      console.log(e.detail.rawData)
    },

  }
})
