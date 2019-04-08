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
    chooseorderstatus:function(e){
      common.chooseorderstatus(e.currentTarget.dataset.status);
      app.list = 3;
    },
    changelist2:function(){
      app.list=2;

    },
    changelist4: function () {
      app.list = 4;
     
    },
    changelist5: function () {
      app.list = 5;
      
    },
    changelist6: function () {
      app.list = 6;
      
    }
  }
})
