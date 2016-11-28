import path from 'path'
import express, { Router } from 'express'
import bodyParser from 'body-parser'
import deviceScan from '../lib/lib/device'

let app = express()
let router = Router()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/test', require('./route/router.js'));

app.use(express.static('public/dist'))

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/dist/index.html'))
})

app.use('/', router)

deviceScan()
console.log(global.test222)
//global.test111 = deviceScan()
//console.log(test111)

app.listen(3000, () => {
  console.log('Listening at port 3000... ...')
})
