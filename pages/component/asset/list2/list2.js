// pages/component/asset/list2/list2.js
var app = getApp();
var jsonData = require('../../../../data/json.js');
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
    duration: 2000,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    loading: false,
    plain: false,
    index: 0,
    hiddenName: true,
    color: 'white',
    selected: false,
    url: '',
    day:'13',
    state:'距离结束还有30天',
    price:'2054',
    preprice:'2500'

  },
  ready:function(){
    var that = this//不要漏了这句，很重要


    // wx.request({
    //   url: 'https://xiaoyibang.top:8001/production/orderinformation',
    //   data: {
    //     openid: app.globalData.openid
    //   },

    //   success(res) {
    //     console.log('用户登录成功，得到openid\n', res.data);
    //     console.log('openid'+app.globalData.openid)
    //     // app.globalData.openid = res.data.openid
    //     // app.globalData.teamid = res.data.teamid
    //     // console.log('openid保存到全局变量中\n', app.globalData.openid)
    //     // console.log('teamid保存到全局变量中\n', app.globalData.teamid)
    //   }
    // })
    


   
    that.setData({ lists: jsonData.dataList })

  },
  /**
   * 组件的方法列表
   */
  methods: {
    selectindex: function (e) {
      var index = e.currentTarget.dataset.index;//获取data-index
      wx.navigateTo({
        url: '../orderinfo/orderinfo?id=' + index,
      })
      console.log(index)
    }

  }
})
