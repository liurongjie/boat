// pages/teamcut/teamcut.js
var app = getApp();

var common = require('../../common/index.js');

let loadingMore = false
let lastScollTop = 0;
let lastRequestTime = 0;


Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: "https://xiaoyibang.top:8001/uploads/",
  //云端获取
    period:{},
    onecut:[],//团队成员
    twocut:[],//他人砍价
    cutprice:0,
    number:0,//多少位朋友砍价
    res: [],//展示内容
  //数据缓存
    periodid:'',
    nickName: '',
    avatarUrl: '',
    steamid:'',
    openid:'',
  //状态0自我，状态1帮我砍，状态2帮好友分享
    btn_index: 0,//状态
    btn_text_left:['分享好友砍价','砍这好友一刀','帮Ta召唤好友'],
    btn_text_right: ['查看拼团成员', '我要立即参团', '我要立即参团'],
  //
    selectPerson: true,
    firstPerson: '武汉大学',
    selectArea: false,
    process: 40, //0到90
    day: '14',
    hour: '20',
    minute: '43',
    second: '10',
  //按钮类型
    status:'share',
    func:'login',
    list: [],
    hasMore: true, //列表是否有数据未加载
    page: 1,
    size: 8, //每页8条数据
    flag_hhh:'',

  },
  //下拉刷新
  lower: function() {
    // var result = this.data.res;
    // var resArr = jsonData.dataList;
    // for (let i = 0; i < 10; i++) {
    //   result.push(resArr[i]);
    // };
    
    // var cont = result.concat(resArr);
    // console.log(resArr.length);
    // if (cont.length >= 100) {
    //   wx.showToast({ //如果全部加载完成了也弹一个框
    //     title: '我也是有底线的',
    //     icon: 'success',
    //     duration: 300
    //   });
    //   return false;
    // } else {
    //   this.setData({
    //     res: result,
    //   })
    //   wx.showLoading({ //期间为了显示效果可以添加一个过度的弹出框提示“加载中”  
    //     title: '加载中',
    //     icon: 'loading',
    //   });
    //   setTimeout(() => {
    //     this.setData({
    //       res: cont
    //     });
    //     wx.hideLoading();
    //   }, 1500)
    // }
  },

  clickPerson: function() {
    var selectPerson = this.data.selectPerson;
    if (selectPerson == true) {
      this.setData({
        selectArea: true,
        selectPerson: false,
      })
    } else {
      this.setData({
        selectArea: false,
        selectPerson: true,
      })
    }
  },
  mySelect: function(e) {

    this.setData({
      firstPerson: e.target.dataset.me,
      selectPerson: true,
      selectArea: false,
    })
  },
  //页面返回
  back: function() {
    wx.navigateBack({
      delta: 1
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  //打算传播steamid.periodid,pic name就行
  onLoad: function(options) {
    this.setData(
      {
        periodid:options.periodid,
        nickName:options.nickName,
        avatarUrl:options.avatarUrl,
        steamid:options.steamid,
        openid:options.openid,
      }
    )
    this.getorderdetail(options.steamid);
    this.getperiod(options.periodid);
    console.log(options)
    this.checkstatus();
  },
  //状态获取
  checkstatus:function(){
    if (!app.globalData.openid){
      this.setData({
        status: 'getUserInfo',
        func:'login',
      })
    }
    else{
      if (app.globalData.openid==this.data.openid){
        this.setData({
          btn_index: 0,
          status: 'share',
          func: 'change_status',
        })
      }
      else {
        var check=true;//判断是否继续检查
        for(var i=0;i<this.data.onecut.length;i++)
        {
          if (app.globalData.openid == this.data.onecut[i].order__user__openid)
          {
            this.setData({
              btn_index: 0,
              status: 'share',
              func: 'change_status',
            })
            check=false;
            break;
          }
        }
        if(check){
          for (var i = 0; i < this.data.twocut.length; i++) {
            if (app.globalData.openid == this.data.twocut[i].audience__openid) {
              this.setData({
                btn_index: 2,
                status: 'share',
                func: 'change_status',
              })
              check=false;
              break;
            }
          }
        }
        if(check){
          this.setData({
            btn_index: 1,
            status: 'getUserInfo',
            func: 'cutprice',
          })
        }
      }
      console.log(this.data.btn_index)
    }
    
  },
  login:function(e){
    app.globalData.nickName = e.detail.userInfo.nickName
    app.globalData.avatarUrl = e.detail.userInfo.avatarUrl
    app.globalData.gender = e.detail.userInfo.gender
    app.login();
    this.checkstatus();
  },
  getorderdetail:function(steamid){
    var that=this;
    wx.request({
      url: 'https://xiaoyibang.top:8001/dajia/orderdetail',
      data: {
        'steamid': steamid,
      },
      success: (res) => {
        console.log(res.data)
        that.setData({
          onecut:res.data.onecut,
          twocut:res.data.twocut,
        })
        that.merge();

      }
    })
  },
  getperiod:function(periodid){
    var that = this;
    wx.request({
      url: 'https://xiaoyibang.top:8001/dajia/getperiod',
      data: {
        'periodid': periodid,
      },
      success: (res) => {
        console.log(res.data)
        res.data[0].production__merchant__logo = that.data.url + res.data[0].production__merchant__logo;
        that.setData({
          period: res.data[0],
         
        })
       

      }
    })
  },
  //合并onecut和twocut生成res
  merge:function(){
    var data=[];
    var cutprice=0;
    for(var i=0;i<this.data.onecut.length;i++){
      var middle={};
      middle.pic = this.data.onecut[i].order__user__picture;
      middle.name = this.data.onecut[i].order__user__name;
      middle.cutprice = this.data.onecut[i].order__cutprice;
      cutprice=cutprice+middle.cutprice;
      data.push(middle);
    }
    for (var i = 0; i < this.data.twocut.length; i++) {
      var middle = {};
      middle.pic = this.data.twocut[i].audience__picture;
      middle.name = this.data.twocut[i].audience__nickname;
      middle.cutprice = this.data.twocut[i].cutprice;
      cutprice = cutprice + middle.cutprice;
      data.push(middle);
    }
    this.setData({
      res:data,
      cutprice:cutprice,
      number:data.length,
    })

  },
  /**
  * 用户点击右上角分享
  */
  onShareAppMessage: function () {
      return {
        title: 'BOAT',
        path: 'pages/teamcut/teamcut?periodid=' +
          this.data.periodid +
          '&' + 'nickName=' + this.data.nickName +
          '&' + 'avatarUrl=' + this.data.avatarUrl +
          '&' + 'steamid=' + this.data.steamid +
          '&' + 'openid=' + this.data.openid,
        success: (res) => {
          console.log("转发成功", res);

        },
        fail: (res) => {
          console.log("转发失败", res);
        }
      }

  },
  //右边按钮点击
  team_inview: function () {
    common.onecut = this.data.onecut;
    if(this.data.btn_index==0){
      wx.navigateTo({
        url: "/pages/myteam/myteam",
      })
    }
    else{
      for (var i = 0; i < common.homelist.length; i++) {
        if (this.data.periodid == common.homelist[i].periodid) {
          common.currentData = common.homelist[i];
          break;
        }
      }
      common.data.steamid=this.data.steamid;
      wx.navigateTo({
        url: "/pages/toboat/toboat",
      })
    }
    

  },
  //左边按钮点击
  change_status: function () {

    // if (this.data.btn_index == 0) {
    //   console.log(this.data.btn_index)

    // }
    // else if (this.data.btn_index == 1)//
    // {
    //   console.log(this.data.btn_index)
    //   wx.showToast({
    //     title: '砍了',
    //   })
    //   this.setData({
    //     t: 'share',
    //     btn_index: 2,
    //   })
    // } else {
    //   console.log(this.data.btn_index)
    // }

  },
  //帮这好友砍一刀
  cutprice: function (steamid) {
    var that=this;
    wx.request({
      url: 'https://xiaoyibang.top:8001/dajia/cutprice',
      data: {
        'steamid': that.data.steamid,
        'openid': app.globalData.openid,
        'periodid':that.data.periodid,
      },
      success: (res) => {
        that.getorderdetail(that.data.steamid);
      }
    })
    this.setData({
      btn_index: 2,
      status: 'share',
      func: 'change_status',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (options) {
    

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

 

  
 


})