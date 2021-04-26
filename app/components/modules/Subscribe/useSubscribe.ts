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
  setMail: (mail: string) => void;
  submit: () => void;
}

const useSubscribe = (): UseSubscribeReturn => {
  const [mail, setMail] = React.useState<string>();
  const [loadingState, setLoadingState] = React.useState<LOADING_STATE>(
    LOADING_STATE.INITIAL
  );

  const submit = async () => {
    setLoadingState(LOADING_STATE.LOADING);
    const response = await MailchimpAPI.addSubscriber(mail);
    if (response.status === 200) {
      setLoadingState(LOADING_STATE.SUCCESS);
      return;
    }
    setLoadingState(LOADING_STATE.ERROR);
  };

  return {
    loadingState,
    mail,
    setMail,
    submit,
  };
};

export default useSubscribe;
