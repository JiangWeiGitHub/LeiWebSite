import React from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {deepOrange500} from 'material-ui/styles/colors'

import Paper from 'material-ui/Paper'

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
})

const style = {
  height: 100,
  width: 100,
  //'margin': 'auto auto',
  'left':'50%',
  'top':'50%',
  textAlign: 'center',
  'display': 'flex',
  'justify-content': 'center',
  'align-items': 'center'
}

class Frame extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div class='frame'>
          <Paper style={style} zDepth={2} />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Frame