import { connect } from 'react-redux'

import actionSet from '../actions/actionSet.js'
import Snackbar from '../components/snackbar.js'

const mapStateToProps = (state) => {
  return {
    isshow: state.isshow
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleShowTap: () => {
      dispatch(actionSet.showSnack)
    },
    handleHideTap: () => {
      dispatch(actionSet.hideSnack)
    },
    handleRequestClose: () => {
      dispatch(actionSet.hideSnack)
    }
  }
}

const SnackbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Snackbar)

export default SnackbarContainer