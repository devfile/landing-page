import type { HeaderAndFooterLinks } from 'custom-types';

const links: HeaderAndFooterLinks = {
  title: 'Devfile.io',
  headerLinks: [
    { name: 'Getting Started', link: '/getting-started' },
    { name: 'Docs', link: 'https://devfile.io/docs' },
    { name: 'Devfile Registry', link: 'https://registry.devfile.io' },
  ],
  footerLinks: [
    { name: 'Cloud Native Computing Foundation', link: 'https://www.cncf.io' },
    { name: 'Devfile Registry', link: 'https://registry.devfile.io' },
    { name: 'Docs', link: 'https://devfile.io/docs' },
    { name: 'Github', link: 'https://github.com/devfile/api' },
    { name: 'Slack', link: 'https://kubernetes.slack.com/archives/C02SX9E5B55' },
  ],
  /**
   * Companies must be listed in alphabetical order
   *
   * @see https://github.com/cncf/foundation/blob/main/website-guidelines.md
   */
  contributorLinks: [
    { name: 'AWS', link: 'https://aws.amazon.com' },
    { name: 'IBM', link: 'https://www.ibm.com' },
    { name: 'JetBrains', link: 'https://www.jetbrains.com' },
    { name: 'Red Hat', link: 'https://www.redhat.com' },
  ],
};

export default links;
