import React from 'react';

import { connect } from 'react-redux'; // 高階元件

import { increase, decrease } from "./actions/appWilliam";

// import { bindActionCreators } from 'redux';

const CounterWilliam = (props) => {
    console.log('CounterWilliam', props)
    return (
        <>
            <h1> {props.william} </h1>
            <button onClick={ ()=>{props.increase({ value: 1 })} }> ++ </button>
            <button onClick={ ()=>{props.decrease({ value: 1 })} }> -- </button>
        </>
    )
}

// store 來自index 
// mapStateToProps 是 gettter 得到資料
const mapStateToPropss =(store)=>{
    console.log('store', store) // store 來自 reducers（store） 的 state 
    return { 
        william: store.counterWilliam,
    } 
}

// const mapDispatchToProps = null;

// connect 是高階元件 / 擁有 dispatch 
// connect 是容器元件
export default connect(mapStateToPropss, { increase, decrease })(CounterWilliam); // 4-1 / 部分綁定


