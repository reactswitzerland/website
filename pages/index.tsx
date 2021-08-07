import Default from '@layout/Default/Default';
import HomePage from '@template/HomePage/HomePage';
import MailchimpAPI from '@api/MailchimpAPI/MailchimpAPI';

interface Props {
  memberCount: number;
}

const App = ({ memberCount }: Props): JSX.Element => (
  <Default>
    <HomePage memberCount={memberCount} />
  </Default>
);

export async function getStaticProps() {
  const { data } = await MailchimpAPI.getSubscriberCount();

  return {
    props: {
      memberCount: data.count,
    },
    revalidate: 1,
  };
}

export default App;
