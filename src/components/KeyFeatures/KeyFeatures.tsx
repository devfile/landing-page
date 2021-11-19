import type { TextContainerArr, DefaultProps } from 'custom-types';
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
import styles from './KeyFeatures.module.css';

export interface KeyFeaturesProps extends DefaultProps {
  keyFeatures: TextContainerArr;
}

export const KeyFeatures: React.FC<KeyFeaturesProps> = (props: KeyFeaturesProps) => {
  const { keyFeatures } = props;

  return (
    <div className={styles.container}>
      <div className={styles.galleryContainer}>
        <TextContent>
          <Text component={TextVariants.h1} className={styles.headerText}>
            {keyFeatures.title}
          </Text>
          <Text className={styles.headerSubText}>{keyFeatures.body}</Text>
        </TextContent>
        <Gallery hasGutter>
          {keyFeatures.items.map(({ title, body, image }) => (
            <Card key={title}>
              <CardHeader>
                <CardHeaderMain>
                  <Brand
                    src={`/images/${image ?? ''}`}
                    alt={`${title} image`}
                    className={styles.icon}
                  />
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
};
KeyFeatures.displayName = 'KeyFeatures';
