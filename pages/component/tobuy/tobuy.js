4// pages/component/tobuy/tobuy.js
var jsonData = require('../../../data/evaluation.js');

var common = require("../../../common/index.js");

Component({
  /**
   * 组件的属性列表
   */

  ready:function(){
  
    this.setData({
      data_list: common.currentData,
      start_time: common.currentData.starttime,
      end_time: common.currentData.endtime,
    })

    console.log("[page2]获取产品详情页数据：",this.data.data_list)

    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    var temp ;
    temp = Math.ceil((timestamp - this.data.start_time) / (this.data.end_time - this.data.start_time )*100);
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
    console.log("[page2]获取当前时间戳为：" + timestamp); 
    
    var that = this
    wx.request({
      url: 'https://xiaoyibang.top:8001/dajia/firstcomment',
      data: {
        'productionid': common.currentData.production,
        // this.pro_data.production_id
      },
      success: (res) => {

        console.log("[page2]获取评论:", res.data.data)
        that.setData({
          evaluationlist: res.data.data
        })
        common.currentEvaluation = this.data.evaluationlist
      }
    })

    console.log("[page2]将获取的评论存在公共js中：", common.currentEvaluation)
  },
  /**
   * 组件的初始数据
   */
  data: {
    picture_production: [
      '/static/pic/1.jpg', '/static/pic/2.jpg', '/static/pic/3.jpg'
    ],
    // icon62: '',
    // percent:'',
    // production_name: '',
    // onboat_people_number: '', 
    // cut_times: '',
    // start_price: '',
    // real_time_price: '',
    start_time: '',
    end_time: '',
    now:'',
    date_day:"",
    date_hour: "",
    date_minute: "",
    date_second: "",
    // evaluationlist :[],
    data_list:{},
  },

  /**
   * 组件的方法列表
   */
  methods: {
    pro_map:function(){
      var app =getApp();
      app.buy_index=3;
      console.log("[page2]跳转查看地图", app.buy_index)

      
    },

    pro_evaluation:function(){
      var app = getApp();
      app.buy_index =4;
      console.log("[page2]跳转查看评论", app.buy_index)
    }
  }
})
