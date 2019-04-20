// pages/remark/remark.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show_model: true,
    popup: true,
    images: [],
    uploadedImages: [],
    show_num:0,
    // image: "",
    // "imageHidden": true,
    // model_img: ['/static/camera.svg', '/static/camera.svg', '/static/camera.svg'],//*3
    // hiden: [false, false, false],
    // pic_index:0,
    // text:'',//文字·
    // judge_producation:0,//星
    // judge_boat:0,//boat
    // state:0,//

    url: '/static/pic/new.png',
    name: '武汉大学BOAT推荐驾校普通班',
    desc: '一月试学 车接车送',
    remark: '',
  
    ph: ' BOAT推荐满足你的期待吗？说说你的体验感受, 分享给想要参与组队的他们吧',

    stars: [{
        flag: 2,
        bgfImg: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjguMDQ0IiBoZWlnaHQ9IjI4LjQxNyIgdmlld0JveD0iMCAwIDI4LjA0NCAyOC40MTciPg0KICA8ZGVmcz4NCiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjAuNSIgeDI9IjAuNSIgeTI9IjEiIGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij4NCiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZkYjM4ZiIvPg0KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZjc5MDdlIi8+DQogICAgPC9saW5lYXJHcmFkaWVudD4NCiAgPC9kZWZzPg0KICA8cGF0aCBpZD0i6Lev5b6EXzE0MDkiIGRhdGEtbmFtZT0i6Lev5b6EIDE0MDkiIGQ9Ik00MjE5LjI3MiwzNjc1Ljk1MWw5LjE3Ny0uOTQxLDUuMDItOS43MjYsMy45MjIsOS43MjYsOS40OTEuOTQxLTYuMiw2LjUxLDEuMzMzLDEwLjgyNC05LjEtNC4zMTQtOCw0LjMxNC45NDEtMTAuODI0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQyMTkuMDUxIC0zNjY1LjA0NCkiIHN0cm9rZT0iIzcwNzA3MCIgc3Ryb2tlLXdpZHRoPSIwLjIiIGZpbGw9InVybCgjbGluZWFyLWdyYWRpZW50KSIvPg0KPC9zdmc+DQo=",
        bgImg: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOC4wNDQiIGhlaWdodD0iMjguNDE3IiB2aWV3Qm94PSIwIDAgMjguMDQ0IDI4LjQxNyI+DQogIDxwYXRoIGlkPSLot6/lvoRfMTQwOSIgZGF0YS1uYW1lPSLot6/lvoQgMTQwOSIgZD0iTTQyMTkuMjcyLDM2NzUuOTUxbDkuMTc3LS45NDEsNS4wMi05LjcyNiwzLjkyMiw5LjcyNiw5LjQ5MS45NDEtNi4yLDYuNTEsMS4zMzMsMTAuODI0LTkuMS00LjMxNC04LDQuMzE0Ljk0MS0xMC44MjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDIxOS4wNTEgLTM2NjUuMDQ0KSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjNzA3MDcwIiBzdHJva2Utd2lkdGg9IjAuMiIvPg0KPC9zdmc+DQo="
      },
      {
        flag: 2,
        bgfImg: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjguMDQ0IiBoZWlnaHQ9IjI4LjQxNyIgdmlld0JveD0iMCAwIDI4LjA0NCAyOC40MTciPg0KICA8ZGVmcz4NCiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjAuNSIgeDI9IjAuNSIgeTI9IjEiIGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij4NCiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZkYjM4ZiIvPg0KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZjc5MDdlIi8+DQogICAgPC9saW5lYXJHcmFkaWVudD4NCiAgPC9kZWZzPg0KICA8cGF0aCBpZD0i6Lev5b6EXzE0MDkiIGRhdGEtbmFtZT0i6Lev5b6EIDE0MDkiIGQ9Ik00MjE5LjI3MiwzNjc1Ljk1MWw5LjE3Ny0uOTQxLDUuMDItOS43MjYsMy45MjIsOS43MjYsOS40OTEuOTQxLTYuMiw2LjUxLDEuMzMzLDEwLjgyNC05LjEtNC4zMTQtOCw0LjMxNC45NDEtMTAuODI0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQyMTkuMDUxIC0zNjY1LjA0NCkiIHN0cm9rZT0iIzcwNzA3MCIgc3Ryb2tlLXdpZHRoPSIwLjIiIGZpbGw9InVybCgjbGluZWFyLWdyYWRpZW50KSIvPg0KPC9zdmc+DQo=",
        bgImg: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOC4wNDQiIGhlaWdodD0iMjguNDE3IiB2aWV3Qm94PSIwIDAgMjguMDQ0IDI4LjQxNyI+DQogIDxwYXRoIGlkPSLot6/lvoRfMTQwOSIgZGF0YS1uYW1lPSLot6/lvoQgMTQwOSIgZD0iTTQyMTkuMjcyLDM2NzUuOTUxbDkuMTc3LS45NDEsNS4wMi05LjcyNiwzLjkyMiw5LjcyNiw5LjQ5MS45NDEtNi4yLDYuNTEsMS4zMzMsMTAuODI0LTkuMS00LjMxNC04LDQuMzE0Ljk0MS0xMC44MjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDIxOS4wNTEgLTM2NjUuMDQ0KSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjNzA3MDcwIiBzdHJva2Utd2lkdGg9IjAuMiIvPg0KPC9zdmc+DQo="
      },
      {
        flag: 2,
        bgfImg: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjguMDQ0IiBoZWlnaHQ9IjI4LjQxNyIgdmlld0JveD0iMCAwIDI4LjA0NCAyOC40MTciPg0KICA8ZGVmcz4NCiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjAuNSIgeDI9IjAuNSIgeTI9IjEiIGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij4NCiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZkYjM4ZiIvPg0KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZjc5MDdlIi8+DQogICAgPC9saW5lYXJHcmFkaWVudD4NCiAgPC9kZWZzPg0KICA8cGF0aCBpZD0i6Lev5b6EXzE0MDkiIGRhdGEtbmFtZT0i6Lev5b6EIDE0MDkiIGQ9Ik00MjE5LjI3MiwzNjc1Ljk1MWw5LjE3Ny0uOTQxLDUuMDItOS43MjYsMy45MjIsOS43MjYsOS40OTEuOTQxLTYuMiw2LjUxLDEuMzMzLDEwLjgyNC05LjEtNC4zMTQtOCw0LjMxNC45NDEtMTAuODI0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQyMTkuMDUxIC0zNjY1LjA0NCkiIHN0cm9rZT0iIzcwNzA3MCIgc3Ryb2tlLXdpZHRoPSIwLjIiIGZpbGw9InVybCgjbGluZWFyLWdyYWRpZW50KSIvPg0KPC9zdmc+DQo=",
        bgImg: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOC4wNDQiIGhlaWdodD0iMjguNDE3IiB2aWV3Qm94PSIwIDAgMjguMDQ0IDI4LjQxNyI+DQogIDxwYXRoIGlkPSLot6/lvoRfMTQwOSIgZGF0YS1uYW1lPSLot6/lvoQgMTQwOSIgZD0iTTQyMTkuMjcyLDM2NzUuOTUxbDkuMTc3LS45NDEsNS4wMi05LjcyNiwzLjkyMiw5LjcyNiw5LjQ5MS45NDEtNi4yLDYuNTEsMS4zMzMsMTAuODI0LTkuMS00LjMxNC04LDQuMzE0Ljk0MS0xMC44MjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDIxOS4wNTEgLTM2NjUuMDQ0KSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjNzA3MDcwIiBzdHJva2Utd2lkdGg9IjAuMiIvPg0KPC9zdmc+DQo="
      },
      {
        flag: 2,
        bgfImg: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjguMDQ0IiBoZWlnaHQ9IjI4LjQxNyIgdmlld0JveD0iMCAwIDI4LjA0NCAyOC40MTciPg0KICA8ZGVmcz4NCiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjAuNSIgeDI9IjAuNSIgeTI9IjEiIGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij4NCiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZkYjM4ZiIvPg0KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZjc5MDdlIi8+DQogICAgPC9saW5lYXJHcmFkaWVudD4NCiAgPC9kZWZzPg0KICA8cGF0aCBpZD0i6Lev5b6EXzE0MDkiIGRhdGEtbmFtZT0i6Lev5b6EIDE0MDkiIGQ9Ik00MjE5LjI3MiwzNjc1Ljk1MWw5LjE3Ny0uOTQxLDUuMDItOS43MjYsMy45MjIsOS43MjYsOS40OTEuOTQxLTYuMiw2LjUxLDEuMzMzLDEwLjgyNC05LjEtNC4zMTQtOCw0LjMxNC45NDEtMTAuODI0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQyMTkuMDUxIC0zNjY1LjA0NCkiIHN0cm9rZT0iIzcwNzA3MCIgc3Ryb2tlLXdpZHRoPSIwLjIiIGZpbGw9InVybCgjbGluZWFyLWdyYWRpZW50KSIvPg0KPC9zdmc+DQo=",
        bgImg: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOC4wNDQiIGhlaWdodD0iMjguNDE3IiB2aWV3Qm94PSIwIDAgMjguMDQ0IDI4LjQxNyI+DQogIDxwYXRoIGlkPSLot6/lvoRfMTQwOSIgZGF0YS1uYW1lPSLot6/lvoQgMTQwOSIgZD0iTTQyMTkuMjcyLDM2NzUuOTUxbDkuMTc3LS45NDEsNS4wMi05LjcyNiwzLjkyMiw5LjcyNiw5LjQ5MS45NDEtNi4yLDYuNTEsMS4zMzMsMTAuODI0LTkuMS00LjMxNC04LDQuMzE0Ljk0MS0xMC44MjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDIxOS4wNTEgLTM2NjUuMDQ0KSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjNzA3MDcwIiBzdHJva2Utd2lkdGg9IjAuMiIvPg0KPC9zdmc+DQo="
      },
      {
        flag: 2,
        bgfImg: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjguMDQ0IiBoZWlnaHQ9IjI4LjQxNyIgdmlld0JveD0iMCAwIDI4LjA0NCAyOC40MTciPg0KICA8ZGVmcz4NCiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjAuNSIgeDI9IjAuNSIgeTI9IjEiIGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij4NCiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZkYjM4ZiIvPg0KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZjc5MDdlIi8+DQogICAgPC9saW5lYXJHcmFkaWVudD4NCiAgPC9kZWZzPg0KICA8cGF0aCBpZD0i6Lev5b6EXzE0MDkiIGRhdGEtbmFtZT0i6Lev5b6EIDE0MDkiIGQ9Ik00MjE5LjI3MiwzNjc1Ljk1MWw5LjE3Ny0uOTQxLDUuMDItOS43MjYsMy45MjIsOS43MjYsOS40OTEuOTQxLTYuMiw2LjUxLDEuMzMzLDEwLjgyNC05LjEtNC4zMTQtOCw0LjMxNC45NDEtMTAuODI0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQyMTkuMDUxIC0zNjY1LjA0NCkiIHN0cm9rZT0iIzcwNzA3MCIgc3Ryb2tlLXdpZHRoPSIwLjIiIGZpbGw9InVybCgjbGluZWFyLWdyYWRpZW50KSIvPg0KPC9zdmc+DQo=",
        bgImg: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOC4wNDQiIGhlaWdodD0iMjguNDE3IiB2aWV3Qm94PSIwIDAgMjguMDQ0IDI4LjQxNyI+DQogIDxwYXRoIGlkPSLot6/lvoRfMTQwOSIgZGF0YS1uYW1lPSLot6/lvoQgMTQwOSIgZD0iTTQyMTkuMjcyLDM2NzUuOTUxbDkuMTc3LS45NDEsNS4wMi05LjcyNiwzLjkyMiw5LjcyNiw5LjQ5MS45NDEtNi4yLDYuNTEsMS4zMzMsMTAuODI0LTkuMS00LjMxNC04LDQuMzE0Ljk0MS0xMC44MjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDIxOS4wNTEgLTM2NjUuMDQ0KSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjNzA3MDcwIiBzdHJva2Utd2lkdGg9IjAuMiIvPg0KPC9zdmc+DQo="
      }
    ]

  },

  // upload: function () {
  //   var that = this;
  //   wx.chooseImage({
  //     count: 1,
  //     success: function (res) {
  //       that.setData({ image: res.tempFilePaths[0], "imageHidden": false });

  //     },
  //   })
  // },
  hidePopup(flag = true) {
    this.setData({
      "popup": flag
    });

   
  },
 

  chooseImage: function() {
    var that =this;
    wx.chooseImage({
      count:1,
      success: function(res) {
        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths,res);
        that.setData({
          show_num: that.data.show_num + res.tempFiles.length,
        });
        console.log(that.data.show_num,"__当前图片数量")
          that.setData({
            images: that.data.images.concat(tempFilePaths),
          });
    
     
       
      }
    })

  },

  previewImage: function(e) {
    //console.log(this.data.images);
    var current = e.target.dataset.src
    wx.previewImage({
      current: current,
      urls: this.data.images
    })
  },


  deleteImage: function (e) {
    var that = this;
    var images = that.data.images;
    var index = e.currentTarget.dataset.index;//获取当前长按图片下标
    wx.showModal({
      title: '提示',
      content: '确定要删除此图片吗？',
      success: function (res) {
        if (res.confirm) {
          console.log('点击确定了');
          images.splice(index, 1);
        } else if (res.cancel) {
          console.log('点击取消了');
          return false;
        }
        that.setData({
          images,
          show_num: that.data.show_num-1,
        });
      }
    })
  },

  delete: function (e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    var images = that.data.images;
    images.splice(index, 1);
    that.setData({
      images: images,
      show_num: that.data.show_num - 1,
    });
  },


  score: function(e) {
    var that = this;
    for (var i = 0; i < that.data.stars.length; i++) {
      var allItem = 'stars[' + i + '].flag';
      that.setData({
        [allItem]: 1
      })
    }
    var index = e.currentTarget.dataset.index;
    for (var i = 0; i <= index; i++) {
      var item = 'stars[' + i + '].flag';
      that.setData({
        [item]: 2
      })
    }
  },




  choosepic: function() {
    var that = this;
    wx.chooseImage({
      count: 3,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths;

        that.data.model_img[that.data.pic_index] = tempFilePaths
        that.data.hiden[that.data.pic_index] = true

        that.setData({
          pic_index: that.data.pic_index + 1,
        })
      }

    })
  },


  remarkinput(e) {
    var val = e.detail.value;
    this.setData({
      remark: val,
      ph: ''
    });
    if (val == '') this.setData({
      ph: 'BOAT推荐满足你的期待吗？说说你的体验感受, 分享给想要参与组队的他们吧'
    });
  },

  backtopages:function(options){
    console.log("用户提交评价后触碰页面", options)
    wx.navigateTo({
      url: '/pages/home/home'
    })
  },

  remark:function(){
    this.hidePopup(false);

    //评论完成的操作
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {


  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

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
  back: function() {
    wx.navigateBack({
      delta: 1,
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})