import React from 'react';
import MailchimpAPI from '@api/MailchimpAPI/MailchimpAPI';

export enum LOADING_STATE {
  INITIAL = 'INITIAL',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

interface UseSubscribeReturn {
  mail: string;
  loadingState: LOADING_STATE;
  isSubscribed: boolean;
  setMail: (mail: string) => void;
  submit: () => void;
}

const useSubscribe = (): UseSubscribeReturn => {
  const [mail, setMail] = React.useState<string>();
  const [loadingState, setLoadingState] = React.useState<LOADING_STATE>(
    LOADING_STATE.INITIAL
  );

  const submit = () => {
    setLoadingState(LOADING_STATE.LOADING);
    MailchimpAPI.addSubscriber(mail)
      .then(() => setLoadingState(LOADING_STATE.SUCCESS))
      .catch(() => setLoadingState(LOADING_STATE.ERROR));
  };

  return {
    loadingState,
    mail,
    isSubscribed: loadingState === LOADING_STATE.SUCCESS,
    setMail,
    submit,
  };
};

export default useSubscribe;
