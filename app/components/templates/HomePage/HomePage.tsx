import Subscribe from '@module/Subscribe/Subscribe';
import Hero from '@module/Hero/Hero';

interface Props {
  upcomingEvent: Event;
}

const HomePage = ({ upcomingEvent }: Props) => (
  <>
    <Hero upcomingEvent={upcomingEvent} />
    <Subscribe />
  </>
);

export default HomePage;
