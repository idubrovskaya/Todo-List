import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { counterReducer } from './reducers/counterReducer';
import { todoReducer } from './reducers/todoReducer';

export const store = createStore(todoReducer, composeWithDevTools());
export const store2 = createStore(counterReducer);
