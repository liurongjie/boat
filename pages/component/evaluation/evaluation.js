
var common = require("../../../common/index.js")
var evalu_number='14';
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
    data_list:{},
    evaluation_list:{}
  },

  ready:function(){
    this.setData({
      data_list: common.currentData,
      evaluation_list: common.currentEvaluation
    })
    console.log("[page3]获取公共js数据",this.data)
  },

  /**
   * 组件的方法列表
   */
  methods: {



     lower: function () {

      //  scancomment(request):
      //  if request.method == 'GET':
      //    number = request.GET.get('number', '')
      //  periodid = request.GET.get('periodid', '')

      
    //   var result = this.data.res;
      var result = common.currentEvaluation;//本地
      var result2 = [];

      //  scancomment

       wx.request({
         url: 'https://xiaoyibang.top:8001/dajia/scancomment',
         data: {
           'number': evalu_number,
           'periodid': this.data.data_list.periodid,
    
         },
         success: (res) => {
          
            console.log(res.data)
         },
      })

       var resArr = common.currentEvaluation;//云端
      for (let i = result.length; i < result.length + 5; i++) {
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
