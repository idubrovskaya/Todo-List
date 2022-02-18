import { useDispatch, useSelector } from 'react-redux';
import { Form } from '../Form/Form';
import { TodoItem } from '../TodoItem/TodoItem';
import { ITodoState } from '../../redux/reducers/todoReducer';

export const TodoList = () => {
  const state = useSelector((state: ITodoState) => state);
  const todos = state.todos;
  const dispatch = useDispatch();

  const onClickComplete = (id: string) => {
    dispatch({ type: 'COMPLETED_TODO', id: id });
  };

  const onClickDelete = (id: string) => {
    dispatch({ type: 'DELETE_TODO', id: id });
  };

  const addNewTodo = (text: string) => {
    return text !== '' ? dispatch({ type: 'ADD_TODO', text: text }) : null;
  };

  return (
    <div>
      <Form addNewTodo={addNewTodo} />
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
