import { PageSection, Divider } from '@patternfly/react-core';

const registryDevfilesPage = () => (
  <PageSection>
    <div style={{ padding: '5rem' }}>
      <h1 style={{ fontSize: '2rem' }}>Registry Administrator</h1>
      <Divider />
      <br />
      <h2 style={{ fontSize: '1.3rem' }}>
        <b>Customized registry</b>
      </h2>
      <p>
        Provides a custom registry to enable developers to view the list of
        devfiles that describes the custom workflow for application development
        within an organization.
      </p>
      <br />
      <h2 style={{ fontSize: '1.3rem' }}>
        <b>
          Enable a single point of management for applications built from stacks
        </b>
      </h2>
      <p>
        Controls the lifecycle of the stacks within the custom registry and
        pushes updated devfiles to the registry during the registry update.
      </p>
      <br />
      <h2 style={{ fontSize: '1.3rem' }}>
        <b>Enforce standard on the devfiles</b>
      </h2>
      <p>
        Customize the registry build tools to provide extra validations to
        ensure the devfiles in the custom registry follow the standard of the
        organization.
      </p>
    </div>
  </PageSection>
);

export default registryDevfilesPage;
