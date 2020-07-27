import React from 'react'
import ReactDOM from 'react-dom'
//import './index.scss'
import App from './App'
import AppWilliam from './App_william'
import * as serviceWorker from './serviceWorker'

// 第一步 匯入createStore
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

// 這是react-redux要綁定使用的最上層元件
import { Provider } from 'react-redux'

import { rootReducers } from './reducers'

// 第三步 由rootReducer建立store
//const store = createStore(rootReducer)
// const store = createStore(
//   rootReducer /* preloadedState, */,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(
  <React.StrictMode>
    {/* 最上層的react與redux綁定用的元件，屬性即為上面建立的store */}
    <Provider store={store}>
      { console.log('store', store) }
      <App />
      <AppWilliam />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()