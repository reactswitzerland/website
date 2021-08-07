import Default from '@layout/Default/Default';
import HomePage from '@template/HomePage/HomePage';
import MailchimpAPI from '@api/MailchimpAPI/MailchimpAPI';
import SupabaseAPI from '@api/SupabaseAPI/SupabaseAPI';

interface Props {
  memberCount: number;
  upcomingEvent: Event;
}


const App = ({ memberCount }: Props): JSX.Element => (
  <Default>
    <HomePage memberCount={memberCount} upcomingEvent={upcomingEvent} />
  </Default>
);

export async function getStaticProps() {
  const {
    data: { count: memberCount },
  } = await MailchimpAPI.getSubscriberCount();
  const { data: upcomingEvent } = await SupabaseAPI.getNextEvent();

  return {
    props: {
      memberCount,
      upcomingEvent: upcomingEvent[0],
    },
    revalidate: 1,
  };
}

export default App;
