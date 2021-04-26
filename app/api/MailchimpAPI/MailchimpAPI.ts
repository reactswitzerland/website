import RestClient from '../RestClient';
import { AxiosResponse } from 'axios';

const getSubscriberCount = (): Promise<AxiosResponse<SubscriberCount>> =>
  RestClient.get<SubscriberCount>('http://localhost:3000/api/mailchimp/count');

const addSubscriber = (mail: string): Promise<AxiosResponse<SubscribeMail>> =>
  RestClient.post<SubscribeMail>(
    'http://localhost:3000/api/mailchimp/subscribe',
    { mail }
  );

export default {
  getSubscriberCount,
  addSubscriber,
};
