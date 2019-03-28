// pages/component/evaluation/evaluation.js

var jsonData = require('../../../data/evaluation.js');


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

    res: [
      {
        "id": 2,
        "name": "洛洛",
        "pic": '/static/userpic.jpg',
        "text": 'BOAT驾校真的不错，我特别开心，看着大家都在武汉学会了开车以后我再也不敢再武汉路面上溜达了，谢谢育才给了我这么美好的啊BOAT驾校真的不错，我特别开心，看着大家都在武汉学会了开车以后我再也不敢再武汉路面上溜达了'
      },

      {
        "id": 3,
        "name": "洛洛",
        "pic": '/static/userpic.jpg',
        "text": 'BOAT驾校真的不错，我特别开心，看着大家都在武汉学会了开车以后我再也不敢再武汉路面上溜达了，谢谢育才给了我这么美好的啊BOAT驾校真的不错，我特别开心，看着大家都在武汉学会了开车以后我再也不敢再武汉路面上溜达了'
      },

      {
        "id": 4,
        "name": "洛洛",
        "pic": '/static/userpic.jpg',
        "text": 'BOAT驾校真的不错，我特别开心，看着大家都在武汉学会了开车以后我再也不敢再武汉路面上溜达了，谢谢育才给了我这么美好的啊BOAT驾校真的不错，我特别开心，看着大家都在武汉学会了开车以后我再也不敢再武汉路面上溜达了'
      },

      {
        "id": 5,
        "name": "洛洛",
        "pic": '/static/userpic.jpg',
        "text": 'BOAT驾校真的不错，我特别开心，看着大家都在武汉学会了开车以后我再也不敢再武汉路面上溜达了，谢谢育才给了我这么美好的啊BOAT驾校真的不错，我特别开心，看着大家都在武汉学会了开车以后我再也不敢再武汉路面上溜达了'
      },

      {
        "id": 6,
        "name": "洛洛",
        "pic": '/static/userpic.jpg',
        "text": 'BOAT驾校真的不错，我特别开心，看着大家都在武汉学会了开车以后我再也不敢再武汉路面上溜达了，谢谢育才给了我这么美好的啊BOAT驾校真的不错，我特别开心，看着大家都在武汉学会了开车以后我再也不敢再武汉路面上溜达了'
      },
      {
        "id": 5,
        "name": "洛洛",
        "pic": '/static/userpic.jpg',
        "text": 'BOAT驾校真的不错，我特别开心，看着大家都在武汉学会了开车以后我再也不敢再武汉路面上溜达了，谢谢育才给了我这么美好的啊BOAT驾校真的不错，我特别开心，看着大家都在武汉学会了开车以后我再也不敢再武汉路面上溜达了'
      },

      {
        "id": 6,
        "name": "洛洛",
        "pic": '/static/userpic.jpg',
        "text": 'BOAT驾校真的不错，我特别开心，看着大家都在武汉学会了开车以后我再也不敢再武汉路面上溜达了，谢谢育才给了我这么美好的啊BOAT驾校真的不错，我特别开心，看着大家都在武汉学会了开车以后我再也不敢再武汉路面上溜达了'
      },
      {
        "id": 5,
        "name": "洛洛",
        "pic": '/static/userpic.jpg',
        "text": 'BOAT驾校真的不错，我特别开心，看着大家都在武汉学会了开车以后我再也不敢再武汉路面上溜达了，谢谢育才给了我这么美好的啊BOAT驾校真的不错，我特别开心，看着大家都在武汉学会了开车以后我再也不敢再武汉路面上溜达了'
      },

      {
        "id": 6,
        "name": "洛洛",
        "pic": '/static/userpic.jpg',
        "text": 'BOAT驾校真的不错，我特别开心，看着大家都在武汉学会了开车以后我再也不敢再武汉路面上溜达了，谢谢育才给了我这么美好的啊BOAT驾校真的不错，我特别开心，看着大家都在武汉学会了开车以后我再也不敢再武汉路面上溜达了'
      },

     
    ],
  },


  /**
   * 组件的方法列表
   */
  methods: {
    lower: function () {
      var result = this.data.res;
      var result2 = [];
      var resArr = jsonData.dataList;
      for (let i = result.length; i < result.length + 10; i++) {
        result2.push(resArr[i]);
      };

      var cont = result.concat(result2);
      console.log(resArr.length);
      if (cont.length >= resArr.length) {
        wx.showToast({ //如果全部加载完成了也弹一个框
          title: '我也是有底线的',
          icon: 'success',
          duration: 1000
        });
        return false;
      } else {
        wx.showLoading({ //期间为了显示效果可以添加一个过度的弹出框提示“加载中”  
          title: '加载中',
          icon: 'loading',
        });
        setTimeout(() => {
          this.setData({
            res: cont
          });
          wx.hideLoading();
        }, 1500)
      }
    },
  }

})
