import styles from './Button.module.css';

interface IProps {
  text: string;
  onClick: () => void;
}

export const Button = ({ text, onClick }: IProps) => {
  return (
    <div>
      <button onClick={onClick} className={styles.button}>
        {text}
      </button>
    </div>
  );
};
