import type { TextContainerArr, DefaultProps } from 'custom-types';
import { Grid, GridItem, Text, TextContent, TextVariants } from '@patternfly/react-core';
import styles from './ValuePropositions.module.css';

export interface ValuePropositionProps extends DefaultProps {
  valueProposition: TextContainerArr;
}

export const ValuePropositions: React.FC<ValuePropositionProps> = (
  props: ValuePropositionProps,
) => {
  const { valueProposition } = props;

  return (
    <Grid className={styles.grid}>
      {valueProposition.items.map(({ title, body }) => (
        <GridItem key={title} span={12} md={6} xl2={3} className={styles.gridItem}>
          <TextContent>
            <Text component={TextVariants.h2} className={styles.headerText}>
              {title}
            </Text>
            <Text className={styles.bodyText}>{body}</Text>
          </TextContent>
        </GridItem>
      ))}
    </Grid>
  );
};
ValuePropositions.displayName = 'ValuePropositions';
