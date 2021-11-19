import type { DefaultProps } from 'custom-types';
import { Wave, Links, DevfileLogo } from '@src/components';
import links from '@info/links';
import { Text, TextContent, TextVariants } from '@patternfly/react-core';
import styles from './Footer.module.css';

export type FooterProps = DefaultProps;

export const Footer: React.FC<FooterProps> = () => (
  <footer>
    <div className={styles.footer}>
      <Wave fill="darker" backgroundColor="light" flipX flipY />
      <div className={styles.background}>
        <div className={styles.devfileLogo}>
          <DevfileLogo />
        </div>
        <div className={styles.links}>
          <div>
            <TextContent>
              <Text component={TextVariants.h2} className={styles.text}>
                Contributors
              </Text>
            </TextContent>
            <Links links={links.contributorLinks} linkStyle="footer" />
          </div>
          <div>
            <TextContent>
              <Text component={TextVariants.h2} className={styles.text}>
                Links
              </Text>
            </TextContent>
            <Links links={links.footerLinks} linkStyle="footer" />
          </div>
        </div>
      </div>
    </div>
  </footer>
);
Footer.displayName = 'Footer';
