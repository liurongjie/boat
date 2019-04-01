// pages/component/tobuy/tobuy.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  ready:function(){
  
    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    console.log("当前时间戳为：" + timestamp); 

    var temp ;

    temp = Math.ceil((timestamp - this.data.start_time) / (this.data.end_time - this.data.start_time )*100);
    var mm = (timestamp - this.data.start_time) / (this.data.end_time - this.data.start_time);
    var date = this.data.end_time - timestamp;


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

    console.log(mm,date_day, date_hour, date_min,date_sec,this.data.percent)

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
    end_time: 1554058544,
    now:'',
    date_day:"",
    date_hour: "",
    date_minute: "",
    date_second: "",

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
