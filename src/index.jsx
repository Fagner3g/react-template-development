import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './redux-flow/configure-store'
import App from './app'

import 'normalize-css'


const INITIAL_STATE = {}
const store = configureStore(INITIAL_STATE)

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'))

//module.hot.accept();