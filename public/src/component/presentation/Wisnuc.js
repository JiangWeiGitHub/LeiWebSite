import React from 'react'
import { render } from 'react-dom'
import ReactDom from 'react-dom'

import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import ActionBook from 'material-ui/svg-icons/action/book'

const wholeWisnuc= {
  'position': 'absolute',
  'top': '0',
  'left': '0',
  'width': '100%',
  'height': '100%',
}

const wrape = {
  'position': 'absolute',
  'top': '0',
  'left': '0',
  'width': '100%',
  'height': '30%',
}

const logo = {
  'height': '28',
  'position': 'absolute',
  'top': '20',
  'left': '40',
  'font-size': '21px',
  'font-weight': 'lighter',
}

const welcome = {
  'position': 'absolute',
  'width': '100%',
  'height': '100%',
  'top': '60%',
  'left': '0',
  'text-align': 'middle',
  'font-size': '28px',
  'font-weight': 'bolder',
  'text-shadow': '#9e9e9e 0 1px 0',
}

const fontTypeOne = {
  'font-size': '21px',
  'font-weight': 'lighter',
  'margin-bottom': '6px',
}

const fontTypeTwo = {
  'font-size': '25px',
  'font-weight': 'lighter',
}

const machine = {
  'width': '100%',
  'height': '100%',
  'top': '30%',
  'position': 'absolute',
}

class Wisnuc extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
    <div style={wholeWisnuc}>
      <div style={wrape}>
        <div style={logo}>
	  <span><img src="/images/wisnuc/logo.png" width="114" height="28" /> </span><span style={fontTypeOne}> Login</span>
        </div>
        <div style={welcome}><span style={fontTypeTwo}>Welcome to use </span>WISNUC</div>
      </div>
      <div style={machine}>
        <div><span><FlatButton label="<<<" primary={true} /></span><span><img src="/images/wisnuc/machine.png" width="74" height="74" /></span><span><FlatButton label=">>>" primary={true} /></span></div>
      <div>Testing Machine No. 112</div>
      <div>192.168.5.110</div>
      <div>
        <span>
          <IconButton tooltip="hello">
            <ActionBook />
          </IconButton>
        </span>
        <span>
          <IconButton tooltip="hello">
            <ActionBook />
          </IconButton>
        </span>
        <span>
          <IconButton tooltip="hello">
            <ActionBook />
          </IconButton>
        </span>
        <span>
          <IconButton tooltip="hello">
            <ActionBook />
          </IconButton>
        </span>
      </div>
      </div>
    </div>
    )
  }
}

export default Wisnuc
