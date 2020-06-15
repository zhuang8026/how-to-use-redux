import { ADD_VALUE, SUB_VALUE } from "./actionType";

export const addValue = (data)=>{
    return { type: ADD_VALUE, data }
}

export const subValue = (data)=>{
    return { type: SUB_VALUE, data }
}