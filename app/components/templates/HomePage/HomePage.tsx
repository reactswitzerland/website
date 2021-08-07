import Counter from '@module/Counter/Counter';
import Subscribe from '@module/Subscribe/Subscribe';
import Hero from '@module/Hero/Hero';

interface Props {
  upcomingEvent: Event;
  memberCount: number;
}

const HomePage = ({ memberCount, upcomingEvent }: Props): JSX.Element => (
  <>
    <Hero upcomingEvent={upcomingEvent} />
    <Counter count={memberCount} />
    <Subscribe />
  </>
}

export default HomePage;
