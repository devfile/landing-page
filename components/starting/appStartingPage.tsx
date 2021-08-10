import { PageSection, Divider } from '@patternfly/react-core';

const appStartingPage = () => (
  <PageSection>
    <div style={{ padding: '5rem' }}>
      <h1 style={{ fontSize: '2rem' }}>Getting Started for Application Developers</h1>
      <Divider />
      <br />
      <h2 style={{ fontSize: '1.3rem' }}>
        <b>Devfile specification</b>
      </h2>
      <p>...</p>
      <br />
      <h2 style={{ fontSize: '1.3rem' }}>
        <b>List of tools that provides devfile support with links</b>
      </h2>
      <p>...</p>
      <br />
      <h2 style={{ fontSize: '1.3rem' }}>
        <b>Community registry viewer</b>
      </h2>
      <p>...</p>
    </div>
  </PageSection>
);

export default appStartingPage;
