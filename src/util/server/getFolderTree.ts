import { FolderTree } from 'custom-types';
import { promises as fs } from 'fs';
import type { Stats } from 'fs';
import path from 'path';

/**
 * Recursive search to go through the file system to find all folders and files given a starting directory
 */
export const getFolderTree = async (
  baseFolderPath: string,
  headers: string[]
): Promise<FolderTree[]> =>
  await Promise.all(
    headers.map(async (header) => {
      const folderPath = path.join(baseFolderPath, header);
      const folderObjects = await fs.readdir(folderPath, 'utf8');

      const { subHeaders, folderTree } = await getSubFolderTreeAndHeaders(
        folderObjects,
        folderPath
      );

      return { header, subHeaders, folderTree };
    })
  );

/**
 * Goes through each header and and pushes each object to the corresponding array i.e. file or directory
 */
export const getSubFolderTreeAndHeaders = async (
  folderObjects: string[],
  folderPath: string
): Promise<Omit<FolderTree, 'header'>> =>
  await folderObjects.reduce(async (promise, folderObject) => {
    const { subHeaders, folderTree } = await promise;

    const stats = await getStats(folderPath, folderObject);

    if (stats.isDirectory()) {
      const subFolderTree = await getFolderTree(folderPath, [folderObject]);
      folderTree.push(...subFolderTree);
    }

    if (stats.isFile()) {
      subHeaders.push(folderObject);
    }

    return { subHeaders, folderTree };
  }, Promise.resolve({ subHeaders: [], folderTree: [] } as Omit<FolderTree, 'header'>));

/**
 * Gets the stats of the object i.e. whether its a file or directory
 */
export const getStats = async (folderPath: string, folderObject: string): Promise<Stats> => {
  const folderSubPath = path.join(folderPath, folderObject);
  const stats = await fs.lstat(folderSubPath);

  return stats;
};
