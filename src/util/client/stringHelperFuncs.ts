/**
 * Returns a hyper link for the navigation bar
 */

export const getHyperLink = (header: string, subheader: string): string =>
  `#${header}-$${subheader}`;
