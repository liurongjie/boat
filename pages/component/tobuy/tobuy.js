// pages/component/tobuy/tobuy.js
var jsonData = require('../../../data/evaluation.js');

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    location: {
      type: String,
      value: '',
    },


    production_name: {
      type: String,
      value: '',
    },

    real_time_price: {
      type: String,
      value: '',
    },

    start_price: {
      type: String,
      value: '',
    },

    start_time: {
      type: String,
      value: '',
    },

    type: {
      type: String,
      value: '',
    },

    production_id: {
      type: String,
      value: '',
    },

    onboat_people_number: {
      type: String,
      value: '',
    },

    longitude: {
      type: String,
      value: '',
    },

    latitude: {
      type: String,
      value: '',
    },

    end_time: {
      type: String,
      value: '',
    },

    cut_times: {
      type: String,
      value: '',
    },
  },

  ready:function(){
  
    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    var temp ;
    temp = Math.ceil((timestamp - this.properties.start_time) / (this.properties.end_time - this.properties.start_time )*100);
    var date = this.properties.end_time - timestamp;
    var date_day = parseInt(date/3600/24);
    var date_hour = parseInt((date-date_day*24*3600)/3600);
    var date_min = parseInt(  ( date -date_hour  * 3600  - date_day * 3600*24  )/60);
    var date_sec = parseInt(date - date_hour * 3600 - date_day * 3600 * 24 -date_min*60);
    this.setData({
      now: timestamp,
      percent:temp,
      date_day: date_day,
      date_hour: date_hour,
      date_minute: date_min,
      date_second: date_sec
    })
    console.log("当前时间戳为：" + timestamp); 
    console.log("tobuy_properties信息：", this.properties)
    


    // console.log(jsonData.dataList[0])
    this.setData({
      evaluation: jsonData.dataList[0]
     })

    console.log(this.data.evaluation)

    
  },
  /**
   * 组件的初始数据
   */
  data: {
    picture_production: [
      '/static/pic/1.jpg', '/static/pic/2.jpg', '/static/pic/3.jpg'
    ],
    icon62: '/static/pic/1211.png',
    percent:'',
    production_name: 'C1包过班',
    onboat_people_number: 99, 
    cut_times: 12148,
    start_price: 2880,
    real_time_price: 2654,
    start_time: 1554018544,
    end_time: 1554818544,
    now:'',
    date_day:"",
    date_hour: "",
    date_minute: "",
    date_second: "",

    evaluation:{}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    pro_map:function(){
      var app =getApp();
      app.buy_index=3;
      console.log("查看地图", app.buy_index)

      
    },

    pro_evaluation:function(){
      var app = getApp();
      app.buy_index =4;
      console.log("查看地图", app.buy_index)
    }
  }
})
