import Default from '@layout/Default/Default';
import HomePage from '@template/HomePage/HomePage';
import MailchimpAPI from '@api/MailchimpAPI/MailchimpAPI';
import SupabaseAPI from '@api/SupabaseAPI/SupabaseAPI';
import { useEffect, useState } from 'react';

interface Props {
  upcomingEvent: Event;
}

const App = ({ upcomingEvent }: Props): JSX.Element => {
  const [memberCount, setMemberCount] = useState<number>(0);

  useEffect(() => {
    MailchimpAPI.getSubscriberCount().then((res) =>
      setMemberCount(res.data.count)
    );
  }, []);

  return (
    <Default>
      <HomePage memberCount={memberCount} upcomingEvent={upcomingEvent} />
    </Default>
  );
};

export async function getStaticProps() {
  const { data: upcomingEvent } = await SupabaseAPI.getNextEvent();

  return {
    props: {
      upcomingEvent: upcomingEvent[0],
    },
    revalidate: 1,
  };
}

export default App;
