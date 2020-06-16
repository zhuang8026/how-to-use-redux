import React from 'react'
import ReactDOM from 'react-dom'
// import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'

// 第一步 匯入createStore
import { createStore, combineReducers } from 'redux'

// 這是react-redux要綁定使用的最上層元件
import { Provider } from 'react-redux'

import { rootReducers } from './reducers'
// 第二步 @reducer
// action = { type: 'ADD_VALUE', value: 2 }
// function counter(state = 999, action) {
//   console.log(action);
//   switch (action.type) {
//     case 'ADD_VALUE':
//       return state + action.value
//     case 'MINUS_VALUE':
//       return state - action.value
//     default:
//       return state
//   }
// }

// []
// function todos1(state = [{id:1, name:'william'}], action) {
//   switch (action.type) {
//     default:
//       return state
//   }
// }

// {}
// function todos2(state = {id:1, name:'william'}, action) {
//   switch (action.type) {
//     default:
//       return state
//   }
// }

// 第二之一：合併所有的reducers成一個大的reducer
// 傳入值為物件，用物件的es6的簡寫法
// const rootReducers = combineReducers({
//   counter,
//   todos1,
//   todos2,
// })

// 第三步 由rootReducer建立store
const store = createStore(
  rootReducers /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <React.StrictMode>
   {/* 最上層的react與redux綁定用的元件，屬性即為上面建立的store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()