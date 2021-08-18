import { InferGetStaticPropsType, GetStaticProps } from 'next';
import { Stack, StackItem } from '@patternfly/react-core';

import LeadBanner from '@components/index/LeadBanner';
import WhyDevfiles from '@components/index/WhyDevfiles';
import ValueProps from '@components/index/ValueProps';
import KeyFeatures from '@components/index/KeyFeatures';
import { getTitleDescriptionList, getDescriptionList } from '@util/server';

import type { TitleDescriptionList } from 'custom-types';

/**
 * Renders the {@link HomePage}
 */

const HomePage: React.FC<InferGetStaticPropsType<GetStaticProps>> = ({
  keyFeaturesList,
  valuePropsList,
  whyDevfilesList,
  leadBannerList
}: InferGetStaticPropsType<GetStaticProps>) => (
  <div>
    <Stack>
      <StackItem
        style={{
          backgroundColor: 'var(--pf-global--BackgroundColor--dark-100)',
          color: 'var(--pf-global--Color--light-200)',
          padding: '7rem'
        }}
      >
        <LeadBanner leadBannerList={leadBannerList} />
      </StackItem>
      <StackItem
        isFilled
        style={{
          backgroundColor: 'var(--pf-global--BackgroundColor--200)',
          color: 'var(--pf-global--Color--100)',
          padding: '3rem'
        }}
      >
        <WhyDevfiles whyDevfilesList={whyDevfilesList} />
      </StackItem>
      <StackItem
        isFilled
        style={{
          backgroundColor: 'var(--pf-global--BackgroundColor--100)',
          color: 'var(--pf-global--Color--100)',
          padding: '3rem'
        }}
      >
        <ValueProps valuePropsList={valuePropsList} />
      </StackItem>
      <StackItem
        style={{
          backgroundColor: 'var(--pf-global--BackgroundColor--200)',
          color: 'var(--pf-global--Color--100)',
          padding: '3rem'
        }}
      >
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
  const leadBannerList: string[] = await getDescriptionList(
    '/WebpageText/index/LeadBannerList.json'
  );
  return {
    props: {
      keyFeaturesList,
      valuePropsList,
      whyDevfilesList,
      leadBannerList
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 15 seconds
    revalidate: 15
  };
};

export default HomePage;
