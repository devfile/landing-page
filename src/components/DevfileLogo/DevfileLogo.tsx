import devfileLogo from '@public/images/devfileLogo.svg';
import type { DefaultProps } from 'custom-types';
import { Text, TextContent, TextVariants, Brand } from '@patternfly/react-core';
import Link from 'next/link';
import { mergeClassNames } from '@src/util/client';
import links from '@info/links';
import styles from './DevfileLogo.module.css';

export interface DevfileLogoProps extends DefaultProps {
  dark?: boolean;
}

export const DevfileLogo: React.FC<DevfileLogoProps> = (props) => {
  const { dark } = props;

  return (
    <Link href="/">
      <a className={styles.titleLink} data-testid="go-home-button">
        <span className={styles.title}>
          <Brand src={devfileLogo} alt="Devfile Registry Logo" className={styles.logo} />
          <TextContent>
            <Text
              className={mergeClassNames(dark ? styles.darkText : styles.lightText)}
              component={TextVariants.h1}
            >
              {links.title}
            </Text>
          </TextContent>
        </span>
      </a>
    </Link>
  );
};
DevfileLogo.displayName = 'DevfileLogo';
