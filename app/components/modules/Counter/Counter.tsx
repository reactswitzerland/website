import React from 'react';
import styles from './Counter.module.scss';

interface Props {
  count: number;
}

const Counter = ({ count }: Props): JSX.Element => {
  const countString = String(count);
  const numbers = [
    ...new Array(countString.length < 4 ? 4 - countString.length : 0).fill('0'),
    ...countString.split(''),
  ];
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <h2>Community</h2>
        <p>
          Become a part of our React community to share and receive knowledge.
        </p>
      </div>
      <div className={styles.counter}>
        <div className={styles.count}>
          {numbers.map((number, index) => (
            <div key={index} className={styles.number}>
              {number}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counter;
