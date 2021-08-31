import React from 'react';

import { connect } from 'react-redux'; // 高階元件

import { addValue, subValue, addValueAsync } from './actions/';

import Test01 from './components/Test01';
// // 萬用字符 / 全部綁定
// import * as actionCreators from './actions/';

import { bindActionCreators } from 'redux';

const Counter = props => {
    // const [total, setTotal] = useState(0);
    console.log('app:', props);
    // console.log('bindActionCreators', bindActionCreators)

    const { total, dispatch } = props;
    return (
        <>
            <h1>{total}</h1>
            <button
                onClick={() => {
                    props.addValueAsync({ value: 1 });
                }}
            >
                +1 異步
            </button>

            <button
                onClick={() => {
                    props.addValue({ value: 1 });
                }}
            >
                +1
            </button>

            <button
                onClick={() => {
                    props.subValue({ value: 1 });
                }}
            >
                -1
            </button>
            <Test01 />
        </>
    );
};

// store 來自index
// mapStateToProps 是 gettter 得到資料
const mapStateToProps = store => {
    console.log('store', store); // store 來自 reducers（store） 的 state

    return {
        total: store.counter
    };
};

const mapDispatchToProps = null;

// connect 是高階元件 / 擁有 dispatch
// connect 是容器元件
export default connect(mapStateToProps, { addValue, subValue, addValueAsync })(Counter); // 4-1 / 部分綁定
