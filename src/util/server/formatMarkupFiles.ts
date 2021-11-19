import type { MarkupFile, HtmlContainer } from 'custom-types';
import { FSTypes } from '@src/enums';

export const formatMarkupFiles = (markupFiles: MarkupFile[]): MarkupFile[] =>
  markupFiles.map((markupFile) => formatMarkupFile(markupFile));

/**
 * Recursive search to remove the sorting characters before the title of a file or directory
 */
export const formatMarkupFile = (markupFile: MarkupFile): MarkupFile => {
  const newMarkupFile = markupFile;

  newMarkupFile.header = removeSortCharacters(markupFile.header);
  // There are only two possible types to return
  // eslint-disable-next-line array-callback-return
  newMarkupFile.children = markupFile.children.map((v) => {
    // eslint-disable-next-line default-case
    switch (v.type) {
      case FSTypes.FILE:
        const fileContainer = formatFile(v.container);
        return { type: FSTypes.FILE, container: fileContainer };
      case FSTypes.DIRECTORY:
        // Only 1 element is returned
        const directoryContainer = formatMarkupFiles([v.container])[0];
        return { type: FSTypes.DIRECTORY, container: directoryContainer };
    }
  });
  return markupFile;
};

export const formatFile = ({ subHeader, html }: HtmlContainer): HtmlContainer => {
  const newSubHeader = removeSortCharacters(subHeader);
  return { subHeader: newSubHeader, html };
};

/**
 * Deletes every character up to the first occurrence of a period then a space
 * e.g ". "
 */
export const removeSortCharacters = (value: string): string => {
  const matches = value.match(/(?<=\. ).+/);

  if (matches?.length) {
    return matches[0];
  }

  return value;
};
