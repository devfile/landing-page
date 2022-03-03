import type { DefaultProps } from 'custom-types';
import { Footer, Meta } from '@src/components';
import { Page, PageSection } from '@patternfly/react-core';
import styles from './Layout.module.css';

export interface LayoutProps extends DefaultProps {
  children: React.ReactNode;
}

/**
 * Renders a {@link Layout} React component.
 * Adds a layout for all the webpages e.g. the header and background
 * @returns `<Layout><Component {...pageProps} /></Layout>`
 */
export const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const { children } = props;

  return (
    <div className={styles.pageContainer}>
      <Page className={styles.contentWrap}>
        <Meta />
        <PageSection className={styles.pageSection}>{children}</PageSection>
      </Page>
      <Footer />
    </div>
  );
};
Layout.displayName = 'Layout';
