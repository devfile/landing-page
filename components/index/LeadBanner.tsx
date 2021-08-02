import { Brand, Divider, Grid, GridItem } from '@patternfly/react-core';

import devfileLogo from '../../public/images/devfileLogo.svg';

const LeadBanner = (
  <Grid hasGutter>
    <GridItem span={2}></GridItem>
    <GridItem span={2}>
      <Brand src={devfileLogo} alt="Devfile Logo" style={{ height: '15rem' }} />
    </GridItem>
    <GridItem span={5}>
      <ul>
        <li style={{ fontSize: '3rem' }}>Devfiles</li>
        <br />
        <Divider component="li" />
        <br />
        <li>
          An open standard defining containerized development environments that
          enables developer tools to simplify and accelerate workflows.
        </li>
      </ul>
    </GridItem>
    <GridItem span={3}></GridItem>
  </Grid>
);

export default LeadBanner;
