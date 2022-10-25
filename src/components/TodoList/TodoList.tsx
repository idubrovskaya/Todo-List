import { useDispatch, useSelector } from 'react-redux';
import { Form } from '../Form/Form';
import { TodoItem } from '../TodoItem/TodoItem';
import { ITodoState } from '../../redux/reducers/todoReducer';
import {
  addTodo,
  completedTodo,
  deleteTodo,
} from '../../redux/actions/todosActions';

export const TodoList = () => {
  const state = useSelector((state: ITodoState) => state);
  const todos = state.todos;
  const dispatch = useDispatch();

  const onClickComplete = (id: string) => {
    dispatch(completedTodo(id));
  };

  const onClickDelete = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const addNewTodo = (text: string) => {
    return text !== '' ? dispatch(addTodo(text)) : null;
  };

  const finishedTodos = todos.reduce((prev, cur) => {
    if (cur.completed) {
      return prev + 1;
    }
    return prev;
  }, 0);

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
        Finished: {finishedTodos}
      </p>
    </div>
  );
};
