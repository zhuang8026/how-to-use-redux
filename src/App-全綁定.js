import React , {Component, useState}from 'react';

import { connect } from 'react-redux'; // 高階元件

// 萬用字符 / 全部綁定
import * as actionCreators from './actions'; 

const Counter = (props) => {
    console.log(props);
    console.log(actionCreators)
    return (
        <>
        <h1>{props.total}</h1>
        <button
            onClick={() => {
                // 改變redux的參數
                // dispatch 是 setter 設定資料
                props.addValue( { value: 1 } )
            }}
        >
            +1
        </button>
        <button
            onClick={() => {
                props.subValue( { value: 1 } )
            }}
        >
            -1
        </button>
        </>
    )
}

// store 來自index 
// mapStateToProps 是 gettter 得到資料
const mapStateToProps =(store)=>{
    return { total: store.counter } 
}
export default connect(mapStateToProps, actionCreators)(Counter); // 3-1 / 萬用字符



