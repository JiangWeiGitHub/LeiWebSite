const defaultState = {
	state: 'READY', // READY, BUSY, REJECTED, TIMEOUT, ERROR, LOGGEDIN
	obj: {},
	deviceList: [],
	userList: [],
	selectIndex : 0
}

const systemReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'UPDATE_SYSTEM_INFOR':
			return Object.assign({}, state, {deviceList: action.deviceList, userList: action.userList})
		default:
			return state
	}
}

export default systemReducer
