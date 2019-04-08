// pages/component/asset/list2/list2.js
var app = getApp();
var common=require('../../../../common/index.js');
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
    order:[],
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
    var order=[];
    console.log(common.orderlist);
    console.log(common.orderlist.length)
    for(var i=0;i<common.orderlist.length;i++){
      console.log(common.orderlist[i].status);
      if (common.orderlist[i].status==common.data.orderstatus){
        order.push(common.orderlist[i]);
        
      }
    }
    
    that.setData({ lists: order })

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
