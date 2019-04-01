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
    btn_1_text: "",
    btn_2_text: "",
    btn_3_text: "",
    btn_4_text: "",
    text_1:'',
    text_2: '',
    text_3: '',
    button_num:'',
    swiper_index:0,
    title:"",
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
      btn_1_text: this.data.list[0].production_name[0],
      btn_2_text: this.data.list[0].production_name[1],
      button_num: this.data.list[0].production_name.length,
      text_1: this.data.list[0].onboat_people_number[0],
      text_2: this.data.list[0].leiji_save_memory[0],
      text_3: this.data.list[0].cut_times[0],
      real_time_price: this.data.list[0].real_time_price[0],
      start_price: this.data.list[0].start_price[0],
      more_data: this.data.list[0]
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
        url: '../toboat/toboat',
      })
      app.buy_index=1,
      console.log("gotoboat", app.buy_index);

    },

   
    btn_1:function(){
      var timestamp = (new Date()).valueOf();
      console.log("触发按钮1", timestamp)
      this.setData({
        text_1: this.data.more_data.onboat_people_number[0],
        text_2: this.data.more_data.leiji_save_memory[0],
        text_3: this.data.more_data.cut_times[0],
        real_time_price: this.data.more_data.real_time_price[0],
        start_price: this.data.more_data.start_price[0],
      })

    },

    btn_2: function () {
      console.log("触发按钮2")
      this.setData({
        text_1: this.data.more_data.onboat_people_number[1],
        text_2: this.data.more_data.leiji_save_memory[1],
        text_3: this.data.more_data.cut_times[1],
        real_time_price: this.data.more_data.real_time_price[1],
        start_price: this.data.more_data.start_price[1],
      })
    },

    btn_3: function () {
      console.log("触发按钮3")
      this.setData({
        text_1: this.data.more_data.onboat_people_number[2],
        text_2: this.data.more_data.leiji_save_memory[2],
        text_3: this.data.more_data.cut_times[2],
        real_time_price: this.data.more_data.real_time_price[2],
        start_price: this.data.more_data.start_price[2],
      })
    },

    btn_4: function () {
      console.log("触发按钮4")
      this.setData({
        text_1: this.data.more_data.onboat_people_number[3],
        text_2: this.data.more_data.leiji_save_memory[3],
        text_3: this.data.more_data.cut_times[3],
        real_time_price: this.data.more_data.real_time_price[3],
        start_price: this.data.more_data.start_price[3],
      })
    },

    swiper:function(e){
      
      this.setData({
        swiper_index:e.detail.current,
       
      })

      this.setData({
        more_data: this.data.list[this.data.swiper_index]
      })

      console.log("当前页信息", this.data.more_data)
    
      this.setData({
          btn_1_text: this.data.more_data.production_name[0],
          btn_2_text: this.data.more_data.production_name[1],
          btn_3_text: this.data.more_data.production_name[2],
          btn_4_text: this.data.more_data.production_name[3],
          button_num: this.data.more_data.production_name.length,
          text_1: this.data.more_data.onboat_people_number[0],
          text_2: this.data.more_data.leiji_save_memory[0],
          text_3: this.data.more_data.cut_times[0],
        real_time_price: this.data.more_data.real_time_price[0],
        start_price: this.data.more_data.start_price[0],
      })

      console.log('当前第',this.data.swiper_index+1,'页','此页详情:',this.data.more_data)
    }
     
  },

})
