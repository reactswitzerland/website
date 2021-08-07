import { MouseEvent } from 'react';
import styles from './Button.module.scss';

interface Props {
  children: string;
  onClick?: (e: MouseEvent) => void;
  href?: string;
}

const Button = ({ children, onClick, href }: Props): JSX.Element => {
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={styles.button}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
