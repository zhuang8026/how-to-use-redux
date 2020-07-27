// es 6
const counterWilliam = (state = 0, action) => {
    // state  是 值
    // action 是 狀態
    console.log('action', action);
    if(typeof state === 'undefined'){
        return 0;
    }
    
    switch (action.type) {
        case 'INCREASE': 
            return state + action.payloaddata.value; // payloaddata 來自action
        case 'DECREASE': 
            return state - action.payloaddata['value'];
        default: 
            return state;
    }
}

export default counterWilliam;