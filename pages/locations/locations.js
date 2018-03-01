// pages/locations/locations.js
var QQMapWX = require('../assets/plugins/qqmap-wx-jssdk.min.js');
var qqmapsdk;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotCity:[
      {
        id:"city_01",
        name:"上海"
      },
      {
        id: "city_02",
        name: "北京"
      },
      {
        id: "city_03",
        name: "广州"
      },
      {
        id: "city_04",
        name: "深圳"
      },
      {
        id: "city_05",
        name: "武汉"
      },
      {
        id: "city_06",
        name: "天津"
      },
      {
        id: "city_07",
        name: "西安"
      },
      {
        id: "city_08",
        name: "南京"
      },
      {
        id: "city_09",
        name: "杭州"
      },
      {
        id: "city_10",
        name: "成都"
      },
      {
        id: "city_11",
        name: "重庆"
      }
    ],
    class_city:[],
    recentVisit:[
      {
        id: "city_04",
        name: "深圳"
      },
      {
        id: "city_100",
        name: "安庆"
      }
    ],
    hotLocationCity:{
      "A":[
         {
          id: "city_1001",
          name: "阿拉善盟"
        },
        {
          id: "city_100",
          name: "安庆"
        },
        {
          id: "city_100",
          name: "安庆"
        }
      ],
      "B": [
        {
          id: "city_04",
          name: "深圳"
        },
        {
          id: "city_100",
          name: "安庆"
        }
      ],
      "C": [
        {
          id: "city_04",
          name: "深圳"
        },
        {
          id: "city_100",
          name: "安庆"
        }
      ],
      "D": [
        {
          id: "city_04",
          name: "深圳"
        },
        {
          id: "city_100",
          name: "安庆"
        }
      ],
      "E": [
        {
          id: "city_04",
          name: "深圳"
        },
        {
          id: "city_100",
          name: "安庆"
        }
      ],
      "F": [
        {
          id: "city_04",
          name: "深圳"
        },
        {
          id: "city_100",
          name: "安庆"
        }
      ],
      "G": [
        {
          id: "city_04",
          name: "深圳"
        }
      ],
      "H": [
        {
          id: "city_04",
          name: "深圳"
        }
      ],
      "J": [
        {
          id: "city_04",
          name: "深圳"
        }
      ],
      "K": [
        {
          id: "city_04",
          name: "深圳"
        }
      ],
      "L": [
        {
          id: "city_04",
          name: "深圳"
        }
      ],
      "M": [
        {
          id: "city_04",
          name: "深圳"
        }
      ],
      "N": [
        {
          id: "city_04",
          name: "深圳"
        }
      ],
      "O": [
        {
          id: "city_04",
          name: "深圳"
        }
      ],
      "P": [
        {
          id: "city_04",
          name: "深圳"
        }
      ],
      "Q": [
        {
          id: "city_04",
          name: "深圳"
        }
      ],
      "R": [
        {
          id: "city_04",
          name: "深圳"
        }
      ],
      "S": [
        {
          id: "city_04",
          name: "深圳"
        }
      ],
      "T": [
        {
          id: "city_04",
          name: "深圳"
        }
      ],
      "W": [
        {
          id: "city_04",
          name: "深圳"
        }
      ],
      "X": [
        {
          id: "city_04",
          name: "深圳"
        }
      ],
      "Y": [
        {
          id: "city_04",
          name: "深圳"
        }
      ],
      "Z": [
        {
          id: "city_04",
          name: "深圳"
        }
      ]
    },
    city:'正在定位...'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: '4NQBZ-VI5RK-T5WJO-A3ASC-XIVV6-KTBAD'
    });

    this.getCityClass();
    this.getLocation();

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
  getCityClass(){
    console.log(this.data.hotLocationCity, '----------');
    var data = this.data.hotLocationCity;
    var temp = [];
    for (var prop in data) {
      if (data.hasOwnProperty(prop)) {
        temp.push(prop)
      }
    }
    this.setData({
      class_city: temp
    })
  },
  getLocation(){
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy

        console.log(latitude, longitude);
        // wx.chooseLocation({
        //   success:function(res){
        //     console.log(res,'-----')
        //   }4NQBZ-VI5RK-T5WJO-A3ASC-XIVV6-KTBAD
        // })
        // 调用接口
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: latitude,
            longitude: longitude
          },
          success: function (res) {
            var temp = res.result.address_component.city;
            var city = temp.replace(/(.*)市/, '$1');
            that.setData({
              city:city
            })

            wx.setNavigationBarTitle({
              title: '当前城市-'+city,
            })
          },
          fail: function (res) {
            console.log(res);
          },
          complete: function (res) {
            console.log(res);
          }
        });
      }
    })
  },
  gotoHome(){
    // wx.navigateTo({
    //   url: '/pages/mine/mine',
    // });

    wx.reLaunch({
      url: '/pages/index/index',
    })
  }
})