import { MainPageText } from 'custom-types';

const mainPage: MainPageText = {
  WhyDevfiles: {
    title: 'Why devfiles?',
    body: 'Modern applications contain multiple components, each having a variety of technologies. Therefore, developers spend significant time configuring an environment, maintaining it, and switching among projects or branches. As a result, developers are spending a lot of their time getting a developer environment properly configured, maintaining it and switching between projects or branches.\nWhat if developer environments were treated in a declarative fashion similarly to how infrastructure is treated in DevOps, to become easily reproducible, versioned and shareable?\nWith devfiles, you define best practices for your application development lifecycle. You define these best practices as code, making it easy for you and your collaborators to contribute to projects and maintain consistency across different teams.',
  },
  ValuePropositions: {
    items: [
      {
        title: 'Make development environments easily reproducible',
        body: 'Development environments can be cumbersome to create, and as a result developers become locked into a single local configuration to avoid requirements becoming mixed up or interfering with each other. With devfiles, development environments become reproducible and disposable - they are now quick to create, can be thrown away at will, and can easily be re-created when needed.',
      },
      {
        title: 'Improve development consistency across teams and projects',
        body: 'Who has not heard the famous “but it works on my machine”! It can be challenging to chase down problems when your development environment is drastically different from your production environment. Devfiles provide a mechanism for teams to share configurations across projects, and provide a single source of truth throughout the application lifecycle. Check them in and manage them into your source repository.',
      },
      {
        title: 'Reduce security risks and maintenance costs',
        body: 'With so many layers and dependencies of today’s modern applications, security and maintenance can be both complicated and difficult. Since devfiles can be managed from a central location, you only need to update them once to get them properly aligned across the developer teams. Following security requirements and dependency versions gets simpler and more consistent with minimum disruption.',
      },
      {
        title: 'Accelerate developer onboarding and leverage expertise of the community',
        // eslint-disable-next-line quotes
        body: "Modern applications use many different technologies, run times, frameworks and tools can make it challenging to understand all the available options to code, build, test, debug, deploy and update your applications. Devfiles allow you to inject expertise shared from other developers and communities into your team's development environment. Codifying configuration and best practice workflows helps lessen the requirement on every developer in your organization to understand how to manage and configure all these layers themselves.",
      },
    ],
  },
  KeyFeatures: {
    title: 'Key Features',
    body: 'with devfiles',
    items: [
      {
        title: 'Devfile for Stacks',
        body: 'The stack devfiles can be found under a devfile registry. They provide generic application build and run support for applications that use a specific language or framework. Each stack also provides starter projects that help you to stand up a brand new application quickly.',
        image: 'stacks.svg',
      },
      {
        title: 'Devfile for Projects',
        body: 'Having the devfile included as part of your application’s source code makes your development environment easily reproducible. No matter where you load your application, it will get built and run in the same way as specified in the devfile file.',
        image: 'projects.svg',
      },
      {
        title: 'Community Registry Support',
        body: 'You have access to a community hosted registry where you can discover stacks and samples provided by runtime and tools teams who have configured them with best practices and common tools configurations.',
        image: 'community.svg',
      },
      {
        title: 'Custom in-house registry',
        body: 'If you prefer, you can also provision and manage your own enterprise managed registry that allows you to customize what run times you want to make available to your teams.',
        image: 'registry.svg',
      },
      {
        title: 'Configuration as Code for Developer Environments',
        body: 'Having the devfile included as part of your application, you can check in the devfile together with your source code. It makes your development environment easily reproducible. No matter where you load your application, it will get built and run in the same way as specified in the devfile file.',
        image: 'config.svg',
      },
      {
        title: 'Parent support',
        body: 'Using the devfile parent support, your application inherits the behavior of an existing devfile stack. When there is an update on the registry stack, like security fixes and runtime updates, your application automatically picks them up.',
        image: 'parent.svg',
      },
      {
        title: 'Stacks/samples/starter projects',
        body: 'The devfile community registry is populated with stacks, samples, and starter projects that help teams accelerate their application development.',
        image: 'blueprint.svg',
      },
      {
        title: 'Support for the full application lifecycle',
        body: 'With devfiles, you have help throughout the entire application lifecycle. You start from the starter projects to start an application from scratch, use inner loop support for rapid application development, and the outer loop support to test out the application that is built in a way that closely resembles the production build and pipeline.',
        image: 'lifecycle.svg',
      },
    ],
  },
};

export default mainPage;
