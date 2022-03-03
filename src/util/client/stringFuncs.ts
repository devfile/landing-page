import type { Heading } from 'custom-types';

/**
 * Creates an href for an anchor element
 *
 * @param headings - the headings for the PageElem
 * @returns a hyper link
 */
export const createAnchor = (headings: Heading[]): string => {
  if (headings.length === 0) {
    return '';
  }

  const compressedHeadings = headings.map(({ header }) => header);
  compressedHeadings.push(headings[headings.length - 1].subHeader);

  // Regex for finding + or #
  const specialCharRegex = /\+|#/g;

  // Regex for finding spaces
  const spaceRegex = / /g;

  const sanitizedHeadings = compressedHeadings.map((heading) => {
    let newHeading = heading.replace(specialCharRegex, '');

    newHeading = newHeading.replace(spaceRegex, '_');

    return newHeading;
  });

  return `#${sanitizedHeadings.join('+')}`;
};

/**
 * Parses an anchor from a url
 *
 * @param link - the link to parse
 * @returns an array of Headings
 */
export const parseAnchor = (link: string): Heading[] => {
  // Matches everything after #
  const anchor = link.match(/(?<=#).*/);

  if (!anchor?.length) {
    return [];
  }

  const splitHeadings = anchor[0].split('+');

  // Regex for finding _
  const underscoreRegex = /_/g;

  const compressedHeadings = splitHeadings.map((str) => str.replace(underscoreRegex, ' '));

  const headings: Heading[] = compressedHeadings.reduce((headingsAccumulator, str, index) => {
    const newHeadings = headingsAccumulator;

    if (newHeadings.length === 0) {
      newHeadings.push({ header: str, subHeader: '' });
    } else if (compressedHeadings.length - 1 === index) {
      newHeadings[newHeadings.length - 1].subHeader = str;
    } else {
      newHeadings[newHeadings.length - 1].subHeader = str;
      newHeadings.push({ header: str, subHeader: '' });
    }

    return newHeadings;
  }, [] as Heading[]);

  return headings;
};
