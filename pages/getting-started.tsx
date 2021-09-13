import { GettingStartedMainView } from '@src/components';
import { getMDFiles } from '@src/util/server';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

/**
 * Renders the {@link GettingStartedMainView}
 */
const GettingStarted: React.FC<InferGetStaticPropsType<GetStaticProps>> = ({
  mdFiles
}: InferGetStaticPropsType<GetStaticProps>) => <GettingStartedMainView mdFiles={mdFiles} />;

export const getStaticProps: GetStaticProps = async () => {
  const mdFiles = await getMDFiles('/config/getting-started');
  return {
    props: {
      mdFiles
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 15 seconds
    revalidate: 15
  };
};

export default GettingStarted;
