import { combineReducers } from 'redux';
import todoListReducer from './reducertodolist';

const rootReducer = combineReducers({
    todoList: todoListReducer
});

export default rootReducer;