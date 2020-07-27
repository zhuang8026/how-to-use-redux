
import { INCREASE, DECREASE} from './actionType';

export const increase = (payloaddata)=>{
    return { type: INCREASE, payloaddata } // data 是一個物件
}

export const decrease = (payloaddata)=>{
    return { type: DECREASE, payloaddata }
}
