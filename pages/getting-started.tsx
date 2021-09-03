import { GettingStartedMainView } from '@src/components';
import { getGettingStartedFiles } from '@src/util/server';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

/**
 * Renders the {@link GettingStartedMainView}
 */
const GettingStarted: React.FC<InferGetStaticPropsType<GetStaticProps>> = ({
  gettingStartedFiles
}: InferGetStaticPropsType<GetStaticProps>) => (
  <GettingStartedMainView gettingStartedFiles={gettingStartedFiles} />
);

export const getStaticProps: GetStaticProps = async () => {
  const gettingStartedFiles = await getGettingStartedFiles();
  return {
    props: {
      gettingStartedFiles
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 15 seconds
    revalidate: 15
  };
};

export default GettingStarted;
