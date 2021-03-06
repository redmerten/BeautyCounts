
//import 'materialize-css/dist/css/materialize.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware} from 'redux' //redux directly sends action to store
import reduxThunk from 'redux-thunk'  //thunk allows action passed to dispatch function first
import 'normalize.css'

import App from './components/App'

import reducers from './reducers'
//import registerServiceWorker from './registerServiceWorker'

//param is all reducers which are the data
//to get started param 1:dummy reducer to get started, 2: initial state, 3:
//const store = createStore(()=>[], {}, applyMiddleware())
const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

//Provider is a React Component that is hooked to redux store via middleware
//index.html has a root div named root
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,

  document.querySelector('#root'))
