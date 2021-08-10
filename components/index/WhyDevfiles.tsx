import { Grid, GridItem } from '@patternfly/react-core';

export interface WhyDevfilesProps {
  whyDevfilesList: string[];
}

const WhyDevfiles: React.FC<WhyDevfilesProps> = ({ whyDevfilesList }: WhyDevfilesProps) => (
  <Grid>
    <GridItem span={2}></GridItem>
    <GridItem span={8} style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem' }}>Why Devfiles?</h1>
      <br />
      <ul style={{ fontSize: '1.1rem' }}>
        {whyDevfilesList.map((reason, index) => (
          <li key={index}>{reason}</li>
        ))}
      </ul>
      <br />
      <br />
    </GridItem>
    <GridItem span={2}></GridItem>
  </Grid>
);

export default WhyDevfiles;
