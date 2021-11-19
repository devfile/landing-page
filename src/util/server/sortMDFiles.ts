import type { MDFile } from 'custom-types';

type File = MDFile['files'][0];

export const sortMDFiles = (mdFiles: MDFile[]): MDFile[] =>
  mdFiles.sort((mdFileA, mdFileB) => {
    mdFileA.files.sort((a, b) => compareSubHeaders(a, b));
    mdFileB.files.sort((a, b) => compareSubHeaders(a, b));

    sortMDFiles(mdFileA.directories);
    sortMDFiles(mdFileB.directories);

    return mdFileA.header.localeCompare(mdFileB.header, 'en', {
      sensitivity: 'accent',
    });
  });

export const compareSubHeaders = (a: File, b: File): number =>
  a.subHeader.localeCompare(b.subHeader, 'en', {
    sensitivity: 'accent',
  });
