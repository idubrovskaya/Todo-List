import { ACTIONS } from '../constants';

export const addTodo = (text: string) => {
  return {
    type: ACTIONS.ADD_TODO,
    text: text,
  };
};

export const deleteTodo = (id: string) => {
  return {
    type: ACTIONS.DELETE,
    id: id,
  };
};

export const completedTodo = (id: string) => {
  return {
    type: ACTIONS.COMPLETED,
    id: id,
  };
};
