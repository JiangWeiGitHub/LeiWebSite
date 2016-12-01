import path from 'path'
import express, { Router } from 'express'
import bodyParser from 'body-parser'
import { getDeviceList } from './lib/device'
import wisnucApi from './lib/user'
import { beforeUsing } from './lib/system'
import defaultParameters from './config/config'
import store from './server/store/store'
import actions from './server/action/actions'
import WSServer from './webSocket/server'

const app = express()
const router = Router()

global.deviceList = []
global.userList = []

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/test', require('./route/router.js'));

app.use(express.static('public/dist'))

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/dist/index.html'))
})

app.use('/', router)

beforeUsing()
setTimeout( () => {
  store.dispatch(actions.updateSystemInfor(global.deviceList, global.userList))
}, 2000)

//setTimeout(() => {    console.log(store.getState().systemReducer.userList)}, 3000)

WSServer()

app.listen(3000, () => {
  console.log('Listening at port 3000... ...')
})
