// pages/component/bottom/bottom.js

var app = getApp();
var common=require("../../../common/index.js")
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
    pay:true,
    status:1,
    text:"我要上船",
   },

  /**
   * 组件的方法列表
   */
  ready: function () {
    console.log(common.currentData)
  },
  methods: {
    goback:function(){
      var that = this;
      if (app.buy_index == 4 || app.buy_index==3 ){//如果处于评论页，直接返回商品页
        app.buy_index = 1; 
      }
      else{//否则正常返回
        switch (that.data.status) {
          case 4:
            break;
          case 3:
            that.setData({
              status: 1
            })
            app.buy_index = 1;
            break;
          case 2:
            that.setData({
              status: 1
            })
            app.buy_index = 1;
            break;
          case 1:
            wx.navigateBack({
              delta: 1,
            })
            break;
      }
     
      }

    },
    buy:function(){
      var that=this;
      switch (that.data.status) {
        case 4:
        //预付一半
          break;
        case 3:
        //看我的船
          
          wx.navigateTo({
            url: "/pages/teamcut/teamcut?steamid=" + common.currentorder.steam_id + '&periodid=' + common.currentorder.period_id
              + '&avatarUrl=' + app.globalData.avatarUrl + '&nickName=' + app.globalData.nickName + '&openid=' +                      app.globalData.openid
          })
          break;
        case 2:
        //预付一元
          
          if(common.data.steamid){
            that.buytogether;
          }
          else{
            that.buyalone();
            that.setData({
              status: 3
            })
          }
          
          break;
        case 1:
        //我要上船
          that.checkorder();
          app.buy_index = 2;
          break;


      }
    },
    checkorder:function(){
      this.setData({
        status: 2
      })
      for(var  i=0;i<common.orderlist.length;i++){
        if (common.currentData.periodid == common.orderlist[i].period_id){
          common.currentorder=common.orderlist[i];

          this.setData({
            status: 3
          })
          break;
        }
      }

      
    },
    buyalone:function(){
      
      wx.request({
        url: 'https://xiaoyibang.top:8001/dajia/buyalone',
        data:{
          "openid": app.globalData.openid,
          "periodid": common.currentData.periodid,
        },
        success:(res)=>{
          console.log(res.data);
          common.currentorder.steam_id=res.data.steamid;
          common.currentorder.period_id = common.currentData.periodid;
          app.getorderlist();
          
        }
      })
      
      
    },
    buytogether: function () {

      wx.request({
        url: 'https://xiaoyibang.top:8001/dajia/buytogether',
        data: {
          "openid": app.globalData.openid,
          "periodid": common.currentData.periodid,
          "steamid":common.data.steamid,
        },
        success: (res) => {
         
          if(res.data.success){
            common.currentorder.steam_id = res.data.steamid;
            common.currentorder.period_id = common.currentData.periodid;
            that.setData({
              status: 3
            })
            app.getorderlist();
          }
          else{
            wx.showToast({ //如果全部加载完成了也弹一个框
              title: res.data.reason,
              icon: 'success',
              duration: 300
            });
          }
          

        }
      })


    }
   
   
  }
})
