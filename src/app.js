import { getDeviceList } from './lib/device'
import wisnucApi from './lib/user'
import { beforeUsing } from './lib/system'
import store from './server/store/store'
import actions from './server/action/actions'
import WSServer from './webSocket/server'

const { app, BrowserWindow, protocol } = require('electron')
const path = require('path')
const url = require('url')

global.deviceList = []
global.userList = []

let win

function createWindow() {

  const WEB_FOLDER = '../public/dist/';
  const PROTOCOL = 'file';

  protocol.interceptFileProtocol(PROTOCOL, (request, callback) => {
  
    let url = request.url.substr(PROTOCOL.length + 1);

    url = path.join(__dirname, WEB_FOLDER, url);

    url = path.normalize(url);

    callback({path: url});
  })

  win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      nodeIntegration: false
    }
  })

  win.loadURL(url.format({
    pathname: 'index.html',
    protocol: PROTOCOL + ':',
    slashes: true})
  )

  win.webContents.openDevTools()
}

app.on('ready', () => {

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