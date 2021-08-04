import Icon, { Icons } from '@element/Icon/Icon';
import styles from './Header.module.scss';

const Header = (): JSX.Element => (
  <header className={styles.header}>
    <div className={styles.icons}>
      <Icon icon={Icons.DISCORD} />
      <Icon icon={Icons.GITHUB} />
    </div>
  </header>
);

export default Header;
