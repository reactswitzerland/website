import Header from '@module/Header/Header';
import styles from './Default.module.scss';

interface Props {
  children: React.ReactNode;
}

const Default = ({ children }: Props): JSX.Element => (
  <div className={styles.default}>
    <Header />
    {children}
  </div>
);

export default Default;
