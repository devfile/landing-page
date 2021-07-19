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
          An open standard to simplify and accelerate developer workflows and
          enable consistent development environments across projects and teams.
        </li>
      </ul>
    </GridItem>
    <GridItem span={3}></GridItem>
  </Grid>
);

export default LeadBanner;
