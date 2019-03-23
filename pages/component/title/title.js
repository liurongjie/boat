// pages/component/title/title.js
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
    selectPerson: true,
    firstPerson: '武汉大学',
    selectArea: false,
  },
 
  /**
   * 组件的方法列表
   */
  methods: {
    clickPerson: function () {
      var selectPerson = this.data.selectPerson;
      if (selectPerson == true) {
        this.setData({
          selectArea: true,
          selectPerson: false,
        })
      } else {
        this.setData({
          selectArea: false,
          selectPerson: true,
        })
      }
    },
    mySelect: function (e) {

      this.setData({
        firstPerson: e.target.dataset.me,
        selectPerson: true,
        selectArea: false,
      })
    },


  }
})
