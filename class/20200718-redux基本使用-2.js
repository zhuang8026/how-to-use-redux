import { createStore } from 'redux' // es6 + babel

// reducers
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

// 解析 createStore
const createStore = (reducer) =>{
    let state;
    let listeners = [];

    const getState = () => state;

    const dispatch = (action) => { // 唯一可以 改變 內部狀態的 途徑
        state = reducer( state, action); // 將 得到新的 狀態 及 調用過來的 動作 做為參數 來 使用
        listeners.forEach(listener => listener()) // 在狀態被更新之後，我們通過調用每一個監聽者來通知 他們
    }

    const subscribe = (listenerData) =>{ // 監聽
        listeners.push(listenerData)
        return ()=>{
            listeners = listeners.filter(el => el !== listenerData)
        }
    }

    dispatch({}) // 讓 reducer 回到 初始狀態

    return { getState, dispatch, subscribe }
}

const store = createStore(counter)


