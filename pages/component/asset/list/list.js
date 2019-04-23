// pages/component/asset/list/list.js
var app=getApp();
var common=require("../../../../common/index.js");
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
    show:false,
    name:'',
    pic:'',
    teamname:'',
    time:'',
    list:1,
    h:'',
    h1:'',
    h2:''
  },
ready:function(){
  this.setData({ 
    name: app.globalData.name,
    pic: app.globalData.avatarUrl, 
    teamname: app.globalData.teamname, 
    time: app.globalData.time,  
    })
  var h = app.globalData.h;
  var h1 =h;
  h=(12/640)*h;
  h1=(250/800)*h1;
  var h2=h+15;
  this.setData({h:h,h1:h1,h2:h2});
},
  /**
   * 组件的方法列表
   */
  methods: {
    show:function(){
      this.setData({show:!this.data.show})
    },
    false: function () {
      this.setData({ show: false })
    },
    b:function(){
      wx.navigateTo({
        url: '../../pan/page',
      })
    },
    chooseorderstatus:function(e){
      common.chooseorderstatus(e.currentTarget.dataset.status);
      app.list = 2;
      wx.navigateTo({
        url: "/pages/setting/setting" 
      })
    },
    changelist2:function(){
      
      app.list=1;
      wx.navigateTo({
        url: "/pages/setting/setting"
      })
    },
    changelist4: function () {
      app.list = 3;
      wx.navigateTo({
        url: "/pages/setting/setting"
      })
    },
    changelist5: function () {
      app.list = 4;
      wx.navigateTo({
        url: "/pages/setting/setting"
      })
    },
    changelist6: function () {
      app.list = 5;
      wx.navigateTo({
        url: "/pages/setting/setting"
      })
    }
  }
})
