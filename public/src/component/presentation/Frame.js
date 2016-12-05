import React from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {deepOrange500} from 'material-ui/styles/colors'

import Paper from 'material-ui/Paper'

import Skin from './Skin.js'
import Wisnuc from './Wisnuc.js'
import DrawerSkin from './DrawerSkin.js'

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
})

const style = {
  'height': 500,
  'width': 800,
  'margin': 'auto auto',
  'textAlign': 'center',
  'position': 'relative',
}

class Frame extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const { isOpen, switchOpenSkin } = this.props

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
        {console.log(this)}
          <ReactCSSTransitionGroup
              transitionName="wisnuc"
              transitionAppear={true}
              transitionAppearTimeout={1000}
              transitionEnter={500}
              transitionLeave={300}>
            <Paper style={style} zDepth={5}>
              <Wisnuc isOpen={this.props.isOpen} switchOpenSkin={this.props.switchOpenSkin} />              
            </Paper>
          </ReactCSSTransitionGroup>

          <DrawerSkin isOpen={this.props.isOpen} switchOpenSkin={this.props.switchOpenSkin} />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Frame
