import React , {Component, useState}from 'react';

import connect from 'react-redux';

const Counter = (props) => {
    const [total, setTotal] = useState(0);

    return (
        <>
        <h1>{total}</h1>
        <button
            onClick={() => {
            setTotal(total + 1)
            }}
        >
            +1
        </button>
        <button
            onClick={() => {
            setTotal(total - 1)
            }}
        >
            -1
        </button>
        </>
    )
}

// store 來自index
const mapDispatchToProps =(store)=>{
    return {total: store.counter}
}

const mapDispatchToProps =null; // 自動得到 dispatch 的值 

// connect 是高階元件
export default connect(mapTtateToProps, mapDispatchToProps)(Counter);
