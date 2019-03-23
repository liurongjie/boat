// pages/component/home/home.js
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
    imgUrls: [
      '/static/pic/1.jpg',
      '/static/pic/2.jpg',
      '/static/pic/3.jpg',
    ],
    currentSwiper: 0,
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    day:'13',
    month:'APRIL',
    year:'2019',
  },
  ready: function () {
    var timestamp = Date.parse(new Date());
     var date = new Date(timestamp);//获取年份  
     var Y =date.getFullYear();//获取月份 
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);//获取当日日期 
      var D = date.getDate() < 10 ? '0' + date.getDate() :date.getDate();
      var chn_mon_arr = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']; 
    var current_month = M;
    var en_mon_arr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Spt", "Oct", "Nov", "Dec"];
    for (var i = 0; i < chn_mon_arr.length; i++) {      //循环匹配       
         if(current_month == chn_mon_arr[i]){       
           M = en_mon_arr[i];         
              }      
          }
this.setData({
year:Y,
month:M,
day:D,
})
       
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onslidechangeend: function (e) {
      var that = this;

      that.setData({
        currentSwiper: e.detail.current
      })

    },


  }
})