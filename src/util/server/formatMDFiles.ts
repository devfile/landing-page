import type { MDFiles } from 'custom-types';

export const formatMDFiles = (mdFiles: MDFiles[]): MDFiles[] => {
  const formattedMDFiles = mdFiles.map(({ header, files, directories }) => {
    header = checkSortCharacters(header);
    files = files.map(({ subHeader, html }) => {
      subHeader = checkSortCharacters(subHeader);
      return { subHeader, html };
    });
    directories = formatMDFiles(directories);

    return { header, files, directories };
  });

  return formattedMDFiles;
};

export const checkSortCharacters = (value: string): string => {
  if (value[0] === '_') {
    value = value.substring(1);
  }
  if (!isNaN(parseInt(value[0]))) {
    value = value.substring(3);
  }

  return value;
};
