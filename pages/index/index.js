//index.js
//获取应用实例
const app = getApp()
var QQMapWX = require('../assets/plugins/qqmap-wx-jssdk.min.js');
var qqmapsdk;
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    show:true,
    city:'正在定位...',
    item:[
      {
        id:0,
        poster:"../assets/images/timg.png",
        name:"红海行动",
        score:"9.5",
        start:["张毅","黄景瑜","杜江"],
        buyType:0,
        tehui:true,
        data:{
          no:239,
          scene:3156
        },
        wantWhich:0,
        type:{
          "dHave":true,
          "3D":true,
          IMAX:true,
          "2D":false
        }
      },
      {
        id: 1,
        poster: "../assets/images/tangren.png",
        name: "唐人街探案2",
        score: "9.2",
        start: ["王宝强", "肖央", "刘昊然"],
        buyType: 0,
        tehui: true,
        data: {
          no: 237,
          scene: 2672
        },
        wantWhich: 0,
        type: {
          "dHave": true,
          "3D": false,
          IMAX: true,
          "2D": true
        }
      },
      {
        id: 2,
        poster: "../assets/images/yaoji.png",
        name: "捉妖记2",
        score: "8.1",
        start: ["梁朝伟", "白百何", "井柏然"],
        buyType: 0,
        tehui: true,
        data: {
          no: 237,
          scene: 3161
        },
        wantWhich: 2333,
        type: {
          "dHave": true,
          "3D": true,
          IMAX: true,
          "2D": false
        }
      },
      {
        id: 3,
        poster: "../assets/images/guimi2.png",
        name: "闺蜜2",
        score: "9.5",
        start: ["陈意涵", "张钧蜜", "薛凯琪"],
        buyType: 1,
        tehui: true,
        data: {
          no: 0,
          scene: 0
        },
        wantWhich: 248016,
        type: {
          "dHave": false,
          "3D": false,
          IMAX: true,
          "2D": false
        }
      },
      {
        id: 4,
        poster: "../assets/images/haibao2.jpg",
        name: "黑豹",
        score: "9.5",
        start: ["查德威克·波斯曼","安迪·瑟金斯"],
        buyType: 1,
        tehui: false,
        data: {
          no: 237,
          scene: 3161
        },
        wantWhich: 208800,
        type: {
          "dHave": true,
          "3D": true,
          IMAX: true,
          "2D": false
        }
      },
      {
        id: 5,
        poster: "../assets/images/timg.png",
        name: "西游记女儿国",
        score: "7.8",
        start: ["郭富城", "冯绍峰", "赵丽颖"],
        buyType: 0,
        tehui: false,
        data: {
          no: 208,
          scene: 568
        },
        wantWhich: 0,
        type: {
          "dHave": false,
          "3D": false,
          IMAX: false,
          "2D": false
        }
      }
    ]
  },
  onLoad: function () {
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: '4NQBZ-VI5RK-T5WJO-A3ASC-XIVV6-KTBAD'
    });
    this.getLocation();
    
  },
  changeView(e){
    console.log(e);
    const id = e.target.id;
   
    if (id ==='play'){
      this.setData({
        show: true
      })
    }else{
      this.setData({
        show: false
      })
    }
  },
  locations(){
    wx.navigateTo({
      url: '/pages/locations/locations',
    })
  },
  getCityClass() {
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
  getLocation() {
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
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
              city: city
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
  }
})
