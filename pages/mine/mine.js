
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myLocation:'',
    src:'',
    viewItem:[1,2,3]
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
    console.log(1);
    var data = this.data.viewItem;
    for(var i=0;i<10;i++){
      data.push(1);
    }
    console.log(data);
     this.setData({
       viewItem: data
     })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  getLocations(){
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        // wx.openLocation({
        //   latitude: latitude,
        //   longitude: longitude,
        // })

        wx.chooseLocation({
          success: function(res) {
            that.setData({
              myLocation:res.address
            })
          },
        })
      }
    })
  },
  playCall(){
    wx.makePhoneCall({
      phoneNumber: '19724384169',
    })
  },
  phoneNo(){
    wx.addPhoneContact({
      firstName: 'zhang',
      lastName:'hhhh',
      mobilePhoneNumber:'155555555'
    })
  },
  startRecord(){
    wx.startRecord({
      success: function (res) {
        var tempFilePath = res.tempFilePath
      }
    })
    // setTimeout(function () {
    //   //结束录音  
    //   wx.stopRecord()
    // }, 10000)
  },
  stopRecord(){
    wx.stopRecord();
  },
  scanCode(){
    wx.scanCode({
      onlyFromCamera: true,
      success: (res) => {
        console.log(res)
      }
    })
  },
  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  error(e) {
    console.log(e.detail)
  },
  onPullDownRefresh: function () {
    console.log(89)
  }
})