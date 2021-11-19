import styles from './KeyFeatures.module.css';
import type { TextContainerArr } from 'custom-types';
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
  TextVariants,
} from '@patternfly/react-core';

export interface KeyFeaturesProps {
  keyFeaturesContainer: TextContainerArr;
}

export const KeyFeatures: React.FC<KeyFeaturesProps> = ({
  keyFeaturesContainer,
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
        {keyFeaturesContainer.items.map(({ title, body, image }) => (
          <Card key={title}>
            <CardHeader>
              <CardHeaderMain>
                <Brand src={`/images/${image}`} alt={`${title} image`} className={styles.icon} />
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
