import { DefaultProps } from 'custom-types';
import mainPage from '@info/mainPage';
import type { NextPage } from 'next';
import { ValuePropositions, WhyDevfiles, KeyFeatures, Banner, Header } from '@src/components';
import { Stack, StackItem } from '@patternfly/react-core';

export type HomePageProps = DefaultProps;

const Home: NextPage<HomePageProps> = () => (
  <>
    <Header>
      <Banner />
    </Header>
    <Stack>
      <StackItem isFilled>
        <WhyDevfiles whyDevfiles={mainPage.WhyDevfiles} />
      </StackItem>
      <StackItem isFilled>
        <ValuePropositions valueProposition={mainPage.ValuePropositions} />
      </StackItem>
      <StackItem isFilled>
        <KeyFeatures keyFeatures={mainPage.KeyFeatures} />
      </StackItem>
    </Stack>
  </>
);

export default Home;
