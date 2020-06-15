import React , {Component, useState}from 'react';

import { connect } from 'react-redux'; // 高階元件

const Counter = (props) => {
    // const [total, setTotal] = useState(0);
    console.log(props);
    const { total, dispatch } = props;
    return (
        <>
        <h1>{total}</h1>
        <button
            onClick={() => {
                dispatch( { type: 'ADD_VALUE', value: 1 } )
            }}
        >
            +1
        </button>
        <button
            onClick={() => {
                dispatch( { type: 'MINUS_VALUE', value: 1 } )
            }}
        >
            -1
        </button>
        </>
    )
}

// store 來自index
const mapStateToProps =(store)=>{
    return {total: store.counter}
}

const mapDispatchToProps = null; // connect + 自動得到 dispatch 的值 

// connect 是高階元件
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
