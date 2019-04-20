// pages/verify/verify.js
var zhenzisms = require('../../utils/zhenzisms.js');
//获取应用实例
const app = getApp();
var arrayHeight = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show_model: true,
    popup: true,
    selectPerson: true,
    firstPerson: '武汉大学',
    selectArea: false,
    btnValue: '发送验证码',
    btnDisabled: true,
    teamid:'0000000',
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
    isShow: false,
    t1:'white',
    t2:'white',
    t3: 'white',
    t4: 'white',
    school:'',
    inputValue1:'武汉大学',
    inputValue2: '',
    adapterSource: ['哲学学院国学院', '文学院', '外国语言文学学院', '新闻与传播学院 ', '艺术学院(艺术教育中心)', '历史学院', '经济与管理学院法学院', '马克思主义学院社会学系', '政治与公共管理学院', '教育科学研究院', '信息管理学院',
      '数学与统计学院', '物理科学与技术学院', '化学与分子科学学院', '生命科学学院', '资源与环境科学学院', '高等研究院',
      '动力与机械学院', '电气与自动化学院', '城市设计学院', '土木建筑工程学院', '水利水电学院', '工业科学研究院',
      '电子信息学院', '计算机学院', '测绘学院', '遥感信息工程学院', ' 印刷与包装系', '网络安全学院',
      '医学部机关', '医学研究院', '基础医学院', '健康学院', '药学院', '第一临床学院', '第二临床学院', '口腔医学院', '医学职业技术学院',
      '弘毅学堂'],
    bindSource: [], 
     hideScroll: true,

  },
  name: function (e) {
    let reg = /^[\u4e00-\u9fa5]+|[a-zA-Z]+$/;
    var x = e.detail.value;
    if (!reg.test(x)){
    this.setData({
      t1: 'red'
    })}
    else this.setData({
      
        name: x, t1: 'white'
    })
    
  },
  school: function (e) {
    var x = e.detail.value;
    if(x=='WHU')
    this.setData({
      school: 武汉大学,
      inputValue1:'武汉大学'
    })
  },
  number: function (e) {
    var x = e.detail.value;
    let str = /\d{13}$/;
    if(!str.test(x)){
    this.setData({
      t4: 'red'
    })
    }
    else{
      this.setData({
        number: x,
        t4: 'white'
      })
    }
  },
  yuanxi: function (e) {
    var newSource = []
    let reg = /^[\u4e00-\u9fa5]+$/;
    var x = e.detail.value;
    if (!reg.test(x)) {
      this.setData({
        t3: 'red'
      })
    }
    else {
      this.setData({
      yuanxi: x, t3: 'white'
    });
    this.data.adapterSource.forEach(function(e){
      if (e.indexOf(x)!=-1){
       
        newSource.push(e)
      }
    })
    };
    if (newSource.length != 0) {
      this.setData({ 
        hideScroll: false, 
        bindSource: newSource, 
        arrayHeight: newSource.length * 71     
         })   
          } else 
          {    
              this.setData({      
                 hideScroll: true,    
                     bindSource: []    
                       })    
                       }
     

  },
  itemtap: function (e) {
    this.setData({
       inputValue2: e.target.id, 
       yuanxi:e.target.id,
       hideScroll: true,  
       bindSource: []   
        }) ;
    this.setData({ t3: 'white' })
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
    let str = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
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
    this.setData({ btnDisabled: true})
    clearInterval(this.data.setInter)
    console.log('获取验证码');
    var that = this;
    that.createCode();
    console.log('code' + this.data.code);
    zhenzisms.client.init('https://sms_developer.zhenzikj.com', '100932', 'd3f05b95-a1b6-4bd0-9c7d-b81c46caf112');
    zhenzisms.client.send(function (res) {
    if (res.data.code == 0) {
    that.timer();
    that.timer1();
    that.setData({
      time: 0,
    })
    return;
     }
    wx.showToast({
    title: res.data.data,
    icon: 'none',
    duration: 2000
    })
     }, this.data.phone, '您的验证码为:' + this.data.code,1,1000,5);
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
    console.log('学校: ' + this.data.school);
    console.log('院系: ' + this.data.yuanxi);
    console.log('学号: ' + this.data.number);
    console.log('手机号: ' + this.data.phone);
    console.log('验证码: ' + this.data.codee);
    if (this.data.t1 == 'red' || this.data.t2 == 'red' || this.data.t3 == 'red' || this.data.t4 == 'red')
      wx.showToast({
        title: '信息有误',
        icon: 'none'
      })
    var m = this.data.yuanxi;
    console.log(m);
    if (this.data.adapterSource.indexOf(m) == -1){
      this.setData({ t3: 'red' })}
    else this.setData({ t3: 'white' })
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
    if(result==3)
    wx.request({
      url: 'https://xiaoyibang.top:8001/dajia/verify',
      data:{
        'openid': app.globalData.openid,
        'teamid':this.data.teamid,
        'name': this.data.name,
        'number': this.data.number,
        'department': this.data.yuanxi,
        'telephone': this.data.phone,
      },
      success:(res)=>{
       
        wx.setStorageSync('information', res.data);
        app.getuserinformation();


      

      }
      
    })
    
    // this.setData({
    //   text: "恭喜你 提交验证成功",
    //   isShow: true
    // })
    this.hidePopup(false);
  },

  hidePopup(flag = true) {
    this.setData({
      "popup": flag
    });
  },


  backtopages: function (options) {
    console.log("用户提交审核后触碰页面", options)
    wx.navigateTo({
      url: '/pages/home/home'
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