import styles from './KeyFeatures.module.css';
import type { TitleDescriptionList } from 'custom-types';
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
  keyFeaturesList: TitleDescriptionList;
}

export const KeyFeatures: React.FC<KeyFeaturesProps> = ({ keyFeaturesList }: KeyFeaturesProps) => (
  <div className={styles.container}>
    <div className={styles.galleryContainer}>
      <TextContent>
        <Text component={TextVariants.h1} className={styles.headerText}>
          Key Features
        </Text>
        <Text className={styles.headerSubText}>with devfiles</Text>
      </TextContent>
      <Gallery hasGutter>
        {Object.entries(keyFeaturesList as TitleDescriptionList).map(([title, description]) => (
          <Card key={title}>
            <CardHeader>
              <CardHeaderMain>
                <Brand src={cogIcon} alt="Image of a cog" className={styles.icon} />
              </CardHeaderMain>
            </CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardBody>{description}</CardBody>
          </Card>
        ))}
      </Gallery>
    </div>
  </div>
);
KeyFeatures.displayName = 'KeyFeatures';
