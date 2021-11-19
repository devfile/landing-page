import { FolderTree } from 'custom-types';
import { promises as fs } from 'node:fs';
import type { Stats } from 'node:fs';
import path from 'node:path';
import { FSTypes } from '@src/enums';

/**
 * Recursive search to go through the file system to find all folders and files given a starting directory
 */
export const getFolderTree = async (_path: string, headers: string[]): Promise<FolderTree[]> =>
  Promise.all(
    headers.map(async (header) => {
      const folderTree: FolderTree = {
        header,
        children: [],
      };

      const basePath = path.join(_path, header);
      const folderTreeChildren = await fs.readdir(basePath, 'utf8');

      folderTree.children =
        // eslint-disable-next-line unicorn/no-await-expression-member
        (await getSubFolderTreeAndHeaders(basePath, folderTreeChildren)).children;

      return folderTree;
    }),
  );

/**
 * Goes through each header and and pushes each object to the corresponding array i.e. file or directory
 */
export const getSubFolderTreeAndHeaders = async (
  basePath: string,
  folderTreeChildren: string[],
): Promise<Omit<FolderTree, 'header'>> =>
  folderTreeChildren.reduce(async (promise, folderTreeChild) => {
    const folderTree = await promise;

    const stats = await getStats(basePath, folderTreeChild);

    if (stats.isDirectory()) {
      const subFolderTree = await getFolderTree(basePath, [folderTreeChild]);
      // Only 1 element is returned
      folderTree.children.push({ type: FSTypes.DIRECTORY, container: subFolderTree[0] });
    }

    if (stats.isFile()) {
      folderTree.children.push({ type: FSTypes.FILE, container: folderTreeChild });
    }

    return { children: folderTree.children };
  }, Promise.resolve({ children: [] } as Omit<FolderTree, 'header'>));

/**
 * Gets the stats of the object i.e. whether its a file or directory
 */
export const getStats = async (basePath: string, folderTreeChild: string): Promise<Stats> => {
  const folderSubPath = path.join(basePath, folderTreeChild);
  const stats = await fs.lstat(folderSubPath);

  return stats;
};
