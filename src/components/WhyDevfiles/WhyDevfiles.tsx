import { TextContainer } from 'custom-types';
import { Text, TextContent, TextVariants } from '@patternfly/react-core';
import styles from './WhyDevfiles.module.css';

export interface WhyDevfilesProps {
  whyDevfiles: TextContainer;
}

export const WhyDevfiles: React.FC<WhyDevfilesProps> = (props: WhyDevfilesProps) => {
  const { whyDevfiles } = props;

  return (
    <div className={styles.container}>
      <TextContent>
        <Text component={TextVariants.h1} className={styles.headerText}>
          {whyDevfiles.title}
        </Text>
        <Text className={styles.bodyText}>{whyDevfiles.body}</Text>
      </TextContent>
      <br />
    </div>
  );
};
WhyDevfiles.displayName = 'whyDevfiles';
