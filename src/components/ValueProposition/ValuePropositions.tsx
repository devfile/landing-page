import styles from './ValuePropositions.module.css';
import type { TitleDescriptionList } from 'custom-types';
import { Grid, GridItem, Text, TextContent, TextVariants } from '@patternfly/react-core';

export interface ValuePropositionProps {
  valuePropositionList: TitleDescriptionList;
}

export const ValuePropositions: React.FC<ValuePropositionProps> = ({
  valuePropositionList: valuePropsList
}: ValuePropositionProps) => (
  <Grid className={styles.grid}>
    {Object.entries(valuePropsList as TitleDescriptionList).map(([title, description], index) => (
      <GridItem key={index} span={12} md={6} xl2={3} className={styles.gridItem}>
        <TextContent>
          <Text component={TextVariants.h2} className={styles.headerText}>
            {title}
          </Text>
          <Text className={styles.bodyText}>{description}</Text>
        </TextContent>
      </GridItem>
    ))}
  </Grid>
);
ValuePropositions.displayName = 'ValuePropositions';
