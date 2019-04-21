// pages/component/asset/list3/list3.js
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
    data:[
      { id:'1',
        pic: '/static/2.png',
        name:'BOAT推荐驾校C1普通班 ',
        price:'2029.5',
        date: '2019/04/20',
        erma:'/static/t14.png'
      },
      {
        id: '2',
        pic: '/static/3.png',
        name: 'BOAT校园贝壳商城抽奖-实物奖品 ',
        price: 'IPHONE-X',
        date: '2019/04/20',
        erma: '/static/t14.png'
      },
      {
        id: '3',
        pic: '/static/2.png',
        name: 'BOAT推荐驾校C1普通班 ',
        price: '2029.5',
        date: '2019/04/20',
        erma: '/static/t14.png'
      },
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    duihuan:function(e){
      let query = e.currentTarget.dataset['index'];
      console.log(query);
    },
  }
})
