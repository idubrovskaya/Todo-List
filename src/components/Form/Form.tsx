import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import styles from './Form.module.css';

interface IProps {
  todoItem: string;
  setTodoItem: (text: string) => void;
  addNewTodo: () => void;
}

export const Form = ({ todoItem, setTodoItem, addNewTodo }: IProps) => {
  return (
    <div className={styles.form}>
      <Input
        value={todoItem}
        onChange={(event) => {
          setTodoItem(event.target.value);
        }}
      />
      <Button text='Add' onClick={addNewTodo} />
    </div>
  );
};
