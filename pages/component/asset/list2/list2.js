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
    orderstatus:false,
    title:'',
    url:"https://xiaoyibang.top:8001/uploads/",
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
  },
  ready:function(){
    var order=[];
    if (common.data.orderstatus=='1'){
      this.setData({ orderstatus: true });
    }
    this.setData({ title: common.data.ordertitle });
    console.log(common.orderlist);
    for(var i=0;i<common.orderlist.length;i++){  
      if (common.orderlist[i].status==common.data.orderstatus){
        var timestamp = Math.round(new Date().getTime() / 1000);
        console.log('时间啊' + timestamp)
        common.orderlist[i].period__endtime = Math.round((common.orderlist[i].period__endtime - timestamp)/(3600*24));
        console.log('时间'+common.orderlist[i].period__endtime)
        order.push(common.orderlist[i]);
      }
    }
    this.setData({ lists: order });

  },
  /**
   * 组件的方法列表
   */
  methods: {
    selectindex: function (e) {
      var index = e.currentTarget.dataset.item;//获取data-index
      wx.navigateTo({
        url: '../orderinfo/orderinfo?item=' + item,
      })
      console.log(index)
    }

  }
})
