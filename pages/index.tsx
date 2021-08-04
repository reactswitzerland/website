import Default from '@layout/Default/Default';
import HomePage from '@template/HomePage/HomePage';
import MailchimpAPI from '@api/MailchimpAPI/MailchimpAPI';
import SupabaseAPI from '@api/SupabaseAPI/SupabaseAPI';

interface Props {
  memberCount: number;
  upcomingEvent: Event;
}

const App = ({ memberCount, upcomingEvent }: Props) => (
  <Default>
    <HomePage upcomingEvent={upcomingEvent} />
  </Default>
);

export async function getStaticProps() {
  const { data } = await MailchimpAPI.getSubscriberCount();
  const { data: upcomingEvent } = await SupabaseAPI.getNextEvent();

  return {
    props: {
      memberCount: data.count,
      upcomingEvent: upcomingEvent[0],
    },
    revalidate: 1,
  };
}

export default App;
