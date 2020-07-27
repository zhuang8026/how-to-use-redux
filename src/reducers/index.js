// 組合使用
// 第一步 匯入 createStore
import { combineReducers } from 'redux';
import counter from './counter';
import todos1 from './todos1';
import todos2 from './todos2';

import counterWilliam from './counter_william';



export const rootReducers = combineReducers({
    counter,
    todos1,
    todos2,
    counterWilliam,
})