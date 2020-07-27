// ------ 說明 ------
// expect
// -> https://medium.com/@savemuse/react-%E5%89%8D%E7%AB%AF%E6%B8%AC%E8%A9%A6%E6%95%99%E5%AD%B8-2ccedbe79411
// -> https://jestjs.io/docs/en/expect.html#toequalvalue
// expect: 用來判斷是否和預期值相同的斷言庫。
// expect 來自 jest 測試框架


// deepFreeze() 方法強制原始的數組不能變化
// deepFreeze(xxxxx) xxxxx is array 
// 主要是 不改變原來的 狀態值，需返回一個 全新的狀態

// ***** 測試開始 *****
// redux 中要盡量避免數據變化，要保留原始，生成新的數據


// 測試 function
// 添加
const addCounter = (list) => {
    // list.push(0); // 原始數組變化 error！

    // list.concat([0]); // 合併數組 並返回新的 array OK！方法一
    // return list;
    
    return [...list, 0]; // es6 擴展運算符 array OK！方法二
}

// 刪除
const removeCounter = (list, index) => {
    // list.splice(index, 1); // 原始數組變化 error！
    // return list.slice(0, index).concat(list.slice(index + 1)); // 合併數組 並返回新的 array OK！方法一
    return [
        ...list.slice(0, index),    // es6 
        ...list.slice(index + 1),   // es6 
    ]
}

// 計數器 遞增
const inCrementCounter = (list, index) => {
    // list[index]++; // 原始數組變化 error！
    // return list
    // .slice(0, index) // 0 
    // .concat(list[index] + 1) // 10 +1 
    // .concat(list.slice(index + 1)); // 20
    return [
        ...list.slice(0, index),
        list[index] + 1,
        ...list.slice(index + 1),
    ]
}

// 測試 callback
const testAddCounter = () => {
    const listBefore = [];
    const listAfter = [0];

    deepFreeze(listBefore); // 強制原始的數組不能變化

    expect(
        addCounter(listBefore)
    ).toEqual(listAfter) 
};

const testRemoveCounter = () =>{
    const listBefore = [0, 10, 20]
    const listAfter = [0, 20]

    deepFreeze(listBefore); // 強制原始的數組不能變化

    expect(
        removeCounter(listBefore, 1)
    ).toEqual(listAfter)
}

const testInCrementCounter = () =>{
    const listBefore = [0, 10, 20];
    const listAfter = [0, 11, 20];

    deepFreeze(listBefore); // 強制原始的數組不能變化

    expect(
        inCrementCounter(listBefore, 1)
    ).toEqual(listAfter)
}


testAddCounter()
testRemoveCounter()
testInCrementCounter()
console.log('所有 測試 通過');