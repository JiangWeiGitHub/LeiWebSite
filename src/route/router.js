import { Router } from 'express'
import url from 'url'
import path from 'path'

import queryData from '../lib/storage.js'

let router = Router()

router.get('/*', (req, res) => {
  let pathname = url.parse(req.url).pathname
  let tpath = pathname.substr(1)
  console.log("aaaaaaaaaaaaaaaaaaaaa" + tpath)
  let value = queryData('SELECT * FROM weather')
  value.then(function(value){
    return res.status(200).json(value)
  }).catch(function(error){
    console.log(error)
  })
})


module.exports = router
