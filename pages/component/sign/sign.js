// pages/component/sign/sign.js
var app=getApp();
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
    status:'0',
    sign:false,//是否完成签到
    color:'#5EE1FE',//button框颜色
    text:'今日签到',//button框显示
    lastday:1,//连续第几天
  },
  ready:function(){
    this.setData({
      status:app.globalData.status,
      lastday:app.globalData.lastday,
    })
    console.log(this.data.status);
  },
  /**
   * 组件的方法列表
   */
  methods: {
    sign:function(){
      if(this.data.sign){
        return '';
      }
      else{

        var lastday=this.data.lastday+1;
        
        this.setData({
          sign:true,
          color:'gray',
          text:'签到完成',
          lastday:lastday,
        })
        var date=new Date();
        var day=date.getDate();
        wx.setStorage({
          key: 'sign',
          data: {
            'day':day,
            'lastday':lastday,
          },
        })
        app.globalData.sign = true;
      }
    }

  }
})
