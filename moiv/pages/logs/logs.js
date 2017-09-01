// var txt = {
//   "title": ["华讯云网络", "小程序视频", "合作案例", "合适行业", "制作流程","免费咨询"],
//   "text": ["专业制定微信小程序", "你了解微信小程序吗", "各大品牌商倾情合作", "各行业中的微信小程序", "微信小程序如何诞生","想要了解更多赶紧戳戳"],
//   "picture": ["../img/1_04.png", "../img/2_04.png", "../img/3_04.png", "../img/4_04.png", "../img/5_04.png", "../img/6_04.png"]
// };
Page({

  data: {
    // text:"这是一个页面"
    imgUrls: [
      '../img/banner1.jpg',
      '../img/banner2.jpg',
      '../img/banner3.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    iconbutton:[
      {
      title:'华讯云网络',
      text:'专业制定微信小程序',
      url:'../img/1_04.png'
      },{
        title: '小程序视频',
        text: '你了解微信小程序吗',
        url: '../img/2_04.png'
      },
      {
        title: '合作案例',
        text: '各大品牌商倾情合作',
        url: '../img/3_04.png'
      },
      {
        title: '合适行业',
        text: '各行业中的微信小程序',
        url: '../img/4_04.png'
      },
      {
        title: '制作流程',
        text: '微信小程序如何诞生',
        url: '../img/5_04.png'
      },
      {
        title: '免费咨询',
        text: '想要了解更多赶紧戳戳',
        url: '../img/6_04.png'
      }
    ]
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})