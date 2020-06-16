export default function counter(state = 999, action) {
    // state  是 值
    // action 是 狀態
    // console.log(action);
    switch (action.type) {
        case 'ADD_VALUE':
            return state + action.payload.value + "wiliam" // app.js 中的 store  第 50 行
        case 'SUB_VALUE':
            return state - action.payload.value
        default:
            return state
        }
    }