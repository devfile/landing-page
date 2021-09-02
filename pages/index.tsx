import type { TitleDescriptionList } from 'custom-types';
import { ValuePropositions, WhyDevfiles, KeyFeatures } from '@src/components';
import { getTitleDescriptionList, getDescriptionList } from '@src/util/server';
import { InferGetStaticPropsType, GetStaticProps } from 'next';
import { Stack, StackItem } from '@patternfly/react-core';

/**
 * Renders the {@link HomePage}
 */

const HomePage: React.FC<InferGetStaticPropsType<GetStaticProps>> = ({
  keyFeaturesList,
  valuePropsList,
  whyDevfilesList
}: InferGetStaticPropsType<GetStaticProps>) => (
  <div>
    <Stack>
      <StackItem isFilled>
        <WhyDevfiles whyDevfilesList={whyDevfilesList} />
      </StackItem>
      <StackItem isFilled>
        <ValuePropositions valuePropositionList={valuePropsList} />
      </StackItem>
      <StackItem isFilled>
        <KeyFeatures keyFeaturesList={keyFeaturesList} />
      </StackItem>
    </Stack>
  </div>
);

export const getStaticProps: GetStaticProps = async () => {
  const keyFeaturesList: TitleDescriptionList = await getTitleDescriptionList(
    '/WebpageText/index/KeyFeaturesList.json'
  );
  const valuePropsList: TitleDescriptionList = await getTitleDescriptionList(
    '/WebpageText/index/ValuePropsList.json'
  );
  const whyDevfilesList: string[] = await getDescriptionList(
    '/WebpageText/index/WhyDevfilesList.json'
  );
  return {
    props: {
      keyFeaturesList,
      valuePropsList,
      whyDevfilesList
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 15 seconds
    revalidate: 15
  };
};

export default HomePage;
