import SupabaseClient from '@api/SupabaseClient';

const getNextEvent = () =>
  SupabaseClient.from<Event>('events')
    .select()
    .order('id', { ascending: false })
    .limit(1);

export default {
  getNextEvent,
};
