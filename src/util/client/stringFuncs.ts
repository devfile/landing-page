import { PageElem } from 'custom-types';

/**
 * Creates hyper link for a PageElem
 *
 * @param header - the header for the PageElem
 * @param subHeader - the subheader for the PageElem
 * @returns a hyper link for the navigation bar
 */
export const createHyperLink = (header: string, subHeader: string): string => {
  // Regex for finding +
  const regexForPlus = new RegExp(/\+/g);

  let newHeader = header.replace(regexForPlus, '');
  let newSubHeader = subHeader.replace(regexForPlus, '');

  // Regex for finding spaces
  const regexForSpace = new RegExp(/ /g);

  newHeader = header.replace(regexForSpace, '_');
  newSubHeader = subHeader.replace(regexForSpace, '_');

  return `#${newHeader}+${newSubHeader}`;
};

/**
 * Parse a link for the header and subheader
 *
 * @param link - the link to parse
 * @returns an object containing header and subHeader
 */
export const parseLink = (link: string): Omit<PageElem, 'html'> => {
  const headerMatches = link.match(/(?<=#).*(?=\+)/);
  const subHeaderMatches = link.match(/[^+]*$/);

  if (headerMatches?.length && subHeaderMatches?.length) {
    // Return the first match for header and subHeader
    let header = headerMatches[0];
    let subHeader = subHeaderMatches[0];

    // Regex for finding _
    const regexForUnderscore = new RegExp(/_/g);

    header = header.replace(regexForUnderscore, ' ');
    subHeader = subHeader.replace(regexForUnderscore, ' ');

    return { header, subHeader };
  }

  return { header: '', subHeader: '' };
};
