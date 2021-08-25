import Meta from '@components/page/Meta';
import Footer from '@components/page/Footer';

import Link from 'next/link';
import {
  Brand,
  Nav,
  NavItem,
  NavList,
  Page,
  PageHeader,
  PageHeaderTools
} from '@patternfly/react-core';

import devfileLogoText from '../../public/images/devfileWhiteText.svg';
import githubLogo from '../../public/images/githubLogo.svg';

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
    href: '/'
  };

  const nav = (
    <Nav variant="horizontal">
      <NavList>
        <NavItem>
          <a data-cy="getting-started-button" href="/starting">
            Getting Started
          </a>
        </NavItem>
        <NavItem>
          <a target="_blank" rel="noreferrer" href={process.env.docsPath}>
            Docs
          </a>
        </NavItem>
        <NavItem>
          <a target="_blank" rel="noreferrer" href="https://registry.devfile.io">
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
          <a data-cy="go-home-button">
            <Brand src={devfileLogoText} alt="Devfile Logo" style={{ height: '1.7rem' }} />
          </a>
        </Link>
      }
      logoProps={logoProps}
      topNav={nav}
      headerTools={
        <PageHeaderTools>
          <a target="_blank" rel="noreferrer" href="https://github.com/devfile/api">
            <Brand src={githubLogo} alt="GitHub Logo" style={{ height: '3rem' }} />
          </a>
        </PageHeaderTools>
      }
    />
  );

  return (
    <Page
      header={Header}
      style={{
        minHeight: '100vh',
        margin: '0',
        backgroundColor: 'var(--pf-global--BackgroundColor--dark-100)'
      }}
    >
      <Meta />
      <main>{children}</main>
      <Footer />
    </Page>
  );
};

export default Layout;
