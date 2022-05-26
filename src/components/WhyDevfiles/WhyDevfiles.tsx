import { TextContainer } from 'custom-types';
import { Text, TextContent, TextVariants } from '@patternfly/react-core';
import { GifPlayer } from '@src/components';
import { useWindowDimensions } from '@src/util/client';
import styles from './WhyDevfiles.module.css';

export interface WhyDevfilesProps {
  whyDevfiles: TextContainer;
}

export const WhyDevfiles: React.FC<WhyDevfilesProps> = (props: WhyDevfilesProps) => {
  const minDemoSize = 480;
  const { whyDevfiles } = props;
  const { height, width } = useWindowDimensions();
  const demoFile =
    width !== undefined && height !== undefined && Math.min(height, width) < minDemoSize
      ? '/images/demo.png'
      : '/images/demo.gif';

  return (
    <div className={styles.container}>
      <TextContent>
        <Text component={TextVariants.h1} className={styles.headerText}>
          {whyDevfiles.title}
        </Text>
        <Text className={styles.bodyText}>{whyDevfiles.body}</Text>
      </TextContent>
      <br />
      <GifPlayer width="1920px" height="1080px" src={demoFile} />
    </div>
  );
};
WhyDevfiles.displayName = 'whyDevfiles';
