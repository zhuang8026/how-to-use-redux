// 第一步 1-1
import { createStore } from 'redux' // es6 + babel
// const { createStore } = Redux;  === var createStore = Redux.createStore; //es5 

import ReactDOM from 'react-dom' // 更新 react dom

// reducers -3 
const counter = (state = 0, action) => {
    switch (action.type){
        case 'INCREASE': 
            return state + 1;
        case 'DECREASE': 
            return state - 1;
        default: 
            return state;
    }
}

// 執行的動作 -2 
const actions = {
    increase: () => ({type: 'INCREASE'}),
    decrease: () => ({type: 'DECREASE'})
}

// 組件 - 1 / 作用：展示部件，無任何業務邏輯可言
const Counter = ({
    value,
    inIncr,
    onDecr,
}) => {
    <>
        <h1>{value}</h1>
        <button onClick={inIncr}>+</button>
        <button onClick={onDecr}>-</button>
    </>
}

// 狀態更新 -4 
const store = createStore(counter);        // 指定 reducers， 讓redux 知道 當動作 dispatch 的時候，狀態要如何更新
                                           // store 是為了維護當前的狀態

// console.log(store.getState())           // 獲取當前 redux store 當前的狀態 state = 0 
// store.dispatch({ type: 'INCREASE' })    // 調用 ‘INCREASE’， 更新 state，改變應用程式的狀態
// console.log(store.getState())           // 獲取當前 redux store 當前的狀態 state = 1

const render = () =>{
    ReactDOM.render(
        // -1
        <Counter 
            value={store.getState()}
            inIncr={()=>{
                store.dispatch(actions.increase())
            }}
            onDecr={()=>{
                store.dispatch(actions.decrease())
            }}
        />,
        document.getElementById('root')
    )
}

// 第四步 註冊 及 渲染 
store.subscribe(render);
render();




