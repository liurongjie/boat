// pages/component/boat/boat.js
var app=getApp();

var jsonData = require('../../../data/boat.js');

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   */
  data: {
    list:{},
    
    index: 1,

    btn_1_text: "驾校",
    btn_2_text: "健身",
    btn_3_text: "外语",
    btn_4_text: "考研",

    text_1:'',
    text_2: '',
    text_3: '',

    swiper_index:0,
    title:"",
    discription:"",
    more_data:{},
    real_time_price:'',
    start_price:"",
    screen_height:"",
    
  },



  ready:function(){
    this.setData({
      index: app.index,
      list: jsonData.dataList,
      screen_height: app.globalData.h,
    })
    

    this.setData({
     
    })

    console.log(this.data.list)
    console.log(this.data.more_data)
  },
 
  /**
   * 组件的方法列表
   */
  methods: {
    gotoboat: function () {
      app.index = 4;//4代表参团页
      wx.navigateTo({
        url: '../toboat/toboat?producation_id=1',
      })
      app.buy_index=1,
      console.log("gotoboat", app.buy_index);

    },

   
    btn_1:function(){
      
      console.log("触发按钮1")
     
    },

    btn_2: function () {
      console.log("触发按钮2")
      
    },

    btn_3: function () {
      console.log("触发按钮3")
     
    },

    btn_4: function () {
      console.log("触发按钮4")
     
    },

    swiper:function(e){
      
      this.setData({
        swiper_index:e.detail.current,
       
      })


    

     
    }
     
  },

})
