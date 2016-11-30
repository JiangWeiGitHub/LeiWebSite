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

// [ [ { uuid: '6a433972-c278-4606-b379-4c4138fd4eaa',
//       username: 'admin',
//       avatar: null,
//       unixUID: 2000 },
//     { uuid: '32d7502e-316a-4456-8adb-30c2f5a99953',
//       username: 'mark',
//       avatar: null,
//       unixUID: 2001 },
//     { uuid: '60c88847-f063-4aeb-a508-16c2e95f2520',
//       username: '1',
//       avatar: null,
//       unixUID: 2004 },
//     { uuid: '23bff583-7f7b-4f13-a007-300a0aeb4491',
//       username: '2',
//       avatar: null,
//       unixUID: 2005 },
//     { uuid: '5017f521-d036-4b57-b38c-33e37e3b5239',
//       username: '3',
//       avatar: null,
//       unixUID: 2002 },
//     { uuid: '97c0d99d-7285-432e-a3dc-f66b89805ee0',
//       username: '4',
//       avatar: null,
//       unixUID: 2003 },
//     ip: '192.168.5.147' ],
//   [ { uuid: 'db0b4645-6339-4f68-810a-2a10ca76867a',
//       username: 'admin',
//       avatar: null,
//       unixUID: 2000 },
//     { uuid: '345c87e1-7b79-40d8-b0a8-83a2f1a07a04',
//       username: '1',
//       avatar: null,
//       unixUID: 2001 },
//     { uuid: '99aeffe6-4fb1-410e-80dd-02b2a97fb9f2',
//       username: '我和你',
//       avatar: null,
//       unixUID: 2002 },
//     { uuid: 'd781c358-cfe7-4423-b687-5c31cae1f4c7',
//       username: '心连心',
//       avatar: null,
//       unixUID: 2003 },
//     { uuid: '39a2be62-ea9a-4e16-95af-77c82ec38a66',
//       username: '同住地球村',
//       avatar: null,
//       unixUID: 2004 },
//     { uuid: 'b5c86146-9405-48a2-91e8-b676b6560518',
//       username: 'chlorine',
//       avatar: null,
//       unixUID: 2005 },
//     { uuid: '286fe53c-0f00-4eca-a6c1-6827a3e4d32a',
//       username: 'push',
//       avatar: null,
//       unixUID: 2006 },
//     { uuid: '8bee4778-417d-43c2-b28d-dd2f1a167ed6',
//       username: 'the',
//       avatar: null,
//       unixUID: 2007 },
//     ip: '192.168.5.144' ],
//   [ { uuid: 'e0116d2c-46ff-45b3-8fec-cd6a2e0d4feb',
//       username: 'admin',
//       avatar: null,
//       unixUID: 2000 },
//     ip: '192.168.5.65' ],
//   [ { uuid: '8b574ed0-13b8-4475-a97c-a3bd0100983a',
//       username: 'admin',
//       avatar: null,
//       unixUID: 2000 },
//     ip: '192.168.5.119' ],
//   [ { uuid: 'ee087050-cf12-404a-8332-d50c511391ed',
//       username: '1',
//       avatar: null,
//       unixUID: 2000 },
//     { uuid: 'bd762043-de1e-4757-9d03-f70cd349bafd',
//       username: '2',
//       avatar: null,
//       unixUID: 2001 },
//     { uuid: 'b47f0390-9e8d-4e78-9ca9-c35dbb1348b3',
//       username: '3',
//       avatar: null,
//       unixUID: 2002 },
//     { uuid: '18431945-1652-4bdf-91fc-0209552d42c5',
//       username: '4',
//       avatar: null,
//       unixUID: 2003 },
//     { uuid: 'b5a767c1-b1d0-4fe7-afdc-2e7f923ae556',
//       username: '5',
//       avatar: null,
//       unixUID: 2004 },
//     { uuid: '05ceb01a-2600-40c9-8956-7b1bd0584f17',
//       username: '6',
//       avatar: null,
//       unixUID: 2005 },
//     { uuid: '78c0ebb6-ecc1-42d3-a0ec-de63b4c05965',
//       username: '7',
//       avatar: null,
//       unixUID: 2006 },
//     { uuid: '21d38b7f-62fd-4d56-87f6-a456da8bd4ac',
//       username: '8',
//       avatar: null,
//       unixUID: 2007 },
//     { uuid: 'f23b3e61-99b8-49c5-8e98-47a27e329502',
//       username: '9',
//       avatar: null,
//       unixUID: 2008 },
//     ip: '192.168.5.178' ] ]


app.listen(3000, () => {
  console.log('Listening at port 3000... ...')
})
