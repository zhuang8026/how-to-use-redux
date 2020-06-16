import React , {Component, useState}from 'react';

import { connect } from 'react-redux'; // 高階元件

import { ADD_VALUE, SUB_VALUE } from './actions/actionType';

// 萬用字符 / 全部綁定
import * as actionCreators from './actions'; 

// 部分綁定
import { addValue, subValue } from './actions'; 

const Counter = (props) => {
    // const [total, setTotal] = useState(0);
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

// 1-1 
const mapDispatchToProps = null; // connect + 自動得到 dispatch 的值 

// connect 是高階元件 / 擁有 dispatch 

// export default connect(mapStateToProps, mapDispatchToProps)(Counter); // 1-1 

// export default connect(mapStateToProps)(Counter); // 2-1

// export default connect(mapStateToProps, actionCreators)(Counter); // 3-1 / 萬用字符

export default connect(mapStateToProps, { addValue, subValue })(Counter); // 4-1 / 部分綁定


