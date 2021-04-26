import styles from './HomePage.module.scss';
import Counter from '@module/Counter/Counter';

const HomePage = () => (
  <div className={styles.content}>
    <Counter />
  </div>
);

export default HomePage;
