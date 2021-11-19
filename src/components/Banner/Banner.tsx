import type { DefaultProps } from 'custom-types';
import banner from '@info/banner';
import devfileLogo from '@public/images/devfileLogo.svg';
import { Text, TextContent, TextVariants, Brand } from '@patternfly/react-core';
import { Wave } from '@src/components';
import styles from './Banner.module.css';

export type BannerProps = DefaultProps;

export const Banner: React.FC<BannerProps> = () => (
  <>
    <Wave fill="darker" backgroundColor="dark" />
    <div className={styles.banner}>
      <Brand src={devfileLogo} alt="Devfile Registry Logo" className={styles.logo} />
      <TextContent>
        <Text className={styles.headerText} component={TextVariants.h1}>
          {banner.title}
        </Text>
        <Text className={styles.bodyText} component={TextVariants.h3}>
          {banner.body}
        </Text>
      </TextContent>
    </div>
  </>
);
Banner.displayName = 'Banner';
