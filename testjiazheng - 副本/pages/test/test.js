// pages/test/test.js
var common = require('../../utils/common.js')
const app = getApp();
Page({

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.showModal({
    //   title: '提示',
    //   content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
     wx.setNavigationBarTitle({
       title:"fffff"
     });
    console.log(wx);
    
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
    console.log("onUnload--------------")
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
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  },
  onPageScroll: function () {
    // Do something when page scroll
  },
  onTabItemTap(item) {
    console.log(item.index,"-------------")
    console.log(item.pagePath, "-------------")
    console.log(item.text, "-------------");

    console.log(this.route)
  },
  // Event handler.
  viewTap: function () {
    this.setData({
      test: 'Set some data for updating view.'
    }, function () {
      // this is setData callback
    })

    //wx.stopPullDownRefresh;
  },
  customData: {
    hi: 'MINA'
  },
  /**
   * 页面的初始数据
   */
  data: {
    test: 'ddd',
    text: 'init data',
    num: 0,
    array: [{ text: 'init data' }, { text: 'd data' }],
    object: {
      text: 'init data'
    },
    view:"APP",
    staffA: { firstName: 'Hulk', lastName: 'Hu' },
    staffB: { firstName: 'Shang', lastName: 'You' },
    staffC: { firstName: 'Gideon', lastName: 'Lin' },
    id:90,
    condition:true,
    flag:true,
    canIUse: wx.canIUse('cover-view')
  },
  changeFlag(){
    this.setData({
      "flag":!this.data.flag
    })
  },
  changeText: function () {
    // this.data.text = 'changed data'  // bad, it can not work
    this.setData({
      text: 'changed data'
    })
  },
  changeNum: function () {
    // this.data.num = 1
    this.setData({
      num: 2
    })
  },
  changeItemInArray: function () {
    // you can use this way to modify a danamic data path
    var that = this;
    // this.setData({
    //   "array": function() {
    //     that.data.array.push({
    //       text: "0ddd"
    //     })
    //     console.log(that.data.array)
    //     return that.data.array;
    //   }
    // })
    
      that.data.array.push({
        text: "0ddd"
      })
      this.setData({
        "array": that.data.array
      })
      //console.log(getCurrentPages());
      common.sayHello("jhjh");
      wx.makePhoneCall({
        phoneNumber: '13570963767' //仅为示例，并非真实的电话号码
      })
  },
  changeItemInObject: function () {
    this.setData({
      'object.text': 'changed data'
    });
  },
  addNewField: function () {
    this.setData({
      'newField.text': 'new data'
    })
  }
})