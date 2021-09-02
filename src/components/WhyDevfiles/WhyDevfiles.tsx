import styles from './WhyDevfiles.module.css';
import { Text, TextContent, TextVariants } from '@patternfly/react-core';

export interface WhyDevfilesProps {
  whyDevfilesList: string[];
}

export const WhyDevfiles: React.FC<WhyDevfilesProps> = ({ whyDevfilesList }: WhyDevfilesProps) => (
  <div className={styles.container}>
    <TextContent>
      <Text component={TextVariants.h1} className={styles.headerText}>
        Why Devfiles?
      </Text>
      <br />
      {(whyDevfilesList as string[]).map((reason, index) => (
        <Text key={index} className={styles.bodyText}>
          {reason}
        </Text>
      ))}
    </TextContent>
    <br />
  </div>
);
WhyDevfiles.displayName = 'whyDevfiles';
