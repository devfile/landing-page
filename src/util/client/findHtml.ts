import type { MarkupFile, Heading } from 'custom-types';
import { FSTypes } from '@src/enums';

export interface File {
  subHeader: string;
  html: string;
}

/**
 * Finds the current page in mdFiles
 *
 * @param headings - the header and sub header to look for
 * @param markupFiles - The mdFiles to look through
 *
 * @returns the found current page
 */
export const findHtml = (headings: Heading[], markupFiles: MarkupFile[]): string => {
  // Find the new current page
  for (const { header, children, html } of markupFiles) {
    // Look at the first heading
    const heading = headings[0];
    if (heading.header === header) {
      if (!heading.subHeader) {
        return html;
      }

      for (const markupFileChild of children) {
        // If the depth is greater than 1 we know the html is a level lower
        if (
          markupFileChild.type === FSTypes.DIRECTORY &&
          heading.subHeader === markupFileChild.container.header &&
          headings.length > 1
        ) {
          return findHtml(headings.slice(1), [markupFileChild.container]);
        }
        if (
          markupFileChild.type === FSTypes.DIRECTORY &&
          heading.subHeader === markupFileChild.container.header
        ) {
          return markupFileChild.container.html;
        }
        if (
          markupFileChild.type === FSTypes.FILE &&
          heading.subHeader === markupFileChild.container.subHeader
        ) {
          return markupFileChild.container.html;
        }
      }
    }
  }

  return '';
};
