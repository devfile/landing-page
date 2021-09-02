import styles from './KeyFeatures.module.css';
import type { TextContainerArr } from 'custom-types';
import cogIcon from '@public/images/cogs.svg';
import {
  Brand,
  Card,
  CardHeader,
  CardHeaderMain,
  CardTitle,
  CardBody,
  Gallery,
  Text,
  TextContent,
  TextVariants
} from '@patternfly/react-core';

export interface KeyFeaturesProps {
  keyFeaturesContainer: TextContainerArr;
}

export const KeyFeatures: React.FC<KeyFeaturesProps> = ({
  keyFeaturesContainer
}: KeyFeaturesProps) => (
  <div className={styles.container}>
    <div className={styles.galleryContainer}>
      <TextContent>
        <Text component={TextVariants.h1} className={styles.headerText}>
          {keyFeaturesContainer.title}
        </Text>
        <Text className={styles.headerSubText}>{keyFeaturesContainer.body}</Text>
      </TextContent>
      <Gallery hasGutter>
        {keyFeaturesContainer.items.map(({ title, body }) => (
          <Card key={title}>
            <CardHeader>
              <CardHeaderMain>
                <Brand src={cogIcon} alt="Image of a cog" className={styles.icon} />
              </CardHeaderMain>
            </CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardBody>{body}</CardBody>
          </Card>
        ))}
      </Gallery>
    </div>
  </div>
);
KeyFeatures.displayName = 'KeyFeatures';
