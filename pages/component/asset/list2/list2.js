// pages/component/asset/list2/list2.js
var app = getApp();
var common=require('../../../../common/index.js');
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
    
    title:'',
    url:"https://xiaoyibang.top:8001/uploads/",
    order:[],
    duration: 2000,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    loading: false,
    plain: false,
    index:4,
    hiddenName: true,
    color: 'white',
    selected: false,
  },
  ready:function(){
    var order=[];
    
    
    //显示全部
    if (common.data.orderstatus == '0') {
      for (var i = 0; i < common.orderlist.length; i++) {
        var middle = common.orderlist[i];
        if (middle.status=='0') {
          middle.bindtap='已取消';//订单已经取消
          middle.day=false;
          order.push(middle);
        }
        else if (middle.status == '1'){
          var timestamp = Math.round(new Date().getTime() / 1000);
          middle.bindtap='进入订单';
          middle.day = Math.floor((middle.period__endtime - timestamp) / (3600 * 24));
          order.push(middle);
        }
        else{
          middle.bindtap = '进入订单';//订单已经取消
          order.push(middle);
        }
        
    }

    }
    else if (common.data.orderstatus == '1'){
      for (var i = 0; i < common.orderlist.length; i++) {
        if (common.orderlist[i].status == common.data.orderstatus) {
          var timestamp = Math.round(new Date().getTime() / 1000);
          console.log('时间啊' + timestamp)
          var middle = common.orderlist[i];
          middle.day = Math.floor((common.orderlist[i].period__endtime - timestamp) / (3600 * 24));
          middle.bindtap = '进入订单';
          order.push(middle);
        }
      }
    }
    else{
      for (var i = 0; i < common.orderlist.length; i++) {
        if (common.orderlist[i].status == common.data.orderstatus) {
          var middle = common.orderlist[i];
          middle.day=false;
          middle.bindtap = '进入订单';
          order.push(middle);
        }
      }
    }
    this.setData({ title: common.data.ordertitle });
    this.setData({ lists: order });

  },
  /**
   * 组件的方法列表
   */
  methods: {
    selectindex: function (e) {
      if (e.currentTarget.dataset.item.status!='0'){
        common.currentorder = e.currentTarget.dataset.item;//获取data-index
        console.log(common.currentorder)
        app.list = 1;
        wx.navigateTo({
          url: '../orderinfo/orderinfo'
        })
      }
      
    }

  }
})
