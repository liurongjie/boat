// pages/component/boat/boat.js
var app=getApp();


var common = require("../../../common/index.js")
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   */
  data: {
    production:{},
    
    index: 1,

    btn_1_text: "驾校",
    btn_2_text: "健身",
    btn_3_text: "外语",
    btn_4_text: "考研",

    text_1:'',
    text_2: '',
    text_3: '',


    swiper_index:0,

    btn_type:'',

    title:"",
    discription:"",
    real_time_price:'',
    start_price:"",
    screen_height:"",

    current_index:0,//不同种类查看都返回该类第一个产品

  },



  ready:function(){
    this.setData({
      index: app.index,
      production: common.homelist,
      screen_height: app.globalData.h,
    })
  
   


    this.setData({
      btn_type:1,
    })


  },
 
  /**
   * 组件的方法列表
   */
  methods: {
    gotoboat: function (e) {

      // var $data =e.currentTatget;
      var pro_data = e.currentTarget.dataset
      app.index = 4;//4代表参团页
      common.currentData = pro_data.bean
      

      wx.navigateTo({
        url: '../toboat/toboat'
      })
      app.buy_index=1;
        
    },

   
    btn_1:function(){
      
      console.log("[page1]触发按钮1")
      this.setData({
        btn_type: 1,
        current_index:0
      })
    },

    btn_2: function () {
      console.log("[page1]触发按钮2")
      this.setData({
        btn_type:2,
        current_index: 0
      })
    },

    btn_3: function () {
      console.log("[page1]触发按钮3")
      this.setData({
        btn_type: 3,
        current_index: 0
      })
    },

    btn_4: function () {
      console.log("[page1]触发按钮4")
      this.setData({
        btn_type: 4,
        current_index: 0
      })
    },

    swiper:function(e){
      
      this.setData({
        swiper_index:e.detail.current,
      })


      console.log("[page1]当前swiper页面索引：", this.data.swiper_index+1)


     
    }
     
  },

})
