// pages/component/asset/list1/list1.js
var app=getApp();
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
    list: 1,
    tempFilePaths: '',
    text: '',
    images: [],
    show_num: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bind: function(e) {
      this.setData({
        text: e.detail.value,
      })
      console.log(this.data.text)
    },





    choosepic: function() {
      var that = this;
      wx.chooseImage({
        count: 1,
        success: function(res) {
          var tempFilePaths = res.tempFilePaths;
          console.log(tempFilePaths, res);
          that.setData({
            show_num: that.data.show_num + res.tempFiles.length,
          });
          console.log(that.data.show_num, "__当前图片数量")
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


    deleteImage: function(e) {
      var that = this;
      var images = that.data.images;
      var index = e.currentTarget.dataset.index; //获取当前长按图片下标
      wx.showModal({
        title: '提示',
        content: '确定要删除此图片吗？',
        success: function(res) {
          if (res.confirm) {
            console.log('点击确定了');
            images.splice(index, 1);
          } else if (res.cancel) {
            console.log('点击取消了');
            return false;
          }
          that.setData({
            images,
            show_num: that.data.show_num - 1,
          });
        }
      })
    },

    delete: function(e) {
      var that = this;
      var index = e.currentTarget.dataset.index;
      var images = that.data.images;
      images.splice(index, 1);
      that.setData({
        images: images,
        show_num: that.data.show_num - 1,
      });
    },


    
    upload: function () {
      var that = this;
     
        wx.uploadFile({
          url: 'https://xiaoyibang.top:8002/dajia/need', // 仅为示例，非真实的接口地址
          filePath: that.data.images[0],
          name: 'file',
          formData: {
            "userid": app.globalData.userid,
          },
          success(res) {
            wx.showToast({
              title: '成功提交需求',
              icon: 'success',
              duration: 2000
            })
            setTimeout(function(){
              wx.navigateBack({
                delta: 1,
              })


            },850)
            
            
          }
        })

      


    },
    need: function() {
      var that=this;
      if (!that.data.text) {
        wx.showToast({
          title: '未提交需求',
          icon: 'loading',
          duration: 1000
        })
      } else {
        wx.showModal({
          title: '你确定提交此需求吗',
          content: '',
          success: function (res) {
            if (res.confirm) {

              that.upload();


            } else { //这里是点击了取消以后
              console.log('用户点击取消')
            }
          }
        })
        //upload

      }


      }

      


  }
})