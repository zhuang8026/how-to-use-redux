// 組合使用
// 第一步 匯入createStore
import { combineReducers } from 'redux';
import counter from './counter';
import todos1 from './todos1';
import todos2 from './todos2';

export const rootReducers = combineReducers({
    counter,
    todos1,
    todos2,
})