// pages/component/asset/list1/list1.js
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
    list:1,
    tempFilePaths:'',
    text:'',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bind:function(e){
      this.setData({
        text: e.detail.value,
      })
      console.log(this.data.text)
    },
    choosepic:function(){
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success(res) {
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePaths = res.tempFilePaths;
        }
      })
    },
    uploadfile:function(url,filename){
      var that=this;
      wx.uploadFile({
        url: url,
        filePath: filename,
        name: 'uploadFile',
        formData:{
          openid:""
        },
        success:function(res){

        },
        fail:function(res){

        }
      })
    },
    push:function(){
    
    }

  
  }
})
