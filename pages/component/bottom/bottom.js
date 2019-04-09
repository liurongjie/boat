// pages/component/bottom/bottom.js

var app = getApp();
var common=require("../../../common/index.js")
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     //根据页面决定按钮执行的任务
      taskfunc:{
        type: String,
        value: ""
    },//任务调用的函数名
  },

  /**
   * 组件的初始数据
   */
  data: {
    pay:true,
    status:1,
    text:"我要上船",
   },

  /**
   * 组件的方法列表
   */
  ready: function () {
    console.log(common.currentData)
  },
  methods: {
    goback:function(){
      var that = this;
      if (app.buy_index == 4 || app.buy_index==3 ){//如果处于评论页，直接返回商品页
        app.buy_index = 1; 
      }
      else{//否则正常返回
        switch (that.data.status) {
          case 4:
            break;
          case 3:
            that.setData({
              status: 2
            })
            app.buy_index = 2;
            break;
          case 2:
            that.setData({
              status: 1
            })
            app.buy_index = 1;
            break;
          case 1:
            wx.navigateBack({
              delta: 1,
            })
            break;
      }
     
      }

    },
    buy:function(){
      var that=this;
      switch (that.data.status) {
        case 4:
          break;
        case 3:
          wx.navigateTo({
            url: '../teamcut/teamcut',
          })
          break;
        case 2:
          that.setData({
            status: 3
          })
          that.buyalone();
          break;
        case 1:
          that.setData({
            status: 2
          })
          app.buy_index = 2;
          break;


      }
    },
    buyalone:function(){
      wx.request({
        url: 'https://xiaoyibang.top:8001/dajia/buyalone',
        data:{
          "openid": app.globalData.openid,
          "periodid": common.currentData.periodid,
        },
        success:(res)=>{
          console.log(res.data)
        }
      })
    }
   
   
  }
})
