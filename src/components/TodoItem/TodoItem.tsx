import { useState } from 'react';
import { Button } from '../Button/Button';
import styles from './TodoItem.module.css';

interface IProps {
  text: string;
  onDelete: () => void;
  onComplete: () => void;
  completed: boolean;
  time: string;
}

export const TodoItem = ({
  text,
  onDelete,
  onComplete,
  completed,
  time,
}: IProps) => {
  const [showTime, setShowTime] = useState(false);

  const toggleShowTime = () => {
    setShowTime(!showTime);
  };

  const checked = completed ? styles.completedTodo : styles.uncompletedTodo;

  return (
    <div className={styles.todoItem}>
      <Button text='&#10003;' onClick={onComplete} />
      <p className={checked} onClick={toggleShowTime}>
        {text}
      </p>
      {showTime ? <p> {time}</p> : null}
      <Button text='&#9747;' onClick={onDelete} />
    </div>
  );
};
