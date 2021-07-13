import { Brand, Flex, FlexItem, Grid, GridItem } from '@patternfly/react-core';

import devfileLogo from '../../public/images/devfileLogo.svg';

const Footer = () => (
  <div
    style={{
      width: '100%',
      backgroundColor: 'var(--pf-global--BackgroundColor--dark-100)',
      color: 'var(--pf-global--Color--light-200)',
      padding: '3rem',
    }}
  >
    <Grid>
      <GridItem span={2}></GridItem>
      <GridItem span={4} style={{ padding: '3rem' }}>
        <Flex alignItems={{ default: 'alignItemsCenter' }}>
          <FlexItem>
            <Brand
              src={devfileLogo}
              alt="Devfile Logo"
              style={{ height: '4rem' }}
            />
          </FlexItem>
          <FlexItem style={{ fontSize: '2rem' }}>devfiles</FlexItem>
        </Flex>
      </GridItem>
      <GridItem span={2}>
        <h2 style={{ fontSize: '1.2rem' }}>
          <b>Contributors</b>
        </h2>
        <br />
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.ibm.com/us-en/"
            >
              IBM
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.redhat.com/en"
            >
              Red Hat
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://aws.amazon.com">
              AWS
            </a>
          </li>
        </ul>
      </GridItem>
      <GridItem span={2}>
        <h2 style={{ fontSize: '1.2rem' }}>
          <b>Links</b>
        </h2>
        <br />
        <ul>
          <li>
            <a>Registry</a>
          </li>
          <li>
            <a>Docs</a>
          </li>
          <li>
            <a>GitHub</a>
          </li>
        </ul>
      </GridItem>
      <GridItem span={2}></GridItem>
    </Grid>
  </div>
);

export default Footer;
