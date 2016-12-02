import websocket from 'websocket'
import http from 'http'
import url from 'url'
import path from 'path'

import queryData from '../lib/storage.js'

let server
let wsServer
let connection

const createSocketHTTPServer = () => {
  server = http.createServer( (request, response) => {
    console.log((new Date()) + ' Received request for ' + request.url)
    response.writeHead(404)
    response.end()
  })  
}

const listerHTTPServer = () => {
  server.listen(8080, () => {
    console.log((new Date()) + ' Server is listening on port 8080')
  })
}

const createWSServer = () => {
  wsServer = new websocket.server(
    {
      httpServer: server,
      autoAcceptConnections: false
    }
  )
}

const runWSServer = () => {
  wsServer.on('request', (request) => {
    connection = request.accept('jiangwei-protocol', request.origin)

    console.log((new Date()) + ' Connection accepted.')

    connection.on('message', (message) => {
      if (message.type === 'utf8') {
        console.log('Received Message: ' + message.utf8Data)
        if(message.utf8Data === 'getSystemInfor') {
          connection.sendUTF(JSON.stringify(global.userList))
        }
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
}

const WSServer = () => {
  createSocketHTTPServer()
  listerHTTPServer()
  createWSServer()
  runWSServer()
}

export default WSServer