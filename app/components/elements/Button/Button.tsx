import { MouseEvent } from 'react';
import styles from './Button.module.scss';

interface Props {
  children: string;
  onClick: (e: MouseEvent) => void;
}

const Button = ({ children, onClick }: Props): JSX.Element => {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
