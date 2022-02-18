export interface ITodoItem {
  id: string;
  text: string;
  completed: boolean;
  time: string;
}

export interface ITodoState {
  todos: ITodoItem[];
}

const defaultState: ITodoState = {
  todos: [],
};

export const todoReducer = (state = defaultState, action: any) => {
  if (action.type === 'ADD_TODO') {
    const date = new Date();
    const newTodo = {
      id: 'id' + Math.random().toString().substring(3),
      text: action.text,
      completed: false,
      time: ` Was created: ${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
    };

    const newTodos = [...state.todos, newTodo];
    return {
      todos: newTodos,
    };
  }

  if (action.type === 'DELETE_TODO') {
    const newTodos = state.todos.filter((todo) => todo.id !== action.id);
    return {
      todos: newTodos,
    };
  }
  if (action.type === 'COMPLETED_TODO') {
    const newTodos = state.todos.map((todo) => {
      if (todo.id === action.id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    return {
      todos: newTodos,
    };
  }
  return state;
};
