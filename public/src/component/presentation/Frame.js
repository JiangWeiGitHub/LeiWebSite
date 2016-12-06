import React from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {deepOrange500} from 'material-ui/styles/colors'

import Paper from 'material-ui/Paper'

import Skin from '../containers/Skin.js'
import Wisnuc from './Wisnuc.js'
import DrawerSkin from '../containers/DrawerSkin.js'

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

    // const { isOpen, switchOpenSkin } = this.props

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <ReactCSSTransitionGroup
              transitionName="wisnuc"
              transitionAppear={true}
              transitionAppearTimeout={1000}
              transitionEnter={500}
              transitionLeave={300}>
            <Paper style={style} zDepth={5}>
              <Wisnuc />              
            </Paper>
          </ReactCSSTransitionGroup>

          <DrawerSkin />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Frame
