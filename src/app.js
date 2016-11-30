import path from 'path'
import express, { Router } from 'express'
import bodyParser from 'body-parser'
import { getDeviceList } from './lib/device'
import wisnucApi from './lib/user'
import defaultParameters from './config/config'

const app = express()
const router = Router()

const deviceList = []
const userList = []

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/test', require('./route/router.js'));

app.use(express.static('public/dist'))

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/dist/index.html'))
})

app.use('/', router)

getDeviceList((rawDeviceData) => {
  rawDeviceData.forEach( (rawUserData) => {
    deviceList.push(rawUserData)
    wisnucApi.getUserList( rawUserData.referer.address, defaultParameters.serverPort).then( (data) => {
      data.ip = rawUserData.referer.address
      userList.push(data)
    })
  }) 
})

setTimeout(() => {
  console.log(deviceList)
  console.log(userList)
}, 2000)

app.listen(3000, () => {
  console.log('Listening at port 3000... ...')
})
