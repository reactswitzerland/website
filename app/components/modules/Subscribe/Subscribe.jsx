import styles from './Subscribe.module.scss';
import useSubscribe, { LOADING_STATE } from '@module/Subscribe/useSubscribe';
import Button from '@element/Button/Button';

const TEXTS = {
  TITLE: {
    [LOADING_STATE.INITIAL]: 'Join now',
    [LOADING_STATE.LOADING]: '🚀 Signing up',
    [LOADING_STATE.SUCCESS]: '🎉 Thanks for Joining',
    [LOADING_STATE.ERROR]: '😕 Hmmm..',
  },
  DESCRIPTION: {
    [LOADING_STATE.INITIAL]:
      'We will only send you information about Meetups or new Community Infos. No spam 😇',
    [LOADING_STATE.LOADING]: '...',
    [LOADING_STATE.SUCCESS]:
      'You just received a confirmation mail as soon as you confirmed the registration you are in 👻',
    [LOADING_STATE.ERROR]:
      "We have Problems sign you up to our list. Probably you've already signed up or there is a problem with Mailchimp",
  },
};

const Subscribe = () => {
  const { loadingState, mail, isSubscribed, setMail, submit } = useSubscribe();

  return (
    <div className={styles.subscribe}>
      <div className={styles.description}>
        <h2>{TEXTS.TITLE[loadingState]}</h2>
        <p>{TEXTS.DESCRIPTION[loadingState]}</p>
      </div>
      <div className={styles.inputWrapper}>
        {isSubscribed ? (
          <div className={styles.mail}>{mail}</div>
        ) : (
          <>
            <input
              type="text"
              className={styles.input}
              onChange={(e) => setMail(e.target.value)}
              disabled={loadingState === LOADING_STATE.LOADING}
            />
            <Button onClick={submit}>submit</Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Subscribe;
