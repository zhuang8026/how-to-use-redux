import { createStore } from 'redux' // es6 + babel
// const { createStore } = Redux;  === var createStore = Redux.createStore; //es5 

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

const actions = {
    increase: () => ({type: 'INCREASE'}),
    decrease: () => ({type: 'DECREASE'})
}

const store = createStore(counter);        // 指定 reducers， 讓redux 知道 當動作 dispatch 的時候，狀態要如何更新

// console.log(store.getState())           // 獲取當前 redux store 當前的狀態 state = 0 
// store.dispatch({ type: 'INCREASE' })    // 調用 ‘INCREASE’， 更新 state，改變應用程式的狀態
// console.log(store.getState())           // 獲取當前 redux store 當前的狀態 state = 1

const render = () =>{
    document.body.innerText = store.getState();     // getState 获取 counter 的 state，此時 是獲得 state = 0 
}

store.subscribe(()=>{   // 注册 监听器事件 / 只允許註冊一個 callback / 只要有一個動作被 dispatch（調用），redux store 就會啟用 callback
    render()
});
render();

document.addEventListener('click', ()=>{    // 點擊 dispatch（調用）store 中 actions 中的 increase()
    store.dispatch(actions.increase()); 
})




