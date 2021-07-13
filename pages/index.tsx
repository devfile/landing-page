import { InferGetStaticPropsType, GetStaticProps } from 'next';
import { Stack, StackItem } from '@patternfly/react-core';

import LeadBanner from '@components/index/LeadBanner';
import WhyDevfiles from '@components/index/WhyDevfiles';
import KeyFeatures from '@components/index/KeyFeatures';

/**
 * Renders the {@link HomePage}
 */

const HomePage: React.FC<InferGetStaticPropsType<GetStaticProps>> = () => (
  <div>
    <Stack>
      <StackItem
        style={{
          backgroundColor: 'var(--pf-global--BackgroundColor--dark-100)',
          color: 'var(--pf-global--Color--light-200)',
          padding: '7rem',
        }}
      >
        {LeadBanner}
      </StackItem>
      <StackItem
        isFilled
        style={{
          backgroundColor: 'var(--pf-global--BackgroundColor--100)',
          color: 'var(--pf-global--Color--100)',
          padding: '3rem',
        }}
      >
        {WhyDevfiles}
      </StackItem>
      <StackItem
        style={{
          backgroundColor: 'var(--pf-global--BackgroundColor--200)',
          color: 'var(--pf-global--Color--100)',
          padding: '3rem',
        }}
      >
        {KeyFeatures}
      </StackItem>
    </Stack>
  </div>
);

export default HomePage;
