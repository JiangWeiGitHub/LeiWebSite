// import websocket from 'websocket'

let WebSocketClient = require('websocket').client;
let client = new WebSocketClient();

const WSClient = () => {
  client.connect('ws://localhost:8080/', 'jiangwei-protocol')
  return client
}

// client.on('connectFailed', function(error) {
//   console.log('Connect Error: ' + error.toString())
// })

// client.on('connect', function(connection) {
//   console.log('WebSocket Client Connected')

//   connection.on('error', function(error) {
//     console.log("Connection Error: " + error.toString())
//   })

//   connection.on('close', function() {
//     console.log('jiangwei-protocol Connection Closed')
//   })

//   connection.on('message', function(message) {
//     if (message.type === 'utf8') {
//       console.log("Received Message: '" + message.utf8Data + "'")
//       string =  message.utf8Data
//     }
//   })

//   function sendNumber() {
//     if (connection.connected) {
//       var number = Math.round(Math.random() * 0xFFFFFF)
//       console.log("Sending Message: '" + number.toString() + "'")
//       connection.sendUTF(number.toString())
//       setTimeout(sendNumber, 1000)
//     }
//   }

//   sendNumber()

// })


export default WSClient