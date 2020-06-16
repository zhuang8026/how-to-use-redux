import React , {Component, useState}from 'react';

import { connect } from 'react-redux'; // 高階元件

import { addValue, subValue } from "./actions";
import { bindActionCreators } from 'redux';

const Counter = (props) => {
    // const [total, setTotal] = useState(0);
    console.log(props);
    console.log(bindActionCreators)

    const { total, dispatch } = props;
    return (
        <>
        <h1>{total}</h1>
        <button
            onClick={() => {
                // 改變redux的參數
                // dispatch 是 setter 設定資料

                // 
                // dispatch( { type: ADD_VALUE, payload: { value: 1 } } )

                //
                // props.dispatch( { type: ADD_VALUE, payload: { value: 1 } } )
                props.addValue( { value: 1 } )
            }}
        >
            +1
        </button>
        <button
            onClick={() => {
                // props.dispatch( { type: SUB_VALUE, payload: { value: 1 }} )
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

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addValue, subValue }, dispatch);
};

// connect 是高階元件 / 擁有 dispatch 
// connect 是容器元件
export default connect(mapStateToProps, mapDispatchToProps)(Counter); // 4-1 / 部分綁定


