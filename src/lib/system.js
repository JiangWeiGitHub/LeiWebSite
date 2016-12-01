import { getDeviceList } from './device'
import wisnucApi from './user'
import defaultParameters from '../config/config'

const beforeUsing = () => {
	/* 1. get a usable device list & user list on a LAN */
	getDeviceList((rawDeviceData) => {
		rawDeviceData.forEach( (rawUserData) => {
			global.deviceList.push(rawUserData)
			wisnucApi.getUserList( rawUserData.referer.address, defaultParameters.serverPort).then( (data) => {
				data.ip = rawUserData.referer.address
				global.userList.push(data)
			})
		}) 
	})
}

export { beforeUsing }