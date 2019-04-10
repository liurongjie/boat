// pages/component/prepay/prepay.js

var common = require("../../../common/index.js")

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
   data_list:{},
    start_time: '',
    end_time: '',
    now: '',
    date_day: "",
    pic_url:'',
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  

  ready:function(){

   

    this.setData({
      data_list: common.currentData,
      start_time: common.currentData.starttime,
      end_time: common.currentData.endtime,
    })

    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    var temp;
    temp = Math.ceil((timestamp - this.data.start_time) / (this.data.end_time - this.data.start_time) * 100);
    var date = this.data.end_time - timestamp;
    var date_day = parseInt(date / 3600 / 24);
  
    this.setData({
      now: timestamp,
      percent: temp,
      date_day: date_day,
     
    })
    console.log("[page4]获取当前时间戳为:" + timestamp); 


    var url=this.data.data_list.production__introductionpic
    this.setData({
      pic_url:"https://xiaoyibang.top:8001/uploads/"+url
    })
  }
})
