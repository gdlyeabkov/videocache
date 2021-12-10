const fs = require('fs')
const multer  = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage })

const storageForChannels = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'channels')
  },
  filename: function (req, file, cb) {
    // cb(null, file.originalname)
    cb(null, `${req.query.channelname}.png`)
  }
})
const uploadForChannels = multer({ storage: storageForChannels })

const storageForBlogers = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'blogers')
  },
  filename: function (req, file, cb) {
    // cb(null, file.originalname)
    cb(null, `${req.query.blogerlogin}.png`)
  }
})
const uploadForBlogers = multer({ storage: storageForBlogers })

const storageForBanners = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'banners')
  },
  filename: function (req, file, cb) {
    // cb(null, file.originalname)
    cb(null, `${req.query.channelname}.png`)
  }
})
const uploadForBanners = multer({ storage: storageForBanners })

const bcrypt = require('bcrypt')
const saltRounds = 10

const mongoose = require('mongoose')
const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')

const csv_export = require('csv-export')

const app = express()

app.use('/', serveStatic(path.join(__dirname, '/dist')))

const url = `mongodb+srv://glebClusterUser:glebClusterUserPassword@cluster0.fvfru.mongodb.net/videocache?retryWrites=true&w=majority`;
const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true 
}

mongoose.connect(url, connectionParams)
  .then( () => {
    console.log('Connected to database ')
  })
  .catch( (err) => {
    console.error(`Error connecting to the database. \n${err}`)
  })

const BlogerSchema = new mongoose.Schema({
  login: String,
  password: String,
  channels: [mongoose.Schema.Types.Map],
  playlists: [mongoose.Schema.Types.Map],
  notifications: [mongoose.Schema.Types.Map],
  isFastPurchases: {
    type: Boolean,
    default: false
  },
  isHideCacheInfoForPlayLists: {
    type: Boolean,
    default: true
  },
  isHideInfoForMySubs: {
    type: Boolean,
    default: true
  },
  isShowAnnotationsForVideo: {
    type: Boolean,
    default: true
  },
  isShowSubtitlesAlways: {
    type: Boolean,
    default: true
  },
  isShowAutoCreatedSubtitles: {
    type: Boolean,
    default: false
  },
  codec: {
    type: String,
    default: 'auto'
  },
  isSubs: {
    type: Boolean,
    default: true
  },
  isRecomendedVideo: {
    type: Boolean,
    default: true
  },
  isActionsForComments: {
    type: Boolean,
    default: true
  },
  isActionsForChannel: {
    type: Boolean,
    default: true
  },
  isAnswersForComments: {
    type: Boolean,
    default: true
  },
  isRecords: {
    type: Boolean,
    default: true
  },
  isMailing: {
    type: Boolean,
    default: false
  },
  isPermission: {
    type: Boolean,
    default: true
  },
  isGeneralVideoCacheNews: {
    type: Boolean,
    default: false
  },
  isNewsForVideoCachePremium: {
    type: Boolean,
    default: false
  },
  isNewsForAuthors: {
    type: Boolean,
    default: false
  },
  language: {
    type: String,
    default: 'Русский'
  },
  isSecurityMode: {
    type: Boolean,
    default: false
  },
  created: {
    type: Date,
    default: Date.now
  },
  country: {
    type: String,
    default: 'Russia'
  },
  language: {
    type: String,
    default: 'Russian'
  },
  theme: {
    type: String,
    default: 'Light'
  }
}, { collection : 'myblogers' })

const BlogerModel = mongoose.model('BlogerModel', BlogerSchema)

const ChannelSchema = new mongoose.Schema({
  name: String,
  desc: {
    type: String,
    default: '...'
  },
  contacts: {
    type: String,
    default: 'Не указано'
  },
  bloger: String,
  videos: [mongoose.Schema.Types.Map],
  followers: [mongoose.Schema.Types.Map],
  created: {
    type: Date,
    default: Date.now
  },
  views: {
    type: Number,
    default: 0
  },
}, { collection : 'mychannels' })

const ChannelModel = mongoose.model('ChannelModel', ChannelSchema)

const PlayListSchema = new mongoose.Schema({
  name: String,
  bloger: String,
  videos: [mongoose.Schema.Types.Map],
  created: {
    type: Date,
    default: Date.now
  }
}, { collection : 'myplaylists' })

const PlayListModel = mongoose.model('PlayListModel', PlayListSchema)

const VideoSchema = new mongoose.Schema({
  name: String,
  channel: String,
  channelName: String,
  likes: [mongoose.Schema.Types.Map],
  dislikes: [mongoose.Schema.Types.Map],
  posts: [mongoose.Schema.Types.Map],
  limits: [mongoose.Schema.Types.Map],
  public: {
    type: Boolean,
    default: true
  },
  views: {
    type: Number,
    default: 0
  },
  created: {
    type: Date,
    default: Date.now
  },
  viewsAnalytics: [mongoose.Schema.Types.Map]
}, { collection : 'myvideos' })

const VideoModel = mongoose.model('VideoModel', VideoSchema)

app.get('/api/blogers/create', async (req, res) => {
    
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query = BlogerModel.find({})
  query.exec((err, allBlogers) => {
      if (err) {
          return res.json({ "status": "Error" })
      }
      let blogerExists = false
      allBlogers.forEach(bloger => {
        if(bloger.login.includes(req.query.blogerlogin)){
          blogerExists = true
        }
      })
      if (blogerExists) {
        return res.json({ status: 'Error' })
      } else {
          let encodedPassword = "#"
          let salt = bcrypt.genSalt(saltRounds)
          encodedPassword = bcrypt.hashSync(req.query.blogerpassword, saltRounds)
          let newBloger = new BlogerModel({ login: req.query.blogerlogin, password: encodedPassword })
          newBloger.save(function (err, bloger) {
              if (err) {
                  return res.json({ "status": "Error" })
              } else {
                  return res.json({ status: 'OK', bloger: bloger })
              }
          })
      }
  })
})

app.post('/api/blogers/create', uploadForBlogers.single('myFile'), async (req, res) => {
    
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query = BlogerModel.find({})
  query.exec((err, allBlogers) => {
      if (err) {
          return res.json({ "status": "Error" })
      }
      let blogerExists = false
      allBlogers.forEach(bloger => {
        if (bloger.login.includes(req.query.blogerlogin)) {
          blogerExists = true
        }
      })
      if (blogerExists) {
        return res.json({ status: 'Error' })
      } else {
          let encodedPassword = "#"
          let salt = bcrypt.genSalt(saltRounds)
          encodedPassword = bcrypt.hashSync(req.query.blogerpassword, saltRounds)
          let newBloger = new BlogerModel({ login: req.query.blogerlogin, password: encodedPassword })
          newBloger.save(function (err, bloger) {
              if (err) {
                  return res.json({ "status": "Error" })
              } else {
                return res.redirect('http://localhost:8080/')
              }
          })
      }
  })
})

app.get('/api/channels/create', async (req, res) => {
    
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query = ChannelModel.find({})
  query.exec((err, allChannels) => {
      if (err) {
          return res.json({ "status": "Error" })
      }
      let channelExists = false
      allChannels.forEach(channel => {
        if (channel.name.includes(req.query.channelname)) {
          channelExists = true
        }
      })
      if (channelExists) {
        return res.json({ status: 'Error' })
      } else {
          let newChannel = new ChannelModel({ name: req.query.channelname, bloger: req.query.blogerid })
          newChannel.save(function (err, channel) {
            if (err) {
              return res.json({ "status": "Error" })
            } else {
              BlogerModel.updateOne({ _id: req.query.blogerid },
                { $push: 
                  {
                    channels: [
                      {
                        id: channel._id.toString()
                      }
                    ] 
                  }
              }, (err, bloger) => {
                if(err){
                    return res.json({ "status": "Error" })
                } else {
                  return res.json({ status: 'OK' })
                }
              })
            }
          })
      }
  })
})

app.post('/api/channels/create', [
  uploadForChannels.single('myFile'),
  uploadForBanners.single('myFile')
], async (req, res) => {
    
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query = ChannelModel.find({})
  query.exec((err, allChannels) => {
      if (err) {
          return res.json({ "status": "Error" })
      }
      let channelExists = false
      allChannels.forEach(channel => {
        if (channel.name.includes(req.query.channelname)) {
          channelExists = true
        }
      })
      if (channelExists) {
        return res.json({ status: 'Error' })
      } else {
          let newChannel = new ChannelModel({ name: req.query.channelname, bloger: req.query.blogerid })
          newChannel.save(function (err, channel) {
            if (err) {
              return res.json({ "status": "Error" })
            } else {
              BlogerModel.updateOne({ _id: req.query.blogerid },
                { $push: 
                  {
                    channels: [
                      {
                        id: channel._id.toString()
                      }
                    ] 
                  }
              }, (err, bloger) => {
                if(err){
                    return res.json({ "status": "Error" })
                } else {
                  return res.redirect('http://localhost:8080/')
                }
              })
            }
          })
      }
  })
})

app.get('/api/blogers/check', (req,res) => {
  
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let queryBefore = BlogerModel.find({ 'login': { $in: req.query.blogerlogin } })
  queryBefore.exec((err, allBlogers) => {
    if (err) {
      return res.json({ "status": "Error" })
    }
    if (allBlogers.length >= 1) {
      let query =  BlogerModel.findOne({ login: req.query.blogerlogin }, function(err, bloger) {
        if (err) {
          return res.json({ "status": "Error" })
        } else {
          const passwordCheck = bcrypt.compareSync(req.query.blogerpassword, bloger.password) && req.query.blogerpassword !== ''
          if (true) {
            return res.json({ "status": "OK" })
          } else {
            return res.json({ "status": "Error" })
          }
        }
      })
    } else if(allBlogers.length <= 0){
      console.log('ошибка 4')
      return res.json({ "status": "Error" })
    }
  })
})

app.get('/api/videos/source/get', (req, res) => {
        
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  // return res.sendFile(__dirname + `/uploads/${req.query.videoname}.mp4`)
  return res.sendFile(__dirname + `/uploads/${req.query.videoname}`)

})

app.get('/api/channels/source/get', (req, res) => {
        
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  return res.sendFile(__dirname + `/channels/${req.query.channelname}.png`)

})

app.get('/api/blogers/source/get', (req, res) => {
        
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  return res.sendFile(__dirname + `/blogers/${req.query.blogerlogin}.png`)

})

app.get('/api/export/csv/download', async (req, res) => {
        
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  return await res.download(path.join(__dirname, `csvs/${req.query.channelname}.csv`), `${req.query.channelname}.csv`, function (err) {
    if (err) {
      //error to download file
      return res.json({ "status": "Error" })
    } else {
      //file success download
      return res.json({ "status": "OK" })
    }
  })

})

app.get('/api/blogers/get', (req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query =  BlogerModel.findOne({ login: req.query.blogerlogin }, function(err, bloger) {
    if (err) {
      return res.json({ "status": "Error" })
    } else {
      return res.json({ "status": "OK", bloger: bloger })
    }
  })
  
})

app.get('/api/channels/all', (req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query =  ChannelModel.find({  }, function(err, channels) {
    if (err) {
      return res.json({ "status": "Error" })
    } else {
      return res.json({ "status": "OK", channels: channels })
    }
  })
  
})

app.get('/api/channels/get', (req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query =  ChannelModel.findOne({ _id: req.query.channelid }, function(err, channel) {
    if (err) {
      return res.json({ "status": "Error" })
    } else {
      return res.json({ "status": "OK", channel: channel })
    }
  })
  
})

app.post('/api/videos/upload', upload.single('myFile'), (req, res) => {
  
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

  let videoName = ''
  if (req.file) {
    videoName = req.file.originalname
  }
  let newVideo = new VideoModel({ name: videoName, channel: req.query.channelid, channelName: req.query.channelname })
  newVideo.save(function (err, video) {
    if (err) {
      return res.json({ "status": "Error" })
    } else {
      ChannelModel.updateOne({ _id: req.query.channelid },
        { $push: 
          {
            videos: [
              {
                id: video._id.toString()
              }
            ] 
          }
      }, (err, channel) => {
        if (err) {
            return res.json({ "status": "Error" })
        } else {
          return res.redirect('http://localhost:8080/')
        }
      })
    }
  })

})

app.get('/api/videos/all', (req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query = VideoModel.find({})
  query.exec((err, allVideos) => {
    if (err) {
      return res.json({ "status": "Error" })
    } else {
      return res.json({ status: 'OK', videos: allVideos })
    }
  })

})

app.get('/api/video/get', (req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query =  VideoModel.findOne({ _id: req.query.videoid }, function(err, video) {
    if (err) {
      return res.json({ "status": "Error" })
    } else {
      return res.json({ "status": "OK", video: video })
    }
  })

})

app.get('/api/channels/delete', async (req, res) => {
  
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  mongoose.connection.collection("myblogers").updateOne(
    { login: req.query.blogerlogin },
    { $pull: { 'channels': { id: req.query.channelid } } }
  )
  await VideoModel.deleteMany({ channel: req.query.channelid  })
  await ChannelModel.deleteMany({ _id: req.query.channelid  })
  return res.json({ status: 'OK' })

})

app.get('/api/blogers/isfastpurchases/set', (req, res) => {
    
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query =  BlogerModel.findOne({ 'login': req.query.blogerlogin }, function(err, bloger) {
    if (err) {
        return res.json({ "status": "Error" })
    } else {
      BlogerModel.updateOne({ login: req.query.blogerlogin }, { isFastPurchases: req.query.value }, (err, bloger) => {
        if (err) {
            return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })
      })
    }
  })
})

app.get('/api/blogers/ishidecacheinfoforplaylists/set', (req, res) => {
    
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query =  BlogerModel.findOne({ 'login': req.query.blogerlogin }, function(err, bloger) {
    if (err) {
        return res.json({ "status": "Error" })
    } else {
      BlogerModel.updateOne({ login: req.query.blogerlogin }, { isHideCacheInfoForPlayLists: req.query.value }, (err, bloger) => {
        if (err) {
            return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })
      })
    }
  })
})

app.get('/api/blogers/ishideinfoformysubs/set', (req, res) => {
    
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query =  BlogerModel.findOne({ 'login': req.query.blogerlogin }, function(err, bloger) {
    if (err) {
        return res.json({ "status": "Error" })
    } else {
      BlogerModel.updateOne({ login: req.query.blogerlogin }, { isHideInfoForMySubs: req.query.value }, (err, bloger) => {
        if (err) {
          return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })
      })
    }
  })
})

app.get('/api/blogers/isshowannotationsforvideo/set', (req, res) => {
    
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query =  BlogerModel.findOne({ 'login': req.query.blogerlogin }, function(err, bloger) {
    if (err) {
        return res.json({ "status": "Error" })
    } else {
      BlogerModel.updateOne({ login: req.query.blogerlogin }, { isShowAnnotationsForVideo: req.query.value }, (err, bloger) => {
        if (err) {
          return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })
      })
    }
  })

})

app.get('/api/blogers/isshowsubtitlesalways/set', (req, res) => {
    
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query =  BlogerModel.findOne({ 'login': req.query.blogerlogin }, function(err, bloger) {
    if (err) {
        return res.json({ "status": "Error" })
    } else {
      BlogerModel.updateOne({ login: req.query.blogerlogin }, { isShowSubtitlesAlways: req.query.value }, (err, bloger) => {
        if (err) {
          return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })
      })
    }
  })
  
})

app.get('/api/blogers/isshowAutocreatedsubtitles/set', (req, res) => {
    
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query =  BlogerModel.findOne({ 'login': req.query.blogerlogin }, function(err, bloger) {
    if (err) {
        return res.json({ "status": "Error" })
    } else {
      BlogerModel.updateOne({ login: req.query.blogerlogin }, { isShowAutoCreatedSubtitles: req.query.value }, (err, bloger) => {
        if (err) {
          return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })
      })
    }
  })
  
})

app.get('/api/blogers/codec/set', (req, res) => {
    
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query =  BlogerModel.findOne({ 'login': req.query.blogerlogin }, function(err, bloger) {
    if (err) {
      return res.json({ "status": "Error" })
    } else {
      BlogerModel.updateOne({ login: req.query.blogerlogin }, { codec: req.query.value }, (err, bloger) => {
        if (err) {
          return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })
      })
    }
  })
  
})

app.get('/api/blogers/language/set', (req, res) => {
    
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query =  BlogerModel.findOne({ 'login': req.query.blogerlogin }, function(err, bloger) {
    if (err) {
      return res.json({ "status": "Error" })
    } else {
      BlogerModel.updateOne({ login: req.query.blogerlogin }, { language: req.query.value }, (err, bloger) => {
        if (err) {
          return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })
      })
    }
  })
  
})

app.get('/api/blogers/isnewsforauthors/set', (req, res) => {
    
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query =  BlogerModel.findOne({ 'login': req.query.blogerlogin }, function(err, bloger) {
    if (err) {
      return res.json({ "status": "Error" })
    } else {
      BlogerModel.updateOne({ login: req.query.blogerlogin }, { isNewsForAuthors: req.query.value }, (err, bloger) => {
        if (err) {
          return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })
      })
    }
  })
  
})

app.get('/api/blogers/isnewsforvideocachepremium/set', (req, res) => {
    
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query =  BlogerModel.findOne({ 'login': req.query.blogerlogin }, function(err, bloger) {
    if (err) {
      return res.json({ "status": "Error" })
    } else {
      BlogerModel.updateOne({ login: req.query.blogerlogin }, { isNewsForVideoCachePremium: req.query.value }, (err, bloger) => {
        if (err) {
          return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })
      })
    }
  })
  
})

app.get('/api/blogers/isgeneralvideocachenews/set', (req, res) => {
    
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query =  BlogerModel.findOne({ 'login': req.query.blogerlogin }, function(err, bloger) {
    if (err) {
      return res.json({ "status": "Error" })
    } else {
      BlogerModel.updateOne({ login: req.query.blogerlogin }, { isGeneralVideoCacheNews: req.query.value }, (err, bloger) => {
        if (err) {
          return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })
      })
    }
  })
  
})

app.get('/api/blogers/ispermission/set', (req, res) => {
    
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query =  BlogerModel.findOne({ 'login': req.query.blogerlogin }, function(err, bloger) {
    if (err) {
      return res.json({ "status": "Error" })
    } else {
      BlogerModel.updateOne({ login: req.query.blogerlogin }, { isPermission: req.query.value }, (err, bloger) => {
        if (err) {
          return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })
      })
    }
  })
  
})

app.get('/api/blogers/ismailing/set', (req, res) => {
    
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query =  BlogerModel.findOne({ 'login': req.query.blogerlogin }, function(err, bloger) {
    if (err) {
      return res.json({ "status": "Error" })
    } else {
      BlogerModel.updateOne({ login: req.query.blogerlogin }, { isMailing: req.query.value }, (err, bloger) => {
        if (err) {
          return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })
      })
    }
  })
  
})

app.get('/api/blogers/isrecords/set', (req, res) => {
    
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query =  BlogerModel.findOne({ 'login': req.query.blogerlogin }, function(err, bloger) {
    if (err) {
      return res.json({ "status": "Error" })
    } else {
      BlogerModel.updateOne({ login: req.query.blogerlogin }, { isRecords: req.query.value }, (err, bloger) => {
        if (err) {
          return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })
      })
    }
  })
  
})

app.get('/api/blogers/ismentions/set', (req, res) => {
    
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query =  BlogerModel.findOne({ 'login': req.query.blogerlogin }, function(err, bloger) {
    if (err) {
      return res.json({ "status": "Error" })
    } else {
      BlogerModel.updateOne({ login: req.query.blogerlogin }, { isMentions: req.query.value }, (err, bloger) => {
        if (err) {
          return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })
      })
    }
  })
  
})

app.get('/api/blogers/isanswersforcomments/set', (req, res) => {
    
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query =  BlogerModel.findOne({ 'login': req.query.blogerlogin }, function(err, bloger) {
    if (err) {
      return res.json({ "status": "Error" })
    } else {
      BlogerModel.updateOne({ login: req.query.blogerlogin }, { isAnswersForComments: req.query.value }, (err, bloger) => {
        if (err) {
          return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })
      })
    }
  })
  
})

app.get('/api/blogers/isactionsforchannel/set', (req, res) => {
    
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query =  BlogerModel.findOne({ 'login': req.query.blogerlogin }, function(err, bloger) {
    if (err) {
      return res.json({ "status": "Error" })
    } else {
      BlogerModel.updateOne({ login: req.query.blogerlogin }, { isActionsForChannel: req.query.value }, (err, bloger) => {
        if (err) {
          return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })
      })
    }
  })
  
})

app.get('/api/blogers/isactionsforcomments/set', (req, res) => {
    
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query =  BlogerModel.findOne({ 'login': req.query.blogerlogin }, function(err, bloger) {
    if (err) {
      return res.json({ "status": "Error" })
    } else {
      BlogerModel.updateOne({ login: req.query.blogerlogin }, { isActionsForComments: req.query.value }, (err, bloger) => {
        if (err) {
          return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })
      })
    }
  })
  
})

app.get('/api/blogers/isrecomendedvideo/set', (req, res) => {
    
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query =  BlogerModel.findOne({ 'login': req.query.blogerlogin }, function(err, bloger) {
    if (err) {
      return res.json({ "status": "Error" })
    } else {
      BlogerModel.updateOne({ login: req.query.blogerlogin }, { isRecomendedVideo: req.query.value }, (err, bloger) => {
        if (err) {
          return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })
      })
    }
  })
  
})

app.get('/api/blogers/issubs/set', (req, res) => {
    
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query =  BlogerModel.findOne({ 'login': req.query.blogerlogin }, function(err, bloger) {
    if (err) {
      return res.json({ "status": "Error" })
    } else {
      BlogerModel.updateOne({ login: req.query.blogerlogin }, { isSubs: req.query.value }, (err, bloger) => {
        if (err) {
          return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })
      })
    }
  })
  
})

app.get('/api/blogers/issecuritymode/set', (req, res) => {
    
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query =  BlogerModel.findOne({ 'login': req.query.blogerlogin }, function(err, bloger) {
    if (err) {
      return res.json({ "status": "Error" })
    } else {
      BlogerModel.updateOne({ login: req.query.blogerlogin }, { isSecurityMode: req.query.value }, (err, bloger) => {
        if (err) {
          return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })
      })
    }
  })
  
})

app.get('/api/blogers/language/set', (req, res) => {
    
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query =  BlogerModel.findOne({ 'login': req.query.blogerlogin }, function(err, bloger) {
    if (err) {
      return res.json({ "status": "Error" })
    } else {
      BlogerModel.updateOne({ login: req.query.blogerlogin }, { language: req.query.value }, (err, bloger) => {
        if (err) {
          return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })
      })
    }
  })
  
})

app.get('/api/blogers/country/set', (req, res) => {
    
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query =  BlogerModel.findOne({ 'login': req.query.blogerlogin }, function(err, bloger) {
    if (err) {
      return res.json({ "status": "Error" })
    } else {
      BlogerModel.updateOne({ login: req.query.blogerlogin }, { country: req.query.value }, (err, bloger) => {
        if (err) {
          return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })
      })
    }
  })
  
})

app.get('/api/blogers/theme/set', (req, res) => {
    
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query =  BlogerModel.findOne({ 'login': req.query.blogerlogin }, function(err, bloger) {
    if (err) {
      return res.json({ "status": "Error" })
    } else {
      BlogerModel.updateOne({ login: req.query.blogerlogin }, { theme: req.query.value }, (err, bloger) => {
        if (err) {
          return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })
      })
    }
  })
  
})

app.get('/api/videos/posts/add', (req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query =  BlogerModel.findOne({ 'login': req.query.blogerlogin }, function(err, bloger) {
    if (err) {
      return res.json({ "status": "Error" })
    } else {
      if (bloger.channels.length >= 1) {
        console.log(`2) ${new Map(bloger.channels[0]).get('id')}`)
        let query =  ChannelModel.findOne({ '_id': new Map(bloger.channels[0]).get('id') }, function(err, channel) {
          if (err) {
            return res.json({ "status": "Error" })
          } else {
            let query =  VideoModel.findOne({ _id: req.query.videoid }, function(err, video) {
              if (err) {
                return res.json({ "status": "Error" })
              } else {
                let query =  ChannelModel.findOne({ '_id': video.channel }, function(err, watchChannel) {
                  if (err) {
                    return res.json({ "status": "Error" })
                  } else {
                    VideoModel.updateOne({ _id: req.query.videoid },
                      { $push: 
                        {
                          posts: [
                            {
                              id: Math.floor(Math.random() * 5000),
                              bloger: req.query.blogerlogin,
                              message: req.query.blogermessage,
                              created: new Date().toLocaleDateString(),
                              videoName: video.name,
                              channelName: watchChannel.name,
                              followers: channel.followers.length
                            }
                          ] 
                        }
                    }, (err, video) => {
                      if(err){
                        return res.json({ "status": "Error" })
                      } else {
                        return res.json({ status: 'OK' })
                      }
                    })
                  
                  }
                })
                
              }
            })
          
          }
        })
      } else {
        let query =  VideoModel.findOne({ _id: req.query.videoid }, function(err, video) {
          if (err) {
            return res.json({ "status": "Error" })
          } else {
            let query =  ChannelModel.findOne({ '_id': video.channel }, function(err, watchChannel) {
              if (err) {
                return res.json({ "status": "Error" })
              } else {
                VideoModel.updateOne({ _id: req.query.videoid },
                  { $push: 
                    {
                      posts: [
                        {
                          id: Math.floor(Math.random() * 5000),
                          bloger: req.query.blogerlogin,
                          message: req.query.blogermessage,
                          created: new Date().toLocaleDateString(),
                          videoName: video.name,
                          channelName: watchChannel.name,
                          followers: 0
                        }
                      ] 
                    }
                }, (err, video) => {
                  if(err){
                    return res.json({ "status": "Error" })
                  } else {
                    return res.json({ status: 'OK' })
                  }
                })
            
              }
            })
          
          }
        })
      
      }
    
    }
  })

})

app.get('/api/videos/likes/add', (req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  VideoModel.updateOne({ _id: req.query.videoid },
    { $push: 
      {
        likes: [
          {
            id: Math.floor(Math.random() * 5000),
            likes: req.query.blogerlogin
          }
        ] 
      }
  }, (err, video) => {
    if(err){
      return res.json({ "status": "Error" })
    } else {
      return res.json({ status: 'OK' })
    }
  })

})

app.get('/api/videos/dislikes/add', (req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  VideoModel.updateOne({ _id: req.query.videoid },
    { $push: 
      {
        dislikes: [
          {
            id: Math.floor(Math.random() * 5000),
            bloger: req.query.blogerlogin
          }
        ] 
      }
  }, (err, video) => {
    if(err){
      return res.json({ "status": "Error" })
    } else {
      return res.json({ status: 'OK' })
    }
  })

})

app.get('/api/channels/followers/add', (req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query =  BlogerModel.findOne({ 'login': req.query.blogerlogin }, function(err, bloger) {
    if (err) {
      return res.json({ "status": "Error" })
    } else {
      // console.log(`bloger.channel: ${new Mapbloger.channels[0].id}`)
      // console.log(`new Map(bloger).get('channel'): ${new Map(bloger).get('channels')[0].id}`)
      
      if (bloger.channels.length >= 1) {
        
        console.log(`bloger.channels[0].id: ${new Map(bloger.channels[0]).get('id')}`)
        let query =  ChannelModel.findOne({ '_id': new Map(bloger.channels[0]).get('id') }, function(err, channel) {
          if (err) {
            return res.json({ "status": "Error" })
          } else {
            ChannelModel.updateOne({ _id: req.query.channelid },
              { $push: 
                {
                  followers: [
                    {
                      bloger: req.query.blogerlogin,
                      followers: channel.followers.length
                    }
                  ] 
                }
            }, (err, channel) => {
              if (err) {
                return res.json({ "status": "Error" })
              } else {
                return res.json({ status: 'OK' })
              }
            })
            
          }
        })

      } else {
        ChannelModel.updateOne({ _id: req.query.channelid },
          { $push: 
            {
              followers: [
                {
                  bloger: req.query.blogerlogin,
                  followers: 0
                }
              ] 
            }
        }, (err, channel) => {
          if (err) {
            return res.json({ "status": "Error" })
          } else {
          
          }
        })

      }
        
      
    }
  })

})

app.get('/api/videos/views/add', (req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  VideoModel.updateOne({ _id: req.query.videoid },
    {
      "$inc": { "views": 1 },
      '$push': 
        {
          viewsAnalytics: [
            {
              date: new Date().toLocaleDateString()
            }
          ] 
        }
      
    }, (err, video) => {
    if (err) {
      return res.json({ "status": "Error" })
    } else {
      return res.json({ status: 'OK' })
    }
  })

})

app.get('/api/channel/desc/set', (req, res) => {
    
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query =  ChannelModel.findOne({ '_id': req.query.channelid }, function(err, channel) {
    if (err) {
      return res.json({ "status": "Error" })
    } else {
      ChannelModel.updateOne({ _id: req.query.channelid }, { desc: req.query.channeldesc }, (err, channel) => {
        if (err) {
          return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })
      })
    }
  })
  
})

app.get('/api/channel/contacts/set', (req, res) => {
    
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query =  ChannelModel.findOne({ '_id': req.query.channelid }, function(err, channel) {
    if (err) {
      return res.json({ "status": "Error" })
    } else {
      ChannelModel.updateOne({ _id: req.query.channelid }, { contacts: req.query.channelcontacts }, (err, channel) => {
        if (err) {
          return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })
      })
    }
  })
  
})

app.get('/api/channels/views/add', (req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  ChannelModel.updateOne({ _id: req.query.channelid },
    {
      "$inc": { "views": 1 },
    }, (err, channel) => {
    if (err) {
      return res.json({ "status": "Error" })
    } else {
      return res.json({ status: 'OK' })
    }
  })

})

app.post('/api/channels/logos/bloger', uploadForBlogers.single('myFile'), async (req, res) => {
    
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  if (!req.file) {
    // return res.json({ "status": "Error" })
  } else {
    return res.redirect('http://localhost:8080/')
  }

})

app.post('/api/channels/logos/banner', uploadForBanners.single('myFile'), async (req, res) => {
    
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  if (!req.file) {
    // return res.json({ "status": "Error" })
  } else {
    return res.redirect('http://localhost:8080/')
  }

})

app.post('/api/channels/logos/channel', uploadForChannels.single('myFile'), async (req, res) => {
    
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  if (!req.file) {
    // return res.json({ "status": "Error" })
  } else {
    return res.redirect('http://localhost:8080/')
  }

})

app.get('/api/export/csv', (req, res) => {
  
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query =  ChannelModel.findOne({ _id: req.query.channelid }, function(err, channel) {
    if (err) {
      return res.json({ "status": "Error" })
    } else {
      
      let channelInfo = {
        channel: [
          {
            name: channel.name
          },
          {
            desc: channel.desc
          },
          {
            contacts: channel.contacts
          },
          {
            bloger: channel.bloger
          },
          {
            created: channel.created
          },
          {
            views: channel.views
          }
        ]
      }
    
      csv_export.export(channelInfo, function(buffer) {
        //this module returns a buffer for the csv files already compressed into a single zip.
        //save the zip or force file download via express or other server
        // fs.writeFileSync(`./csvs/${req.query.channelname}.csv`, buffer)
        fs.writeFile(`./csvs/${channel.name}.csv`, buffer, (err, csv) => {
          if (err) {
            return res.json({ status: 'Error' })
          }
          return res.json({ status: 'OK' })
        })
      })

    }
  })

})

app.get('/api/channel/name/set', (req, res) => {
    
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query =  ChannelModel.findOne({ '_id': req.query.channelid }, function(err, channel) {
    if (err) {
      return res.json({ "status": "Error" })
    } else {
      console.log(`${channel.name} | ${req.query.channelid}`)
      fs.rename(`./channels/${channel.name}.png`, `./channels/${req.query.channelname}.png`, (err, file) => {
          if (err) {
            return res.json({ status: 'Error' })
          } else {
            // fs.rename(`./banners/${channel.name}.mp4`, `./banners/${channelname}`, (err, file) => {
            //   if (err) {
            //     return res.json({ status: 'Error' })
            //   } else {
                ChannelModel.updateOne({ _id: req.query.channelid }, { name: req.query.channelname }, (err, channel) => {
                  if (err) {
                    return res.json({ status: 'Error' })
                  }
                  
                  mongoose.connection.collection("myvideos").updateMany({ channel: req.query.channelid }, { '$set': { 'posts.$[].channelName': req.query.channelname } }, (err, videos) => {
                    if (err) {
                      return res.json({ status: 'Error' })        
                    }
                      return res.json({ status: 'OK' })
                  })

                })
            //   }
            // })
          }
      })
    }
  })
  
})

app.get('/api/playlists/create', async (req, res) => {
    
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query = PlayListModel.find({})
  query.exec((err, allPlayLists) => {
      if (err) {
        return res.json({ "status": "Error" })
      }
      let alphabet = "abcdefghjiklmnoprstuvwxyz"
      let generatedPlayListName = ''
      for (let i = 0; i < Math.floor(Math.random() * 25); i++) {
          let randomIndex = Math.floor(Math.random() * alphabet.length)
          let randomLetter = alphabet[randomIndex]
          generatedPlayListName += randomLetter
      }  
      let newPlayList = new PlayListModel({ name: generatedPlayListName, bloger: req.query.blogerid })
      newPlayList.save(function (err, playList) {
          if (err) {
            return res.json({ "status": "Error" })
          } else {
            
            BlogerModel.updateOne({ _id: req.query.blogerid },
              { $push: 
                {
                  playlists: [
                    {
                      id: playList._id.toString()
                    }
                  ] 
                }
            }, (err, bloger) => {
              if(err){
                return res.json({ "status": "Error" })
              } else {

                return res.json({ status: 'OK', playList: playList })
              }
            })

          }
      })
  })
})

app.get('/api/playlists/all', (req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  let query =  PlayListModel.find({  }, function(err, playlists) {
    if (err) {
      return res.json({ "status": "Error" })
    } else {
      return res.json({ "status": "OK", playlists: playlists })
    }
  })
  
})

app.get('**', (req, res) => { 
  
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
  return res.redirect(`http://localhost:8080.com/?redirectroute=${req.path}`)

})

// const port = process.env.PORT || 8080
const port = 4000
  
app.listen(port)