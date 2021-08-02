import { Grid, GridItem } from '@patternfly/react-core';

const ValueProps = (
  <Grid hasGutter>
    <GridItem span={1}></GridItem>
    <GridItem span={5} style={{ padding: '2rem' }}>
      <h2
        style={{
          fontSize: '1.3rem',
          color: 'var(--pf-global--link--Color)',
        }}
      >
        <b>Make development environments easily reproducible</b>
      </h2>
      <br />
      <div
        style={{
          color: 'var(--pf-global--Color--200)',
          paddingRight: '1rem',
        }}
      >
        Development environments can be cumbersome to create, and as a result
        developers become locked into a single local configuration to avoid
        requirements becoming mixed up or interfering with each other. With
        devfiles, development environments become reproducible and disposable -
        they are now quick to create, can be thrown away at will, and can easily
        be re-created when needed.
      </div>
    </GridItem>
    <GridItem span={5} style={{ padding: '2rem' }}>
      picture
    </GridItem>
    <GridItem span={1}></GridItem>

    <GridItem span={1}></GridItem>
    <GridItem span={5} style={{ padding: '2rem' }}>
      picture
    </GridItem>
    <GridItem span={5} style={{ padding: '2rem' }}>
      <h2
        style={{
          fontSize: '1.3rem',
          color: 'var(--pf-global--link--Color)',
        }}
      >
        <b>Improve development consistency across teams and projects</b>
      </h2>
      <br />
      <div
        style={{
          color: 'var(--pf-global--Color--200)',
          paddingRight: '1rem',
        }}
      >
        Who has not heard the famous “but it works on my machine”! It can be
        challenging to chase down problems when your development environment is
        drastically different from your production environment. Devfiles provide
        a mechanism for teams to share configurations across projects, and
        provide a single source of truth throughout the application lifecycle.
        Check them in and manage them into your source repository.
      </div>
    </GridItem>
    <GridItem span={1}></GridItem>

    <GridItem span={1}></GridItem>
    <GridItem span={5} style={{ padding: '2rem' }}>
      <h2
        style={{
          fontSize: '1.3rem',
          color: 'var(--pf-global--link--Color)',
        }}
      >
        <b>Reduce security risks and maintenance costs</b>
      </h2>
      <br />
      <div
        style={{
          color: 'var(--pf-global--Color--200)',
          paddingRight: '1rem',
        }}
      >
        With so many layers and dependencies of today’s modern applications,
        security and maintenance can be both complicated and difficult. Since
        devfiles can be managed from a central location, you only need to update
        them once to get them properly aligned across the developer teams.
        Following security requirements and dependency versions gets simpler and
        more consistent with minimium disruption.
      </div>
    </GridItem>
    <GridItem span={5} style={{ padding: '2rem' }}>
      picture
    </GridItem>
    <GridItem span={1}></GridItem>

    <GridItem span={1}></GridItem>
    <GridItem span={5} style={{ padding: '2rem' }}>
      picture
    </GridItem>
    <GridItem span={5} style={{ padding: '2rem' }}>
      <h2
        style={{
          fontSize: '1.3rem',
          color: 'var(--pf-global--link--Color)',
        }}
      >
        <b>
          Accelerate developer onboarding and leverage expertise of the
          community
        </b>
      </h2>
      <br />
      <div
        style={{
          color: 'var(--pf-global--Color--200)',
          paddingRight: '1rem',
        }}
      >
        Modern applications use many different technologies, runtimes,
        frameworks and tools can make it challenging to understand all the
        available options to code, build, test, debug, deploy and update your
        applications. Devfiles allow you to inject expertise shared from other
        developers and communities into your team's development environment.
        Codifying configuration and best practice workflows helps lessen the
        requirement on every developer in your organization to understand how to
        manage and configure all these layers themselves.
      </div>
    </GridItem>
    <GridItem span={1}></GridItem>
  </Grid>
);

const ValueProps2 = (
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
        Lessen the burden of all developers needing to be experts in everything
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
        environment is drastically different from your production environment.
        Devfiles provide a mechanism for enterprise teams to share
        configurations across projects, and provide a single source of truth
        throughout the application lifecycle. Check them in and manage them into
        your source repository or wherever you want to manage your configuration
        as code.
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
        community that helps keep stacks updated with the latest fixes, and a
        way for you to manage those stacks from a central location.
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
        challenging to understand all the available options to build, deploy and
        update your applications. Devfiles allow you to inject expertise shared
        from other developers and communities into your team's development
        environment. Codifying configuration and best practice workflows helps
        lessen the requirement on every developer in your organization to
        understand how to manage and configure all these layers themselves.
      </div>
    </GridItem>
  </Grid>
);

export default ValueProps;
