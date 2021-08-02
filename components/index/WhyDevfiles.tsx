import { Grid, GridItem } from '@patternfly/react-core';

const WhyDevfiles = (
  <Grid>
    <GridItem span={2}></GridItem>
    <GridItem span={8} style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem' }}>Why Devfiles?</h1>
      <br />
      <ul style={{ fontSize: '1.1rem' }}>
        <li>
          Modern applications contain multiple components, each having a variety
          of technologies. Therefore, developers spend significant time
          configuring an environment, maintaining it, and switching among
          projects or branches. As a result, developers are spending a lot of
          their time getting a developer environment properly configured,
          maintaining it and switching between projects or branches.
        </li>
        <br />
        <li>
          What if developer environments were treated in a declarative fashion
          similarly to how infrastructure is treated in DevOps, to become easily
          reproducible, versionned and shareable?
        </li>
        <br />
        <li>
          With devfiles, you define best practices for your application
          development lifecycle. You define these best practices as code, making
          it easy for you and your collaborators to contribute to projects and
          maintain consistency across different teams.
        </li>
      </ul>
      <br />
      <br />
    </GridItem>
    <GridItem span={2}></GridItem>
  </Grid>
);

export default WhyDevfiles;
