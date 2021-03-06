    // pages/evaluation/evaluation.js

var util = require("../../utils/util.js");
var common = require("../../common/index.js")
var evalu_number = '14';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    data_list: {},
    evaluation_list:[{}],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      data_list: common.currentData,
      evaluation_list: common.currentEvaluation,
    
    })

    console.log("原始评论数据：",this.data.evaluation_list)
    let evaluation_list = this.data.evaluation_list
    

    for (var i = 0; i < this.data.evaluation_list.length;i++)
    {


      //评论的图片处理
      if (this.data.evaluation_list[i].pic1 === '[object Undefined]')
      {
        evaluation_list[i].remark_pic_array =null
      }
      else if (this.data.evaluation_list[i].pic2 === '[object Undefined]'){
        evaluation_list[i].pic1 = 'https://xiaoyibang.top:8002/uploads/' + this.data.evaluation_list[i].pic1
        evaluation_list[i].remark_pic_array = [evaluation_list[i].pic1]
      }
      else if (this.data.evaluation_list[i].pic3 === '[object Undefined]') {
        evaluation_list[i].pic1 = 'https://xiaoyibang.top:8002/uploads/' + this.data.evaluation_list[i].pic1
        evaluation_list[i].pic2 = 'https://xiaoyibang.top:8002/uploads/' + this.data.evaluation_list[i].pic2
        evaluation_list[i].remark_pic_array = [evaluation_list[i].pic1, evaluation_list[i].pic2]
      }
      else{
        evaluation_list[i].pic1 = 'https://xiaoyibang.top:8002/uploads/' + this.data.evaluation_list[i].pic1
        evaluation_list[i].pic2 = 'https://xiaoyibang.top:8002/uploads/' + this.data.evaluation_list[i].pic2
        evaluation_list[i].pic3 = 'https://xiaoyibang.top:8002/uploads/' + this.data.evaluation_list[i].pic3
        evaluation_list[i].remark_pic_array = [evaluation_list[i].pic1, evaluation_list[i].pic2, evaluation_list[i].pic3]
      }




      //评论的时间处理
      if(i!=0)
        evaluation_list[i].time = util.js_date_time(this.data.evaluation_list[i].time)
      


      this.setData({ evaluation_list})
    }

    console.log("[page3]获取公共js数据", this.data.evaluation_list)

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },



  lower: function () {
    var result = common.currentEvaluation; //本地
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

    var resArr = common.currentEvaluation; //云端
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

  
})