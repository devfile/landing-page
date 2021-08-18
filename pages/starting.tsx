import { GetStaticProps, InferGetStaticPropsType } from 'next';

import GettingStarted from '@components/starting/GettingStarted';
import { getStartingFile } from '@util/server';

/**
 * Renders the {@link StartingPage}
 */
const StartingPage: React.FC<InferGetStaticPropsType<GetStaticProps>> = (props) => (
  <div>
    <GettingStarted appDevfiles={props.appDevfiles} navProps={props} />
  </div>
);

export const getStaticProps: GetStaticProps = async () => {
  const appDevfiles = await getStartingFile('/WebpageText/starting/appDevfiles.md');
  const appStarting = await getStartingFile('/WebpageText/starting/appStarting.md');
  const techDevfiles = await getStartingFile('/WebpageText/starting/techDevfiles.md');
  const techStarting = await getStartingFile('/WebpageText/starting/techStarting.md');
  const enterpriseDevfiles = await getStartingFile('/WebpageText/starting/enterpriseDevfiles.md');
  const enterpriseStarting = await getStartingFile('/WebpageText/starting/enterpriseStarting.md');
  const registryDevfiles = await getStartingFile('/WebpageText/starting/registryDevfiles.md');
  const registryStarting = await getStartingFile('/WebpageText/starting/registryStarting.md');
  return {
    props: {
      appDevfiles,
      appStarting,
      techDevfiles,
      techStarting,
      enterpriseDevfiles,
      enterpriseStarting,
      registryDevfiles,
      registryStarting
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 15 seconds
    revalidate: 15
  };
};

export default StartingPage;
