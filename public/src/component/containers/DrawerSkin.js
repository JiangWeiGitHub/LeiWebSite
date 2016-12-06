import { connect } from 'react-redux'

import ActionSet from '../../actions/actionSet.js'
import DrawerSkinComponent from '../presentation/DrawerSkin.js'

const mapStateToProps = (state) => {
  return {
    isOpen: state.DrawerSkinState.isOpen,
    isChecked: state.DrawerSkinState.isChecked,
    bgPath: state.DrawerSkinState.bgPath,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChecked: () => dispatch(ActionSet.onChecked())
  }
}

const DrawerSkin = connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawerSkinComponent)

export default DrawerSkin

