import styles from './WhyDevfiles.module.css';
import { TextContainer } from 'custom-types';
import { Text, TextContent, TextVariants } from '@patternfly/react-core';

export interface WhyDevfilesProps {
  whyDevfilesContainer: TextContainer;
}

export const WhyDevfiles: React.FC<WhyDevfilesProps> = ({
  whyDevfilesContainer,
}: WhyDevfilesProps) => (
  <div className={styles.container}>
    <TextContent>
      <Text component={TextVariants.h1} className={styles.headerText}>
        {whyDevfilesContainer.title}
      </Text>
      <Text className={styles.bodyText}>{whyDevfilesContainer.body}</Text>
    </TextContent>
    <br />
  </div>
);
WhyDevfiles.displayName = 'whyDevfiles';
