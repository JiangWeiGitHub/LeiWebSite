import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducerRoot from './reducers/ReducerRoot.js'
import SkinState from './reducers/Skin.js'
import ContainerRoot from './component/containers/ContainerRoot.js'

const store = createStore(SkinState)

global.store = store

render(
  <Provider store={store}>
    <ContainerRoot />
  </Provider>,
  document.getElementById('root')
)
