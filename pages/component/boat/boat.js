// pages/component/boat/boat.js
var app=getApp();

var jsonData = require('../../../common/index.js');

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
    // console.log("总体:", jsonData)

    console.log("homelist:", jsonData.homelist.length)
 


    this.setData({
      index: app.index,
      production: jsonData.homelist,
      screen_height: app.globalData.h,
    })
  
    console.log("获取产品list:",this.data.production)


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
      console.log(pro_data.bean)
      app.index = 4;//4代表参团页


      wx.navigateTo({
        url: '../toboat/toboat?production_id=' + pro_data.bean.production +
          "&production_name=" + pro_data.bean.production__name +
          "&onboat_people_number=" + pro_data.bean.cutnumber +
          // "&leiji_save_memory=" + pro_data.bean.leiji_save_memory +
          "&cut_times=" + pro_data.bean.cutnumber +
          "&start_price=" + pro_data.bean.startprice +
          "&real_time_price=" + pro_data.bean.saveprice +
          "&start_time=" + pro_data.bean.starttime +
          "&end_time=" + pro_data.bean.endtime +
          "&longitude=" + pro_data.bean.production__merchant__longitude +
          "&latitude=" + pro_data.bean.production__merchant__latitude +
          "&type=" + pro_data.bean.type +
          "&location=" + pro_data.bean.production__merchant__location
      })


      app.buy_index=1,
      console.log("gotoboat", app.buy_index);





    },

   
    btn_1:function(){
      
      console.log("触发按钮1")
      this.setData({
        btn_type: 1,
        current_index:0
      })
    },

    btn_2: function () {
      console.log("触发按钮2")
      this.setData({
        btn_type:2,
        current_index: 0
      })
    },

    btn_3: function () {
      console.log("触发按钮3")
      this.setData({
        btn_type: 3,
        current_index: 0
      })
    },

    btn_4: function () {
      console.log("触发按钮4")
      this.setData({
        btn_type: 4,
        current_index: 0
      })
    },

    swiper:function(e){
      
      this.setData({
        swiper_index:e.detail.current,
      })


      console.log("当前页面：", this.data.swiper_index+1)


     
    }
     
  },

})
