import { FolderTree } from 'custom-types';
import { promises as fs } from 'fs';
import path from 'path';

export const getFolderTree = async (
  baseFolderPath: string,
  headers: string[]
): Promise<FolderTree[]> =>
  await Promise.all(
    headers.map(async (header) => {
      const folderPath = path.join(baseFolderPath, header);
      const folderObjects = await fs.readdir(folderPath, 'utf8');
      const subHeaders: string[] = [];
      let folderTree: FolderTree[] = [];

      await Promise.all(
        folderObjects.map(async (folderObject) => {
          const folderSubPath = path.join(folderPath, folderObject);
          const stats = await fs.lstat(folderSubPath);

          if (stats.isDirectory()) {
            const subFolderTree = await getFolderTree(folderPath, [folderObject]);
            folderTree = folderTree.concat(subFolderTree);
          }

          if (stats.isFile()) {
            subHeaders.push(folderObject);
          }
        })
      );
      return { header, subHeaders, folderTree };
    })
  );
