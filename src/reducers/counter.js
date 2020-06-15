export default function counter(state = 999, action) {
    console.log(action);
    switch (action.type) {
        case 'ADD_VALUE':
            return state + action.value
        case 'MINUS_VALUE':
            return state - action.value
        default:
            return state
        }
    }