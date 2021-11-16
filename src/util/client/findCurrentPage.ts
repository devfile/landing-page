import type { MDFile, PageElem } from 'custom-types';

/**
 * Finds the current page in mdFiles
 *
 * @param _header - the header to look for
 * @param _subHeader - the subheader to look for
 * @param mdFiles - The mdFiles to look through
 *
 * @returns the found current page
 */
export const findCurrentPage = (
  _header: string,
  _subHeader: string,
  mdFiles: MDFile[],
): PageElem | undefined => {
  let newCurrentPage: PageElem | undefined;

  // Find the new current page
  mdFiles.some(({ header, files }) => {
    if (_header === header) {
      const file = files.find(({ subHeader }) => _subHeader === subHeader);

      if (file) {
        newCurrentPage = {
          header: _header,
          subHeader: _subHeader,
          html: file.html,
        };
        return true;
      }
    }
  });

  return newCurrentPage;
};
