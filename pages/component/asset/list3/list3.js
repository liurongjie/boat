// pages/component/asset/list3/list3.js
var common = require("../../../../common/index.js");
var utils=require("../../../../utils/util.js");
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
    ticket:[],
    pic: '/static/2.png',
    // data: [{
    //     id: '1',
    //     pic: '/static/2.png',
    //     name: 'BOAT推荐驾校C1普通班 ',
    //     price: '2029.5',
    //     date: '2019/04/20',
    //     erma: '/static/t14.png'
    //   },
    //   {
    //     id: '2',
    //     pic: '/static/3.png',
    //     name: 'BOAT校园贝壳商城抽奖-实物奖品 ',
    //     price: 'IPHONE-X',
    //     date: '2019/04/20',
    //     erma: '/static/t14.png'
    //   },
    //   {
    //     id: '3',
    //     pic: '/static/2.png',
    //     name: 'BOAT推荐驾校C1普通班 ',
    //     price: '2029.5',
    //     date: '2019/04/20',
    //     erma: '/static/t14.png'
    //   },
    //   {
    //     id: '4',
    //     pic: '/static/2.png',
    //     name: 'BOAT推荐驾校C1普通班 ',
    //     price: '2029.5',
    //     date: '2019/04/20',
    //     erma: '/static/t14.png'
    //   },
    // ],
  },
  ready: function() {
    console.log(common.orderlist)
    var middle = [];
    for (var i = 0; i < common.orderlist.length; i++) {

      if (common.orderlist[i].status == 2) {
        var tran={};
        //common.orderlist[i];
        tran.time = utils.js_date_time1(common.orderlist[i].time2);
        tran.name=common.orderlist[i].production__name;
        tran.endprice=common.orderlist[i].endprice;
        tran.orderid=common.orderlist[i].orderid;
        middle.push(tran)
      }

    }
    this.setData({
      ticket:middle,
    })
     console.log(this.data.ticket)
     console.log(middle)

  },

  /**
   * 组件的方法列表
   */
  methods: {
    duihuan: function(e) {
      let query = e.currentTarget.dataset['index'];
      console.log(query);
    },
    
  }
})