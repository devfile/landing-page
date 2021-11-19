import type { MarkupFile } from 'custom-types';
import { FSTypes } from '@src/enums';

/**
 * Finds the first html in markupFiles
 *
 * @param markupFiles - the markupFiles to search through
 *
 * @returns the first html found
 */
export const findFirstHtml = (markupFiles: MarkupFile[]): string => {
  for (const { children, html } of markupFiles) {
    if (html) {
      return html;
    }

    for (const v of children) {
      if (v.type === FSTypes.DIRECTORY) {
        return findFirstHtml([v.container]);
      }
      return v.container.html;
    }
  }

  return '';
};
