import { PageSection, Divider } from '@patternfly/react-core';

const enterpriseDevfilesPage = () => (
  <PageSection>
    <div style={{ padding: '5rem' }}>
      <h1 style={{ fontSize: '2rem' }}>
        Enterprise Architect and Runtime Provider
      </h1>
      <Divider />
      <br />
      <h2 style={{ fontSize: '1.3rem' }}>
        <b>Define the standard way of working</b>
      </h2>
      <p>
        Being the expert on language and framework, you can share the
        recommended workflow on developing applications based on different
        languages and frameworks.
      </p>
      <br />
      <h2 style={{ fontSize: '1.3rem' }}>
        <b>Build once, run anywhere</b>
      </h2>
      <p>
        Develop the application stacks once, and they will work across different
        tools. There is no need to build and maintain custom support for each
        development tool.
      </p>
      <br />
      <h2 style={{ fontSize: '1.3rem' }}>
        <b>Easy sharing of workflows</b>
      </h2>
      <p>
        By adding the stacks or samples that you have developed to a devfile
        registry, application developers can easily discover the devfiles that
        you provide. You can also provide starter projects or samples to
        showcase the usage of a specific runtime or framework.
      </p>
      <br />
      <h2 style={{ fontSize: '1.3rem' }}>
        <b>Governance</b>
      </h2>
      <p>
        Add the necessary policy settings and compliance policies as part of the
        devfile to ensure anyone who uses the stack will follow the same
        workflow. By using the parent support in the devfile, any update on
        these policies, security fixes, and workflow will get picked up
        automatically to ensure consistency.
      </p>
    </div>
  </PageSection>
);

export default enterpriseDevfilesPage;
