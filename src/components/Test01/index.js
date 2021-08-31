import React from 'react';

import { connect } from 'react-redux'; // 高階元件

import { addNumber } from '../../actions';

let Test01 = props => {
    console.log('Test01-1:', props);

    return (
        <button
            onClick={() => {
                props.addNumber({ value: 1 }); // 請記住 addNumber 是從 connect 來的
                // 直接 import 會無法使用
            }}
        >
            Test01 - add number
        </button>
    );
};

// store 來自index
// mapStateToProps 是 gettter 得到資料
const mapStateToProps = store => {
    console.log('Test01-2', store); // store 來自 reducers（store） 的 state

    return {
        total: store.counter
    };
};

Test01 = connect(mapStateToProps, { addNumber })(Test01); // 這裡是 重點！使用 connect 才會有 dispatch fun
export default Test01;
