import {
  Brand,
  Card,
  CardHeader,
  CardHeaderMain,
  CardTitle,
  CardBody,
} from '@patternfly/react-core';

import keyFeaturesList from '@components/index/keyFeaturesList';
import cogIcon from '../../public/images/cogs.png';

const KeyFeatures = (
  <div>
    <h1 style={{ fontSize: '2rem' }}>Key Features</h1>
    <h4 style={{ color: 'var(--pf-global--Color--200)' }}>with devfiles</h4>
    <br />
    <div style={{ display: 'flex', overflowX: 'auto' }}>
      {keyFeaturesList.map((card) => (
        <Card
          key={card[0]}
          style={{ flexShrink: 0, width: '19rem', margin: '1rem' }}
        >
          <CardHeader>
            <CardHeaderMain>
              <Brand
                src={cogIcon}
                alt="Placeholder"
                style={{ height: '5rem', marginLeft: '40%' }}
              />
            </CardHeaderMain>
          </CardHeader>
          <CardTitle>{card[0]}</CardTitle>
          <CardBody>{card[1]}</CardBody>
        </Card>
      ))}
    </div>
  </div>
);

export default KeyFeatures;
