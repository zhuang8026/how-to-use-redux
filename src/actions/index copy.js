import { ADD_VALUE, SUB_VALUE } from "./actionType";

export const addValue = (payload)=>{
    console.log('原本-addValue(同步)')
    return { type: ADD_VALUE, payload } // data 是一個物件
}

// thunk -> 擁有 store dispatch action 
// https://github.com/reduxjs/redux-thunk
// 異步 addValueAsync
export const addValueAsync = (payload)=>{
    return (dispatch)=>{  // 設定 ，暫緩執行
        setTimeout(()=>{
            console.log('原本-addValue(異步)')
            dispatch( addValue(payload) )
        }, 3000)
    }
}

export const subValue = (payload)=>{
    return { type: SUB_VALUE, payload }
}
