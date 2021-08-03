import { Grid, GridItem } from '@patternfly/react-core';

import valuePropsList from '@components/index/valuePropsList';

const ValueProps = (
  <Grid hasGutter>
    {valuePropsList.map((valueProp, index) => (
      <>
        <GridItem span={1}></GridItem>
        {index % 2 === 0 ? (
          <></>
        ) : (
          <GridItem span={5} style={{ padding: '2rem' }}>
            picture
          </GridItem>
        )}
        <GridItem span={5} style={{ padding: '2rem' }}>
          <h2
            style={{
              fontSize: '1.3rem',
              color: 'var(--pf-global--link--Color)',
            }}
          >
            <b>{valueProp[0]}</b>
          </h2>
          <br />
          <div
            style={{
              color: 'var(--pf-global--Color--200)',
              paddingRight: '1rem',
            }}
          >
            {valueProp[1]}
          </div>
        </GridItem>
        {index % 2 === 0 ? (
          <GridItem span={5} style={{ padding: '2rem' }}>
            picture
          </GridItem>
        ) : (
          <></>
        )}
        <GridItem span={1}></GridItem>
      </>
    ))}
  </Grid>
);

export default ValueProps;
