// pages/verify/verify.js
var zhenzisms = require('../../utils/zhenzisms.js');
//获取应用实例
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectPerson: true,
    firstPerson: '武汉大学',
    selectArea: false,
    btnValue: '发送验证码',
    btnDisabled: true,
    name:'',
    yuanxi:'',
    number:'',
    phone:'',
    code:'',
    second: 60,
    codee: '',
    expire: 300,//有效时间
    time: 0,
    setInter: '',
    text: '恭喜您 \n 提交成功',
    isShow: false
  },
  name: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  number: function (e) {
    this.setData({
      number: e.detail.value
    })
  },
  yuanxi: function (e) {
    this.setData({
      yuanxi: e.detail.value
    })
  },
  bindPhoneInput(e) {
    console.log(e.detail.value);
    var val = e.detail.value;
    this.setData({
      phone: val
    })
    if (val.length === 11) {
      let checkedNum = this.checkPhoneNum(val)
      if (checkedNum) {
        this.setData({
          btnDisabled: false,
          
        })
      }
    } else {
      this.setData({
        btnDisabled: true
      })
    }
  },
  createCode() {

    var code;

    //首先默认code为空字符串

    code = '';

    //设置长度，这里看需求，我这里设置了4

    var codeLength = 5;

    //设置随机字符

    var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);

    //循环codeLength 我设置的4就是循环4次

    for (var i = 0; i < codeLength; i++) {

      //设置随机数范围,这设置为0 ~ 36

      var index = Math.floor(Math.random() * 10);

      //字符串拼接 将每次随机的字符 进行拼接

      code += random[index];

    }

    //将拼接好的字符串赋值给展示的code

    this.setData({

      code: code

    })

  },
  checkPhoneNum: function (phone) {
    let str = /^1\d{10}$/
    if (str.test(phone)) {
      return true
    } else {
      wx.showToast({
        title: '手机号不正确'
      })
      return false
    }
  },
  bindCodeInput(e) {
    this.setData({
      codee: e.detail.value
    })
  },
  getCode(e) {
    clearInterval(this.data.setInter)
    console.log('获取验证码');
    var that = this;
    that.createCode();
    console.log('code' + this.data.code);
    //  zhenzisms.client.init('https://sms_developer.zhenzikj.com', '100932', 'd3f05b95-a1b6-4bd0-9c7d-b81c46caf112');
    // zhenzisms.client.send(function (res) {
    // if (res.data.code == 0) {
    that.timer();
    that.timer1();
   that.setData({
      time: 0,
    })
    return;
    // }
    wx.showToast({
    title: res.data.data,
    icon: 'none',
    duration: 2000
    })
    // }, this.data.phone, '您的验证码为:' + this.data.code,1,1000,5);
  },
  timer1: function () {
    let promise = new Promise((resolve, reject) => {
      this.data.setInter = setInterval(
        () => {
          var time = this.data.time + 1;
          this.setData({
            time: time
          })
         
          if (this.data.time >= 300) {
            this.setData({
              time: 301,
            })
            resolve(this.data.setInter)
          }
        }
        , 1000)
    })
  },
  timer: function () {
    let promise = new Promise((resolve, reject) => {
      let setTimer = setInterval(
        () => {

          var second = this.data.second - 1;
          this.setData({
            second: second,
            btnValue: second + '秒',
            btnDisabled: true
          })

          if (this.data.second <= 0) {
            this.setData({
              second: 60,
              btnValue: '获取验证码',
              btnDisabled: false
            })
            resolve(setTimer)
          }
        }
        , 1000)
    })
    promise.then((setTimer) => {
      clearInterval(setTimer)
    })
  },
  //保存
  save(e) {
    console.log('姓名: ' + this.data.name);
    console.log('院系: ' + this.data.yuanxi);
    console.log('学号: ' + this.data.number);
    console.log('手机号: ' + this.data.phone);
    console.log('验证码: ' + this.data.codee);
    var oldcode = this.data.codee;
    var result = 3;//通过
    if (typeof (oldcode) == "undefined" || oldcode == '') {
      result = 0;//无效验证码
      wx.showToast({
        title: '无效验证码',
        icon: 'none'
      })
      return
    }
    if (this.data.code != oldcode) {
      result = 1;//验证码错误
      wx.showToast({
        title: '验证码错误',
        icon: 'none'
      })
      return
    }
    var expire = this.data.expire;
    console.log("验证码有效时间"+expire);
    if (this.data.time > expire) {
      result = 2;//验证码过期
      wx.showToast({
        title: '验证码过期',
        icon: 'none'
      })
      return
    }
    console.log(result);
    if(result==3)this.setData({
      text: "恭喜你 提交验证成功",
      isShow: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
cg:function(){
    wx.navigateTo({
      url: '../home/home',
    })

},
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})