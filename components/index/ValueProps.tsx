import { Grid, GridItem } from '@patternfly/react-core';

import type { TitleDescriptionList } from 'custom-types';

export interface ValuePropsProps {
  valuePropsList: TitleDescriptionList;
}

const ValueProps: React.FC<ValuePropsProps> = ({
  valuePropsList: valuePropsList
}: ValuePropsProps) => (
  <Grid hasGutter>
    {Object.entries(valuePropsList as TitleDescriptionList).map(([title, description], index) => (
      <>
        {index % 2 === 0 ? <GridItem span={1}></GridItem> : <></>}
        <GridItem span={5} style={{ padding: '2rem' }}>
          <h2
            style={{
              fontSize: '1.3rem',
              color: 'var(--pf-global--link--Color)'
            }}
          >
            <b>{title}</b>
          </h2>
          <br />
          <div
            style={{
              color: 'var(--pf-global--Color--200)',
              paddingRight: '1rem'
            }}
          >
            {description}
          </div>
        </GridItem>
        {index % 2 === 0 ? <></> : <GridItem span={1}></GridItem>}
      </>
    ))}
  </Grid>
);

export default ValueProps;
