import { Brand, Divider, Grid, GridItem } from '@patternfly/react-core';

import devfileLogo from '../../public/images/devfileLogo.svg';

export interface LeadBannerProps {
  leadBannerList: string[];
}

const LeadBanner: React.FC<LeadBannerProps> = ({ leadBannerList }: LeadBannerProps) => (
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
        {(leadBannerList as string[]).map((banner, index) => (
          <li key={index}>{banner}</li>
        ))}
      </ul>
    </GridItem>
    <GridItem span={3}></GridItem>
  </Grid>
);

export default LeadBanner;
