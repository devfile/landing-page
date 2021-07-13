import { Brand, Divider, Grid, GridItem } from '@patternfly/react-core';

import devfileLogo from '../../public/images/devfileLogo.svg';

const LeadBanner = (
  <Grid hasGutter>
    <GridItem span={2}></GridItem>
    <GridItem span={2}>
      <Brand src={devfileLogo} alt="Devfile Logo" style={{ height: '13rem' }} />
    </GridItem>
    <GridItem span={5}>
      <ul>
        <li style={{ fontSize: '3rem' }}>devfiles</li>
        <br />
        <Divider component="li" />
        <br />
        <li>
          A standard to simplify and accelerate cloud-native development through
          best practice workflows.
          {/* Accelerate developer workflows and enforce consistent standards. */}
        </li>
      </ul>
    </GridItem>
    <GridItem span={3}></GridItem>
  </Grid>
);

export default LeadBanner;
