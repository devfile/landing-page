import type { MarkupFile } from 'custom-types';
import { FSTypes } from '@src/enums';

export const sortMarkupFiles = (markupFiles: MarkupFile[]): MarkupFile[] => {
  let sortedMarkupFiles = markupFiles.sort((markupFileA, markupFileB) =>
    compareStrings(markupFileA.header, markupFileB.header),
  );

  sortedMarkupFiles = sortedMarkupFiles.map((markupFile) => {
    const newMarkupFile = markupFile;

    newMarkupFile.children = markupFile.children.sort((a, b) => {
      if (a.type === FSTypes.FILE && b.type === FSTypes.FILE) {
        return compareStrings(a.container.subHeader, b.container.subHeader);
      }

      if (a.type === FSTypes.DIRECTORY && b.type === FSTypes.FILE) {
        return compareStrings(a.container.header, b.container.subHeader);
      }

      if (a.type === FSTypes.FILE && b.type === FSTypes.DIRECTORY) {
        return compareStrings(a.container.subHeader, b.container.header);
      }

      if (a.type === FSTypes.DIRECTORY && b.type === FSTypes.DIRECTORY) {
        return compareStrings(a.container.header, b.container.header);
      }

      return 0;
    });

    return newMarkupFile;
  });

  return sortedMarkupFiles;
};

export const compareStrings = (a: string, b: string): number =>
  a.localeCompare(b, 'en', {
    sensitivity: 'accent',
  });
