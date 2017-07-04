// import path from 'path'
// import express, { Router } from 'express'
// import bodyParser from 'body-parser'
import { getDeviceList } from './lib/device'
import wisnucApi from './lib/user'
import { beforeUsing } from './lib/system'
import store from './server/store/store'
import actions from './server/action/actions'
import WSServer from './webSocket/server'

// const app = express()
// const router = Router()

global.deviceList = []
global.userList = []

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: true}))

// app.use('/test', require('./route/router.js'));

// app.use(express.static('public/dist'))

// router.get('/', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../public/dist/index.html'))
// })

// app.use('/', router)

// beforeUsing()
// setTimeout( () => {
//   store.dispatch(actions.updateSystemInfor(global.deviceList, global.userList))
// }, 2000)

// WSServer()

// app.listen(4000, () => {
//   console.log('Listening at port 4000... ...')
// })

const {app, BrowserWindow, protocol} = require('electron')
const path = require('path')
const url = require('url')

let win

// function createWindow () {
//   win = new BrowserWindow({width: 1280, height: 800})

//   win.loadURL(url.format({
//     // pathname: path.join(__dirname, '../public/dist/index.html'),
//     pathname: 'index.html',
//     protocol: 'file',
//     slashes: true
//   }))

//   win.webContents.openDevTools()

//   win.on('closed', () => {
//     win = null
//   })
// }



function createWindow() {
  const WEB_FOLDER = '../public/dist/';
  const PROTOCOL = 'file';

  protocol.interceptFileProtocol(PROTOCOL, (request, callback) => {
  // // Strip protocol
  let url = request.url.substr(PROTOCOL.length + 1);

    // Build complete path for node require function
    url = path.join(__dirname, WEB_FOLDER, url);

    // Replace backslashes by forward slashes (windows)
    // url = url.replace(/\\/g, '/');
    url = path.normalize(url);

    console.log(url);
    callback({path: url});
  })

  // Create the browser window.
  win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      nodeIntegration: false
    }
  })

  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: 'index.html',
    protocol: PROTOCOL + ':',
    slashes: true})
  )
}

app.on('ready', () => {

  // protocol.interceptFileProtocol('file', (request, callback) => {
  //   const url = '../public/dist/'
  //   callback({path: path.normalize(`${__dirname}/${url}`)})
  // }, (error) => {
  //   if(error) {
  //     console.error('Failed to register protocol')
  //   }
  // })

  createWindow()

  beforeUsing()
  setTimeout( () => {
    store.dispatch(actions.updateSystemInfor(global.deviceList, global.userList))
  }, 2000)

  WSServer()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// app.on('activate', () => {
//   if (win === null) {
//     createWindow()
//   }
// })