import { TextContainer } from 'custom-types';
import { Text, TextContent, TextVariants } from '@patternfly/react-core';
import { GifPlayer } from '@src/components';
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
      <GifPlayer
        style={{ width: '700px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
        src="images/demo.gif"
      />
    </div>
  );
};
WhyDevfiles.displayName = 'whyDevfiles';
