import path from 'path'
import express, { Router } from 'express'
import bodyParser from 'body-parser'

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

app.listen(3000, () => {
  console.log('Listening at port 3000... ...')
})
