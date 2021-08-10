import { PageSection, Divider } from '@patternfly/react-core';

const techStartingPage = () => (
  <PageSection>
    <div style={{ padding: '5rem' }}>
      <h1 style={{ fontSize: '2rem' }}>Getting Started for Tools Builders</h1>
      <Divider />
      <br />
      <h2 style={{ fontSize: '1.3rem' }}>
        <b>Devfile specification</b>
      </h2>
      <p>...</p>
      <br />
      <h2 style={{ fontSize: '1.3rem' }}>
        <b>
          Detailed runtime behavior of the tools (e.g. lifecycle of containers, init container
          behavior)
        </b>
      </h2>
      <p>...</p>
      <br />
      <h2 style={{ fontSize: '1.3rem' }}>
        <b>Devfile library for reading and writing to devfile</b>
      </h2>
      <p>...</p>
      <br />
      <h2 style={{ fontSize: '1.3rem' }}>
        <b>
          Devfile registry library for interacting with the devfile registry, e.g. finding the list
          of devfiles available, metadata associated with each devfile, and downloading content of
          the stacks.
        </b>
      </h2>
      <p>Go Library REST API</p>
      <br />
      <h2 style={{ fontSize: '1.3rem' }}>
        <b>Community devfile registry</b>
      </h2>
      <p>...</p>
      <br />
      <h2 style={{ fontSize: '1.3rem' }}>
        <b>Custom registry discovery</b>
      </h2>
      <p>...</p>
    </div>
  </PageSection>
);

export default techStartingPage;
