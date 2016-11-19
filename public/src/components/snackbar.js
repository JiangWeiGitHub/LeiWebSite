
import React from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Snackbar from 'material-ui/Snackbar'
import RaisedButton from 'material-ui/RaisedButton'

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  }
})

class Snackbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isopen: false
    }
  }

  handleShowTap = () => {
    this.setState({
      isopen: true
    })
  }

  handleHideTap = () => {
    this.setState({
      isopen: false
    })
  }

  handleRequestClose = () => {
    this.setState({
      isopen: false
    });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
	      <div>
	        <RaisedButton
	          onTouchTap={this.handleShowTap}
	          label="Show"
	        />
          <RaisedButton
            onTouchTap={this.handleHideTap}
            label="Hide"
          />
	        <Snackbar
	          open={this.state.isopen}
	          message="I Love Freedom!"
	          autoHideDuration={4000}
	          onRequestClose={this.handleRequestClose}
	        />
	      </div>
      </MuiThemeProvider>
    )
  }
}

Snackbar.propTypes = {
  isopen: PropTypes.boolean.isRequired,
  handleShowTap: PropTypes.func.isRequired,
  handleHideTap: PropTypes.func.isRequired,
  handleRequestClose: PropTypes.func.isRequired
}

export default Snackbar