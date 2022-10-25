import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import styles from './Form.module.css';
import { useState } from 'react';

interface IProps {
  addNewTodo: (todoItem: string) => void;
}

export const Form = ({ addNewTodo }: IProps) => {
  const [todoItem, setTodoItem] = useState<string>('');

  const handleAddNewTodo = () => {
    addNewTodo(todoItem.trim());
    setTodoItem('');
  };

  return (
    <div className={styles.form}>
      <Input
        value={todoItem}
        onChange={(event) => {
          setTodoItem(event.target.value);
        }}
      />
      <Button text='Add' onClick={handleAddNewTodo} />
    </div>
  );
};
