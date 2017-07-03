import React from 'react'
import { render } from 'react-dom'

import IconButton from 'material-ui/IconButton'
import Cached from 'material-ui/svg-icons/action/cached'


import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

class Update extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
    };

    this.handleOpen = () => {
      this.setState({open: true});
    };

    this.handleClose = () => {
      this.setState({open: false});
    };
  }



  render() {

    const { switchOpenSkin } = this.props

    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];


    // console.log('>>>>>>>>>>>>>')
    // console.log(switchOpenSkin)
    // console.log('<<<<<<<<<<<<<')

    return (
      <div>
        <IconButton onClick={this.handleOpen}>
          <Cached />
          <Dialog
            title="Dialog With Date Picker"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            Open a Date Picker dialog from within a dialog.
            <DatePicker hintText="Date Picker" />
          </Dialog>
        </IconButton>
      </div>
    )
  }
}

export default Update
