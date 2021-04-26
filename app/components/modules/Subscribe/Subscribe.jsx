import styles from './Subscribe.module.scss';
import useSubscribe, { LOADING_STATE } from '@module/Subscribe/useSubscribe';

const Subscribe = () => {
  const { loadingState, setMail, submit } = useSubscribe();

  return (
    <div className={styles.subscribe}>
      <div className={styles.description}>
        <h2>Join now</h2>
        <p>
          We will only send you information about Meetups or new Community
          Infos. No spam :)
        </p>
      </div>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          className={styles.input}
          onChange={(e) => setMail(e.target.value)}
          disabled={loadingState === LOADING_STATE.LOADING}
        />
        <button onClick={submit}>submit</button>
      </div>
    </div>
  );
};

export default Subscribe;
