// 測試 function
// reducer
// reducer 是一個純函數，用來實現應用的更新邏輯，也就是給定當前狀態和被分發的動作，如何計算出下一個狀態
const todos = (state = [], action) => {
    switch (action.type){
        case 'ADD_TODO':
            // return 回來的值，就是 todos 的新值
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false,
                }
            ]
        case 'TOGGLE_TODO':
            // return 回來的值，就是 todos 的新值
            // map 回傳 新陣列，所以不需要再寫 "[]"
            return state.map((data, index)=>{
                if(data.id !== action.id) {
                    return data;
                } else {
                    return {
                        ...data,
                        completed: !data.completed,
                    }
                }
            })
        default:
            return state;
    }
}


// 測試 callback，測試 reducer 
const testAddTodo = () => {
    const stateBefore = [];
    const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'Learn Redux',
    }

    const stateAfter = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false,
        }
    ]

    deepFreeze(stateBefore); // 強制原始的數組不能變化
    deepFreeze(action); // 強制原始的數組不能變化

    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter);
};

// 測試 callback，測試 reducer 
const testToggleTodo = () => {
    const stateBefore = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false,
        },
        {
            id: 1,
            text: 'Go shopping',
            completed: false,
        }
    ];
    const action = {
        type: 'TOGGLE_TODO',
        id: 1,
    }

    const stateAfter = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false,
        },
        {
            id: 1,
            text: 'Go shopping',
            completed: true
        }
    ]

    deepFreeze(stateBefore); // 強制原始的數組不能變化
    deepFreeze(action); // 強制原始的數組不能變化

    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter);
};

testAddTodo();
testToggleTodo();


testAddTodo()
console.log('所有 測試 通過');