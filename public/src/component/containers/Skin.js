import { connect } from 'react-redux'

import ActionSet from '../../actions/actionSet.js'
import SkinComponent from '../presentation/Skin.js'

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

const Skin = connect(
  mapStateToProps,
  mapDispatchToProps
)(SkinComponent)

export default Skin
