import React , {Component, useState}from 'react';

import { connect } from 'react-redux'; // 高階元件

// 部分綁定
import { addValue, subValue } from './actions'; 

const actionCreators = { addValue, subValue }

const Counter = (props) => {
    console.log(props);
    console.log(actionCreators)

    const { total, dispatch } = props;
    return (
        <>
        <h1>{total}</h1>
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

// connect 是高階元件 / 擁有 dispatch 
export default connect(mapStateToProps, actionCreators)(Counter); // 4-1 / 部分綁定


