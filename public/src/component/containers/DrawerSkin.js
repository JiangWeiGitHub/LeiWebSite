import { connect } from 'react-redux'

import ActionSet from '../../actions/actionSet.js'
import DrawerSkinComponent from '../presentation/DrawerSkin.js'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return dispatch
}

const DrawerSkin = connect(
  //mapStateToProps,
  //mapDispatchToProps
)(DrawerSkinComponent)

export default DrawerSkin

