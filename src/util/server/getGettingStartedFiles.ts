import { GettingStartedFiles } from 'custom-types';
import { getFolderTree } from '@src/util/server';
import { promises as fs } from 'fs';
import path from 'path';
import Asciidoctor from 'asciidoctor';
import { is } from 'typescript-is';

const asciidoctor = Asciidoctor();

export const getGettingStartedFiles = async (): Promise<GettingStartedFiles[]> => {
  const baseFolderPath = path.join(process.cwd(), 'config', 'getting-started');
  const headers = await fs.readdir(baseFolderPath, 'utf8');
  const folderTree = await getFolderTree(baseFolderPath, headers);

  const output = folderTree.map(({ header, subHeaders }) => {
    const subHeaderWithHTML = subHeaders?.map((subHeader) => {
      const filePath = path.join(baseFolderPath, header, subHeader);
      // eslint-disable-next-line camelcase
      const html = asciidoctor.convertFile(filePath, { to_file: false }) as string;
      // Remove the file extension
      const subHeaderWithoutExt = subHeader.split('.').slice(0, -1).join('.');
      return { subHeader: subHeaderWithoutExt, html };
    });
    return { header, subHeaderWithHTML };
  });

  if (!is<GettingStartedFiles[]>(output)) {
    throw TypeError('Could not generate getting started files');
  }

  return output;
};
