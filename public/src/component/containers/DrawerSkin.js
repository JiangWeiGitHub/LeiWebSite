import { connect } from 'react-redux'

import ActionSet from '../../actions/actionSet.js'
import DrawerSkinComponent from '../presentation/DrawerSkin.js'

const mapStateToProps = (state) => {
  return {
    isOpen: state.isOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    switchOpenSkin: () => dispatch(ActionSet.switchOpenSkin())
  }
}

const DrawerSkin = connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawerSkinComponent)

export default DrawerSkin

