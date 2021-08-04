import styles from './Hero.module.scss';
import Button from '@element/Button/Button';

const Hero = ({ upcomingEvent }: { upcomingEvent: Event }): JSX.Element => (
  <>
    <h1 className={styles.title}>Welcome to the Swiss React Community!</h1>
    <div className={styles.upcomingEvent}>
      <div className={styles.upcomingEventHeader}>
        <h3>{upcomingEvent.title}</h3>
        {upcomingEvent.date && <h4>{upcomingEvent.date}</h4>}
      </div>
      <p>{upcomingEvent.description}</p>
      {upcomingEvent.link && (
        <Button href={upcomingEvent.link}>Register</Button>
      )}
    </div>
  </>
);

export default Hero;
