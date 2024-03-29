//app.js
App({
  onLaunch: function() {

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
      })
    }

    this.globalData = {}

    this.data = [{
        "title": "05 你擦肩而过了多少爱情",
        "length": "03:00",
        "date": "2016-07-25",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2016/07/25/5795a6ad43c02.jpeg",
        "description": "我走过大街小巷，用相机记录沿途的风景和遇见的人。那天我走过花店，阳光透过玻璃洒在你的脸上。你拨动着琴弦，轻吟浅唱，我不自觉地按下快门键。每天与我擦...",
        "video": [{
            "video_url": "http://video.xinpianchang.com/5800a2508d04c.mp4",
            "resolution": "3840x2160"
          },
          {
            "video_url": "http://video.xinpianchang.com/5800a2509d7b8.mp4",
            "resolution": "2560x1440"
          },
          {
            "video_url": "http://video.xinpianchang.com/5800a250affee.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/5800a250be7cb.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/5800a250cf195.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/5800a25107977.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "04 有一种喜欢，只能藏在心底…",
        "length": "02:10",
        "date": "2016-07-25",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2016/06/30/5774c74c63073.jpeg",
        "description": "有些人，越是在乎，就越不敢触碰因为知道，友情比爱情来得更长久所以，有些喜欢，只敢藏在心底。",
        "video": [{
            "video_url": "http://video.xinpianchang.com/5774c708c1540.mp4",
            "resolution": "2560x1440"
          },
          {
            "video_url": "http://video.xinpianchang.com/5774c70987eac.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/5774c7098ffc3.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/5774c7099e037.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/5774c709a4dfa.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "03 暗恋，是自作聪明后被识破的脸红",
        "length": "02:43",
        "date": "2016-07-25",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2016/06/30/5774c5f3a91e1.jpeg",
        "description": "暗恋，是自作聪明后被识破的脸红。暗恋的美好，是心里偷偷喜欢，小小的悸动就组成一个世界。暗恋是排山倒海又不动声色，但庆幸那时的我们是如此勇敢、炙热...",
        "video": [{
            "video_url": "http://video.xinpianchang.com/5774c577d9a82.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/5774c578b7428.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/5774c578bef14.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/5774c578c6737.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "41 迟到的人不必等",
        "length": "03:06",
        "date": "2016-12-23",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/04/20/58f85b349bd7a.jpeg",
        "description": "晚到的人怎么会懂得等待，双方从一开始的目的地就已经相隔十万八千里。  ",
        "video": [{
            "video_url": "http://video.xinpianchang.com/58f85b363ef78.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/58f85b3649b50.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/58f85b3670536.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/58f85b36bcb1d.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "45 爱从不因时间而停止",
        "length": "03:59",
        "date": "2016-12-23",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/04/27/5901cf71c5005.jpeg",
        "description": "因为害怕分开的日子里无止的想念，所以提出分手，可是，你怎么知道他不会回来呢？     ",
        "video": [{
            "video_url": "http://video.xinpianchang.com/5901cf72b8c05.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/5901cf72c39bc.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/5901cf72dd9a0.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/5901cf7304407.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "42 错的时间遇见对的人",
        "length": "04:08",
        "date": "2016-12-23",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/04/20/58f85eed04128.jpeg",
        "description": "在错的时间遇到了对的人，等待的结果会让人如愿吗？     ",
        "video": [{
            "video_url": "http://video.xinpianchang.com/58f85eee2d027.mp4",
            "resolution": "3840x2160"
          },
          {
            "video_url": "http://video.xinpianchang.com/58f85eee437cf.mp4",
            "resolution": "2560x1440"
          },
          {
            "video_url": "http://video.xinpianchang.com/58f85eee5b876.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/58f85eee74073.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/58f85eee8c4cd.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/58f85eeeb1672.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "33 恋爱是每一步都要走得舒服",
        "length": "03:42",
        "date": "2016-12-23",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/03/28/58da2533ecab8.jpeg",
        "description": "恋爱是每一步都要走得舒服。",
        "video": [{
            "video_url": "http://video.xinpianchang.com/58da2301ae0f2.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/58da2301be26a.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/58da2301ea9fa.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/58da230212621.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "15 “正在输入”是了然于心却要思前想后的喜欢",
        "length": "03:09",
        "date": "2016-12-23",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/02/01/589184ccb07db.jpeg",
        "description": "想要借着拜年祝福把犹豫不决的心意打开，正巧的是你把我的“正在输入”都收在了眼里。",
        "video": [{
            "video_url": "http://video.xinpianchang.com/589184ce3a00d.mp4",
            "resolution": "3840x2160"
          },
          {
            "video_url": "http://video.xinpianchang.com/589184ce990b2.mp4",
            "resolution": "2560x1440"
          },
          {
            "video_url": "http://video.xinpianchang.com/589184ced2c58.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/589184cf39473.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/589184cf7c13f.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/589184cfe57a1.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "10 愿冬天所有女生都能把手放在喜欢的人的口袋里",
        "length": "02:59",
        "date": "2016-12-23",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/01/16/587c578308741.jpeg",
        "description": "喜欢是冬天里藏在手心的温暖，希望所有的女生都能在冬天把手放在喜欢的人的口袋里。",
        "video": [{
            "video_url": "http://video.xinpianchang.com/584a23840b2ba.mp4",
            "resolution": "3840x2160"
          },
          {
            "video_url": "http://video.xinpianchang.com/584a2384401af.mp4",
            "resolution": "2560x1440"
          },
          {
            "video_url": "http://video.xinpianchang.com/584a23848b73d.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/584a2384c99af.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/584a238523fdb.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/584a23856087f.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "19 恋爱的温度，就是找回你的微笑",
        "length": "03:57",
        "date": "2017-03-03",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/02/18/58a7dd292926b.jpeg",
        "description": "恋人之间总是不可避免地产生很多摩擦和矛盾，而化解矛盾的终极手段就是把对方的所有可爱的模样都放在眼里，放进心里，表达出来。",
        "video": [{
            "video_url": "http://video.xinpianchang.com/58a27a5fed6c9.mp4",
            "resolution": "3840x2160"
          },
          {
            "video_url": "http://video.xinpianchang.com/58a27a600351e.mp4",
            "resolution": "2560x1440"
          },
          {
            "video_url": "http://video.xinpianchang.com/58a27a602facb.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/58a27a60522be.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/58a27a606885e.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/58a27a609ee9a.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "53 最合适的伴侣一直在身边",
        "length": "04:23",
        "date": "2016-12-23",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/05/17/591c28154ba19.jpeg",
        "description": "不管是朋友还是情人，我都喜欢你。  ",
        "video": [{
            "video_url": "http://video.xinpianchang.com/591c281723dbe.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/591c28172d87a.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/591c281746d9f.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/591c2817653ab.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "11 喜欢你是我做过最勇敢的事",
        "length": "02:23",
        "date": "2016-12-23",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/01/16/587c57c8a2846.jpeg",
        "description": "把“喜欢你”印在信封上，如果你看不到，我就说出来给你听。",
        "video": [{
            "video_url": "http://video.xinpianchang.com/585cdc892e1e6.mp4",
            "resolution": "3840x2160"
          },
          {
            "video_url": "http://video.xinpianchang.com/585cdc8951b4e.mp4",
            "resolution": "2560x1440"
          },
          {
            "video_url": "http://video.xinpianchang.com/585cdc897d1cf.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/585cdc89d8e52.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/585cdc8a3be25.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/585cdc8a85c7a.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "43 深爱的人总会先低头",
        "length": "04:06",
        "date": "2017-05-19",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/04/20/58f873061e396.jpeg",
        "description": "爱情里为了对方低头认输并不是一件丢人的事情，只是为了能抓紧彼此的手走得更长久。     ",
        "video": [{
            "video_url": "http://video.xinpianchang.com/58f87307507ec.mp4",
            "resolution": "3840x2160"
          },
          {
            "video_url": "http://video.xinpianchang.com/58f8730759c1e.mp4",
            "resolution": "2560x1440"
          },
          {
            "video_url": "http://video.xinpianchang.com/58f87307718e2.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/58f8730789f34.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/58f87307aaf09.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/58f87307c8e75.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "18 喜欢你是真的，想让你开心也是真的",
        "length": "03:56",
        "date": "2017-03-03",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/02/13/58a15480dde1b.jpeg",
        "description": "精心准备的情人节礼物，只为了让喜欢的人送给TA喜欢的人。",
        "video": [{
            "video_url": "http://video.xinpianchang.com/58a1512b778d0.mp4",
            "resolution": "3840x2160"
          },
          {
            "video_url": "http://video.xinpianchang.com/58a1512b81e51.mp4",
            "resolution": "2560x1440"
          },
          {
            "video_url": "http://video.xinpianchang.com/58a1512b9669c.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/58a1512baa4d5.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/58a1512bbf5b4.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/58a1512bd82b1.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "44 患得患失的那份感情叫做过去",
        "length": "04:55",
        "date": "2017-05-19",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/04/27/5901cdec9ee20.jpeg",
        "description": "不是失去了才懂得珍惜，而是以为拥有的不会失去。   ",
        "video": [{
            "video_url": "http://video.xinpianchang.com/5901cde946b8a.mp4",
            "resolution": "3840x2160"
          },
          {
            "video_url": "http://video.xinpianchang.com/5901cdedcdf0f.mp4",
            "resolution": "2560x1440"
          },
          {
            "video_url": "http://video.xinpianchang.com/5901cdede4df5.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/5901cdee3cfe1.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/5901cdee555a3.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/5901cdee6cfbb.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "20 爱情的模样，要跨过手机屏幕才看得到",
        "length": "02:37",
        "date": "2017-03-03",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/02/18/58a7dd6228fbc.jpeg",
        "description": "一段感情既然开始了，就不能随随便便结束。",
        "video": [{
            "video_url": "http://video.xinpianchang.com/58a50ec24afcc.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/58a50ec2d13af.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/58a50ec32e37d.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/58a50ec38ddd5.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "46 习惯的最初是因为喜欢才发生的",
        "length": "05:20",
        "date": "2017-05-19",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/04/27/5901d5723ada3.jpeg",
        "description": "那些青春淋漓的日子里，因为喜欢一个人而成全了更好的自己。   ",
        "video": [{
            "video_url": "http://video.xinpianchang.com/5901d572f3d19.mp4",
            "resolution": "3840x2160"
          },
          {
            "video_url": "http://video.xinpianchang.com/5901d57309ef1.mp4",
            "resolution": "2560x1440"
          },
          {
            "video_url": "http://video.xinpianchang.com/5901d57325f57.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/5901d57343454.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/5901d5735d291.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/5901d5737fe03.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "47 路过青春遇到你",
        "length": "04:06",
        "date": "2017-05-19",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/04/28/5902e7ac8aa81.jpeg",
        "description": "懵懂的岁月里，我们会遇到很多令我们怦然心动的人，我们会为了TA学习很多新技能，只为了跟TA有共同的话题；我们也会为了TA看完一场篮球赛，...",
        "video": [{
            "video_url": "http://video.xinpianchang.com/5902e7ade0311.mp4",
            "resolution": "3840x2160"
          },
          {
            "video_url": "http://video.xinpianchang.com/5902e7adeb0e4.mp4",
            "resolution": "2560x1440"
          },
          {
            "video_url": "http://video.xinpianchang.com/5902e7ae12a48.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/5902e7ae35730.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/5902e7ae52092.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/5902e7ae6ba35.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "39 感情如人饮水，冷暖自知",
        "length": "04:46",
        "date": "2017-05-19",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/04/10/58eb95be7b4ce.jpeg",
        "description": "曾经一起度过的每个生日，走过的每个路牌，原来转瞬间就可以消失不见，就像曾经的很爱到最后的不爱。  ",
        "video": [{
            "video_url": "http://video.xinpianchang.com/58eb26f5e8b69.mp4",
            "resolution": "3840x2160"
          },
          {
            "video_url": "http://video.xinpianchang.com/58eb26f633f6e.mp4",
            "resolution": "2560x1440"
          },
          {
            "video_url": "http://video.xinpianchang.com/58eb26f64d369.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/58eb26f6669f4.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/58eb26f6944b0.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/58eb26f6afd80.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "40 比喝多点喝水更暖心的关心方式",
        "length": "03:17",
        "date": "2017-05-19",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/04/12/58ee2faf72972.jpeg",
        "description": "与其叫她喝多点热水，不如直接去到她身边，陪伴才是最暖心的爱情方式。 ",
        "video": [{
            "video_url": "http://video.xinpianchang.com/58ee2fb05786d.mp4",
            "resolution": "3840x2160"
          },
          {
            "video_url": "http://video.xinpianchang.com/58ee2fb07347a.mp4",
            "resolution": "2560x1440"
          },
          {
            "video_url": "http://video.xinpianchang.com/58ee2fb08b09c.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/58ee2fb0a2467.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/58ee2fb0b7693.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/58ee2fb0ce4e1.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "48 每个意外都是不谋而合的心动",
        "length": "02:07",
        "date": "2017-05-19",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/05/03/59097011d6efc.jpeg",
        "description": "都说爱情是一场博弈，不是你赢就是我输，不到最后都不知道赢家归谁。 ",
        "video": [{
            "video_url": "http://video.xinpianchang.com/59097012c78bc.mp4",
            "resolution": "3840x2160"
          },
          {
            "video_url": "http://video.xinpianchang.com/59097012d12ec.mp4",
            "resolution": "2560x1440"
          },
          {
            "video_url": "http://video.xinpianchang.com/59097012f01ab.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/590970131ca8c.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/5909701336f5c.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/5909701362f9a.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "49 说毕业不分手的人还在吗",
        "length": "03:29",
        "date": "2017-05-19",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/05/05/590c6b181311e.jpeg",
        "description": "一个冬日的相遇，一个夏日的相恋，那些我和你一路携手走过的，是青春，也是毕业前的允诺。 ",
        "video": [{
            "video_url": "http://video.xinpianchang.com/590c6aff3e2a3.mp4",
            "resolution": "3840x2160"
          },
          {
            "video_url": "http://video.xinpianchang.com/590c6aff4a590.mp4",
            "resolution": "2560x1440"
          },
          {
            "video_url": "http://video.xinpianchang.com/590c6aff70d6a.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/590c6affa28c8.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/590c6affbb1ac.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/590c6affd41c1.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "50 三个人的友谊（上集）",
        "length": "06:31",
        "date": "2017-05-19",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/05/08/59104d37a6552.jpeg",
        "description": "回忆里的青春大多是无奈但又难以忘却的，当一个人的暗恋出现了第三个人的参与，这场关于青春的秘密，需要有一个人去解开。  ",
        "video": [{
            "video_url": "http://video.xinpianchang.com/59104d3b63699.mp4",
            "resolution": "3840x2160"
          },
          {
            "video_url": "http://video.xinpianchang.com/59104d3b6de31.mp4",
            "resolution": "2560x1440"
          },
          {
            "video_url": "http://video.xinpianchang.com/59104d3bb801b.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/59104d3bd282e.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/59104d3bec1bd.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/59104d3c1fcde.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "51 《三个人的友谊 》下集",
        "length": "07:00",
        "date": "2017-05-19",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/05/10/5912858436e7c.jpeg",
        "description": "未完的青春，总要带一些遗憾才显得格外深刻。 ",
        "video": [{
            "video_url": "http://video.xinpianchang.com/591285876e683.mp4",
            "resolution": "3840x2160"
          },
          {
            "video_url": "http://video.xinpianchang.com/5912858778491.mp4",
            "resolution": "2560x1440"
          },
          {
            "video_url": "http://video.xinpianchang.com/5912858794511.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/59128587b6599.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/59128587dd85a.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/591285883003c.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "52 换一种告白姿势",
        "length": "02:30",
        "date": "2017-05-19",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/05/11/591464ac72561.jpeg",
        "description": "把 “我喜欢你”从口中说出来需要一种勇气，但要是把这四个字换一种语言说出来，告白的几率会不会更大些。  ",
        "video": [{
            "video_url": "http://video.xinpianchang.com/591464b8f29ea.mp4",
            "resolution": "3840x2160"
          },
          {
            "video_url": "http://video.xinpianchang.com/591464b91edcf.mp4",
            "resolution": "2560x1440"
          },
          {
            "video_url": "http://video.xinpianchang.com/591464b93adf7.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/591464b9bff54.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/591464b9dad78.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/591464ba07861.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "54 当喜欢的人早就喜欢你",
        "length": "05:15",
        "date": "2017-05-19",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/05/17/591c28d63a23c.jpeg",
        "description": "当喜欢的人早就喜欢你，哪怕把这首歌所有的音调弹成G调都是好听的。",
        "video": [{
            "video_url": "http://video.xinpianchang.com/591c28d8bbbc7.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/591c28d8dc513.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/591c28d90691d.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/591c28d928796.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "55 所有快乐的方式都非你不可",
        "length": "05:41",
        "date": "2017-05-19",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/05/19/591eb7574ac00.jpeg",
        "description": "在平凡无奇的生活里，却因为多了那一个可爱的人而变得越加逗趣。 ",
        "video": [{
            "video_url": "http://video.xinpianchang.com/591eb75a69f8c.mp4",
            "resolution": "3840x2160"
          },
          {
            "video_url": "http://video.xinpianchang.com/591eb75a76773.mp4",
            "resolution": "2560x1440"
          },
          {
            "video_url": "http://video.xinpianchang.com/591eb75a973ac.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/591eb75ab232d.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/591eb75af3be4.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/591eb75b262c8.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "27 真正的离开没有告别",
        "length": "02:59",
        "date": "2017-04-07",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/03/13/58c651ac9233d.jpeg",
        "description": "悄无声息的离开也意味着感情的终结。",
        "video": [{
            "video_url": "http://video.xinpianchang.com/58bf6a58785df.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/58bf6a588625f.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/58bf6a589e89f.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/58bf6a58b5b1d.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "17 比恋人更默契的是闺蜜",
        "length": "02:28",
        "date": "2017-03-03",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/02/12/589fd0f048a2e.jpeg",
        "description": "世界上除了恋人还有比恋人更默契的是，陪你一起哭、一起笑、一起长大的闺蜜。",
        "video": [{
            "video_url": "http://video.xinpianchang.com/58983ecf048b0.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/58983ecf0d8b0.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/58983ecf1dde2.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/58983ecf32b8d.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "16 新年快乐，我喜欢你",
        "length": "02:29",
        "date": "2017-03-03",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/02/01/589185dd53882.jpeg",
        "description": "等到一年过去的时候才惊觉时间过得太快，就像喜欢了很久的他，从大街小巷踌躇到四下无人，只为了发一句看似群发的新年祝福。",
        "video": [{
            "video_url": "http://video.xinpianchang.com/589185de40b35.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/589185decf765.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/589185df3011e.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/589185df77774.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "13 有一种门当户对，叫我们很配",
        "length": "03:24",
        "date": "2017-03-03",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/01/11/5875c3e054747.jpeg",
        "description": "遇到你的时候，才知道，有一种门当户对，叫我们很配。",
        "video": [{
            "video_url": "http://video.xinpianchang.com/5875c3a9e6e80.mp4",
            "resolution": "3840x2160"
          },
          {
            "video_url": "http://video.xinpianchang.com/5875c3aa3d139.mp4",
            "resolution": "2560x1440"
          },
          {
            "video_url": "http://video.xinpianchang.com/5875c3aae6848.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/5875c3ab5f554.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/5875c3abd7e6a.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/5875c3ac5d39a.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "26 爱情是科学无法解释的事情",
        "length": "03:00",
        "date": "2017-04-07",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/03/07/58be2072d4962.jpeg",
        "description": "有人说，爱情由肾上腺素决定出不出手，多巴胺决定天长地久，羟色胺决定谁先开口，说到底，都是化学反应。 ",
        "video": [{
            "video_url": "http://video.xinpianchang.com/58be1e5256ab5.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/58be1e5263a49.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/58be1e527b62c.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/58be1e52981d8.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "14 恋爱中迈出的一大步就是见到了你的素颜",
        "length": "03:09",
        "date": "2017-03-03",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/02/04/589564eec95f2.jpeg",
        "description": "放下那些礼貌的装饰，把爱装在眼里，迈进心里。",
        "video": [{
            "video_url": "http://video.xinpianchang.com/58857f1f5c3ac.mp4",
            "resolution": "3840x2160"
          },
          {
            "video_url": "http://video.xinpianchang.com/58857f1fe95ce.mp4",
            "resolution": "2560x1440"
          },
          {
            "video_url": "http://video.xinpianchang.com/58857f20a5297.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/58857f2156085.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/58857f21f2823.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/58857f228b8a1.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "21 失恋没什么大不了",
        "length": "03:04",
        "date": "2017-03-03",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/04/10/58eb36e715a2c.jpeg",
        "description": "这段感情虽然没有开花结果，但却在各自的生命里留下了不可抹灭的印记。",
        "video": [{
            "video_url": "http://video.xinpianchang.com/58aa9b15057da.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/58aa9b150e311.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/58aa9b1526b72.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/58aa9b1547add.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "24 尽管你有很多坏习惯，但这也是我爱的你",
        "length": "04:40",
        "date": "2017-03-03",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/03/02/58b7d11c97f88.jpeg",
        "description": "有一道公式叫做，不完美的你加上爱你的我等于完美的爱情。 ",
        "video": [{
            "video_url": "http://video.xinpianchang.com/58b7d1228ba90.mp4",
            "resolution": "3840x2160"
          },
          {
            "video_url": "http://video.xinpianchang.com/58b7d12298ff0.mp4",
            "resolution": "2560x1440"
          },
          {
            "video_url": "http://video.xinpianchang.com/58b7d122b339d.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/58b7d122c9a43.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/58b7d122dce25.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/58b7d12304000.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "28 感谢关照，后会有期",
        "length": "04:48",
        "date": "2017-04-07",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/03/13/58c6523aa0cbe.jpeg",
        "description": "只道从此，渐行的时光里不再有你。",
        "video": [{
            "video_url": "http://video.xinpianchang.com/58c65102d1c39.mp4",
            "resolution": "3840x2160"
          },
          {
            "video_url": "http://video.xinpianchang.com/58c65102db88b.mp4",
            "resolution": "2560x1440"
          },
          {
            "video_url": "http://video.xinpianchang.com/58c6510302c4f.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/58c651031c887.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/58c6510333ed3.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/58c6510348ddb.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "23 所有想对你说的话，其实只有我想你",
        "length": "02:38",
        "date": "2017-03-03",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/02/27/58b3e7a21387d.jpeg",
        "description": "即便分居两地又怎样，我爱你胜过这场雨。 ",
        "video": [{
            "video_url": "http://video.xinpianchang.com/58b3ab7db4ff8.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/58b3ab7f04d94.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/58b3ab80a7cc6.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/58b3ab814406f.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "25 有些感情，错过就不再",
        "length": "03:45",
        "date": "2017-03-03",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/03/04/58ba79a510b75.jpeg",
        "description": "明明是彼此相爱的两个人，却一而再地因为没有解开的误会越走越远······ ",
        "video": [{
            "video_url": "http://video.xinpianchang.com/58b91a02b0b44.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/58b91a02bce03.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/58b91a02cf0ec.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/58b91a02e48c1.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "22 哪有那么多凑巧的事，有的只是我喜欢你",
        "length": "04:26",
        "date": "2017-03-03",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/02/22/58ad525431097.jpeg",
        "description": "有多少藏在心底的喜欢因为缺少一份说出口的准备而成王败寇，男生也有口是心非的权利，只要结局是好的怎样都行。",
        "video": [{
            "video_url": "http://video.xinpianchang.com/58ad51bd74b69.mp4",
            "resolution": "3840x2160"
          },
          {
            "video_url": "http://video.xinpianchang.com/58ad51bea91c3.mp4",
            "resolution": "2560x1440"
          },
          {
            "video_url": "http://video.xinpianchang.com/58ad51bf13eab.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/58ad51bfb7117.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/58ad51c032979.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/58ad51c09dfc2.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "29 套路是我学的，但撩你是真心的",
        "length": "04:12",
        "date": "2017-04-07",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/03/14/58c79e763e717.jpeg",
        "description": "只要能霸占你所有的怀抱，哪怕崴了脚也能加速向前。",
        "video": [{
            "video_url": "http://video.xinpianchang.com/58c65d63b45d7.mp4",
            "resolution": "3840x2160"
          },
          {
            "video_url": "http://video.xinpianchang.com/58c65d63c066b.mp4",
            "resolution": "2560x1440"
          },
          {
            "video_url": "http://video.xinpianchang.com/58c65d63d7e9b.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/58c65d63ee33d.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/58c65d64130f8.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/58c65d642f436.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "30 暗恋是一个人的独角戏，也可能是两个人的浪漫剧",
        "length": "03:29",
        "date": "2017-04-07",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/03/24/58d4b1fac4f94.jpeg",
        "description": "暗恋一个人的时候，连他的每一个脚步声都记得一清二楚，谁又能想到，结局会让人这样的惊喜。 ",
        "video": [{
            "video_url": "http://video.xinpianchang.com/58c94814c2816.mp4",
            "resolution": "3840x2160"
          },
          {
            "video_url": "http://video.xinpianchang.com/58c94814cfbd0.mp4",
            "resolution": "2560x1440"
          },
          {
            "video_url": "http://video.xinpianchang.com/58c94814e7beb.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/58c948150ec8a.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/58c9481525bf4.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/58c94815418d5.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "32 当造物集开始书写小情书",
        "length": "03:15",
        "date": "2017-04-07",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/03/27/58d8cb4c1e739.jpeg",
        "description": "手作人玉头遇见摄影师左目，从两情相悦到岁月静好，造物集是他们永恒的小情书。",
        "video": [{
            "video_url": "http://video.xinpianchang.com/58d364d58cddf.mp4",
            "resolution": "3840x2160"
          },
          {
            "video_url": "http://video.xinpianchang.com/58d364d595483.mp4",
            "resolution": "2560x1440"
          },
          {
            "video_url": "http://video.xinpianchang.com/58d364d5ae6ac.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/58d364d5c57cb.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/58d364d5dc63f.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/58d364d5f3b43.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "31 暗恋是一个需要小心轻放的青春",
        "length": "02:36",
        "date": "2017-04-07",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/03/23/58d36542623ae.jpeg",
        "description": "暗恋这件青春里无可逃避的小事，需要小心轻放。 ",
        "video": [{
            "video_url": "http://video.xinpianchang.com/58cfb375810dd.mp4",
            "resolution": "3840x2160"
          },
          {
            "video_url": "http://video.xinpianchang.com/58cfb3758e757.mp4",
            "resolution": "2560x1440"
          },
          {
            "video_url": "http://video.xinpianchang.com/58cfb375a6833.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/58cfb375c44ae.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/58cfb375dd46d.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/58cfb375f1e4a.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "34 因爱情而生的宠物情缘",
        "length": "03:44",
        "date": "2017-04-07",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/03/28/58da25a5d6ea3.jpeg",
        "description": "一段因爱情而生的宠物情缘。",
        "video": [{
            "video_url": "http://video.xinpianchang.com/58da24a0da57f.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/58da24a0e3c8b.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/58da24a104c9d.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/58da24a11c44d.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "35 一切都抵不过见面时你给的那个拥抱",
        "length": "03:45",
        "date": "2017-04-07",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/04/07/58e762cf61050.jpeg",
        "description": "如果不想屈服于异地恋的魔爪，那就选个好天气往对方的城市靠近吧，拉近爱情需要战胜远距离！ ",
        "video": [{
            "video_url": "http://video.xinpianchang.com/58dbafa40c4c5.mp4",
            "resolution": "3840x2160"
          },
          {
            "video_url": "http://video.xinpianchang.com/58dbafa419681.mp4",
            "resolution": "2560x1440"
          },
          {
            "video_url": "http://video.xinpianchang.com/58dbafa433dbc.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/58dbafa44e3db.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/58dbafa462410.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/58dbafa477685.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "06 如果失恋就是世界末日",
        "length": "02:10",
        "date": "2016-12-23",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2016/07/29/579b458c2b0d8.jpeg",
        "description": "如果失恋就是世界末日那我要在末日前学会很多事我要学会接受自己不快乐的样子学会不再为迎合他的喜好而打扮学会善待自己的肠胃，而不只是费心琢磨他的口...",
        "video": [{
            "video_url": "http://video.xinpianchang.com/579b458d3a898.mp4",
            "resolution": "3840x2160"
          },
          {
            "video_url": "http://video.xinpianchang.com/579b458d6f21f.mp4",
            "resolution": "2560x1440"
          },
          {
            "video_url": "http://video.xinpianchang.com/579b458d897c5.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/579b458db4972.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/579b458de1335.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/579b458dead37.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "36 不经意的玩笑其实都暗藏深情",
        "length": "05:00",
        "date": "2017-04-07",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/04/07/58e7627a09f5a.jpeg",
        "description": "那些让你不安的玩笑，其实字字都是我爱你。 ",
        "video": [{
            "video_url": "http://video.xinpianchang.com/58dfa013d900f.mp4",
            "resolution": "3840x2160"
          },
          {
            "video_url": "http://video.xinpianchang.com/58dfa013e15db.mp4",
            "resolution": "2560x1440"
          },
          {
            "video_url": "http://video.xinpianchang.com/58dfa014067ab.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/58dfa0141b4bc.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/58dfa01431c0c.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/58dfa0144b29b.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "37 时间的轨迹（上集）",
        "length": "04:53",
        "date": "2017-04-07",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/04/10/58eb3815b1288.jpeg",
        "description": "回忆从前在校园里走过的路，听过的歌，原来一切过去已经很多年，但有些东西是时间改变不了的。下集内容请关注微博微信@小情书LOVOTE",
        "video": [{
            "video_url": "http://video.xinpianchang.com/58e63135528d7.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/58e631355ab75.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/58e6313576bf7.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/58e631359004f.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "07 我永远记得你——前座男生",
        "length": "02:37",
        "date": "2016-12-23",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2016/08/26/57c009adb1583.jpeg",
        "description": "上学的时候，班里总有一个学习好，笑起来又很好看的男生。那时候的我不知道该如何靠近他，每次请他讲题都是我故意靠近他的借口。现在的我早已经记不得他口中...",
        "video": [{
            "video_url": "http://video.xinpianchang.com/57c00918b924c.mp4",
            "resolution": "3840x2160"
          },
          {
            "video_url": "http://video.xinpianchang.com/57c009af9eda1.mp4",
            "resolution": "2560x1440"
          },
          {
            "video_url": "http://video.xinpianchang.com/57c009afafffb.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/57c009afbac90.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/57c009afc6ec2.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/57c009afdd159.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "08 为了对你好，我假装对所有人都好",
        "length": "03:18",
        "date": "2016-12-23",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2016/10/14/5800f7c6ba939.jpeg",
        "description": "在你眼中，我对所有人都好。但在所有人眼中，我只对你好。",
        "video": [{
            "video_url": "http://video.xinpianchang.com/5800f7c7e1ce1.mp4",
            "resolution": "3840x2160"
          },
          {
            "video_url": "http://video.xinpianchang.com/5800f7c7ec8b6.mp4",
            "resolution": "2560x1440"
          },
          {
            "video_url": "http://video.xinpianchang.com/5800f7c80647b.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/5800f7c81de13.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/5800f7c82f313.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/5800f7c83aa2a.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "09 忘记你，还是忘记爱情的味道？",
        "length": "05:34",
        "date": "2016-12-23",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2016/11/11/58256a158d7ab.jpeg",
        "description": "忘记太难，因为要走一遍来时的路。来时的路上处处有你的身影。我给了自己一个机会，回忆与你的全部往昔，等待可以好好和你说再见的那一天。",
        "video": [{
            "video_url": "http://video.xinpianchang.com/58256a1668abf.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/58256a16867f5.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/58256a16a1cfc.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/58256a16cd410.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "38 时间的轨迹（下集）",
        "length": "04:26",
        "date": "2017-04-07",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2017/04/07/58e7621a7dc26.jpeg",
        "description": "回忆从前在校园里走过的路，听过的歌，原来一切过去已经很多年，但有些东西是时间改变不了的。",
        "video": [{
            "video_url": "http://video.xinpianchang.com/58e75e9012a86.mp4",
            "resolution": "3840x2160"
          },
          {
            "video_url": "http://video.xinpianchang.com/58e75e902103f.mp4",
            "resolution": "2560x1440"
          },
          {
            "video_url": "http://video.xinpianchang.com/58e75e9045c76.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://video.xinpianchang.com/58e75e905d247.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://video.xinpianchang.com/58e75e907ac6b.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://video.xinpianchang.com/58e75e909f437.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "01 换一种方式说爱你",
        "length": "04:03",
        "date": "2016-07-25",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2016/02/17/56c41d243992f.jpeg",
        "description": "换一种方式说喜欢，也未尝不是一种好的尝试；喜欢嘛，就别等下一次",
        "video": [{
            "video_url": "http://le.video.xinpianchang.com/5795eabb41e61.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://le.video.xinpianchang.com/5795eabb521da.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://le.video.xinpianchang.com/5795eabb5ed5b.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://le.video.xinpianchang.com/5795eabb7ce37.mp4",
            "resolution": "640x360"
          }
        ]
      },
      {
        "title": "02 因为你 我爱上一首永远也忘不掉的歌",
        "length": "03:33",
        "date": "2016-07-25",
        "image_url": "http://cs.xinpianchang.com/uploadfile/article/2016/03/10/56e1156af2c7b.jpeg",
        "description": "因为你 我爱上一首永远也忘不掉的歌",
        "video": [{
            "video_url": "http://le.video.xinpianchang.com/5795eb63c658a.mp4",
            "resolution": "1920x1080"
          },
          {
            "video_url": "http://le.video.xinpianchang.com/5795eb63cf1ce.mp4",
            "resolution": "1280x720"
          },
          {
            "video_url": "http://le.video.xinpianchang.com/5795eb63e888e.mp4",
            "resolution": "960x540"
          },
          {
            "video_url": "http://le.video.xinpianchang.com/5795eb6406df5.mp4",
            "resolution": "640x360"
          }
        ]
      }
    ]
  }
})