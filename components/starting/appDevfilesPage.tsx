import { PageSection, Divider } from '@patternfly/react-core';

const appDevfilesPage = () => (
  <PageSection>
    <div style={{ padding: '5rem' }}>
      <h1 style={{ fontSize: '2rem' }}>
        Application Developer - Stop Configuring and Start Coding
      </h1>
      <Divider />
      <br />
      <h2 style={{ fontSize: '1.3rem' }}>
        <b>Leverage ready to use development environments</b>
      </h2>
      <p>
        Don’t know where to start? The collection of devfiles in a devfile
        registry provides a wide range of samples and stacks with starter
        applications that can provide a starting point for you to use different
        languages and frameworks. Whether you are starting from scratch or
        working with an existing application, we got you covered.
      </p>
      <br />
      <h2 style={{ fontSize: '1.3rem' }}>
        <b>Version development environment</b>
      </h2>
      <p>
        Having the devfile included as part of the application allows you to
        easily reproduce the development environment in the same way as any
        other developers in your organization. You don’t have to worry about the
        complexity of setting up the environment so that you can focus on
        developing your applications.
      </p>
      <br />
      <h2 style={{ fontSize: '1.3rem' }}>
        <b>Choose your tools</b>
      </h2>
      <p>
        You will have the flexibility of using different development tools, but
        still, be able to produce the consistent output described in the
        devfile. Advanced developers can also customize the build when needed.
      </p>
      <br />
      <h2 style={{ fontSize: '1.3rem' }}>
        <b>Reduce the discrepancies between development and production</b>
      </h2>
      <p>
        Using the devfiles provided by the stack providers will minimize the
        environmental discrepancies between different stages of development,
        e.g. development, staging, CI, and production.
      </p>
      <br />
      <h2 style={{ fontSize: '1.3rem' }}>
        <b>Make quick turnarounds on code changes</b>
      </h2>
      <p>
        The inner-loop and outer-loop instructions defined in the devfile allow
        you to test out your code changes quickly in the tools. You will use the
        workflow recommended by the stack provider that is the expert on the
        specific runtime.
      </p>
    </div>
  </PageSection>
);

export default appDevfilesPage;
