import { useState } from 'react';
import { Form } from '../Form/Form';
import { TodoItem } from '../TodoItem/TodoItem';

interface ITodoItem {
  id: string;
  text: string;
  completed: boolean;
  time: string;
}

export const TodoList = () => {
  const [todoItem, setTodoItem] = useState<string>('');

  const [todos, setTodos] = useState<ITodoItem[]>([]);

  const onClickComplete = (id: string) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo }
      ),
    ]);
  };
  const onClickDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addNewTodo = () => {
    const date = new Date();

    const newTodo = {
      id: Math.random().toString().substring(3),
      text: todoItem,
      completed: false,
      time: ` Was created: ${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
    };
    if (newTodo.text === '') {
      return;
    }
    setTodos([...todos, newTodo]);
    setTodoItem('');
  };

  return (
    <div>
      <Form
        todoItem={todoItem}
        setTodoItem={setTodoItem}
        addNewTodo={addNewTodo}
      />
      {todos.map((item) => {
        return (
          <TodoItem
            key={item.id}
            text={item.text}
            onComplete={() => onClickComplete(item.id)}
            onDelete={() => onClickDelete(item.id)}
            completed={item.completed}
            time={item.time}
          />
        );
      })}
      <p style={{ color: 'white', margin: '10px' }}>
        Number of tasks: {todos.length}
      </p>
      <p style={{ color: 'white', margin: '10px  10px 0' }}>
        FInished:{' '}
        {todos.reduce((prev, cur) => {
          if (cur.completed) {
            return prev + 1;
          }
          return prev;
        }, 0)}
      </p>
    </div>
  );
};
