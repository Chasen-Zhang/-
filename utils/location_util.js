var QQMapWX = require('../pages/assets/plugins/qqmap-wx-jssdk.min.js');
var qqmapsdk;
var city;
var location = function(){
  var that = this;
  wx.getLocation({
    type: 'wgs84',
    success: function (res) {
      var latitude = res.latitude
      var longitude = res.longitude
      var speed = res.speed
      var accuracy = res.accuracy
      // 调用接口
      // 实例化API核心类
      qqmapsdk = new QQMapWX({
        key: '4NQBZ-VI5RK-T5WJO-A3ASC-XIVV6-KTBAD'
      });
      qqmapsdk.reverseGeocoder({
        location: {
          latitude: latitude,
          longitude: longitude
        },
        success: function (res) {
          var temp = res.result.address_component.city;
          city = temp.replace(/(.*)市/, '$1'); 
          console.log(city,'====================')
        },
        fail: function (res) {
          console.log(res);
        },
        complete: function (res) {
          console.log(res);
          // if (res.status===0){
          //   return city;
          // }
          
        }
      });
    }
  })
};

module.exports = {
  location:location
};

// export default location