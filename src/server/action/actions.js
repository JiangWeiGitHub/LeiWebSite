const actions = {
	updateSystemInfor(deviceList, userList) {
		return {
			type: 'UPDATE_SYSTEM_INFOR',
			deviceList: deviceList,
      userList: userList,
		}
	},
}

export default actions