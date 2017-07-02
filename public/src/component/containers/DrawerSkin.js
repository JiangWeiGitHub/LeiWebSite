import { connect } from 'react-redux'

import ActionSet from '../../actions/actionSet.js'
import DrawerSkinComponent from '../presentation/DrawerSkin.js'

const mapStateToProps = (state) => {

  return {
    isOpen: state.DrawerSkinState.isOpen,
    bgPath: state.DrawerSkinState.bgPath,
  }
}

const mapDispatchToProps = (dispatch, bgPath) => {

  return {
    onChecked: (bgPath) => dispatch(ActionSet.onChecked(bgPath)),
  }
}

const DrawerSkin = connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawerSkinComponent)

export default DrawerSkin

