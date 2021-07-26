import { InferGetStaticPropsType, GetStaticProps } from 'next';

import GettingStarted from '@components/starting/GettingStarted';

/**
 * Renders the {@link StartingPage}
 */
const StartingPage: React.FC<InferGetStaticPropsType<GetStaticProps>> = () => (
  <div>
    <GettingStarted />
  </div>
);

export default StartingPage;
