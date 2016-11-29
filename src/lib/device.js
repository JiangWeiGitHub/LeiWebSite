import bonjour from 'bonjour'

//let deviceList = []

const deviceScan = ( func ) => {
  bonjour().find({ type: 'http' }, (data) => {
    func(data)
  })
}

const getBonjourDevice = ( data ) => {
  if( data.name.includes('WISNUC AppStation') && (deviceList.filter((arr) => arr.referer.address === data.referer.address)).length < 1 ) {
    deviceList.push(data)
  }
}

const getDeviceList = ( func ) => {
  deviceScan(getBonjourDevice)
  setTimeout(func, 1000)
}


export { getDeviceList }