import Counter from '@module/Counter/Counter';
import Subscribe from '@module/Subscribe/Subscribe';

interface Props {
  memberCount: number;
}

const HomePage = ({ memberCount }: Props): JSX.Element => (
  <>
    <Counter count={memberCount} />
    <Subscribe />
  </>
);

export default HomePage;
