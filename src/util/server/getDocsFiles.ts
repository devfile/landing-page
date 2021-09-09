import { getFolderTree } from '@src/util/server';
import { promises as fs } from 'fs';
import path from 'path';
import Asciidoctor from 'asciidoctor';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const asciidoctor = Asciidoctor();

export const getDocsFiles = async (): Promise<null> => {
  const baseFolderPath = path.join(process.cwd(), 'config', 'docs');
  const headers = await fs.readdir(baseFolderPath, 'utf8');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const folderTree = await getFolderTree(baseFolderPath, headers);

  return null;
};
