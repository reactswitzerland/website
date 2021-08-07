import Header from '@module/Header/Header';
import styles from './Default.module.scss';
import Footer from '@module/Footer/Footer';

interface Props {
  children: React.ReactNode;
}

const Default = ({ children }: Props): JSX.Element => (
  <div className={styles.default}>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Default;
