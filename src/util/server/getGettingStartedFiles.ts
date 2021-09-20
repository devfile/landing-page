import { FolderTree, GettingStartedFiles } from 'custom-types';
import { promises as fs } from 'fs';
import path from 'path';
import Asciidoctor from 'asciidoctor';

const asciidoctor = Asciidoctor();

export const getGettingStartedFiles = async (): Promise<GettingStartedFiles[]> => {
  const baseFolderPath = path.join(process.cwd(), 'webpage_info', 'getting-started');
  const headers = await fs.readdir(baseFolderPath, 'utf8');
  const folderTree: FolderTree[] = await Promise.all(
    headers.map(async (header) => {
      const folderPath = path.join(baseFolderPath, header);
      const subHeaders = await fs.readdir(folderPath, 'utf8');
      return { header, subHeaders };
    })
  );

  const output = folderTree.map((headerWithSubHeaders) => {
    const subHeaderWithHTML = headerWithSubHeaders.subHeaders.map((subHeader) => {
      const filePath = path.join(baseFolderPath, headerWithSubHeaders.header, subHeader);
      // eslint-disable-next-line camelcase
      const html = asciidoctor.convertFile(filePath, { to_file: false }) as string;
      // Remove the file extension
      const subHeaderWithoutExt = subHeader.split('.').slice(0, -1).join('.');
      return { subHeader: subHeaderWithoutExt, html };
    });
    return { header: headerWithSubHeaders.header, subHeaderWithHTML };
  });

  return output;
};
