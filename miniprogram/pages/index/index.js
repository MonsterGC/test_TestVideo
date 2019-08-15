//index.js
const app = getApp()
Page({
  data: {
    allData: app.data
  },
  nav: function(res) {
    wx.navigateTo({
      url: '../../pages/video/index?id=' + res.currentTarget.dataset.id
    })
  }
})