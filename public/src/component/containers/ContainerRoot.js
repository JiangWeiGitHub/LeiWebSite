import React from 'react'

import Frame from './Frame.js'
import Skin from './Skin.js'

const background = {
  'display': 'flex',
  'justify-content': 'center',
  'align-items':'center',
  'background': 'url(../images/backgrounds/bg_img001.jpg) no-repeat 0px 0',
  'background-size': 'cover',
  'width': '100%',
  'height': '100%',
  'min-height': 600,
  'min-width': 800,
}

const ContainerRoot = () => (
  <div style={background}>
    <Frame />
  </div>
)

export default ContainerRoot
