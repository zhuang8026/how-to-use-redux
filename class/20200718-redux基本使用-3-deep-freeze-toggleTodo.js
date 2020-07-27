// 測試 function
// 添加
const toggleTodo = (todo) => {
    // todo.completed = !todo.completed; // error !

    // return Object.assign( // ok !
    //     {},
    //     todo,
    //     { completed: !todo.completed }
    // )
    
    return { // ok !
        ...todo,
        completed: !todo.completed,
    };
}


// 測試 callback
const testToggleTodo = () => {
    const todoBefore = {
        id: 0,
        text: 'Learn Redux',
        completed: false,
    }

    const todoAfter = {
        id: 0,
        text: 'Learn Redux',
        completed: true,
    }

    deepFreeze(listBefore); // 強制原始的數組不能變化

    expect(
        toggleTodo(todoBefore)
    ).toEqual(todoAfter);
};



testToggleTodo()
console.log('所有 測試 通過');