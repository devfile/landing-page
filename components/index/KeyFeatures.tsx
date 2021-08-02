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
                src={cogIcon}
                alt="Placeholder"
                style={{ height: '5rem', marginLeft: '40%' }}
              />
            </CardHeaderMain>
          </CardHeader>
          <CardTitle>Devfile for Stacks</CardTitle>
          <CardBody>
            The stack devfiles can be found under a devfile registry. They
            provide generic application build and run support for applications
            that use a specific language or framework. Each stack also provides
            starter projects that help you to stand up a brand new application
            quickly.
          </CardBody>
        </Card>
      </GalleryItem>
      <GalleryItem>
        <Card>
          <CardHeader>
            <CardHeaderMain>
              <Brand
                src={cogIcon}
                alt="Placeholder"
                style={{ height: '5rem', marginLeft: '40%' }}
              />
            </CardHeaderMain>
          </CardHeader>
          <CardTitle>Devfile for Projects</CardTitle>
          <CardBody>
            Having the devfile included as part of your application’s source
            code makes your development environment easily reproducible. No
            matter where you load your application, it will get built and run in
            the same way as specified in the devfile file.
          </CardBody>
        </Card>
      </GalleryItem>
      <GalleryItem>
        <Card>
          <CardHeader>
            <CardHeaderMain>
              <Brand
                src={cogIcon}
                alt="Filler cogs icon"
                style={{ height: '5rem', marginLeft: '40%' }}
              />
            </CardHeaderMain>
          </CardHeader>
          <CardTitle>Community Registry support</CardTitle>
          <CardBody>
            You have access to a community hosted registry where you can
            discover stacks and samples provided by runtime and tools teams who
            have configured them with best practices and common tools
            configurations.
          </CardBody>
        </Card>
      </GalleryItem>
      <GalleryItem>
        <Card>
          <CardHeader>
            <CardHeaderMain>
              <Brand
                src={cogIcon}
                alt="Filler cogs icon"
                style={{ height: '5rem', marginLeft: '40%' }}
              />
            </CardHeaderMain>
          </CardHeader>
          <CardTitle>Custom in-house registry</CardTitle>
          <CardBody>
            If you prefer, you can also provision and manage your own enterprise
            managed registry that allows you to customize what runtimes you want
            to make available to your teams.
          </CardBody>
        </Card>
      </GalleryItem>
      <GalleryItem>
        <Card>
          <CardHeader>
            <CardHeaderMain>
              <Brand
                src={cogIcon}
                alt="Filler cogs icon"
                style={{ height: '5rem', marginLeft: '40%' }}
              />
            </CardHeaderMain>
          </CardHeader>
          <CardTitle>Developer Environment’s Configuration as Code</CardTitle>
          <CardBody>
            Having the devfile included as part of your application, you can
            check in the devfile together with your source code. It makes your
            development environment easily reproducible. No matter where you
            load your application, it will get built and run in the same way as
            specified in the devfile file.
          </CardBody>
        </Card>
      </GalleryItem>
      <GalleryItem>
        <Card>
          <CardHeader>
            <CardHeaderMain>
              <Brand
                src={cogIcon}
                alt="Filler cogs icon"
                style={{ height: '5rem', marginLeft: '40%' }}
              />
            </CardHeaderMain>
          </CardHeader>
          <CardTitle>Parent support</CardTitle>
          <CardBody>
            Using the devfile parent support, your application inherits the
            behaviour of an existing devfile stack. When there is an update on
            the registry stack, like security fixes and runtime updates, your
            application automatically picks them up.
          </CardBody>
        </Card>
      </GalleryItem>
      <GalleryItem>
        <Card>
          <CardHeader>
            <CardHeaderMain>
              <Brand
                src={cogIcon}
                alt="Filler cogs icon"
                style={{ height: '5rem', marginLeft: '40%' }}
              />
            </CardHeaderMain>
          </CardHeader>
          <CardTitle>Stacks/samples/starter projects</CardTitle>
          <CardBody>
            The devfile community registry is populated with stacks, samples,
            and starter projects that help teams accelerate their application
            development.
          </CardBody>
        </Card>
      </GalleryItem>
      <GalleryItem>
        <Card>
          <CardHeader>
            <CardHeaderMain>
              <Brand
                src={cogIcon}
                alt="Filler cogs icon"
                style={{ height: '5rem', marginLeft: '40%' }}
              />
            </CardHeaderMain>
          </CardHeader>
          <CardTitle>Support for the full application lifecycle</CardTitle>
          <CardBody>
            With devfiles, you have help throughout the entire application
            lifecycle. You start from the starter projects to start an
            application from scratch, use inner loop support for rapid
            application development, and the outer loop support to test out the
            application that is built in a way that closely resembles the
            production build and pipeline.
          </CardBody>
        </Card>
      </GalleryItem>
    </Gallery>
  </div>
);

export default KeyFeatures;
