
var WebSocketServer = require('websocket').server

import http from 'http'

import { Router } from 'express'
import url from 'url'
import path from 'path'

import queryData from '../lib/storage.js'


//let WebSocketServer = server()

let server = http.createServer( (request, response) => {
  console.log((new Date()) + ' Received request for ' + request.url)
  response.writeHead(404)
  response.end()
})

server.listen(8080, () => {
  console.log((new Date()) + ' Server is listening on port 8080')
})

let wsServer = new WebSocketServer(
  {
    httpServer: server,
    autoAcceptConnections: false
  }
)

wsServer.on('request', (request) => {
  let connection = request.accept('jiangwei-protocol', request.origin)

  console.log((new Date()) + ' Connection accepted.')

  connection.on('message', (message) => {
    if (message.type === 'utf8') {
      console.log('Received Message: ' + message.utf8Data)

      let value = queryData('SELECT * FROM weather')
      value.then(function(value){
        connection.sendUTF(value)
      }).catch(function(error){
        console.log(error)
      })

    }
    else if (message.type === 'binary') {
      console.log('Received Binary Message of ' + message.binaryData.length + ' bytes')
      connection.sendBytes(message.binaryData)
    }
  })

  connection.on('close', (reasonCode, description) => {
    console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.')
  })
})
