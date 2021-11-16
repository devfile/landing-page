# landing-page

Landing Page repository for devfile.io.

## Getting Started

To start, run `yarn install`.

Build the application with `yarn build` or `npm run build`.

Start a development server with `yarn dev` or `npm run dev`.

Start a production server with `yarn start` or `npm run start`.

## Adding or updating information static webpage information

The directory `webpage_info` contains the static webpage files. If the layout text or the main page text need to be modified they are in the corresponding json file. The json file has been added for simplicity and the changes located in them will be reflected in the next build of the application. They _cannot_ be dynamically updated!

### `/getting-started`

The directory `getting-started` represents the navigation in the Getting Started section of the landing page. The directory name after the first letter will be displayed as is on the navigation bar. If you want the navigation elements to be ordered add a number before the directory name. Any character before the first letter will be used for sorting purposes and will be removed before displaying. Currently, the navigation bar only supports using the directory as the navigation group and the md or adoc file(s) as the navigation elements. This will be changed in future releases. Note: The `+` symbol cannot be used in the name for either a file or directory in the `getting-started` directory.

## CI/CD

[devfile/docs workflow](https://github.com/devfile/docs/blob/master/.github/workflows/main.yaml) dispatches an event to devfile/landing-page repository.

[devfile/landing-page workflow](./.github/workflows/BuildAndDeploy.yaml) receives the event and triggers its job. After building the landing-page & docs, the workflow deploys the built site to [devfile/devfile.github.io](https://github.com/devfile/devfile.github.io) which hosts the github pages at https://devfile.github.io.
