import Default from '@layout/Default/Default';
import HomePage from '@template/HomePage/HomePage';
import MailchimpAPI from '@api/MailchimpAPI/MailchimpAPI';

const App = ({ memberCount }: { memberCount: number }) => (
  <Default>
    WE HAVE {memberCount} Members
    <HomePage />
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
