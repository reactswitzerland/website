import RestClient from '../RestClient';
import { AxiosResponse } from 'axios';

const getSubscriberCount = (): Promise<AxiosResponse<SubscriberCount>> =>
  RestClient.get<SubscriberCount>('/api/mailchimp/count');

const addSubscriber = (mail: string): Promise<AxiosResponse<SubscribeMail>> =>
  RestClient.post<SubscribeMail>('/api/mailchimp/subscribe', { mail });

export default {
  getSubscriberCount,
  addSubscriber,
};
