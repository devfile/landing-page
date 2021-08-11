import {
  Brand,
  Card,
  CardHeader,
  CardHeaderMain,
  CardTitle,
  CardBody,
  Gallery
} from '@patternfly/react-core';

import type { TitleDescriptionList } from 'custom-types';
import cogIcon from '../../public/images/cogs.svg';

export interface KeyFeaturesProps {
  keyFeaturesList: TitleDescriptionList;
}

const KeyFeatures: React.FC<KeyFeaturesProps> = ({ keyFeaturesList }: KeyFeaturesProps) => (
  <div>
    <h1 style={{ fontSize: '2rem' }}>Key Features</h1>
    <h4 style={{ color: 'var(--pf-global--Color--200)' }}>with devfiles</h4>
    <br />
    <Gallery hasGutter>
      {Object.entries(keyFeaturesList as TitleDescriptionList).map(([title, description]) => (
        <Card key={title} style={{ width: '19rem', margin: '1rem' }}>
          <CardHeader>
            <CardHeaderMain>
              <Brand
                src={cogIcon}
                alt="Placeholder"
                style={{ height: '5rem', marginLeft: '40%' }}
              />
            </CardHeaderMain>
          </CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardBody>{description}</CardBody>
        </Card>
      ))}
    </Gallery>
  </div>
);

export default KeyFeatures;
