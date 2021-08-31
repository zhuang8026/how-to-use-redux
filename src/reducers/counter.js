export default function counter(state = 999, action) {
    // state  是 值
    // action 是 狀態
    // console.log(action);
    if (typeof state === 'undefined') {
        return 0;
    }

    switch (action.type) {
        case 'ADD_VALUE':
            // return state + action.payload.value + "wiliam" // app.js 中的 store  第 50 行
            return state + action.payload.value; // app.js 中的 store  第 50 行
        case 'SUB_VALUE':
            return state - action.payload.value;
        default:
            return state;
    }
}

// es 6
// const counter = (state = 999, action) => {
//     // state  是 值
//     // action 是 狀態
//     // console.log(action);
//     if(typeof state === 'undefined'){
//         return 0;
//     }

//     switch (action.type) {
//         case 'ADD_VALUE':
//             return state + action.payload.value + "wiliam" // app.js 中的 store  第 50 行
//         case 'SUB_VALUE':
//             return state - action.payload.value
//         default:
//             return state
//     }
// }

// export default counter;
