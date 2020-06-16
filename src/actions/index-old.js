import { ADD_VALUE, SUB_VALUE } from "./actionType";

ex. payload = { value:1 }
export const addValue = (payload)=>{
    return { type: ADD_VALUE, payload } // data 是一個物件
}

export const subValue = (payload)=>{
    return { type: SUB_VALUE, payload }
}