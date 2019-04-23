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

    btn_1_text: "健身",
    btn_2_text: "驾校",
    btn_3_text: "考研",
    btn_4_text: "外语",

    text_1:'',
    text_2: '',
    text_3: '',

    f:'/static/pic/j1.png',
   

    swiper_index:0,

    btn_type:'',

    title:"",
    discription:"",
    real_time_price:'',
    start_price:"",
    screen_height:"",
   
    color1:'#FDB38F',
    color2:'#F7907E',
    bg1: true,
    bg2: false,
    bg3: false,
    bg4: false,
    current_index:0,//不同种类查看都返回该类第一个产品

  },



  ready:function(){
    this.setData({
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
        f:'/static/pic/j1.png',
        btn_type: 1,
        current_index:0,
        bg1: true,
        bg2: false,
        bg3: false,
        bg4: false,
      })
    },

    btn_2: function () {
      console.log("[page1]触发按钮2")
      this.setData({
        btn_type:2,
        f: '/static/pic/j2.png',
        current_index: 0,
        bg2: true,
        bg1: false,
        bg3: false,
        bg4: false,
      })
    },

    btn_3: function () {
      console.log("[page1]触发按钮3")
      this.setData({
        f: '/static/pic/j3.png',
        btn_type: 3,
        current_index: 0,
        bg3: true,
        bg2: false,
        bg1: false,
        bg4: false,
      })
    },

    btn_4: function () {
      console.log("[page1]触发按钮4")
      this.setData({
        f: '/static/pic/j4.png',
        btn_type: 4,
        current_index: 0,
        bg4: true,
        bg2: false,
        bg3: false,
        bg1: false,
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
