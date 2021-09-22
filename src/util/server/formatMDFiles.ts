import type { MDFile } from 'custom-types';

type File = MDFile['files'][0];

export const formatMDFiles = (mdFiles: MDFile[]): MDFile[] =>
  mdFiles.map((mdFile) => formatMDFile(mdFile));

/**
 * Recursive search to remove the sorting characters before the title of a file or directory
 */
export const formatMDFile = ({ header, files, directories }: MDFile): MDFile => {
  header = checkSortCharacters(header);
  files = files.map((file) => formatFile(file));
  directories = formatMDFiles(directories);
  return { header, files, directories };
};

export const formatFile = ({ subHeader, html }: File): File => {
  subHeader = checkSortCharacters(subHeader);
  return { subHeader, html };
};

/**
 * Deletes every character up to the first occurrence of a letter
 */
export const checkSortCharacters = (value: string): string => value.replace(/[^a-zA-Z]*/, '');
