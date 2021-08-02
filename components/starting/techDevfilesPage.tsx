import { PageSection, Divider } from '@patternfly/react-core';

const techDevfilesPage = () => (
  <PageSection>
    <div style={{ padding: '5rem' }}>
      <h1 style={{ fontSize: '2rem' }}>Technology and Tools Builders</h1>
      <Divider />
      <br />
      <h2 style={{ fontSize: '1.3rem' }}>
        <b>Shielded from runtime specific implementation</b>
      </h2>
      <p>
        No need to build custom runtime support. Let the expert do the job.
        Runtime teams know the best way to build and run applications on their
        servers.
      </p>
      <br />
      <h2 style={{ fontSize: '1.3rem' }}>
        <b>Zero maintenance for runtime support</b>
      </h2>
      <p>
        Tools will get the runtime support update for free whenever a new stack
        gets updated in the devfile registry. New stacks can be picked up by the
        tools easily without tools update.
      </p>
      <br />
      <h2 style={{ fontSize: '1.3rem' }}>
        <b>Shared configuration that can be reused across different tools</b>
      </h2>
      <p>
        Different tools work in a slightly different way. Sometimes it is hard
        to convince users to switch to your tool due to configuration
        differences. Sharing the same devfile specification support reduces the
        hurdle for users to make that change.
      </p>
    </div>
  </PageSection>
);

export default techDevfilesPage;
