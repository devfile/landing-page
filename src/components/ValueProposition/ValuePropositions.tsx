import styles from './ValuePropositions.module.css';
import type { TextContainerArr } from 'custom-types';
import { Grid, GridItem, Text, TextContent, TextVariants } from '@patternfly/react-core';

export interface ValuePropositionProps {
  valuePropositionContainer: TextContainerArr;
}

export const ValuePropositions: React.FC<ValuePropositionProps> = ({
  valuePropositionContainer
}: ValuePropositionProps) => (
  <Grid className={styles.grid}>
    {valuePropositionContainer.items.map(({ title, body }, index) => (
      <GridItem key={index} span={12} md={6} xl2={3} className={styles.gridItem}>
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
ValuePropositions.displayName = 'ValuePropositions';
