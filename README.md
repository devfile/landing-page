# landing-page

Landing Page repository for devfile.io.

## Getting Started

To start, run `yarn install`.

Build the application with `yarn build` or `npm run build`.

Start a development server with `yarn dev` or `npm run dev`.

Start a production server with `yarn start` or `npm run start`.

## Adding or updating information for `/getting-started`

## CI/CD

[devfile/docs workflow](https://github.com/devfile/docs/blob/master/.github/workflows/main.yaml) dispatches an event to devfile/landing-page repository.

[devfile/landing-page workflow](./.github/workflows/BuildAndDeploy.yaml) receives the event and triggers its job. After building the landing-page & docs, the workflow deploys the built site to [devfile/devfile.github.io](https://github.com/devfile/devfile.github.io) which hosts the github pages at https://devfile.github.io.
