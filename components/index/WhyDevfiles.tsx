import { Stack, StackItem, Grid, GridItem } from '@patternfly/react-core';

const WhyDevfiles = (
  <Stack hasGutter>
    <StackItem>
      <h1 style={{ fontSize: '2rem' }}>Why Devfiles?</h1>
      <br />
      <span style={{ fontSize: '1.1rem' }}>
        Devfiles let you codify best practices for your application development
        lifecycle, making it easy to share and promote consistency across
        development teams and projects. Containerized runtimes, frameworks and
        tools can be pre-configured by experts in those communities, alleviating
        the need for every developer to have knowledge in those areas.
      </span>
      <br />
      <br />
    </StackItem>
    <StackItem>
      <Grid hasGutter>
        <GridItem span={4}>
          <h2
            style={{
              fontSize: '1.3rem',
              color: 'var(--pf-global--link--Color)',
            }}
          >
            Improve development consistency across teams and projects
          </h2>
        </GridItem>
        <GridItem span={4}>
          <h2
            style={{
              fontSize: '1.3rem',
              color: 'var(--pf-global--link--Color)',
            }}
          >
            Reduce security risks and maintenance costs
          </h2>
        </GridItem>
        <GridItem span={4}>
          <h2
            style={{
              fontSize: '1.3rem',
              color: 'var(--pf-global--link--Color)',
            }}
          >
            Lessen the burden of all developers needing to be experts in
            everything
          </h2>
        </GridItem>
        <GridItem span={4}>
          <div
            style={{
              color: 'var(--pf-global--Color--200)',
              paddingRight: '1rem',
            }}
          >
            It can be challenging to chase down problems when your development
            environment is drastically different from your production
            environment. Devfiles provide a mechanism for enterprise teams to
            share configurations across projects, and provide a single source of
            truth throughout the application lifecycle. Check them in and manage
            them into your source repository or wherever you want to manage your
            configuration as code.
          </div>
        </GridItem>
        <GridItem span={4}>
          <div
            style={{
              color: 'var(--pf-global--Color--200)',
              paddingRight: '1rem',
            }}
          >
            With so many layers and dependencies of today’s cloud-native
            applications, security and maintenance can be both complicated and
            difficult. Our goal is to make that easier by providing you with a
            community that helps keep stacks updated with the latest fixes, and
            a way for you to manage those stacks from a central location.
          </div>
        </GridItem>
        <GridItem span={4}>
          <div
            style={{
              color: 'var(--pf-global--Color--200)',
              paddingRight: '1rem',
            }}
          >
            With so many cloud-native runtimes, frameworks and tools can make it
            challenging to understand all the available options to build, deploy
            and update your applications. Devfiles allow you to inject expertise
            shared from other developers and communities into your team's
            development environment. Codifying configuration and best practice
            workflows helps lessen the requirement on every developer in your
            organization to understand how to manage and configure all these
            layers themselves.
          </div>
        </GridItem>
      </Grid>
    </StackItem>
  </Stack>
);

export default WhyDevfiles;
