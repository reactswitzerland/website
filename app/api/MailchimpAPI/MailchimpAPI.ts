import RestClient from '../RestClient';
import { AxiosResponse } from 'axios';

const getSubscriberCount = (): Promise<AxiosResponse<SubscriberCount>> =>
  RestClient.get<SubscriberCount>('http://localhost:3000/api/mailchimp/count');

export default {
  getSubscriberCount,
};
