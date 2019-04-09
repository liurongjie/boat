4// pages/component/tobuy/tobuy.js
var jsonData = require('../../../data/evaluation.js');

var common = require("../../../common/index.js");

Component({
  /**
   * 组件的属性列表
   */

  ready:function(){
    console.log(common.currentData)
    this.setData({
      data_list: common.currentData,
      start_time: common.currentData.starttime,
      end_time: common.currentData.endtime,
    })

   

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
     
    
    var that = this
    wx.request({
      url: 'https://xiaoyibang.top:8001/dajia/firstcomment',
      data: {
        'productionid': common.currentData.production,
        // this.pro_data.production_id
      },
      success: (res) => {
        that.setData({
          evaluationlist: res.data.data
        })
        common.currentEvaluation = this.data.evaluationlist
      }
    })

   


    var picture_production_url=[];
 
    var url_temp1 ='https://xiaoyibang.top:8001/uploads/'+this.data.data_list.production__merchant__pic1
    picture_production_url.push(url_temp1)
    var url_temp2 = 'https://xiaoyibang.top:8001/uploads/' + this.data.data_list.production__merchant__pic2
    picture_production_url.push(url_temp2)
    var url_temp3 = 'https://xiaoyibang.top:8001/uploads/' + this.data.data_list.production__merchant__pic3
    picture_production_url.push(url_temp3)

    this.setData({
      picture_production: picture_production_url
    })
  
  },
  /**
   * 组件的初始数据
   */
  data: {
    picture_production: [],
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
