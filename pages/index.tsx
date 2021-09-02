import { MainPageText } from 'custom-types';
import { ValuePropositions, WhyDevfiles, KeyFeatures } from '@src/components';
import { getMainPageText } from '@src/util/server';
import { InferGetStaticPropsType, GetStaticProps } from 'next';
import { Stack, StackItem } from '@patternfly/react-core';

/**
 * Renders the {@link HomePage}
 */

const HomePage: React.FC<InferGetStaticPropsType<GetStaticProps>> = ({
  mainPageText
}: InferGetStaticPropsType<GetStaticProps>) => (
  <div>
    <Stack>
      <StackItem isFilled>
        <WhyDevfiles whyDevfilesContainer={(mainPageText as MainPageText).WhyDevfiles} />
      </StackItem>
      <StackItem isFilled>
        <ValuePropositions
          valuePropositionContainer={(mainPageText as MainPageText).ValuePropositions}
        />
      </StackItem>
      <StackItem isFilled>
        <KeyFeatures keyFeaturesContainer={(mainPageText as MainPageText).KeyFeatures} />
      </StackItem>
    </Stack>
  </div>
);

export const getStaticProps: GetStaticProps = async () => {
  const mainPageText = await getMainPageText();

  return {
    props: {
      mainPageText
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 15 seconds
    revalidate: 15
  };
};

export default HomePage;
