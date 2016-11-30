import Promise from 'bluebird'
import request from 'request'

const wisnucApi = {
  getUserList : (serverIP, serverPort) => {
    let userList = new Promise((resolve, reject) => {
      request('http://' + serverIP + ':' + serverPort + '/login', (err, res, body) => {
        if (!err && res.statusCode === 200) {
          resolve(eval(body))
        }
        else {
          reject(err)
        }
      })
    })

    return userList
  },

  getToken : (serverIP, serverPort, userName, userPassword) => {
    let token = new Promise((resolve,reject) => {
      request.get(serverIP + ':' + serverPort + '/token', {
        'auth': {
          'user': userName,
          'pass': userPassword,
          'sendImmediately': false
        }
        }, (err, res, body) => {
          if (!err && res.statusCode === 200) {
            resolve(JSON.parse(body))
          }
          else {
            reject(err)
          }
        })
      })

    return token
  },

  getAllUser: () => {
    let promise = new Promise((resolve,reject) => {
      let options = {
        method: 'GET',
        url: defaultParameters.serverIP + ':' + defaultParameters.serverPort + '/users',
        headers: {
          Authorization: user.type + ' ' + user.token
        }
      }
    
      let callback = (err, res, body) => {
        if (!err && res.statusCode === 200) {
          var users = JSON.parse(body)
          users.forEach(item => {
            item.checked === false
          })

          resolve(users)
        }
        else {
          reject(err)
        }
      }

      request(options, callback)

    })

    return promise
  },

}

export default wisnucApi