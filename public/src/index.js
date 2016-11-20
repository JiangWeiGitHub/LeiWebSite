import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducerRoot from './reducers/ReducerRoot.js'
import ContainerRoot from './component/containers/ContainerRoot.js'

let store = createStore(reducerRoot)

render(
  <Provider store={store}>
    <ContainerRoot />
  </Provider>,
  document.getElementById('root')
)
