import Meta from '@components/page/Meta';
import Footer from '@components/page/Footer';

import { server } from '@util/index';

import Link from 'next/link';
import {
  Brand,
  Nav,
  NavItem,
  NavList,
  Page,
  PageHeader,
  PageHeaderTools,
} from '@patternfly/react-core';

import devfileLogo from '../../public/images/devfileLogo.svg';
import githubLogo from '../../public/images/githubLogo.png';

export interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Renders a {@link Layout} React component.
 * Adds a layout for all the webpages e.g. the header and background
 * @returns `<Layout><Component {...pageProps} /></Layout>`
 */
const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  const logoProps = {
    href: server,
  };

  const nav = (
    <Nav variant="horizontal">
      <NavList>
        <NavItem>
          <a href="/starting">Getting Started</a>
        </NavItem>
        <NavItem>
          <a target="_blank" rel="noreferrer" href="https://docs.devfile.io">
            Docs
          </a>
        </NavItem>
        <NavItem>
          <a target="_blank" rel="noreferrer" href="#registry">
            Devfile Registry
          </a>
        </NavItem>
      </NavList>
    </Nav>
  );

  const Header = (
    <PageHeader
      logo={
        <Link href="/">
          <a data-test-id="go-home-button">
            <Brand
              src={devfileLogo}
              alt="Devfile Logo"
              style={{ height: '3rem' }}
            />
          </a>
        </Link>
      }
      logoProps={logoProps}
      topNav={nav}
      headerTools={
        <PageHeaderTools>
          <a target="_blank" rel="noreferrer" href="https://github.com/devfile">
            <Brand
              src={githubLogo}
              alt="GitHub Logo"
              style={{ height: '3rem' }}
            />
          </a>
        </PageHeaderTools>
      }
    />
  );

  return (
    <Page header={Header}>
      <Meta />
      <main>{children}</main>
      <Footer />
    </Page>
  );
};

export default Layout;
