import { getDeviceList } from './device'
import wisnucApi from './user'
import defaultParameters from '../config/config'

const beforeUsing = () => {

	/* 1. get a usable device list & user list on a LAN */
	getDeviceList((rawDeviceData) => {
		rawDeviceData.forEach( (rawUserData) => {
			global.deviceList.push(rawUserData)
			wisnucApi.getUserList( rawUserData.referer.address, defaultParameters.serverPort).then( (data) => {
        let tmp = {}
        tmp.ip = rawUserData.referer.address
        tmp.users = data
        tmp.host = rawUserData.host
        global.userList.push(tmp)
			})
		}) 
	})
}

export { beforeUsing }