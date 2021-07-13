import {
  Gallery,
  GalleryItem,
  Brand,
  Card,
  CardHeader,
  CardHeaderMain,
  CardTitle,
  CardBody,
} from '@patternfly/react-core';

import communityIcon from '../../public/images/community.png';
import enterpriseIcon from '../../public/images/enterprise.png';
import cogIcon from '../../public/images/cogs.png';

const KeyFeatures = (
  <div>
    <h1 style={{ fontSize: '2rem' }}>Key Features</h1>
    <h4 style={{ color: 'var(--pf-global--Color--200)' }}>with devfiles</h4>
    <br />
    <Gallery hasGutter>
      <GalleryItem>
        <Card>
          <CardHeader>
            <CardHeaderMain>
              <Brand
                src={communityIcon}
                alt="Some Picture"
                style={{ height: '5rem' }}
              />
            </CardHeaderMain>
          </CardHeader>
          <CardTitle>Community Registry</CardTitle>
          <CardBody>
            We provide a{' '}
            <span style={{ color: 'var(--pf-global--link--Color)' }}>
              community hosted registry{' '}
            </span>
            where you can discover stacks and samples provided by runtime and
            tools teams who have configured them with best practices and common
            tools configurations.
          </CardBody>
        </Card>
      </GalleryItem>
      <GalleryItem>
        <Card>
          <CardHeader>
            <CardHeaderMain>
              <Brand
                src={enterpriseIcon}
                alt="Some Picture"
                style={{ height: '5rem', marginLeft: '40%' }}
              />
            </CardHeaderMain>
          </CardHeader>
          <CardTitle>Enterprise Registry</CardTitle>
          <CardBody>
            If you prefer, you can also provision and manage your own{' '}
            <span style={{ color: 'var(--pf-global--link--Color)' }}>
              enterprise managed registry
            </span>{' '}
            that allows you to customize what runtimes you want to make
            available to your teams.
          </CardBody>
        </Card>
      </GalleryItem>
      <GalleryItem>
        <Card>
          <CardHeader>
            <CardHeaderMain>
              <Brand
                src={cogIcon}
                alt="Some Picture"
                style={{ height: '5rem', marginLeft: '40%' }}
              />
            </CardHeaderMain>
          </CardHeader>
          <CardTitle>Another Feature</CardTitle>
          <CardBody>
            Lorem ipsum dolor sit amet, consectetur{' '}
            <span style={{ color: 'var(--pf-global--link--Color)' }}>
              adipiscing elit
            </span>
            . Aenean tincidunt consequat consequat. Etiam ac mi nulla. Duis
            tincidunt vehicula felis, eget egestas lacus tristique vitae.
          </CardBody>
        </Card>
      </GalleryItem>
    </Gallery>
  </div>
);

export default KeyFeatures;
