import type { MDFile, FolderTree } from 'custom-types';
import { getFolderTree, formatMDFiles, sortMDFiles } from '@src/util/server';
import { promises as fs } from 'fs';
import path from 'path';
import Asciidoctor from 'asciidoctor';

const asciidoctor = Asciidoctor();

export const getMDFiles = async (relPath: string): Promise<MDFile[]> => {
  const splitRelPath = relPath.split('/');
  const baseFolderPath = path.join(process.cwd(), ...splitRelPath);
  const headers = await fs.readdir(baseFolderPath, 'utf8');
  const folderTree = await getFolderTree(baseFolderPath, headers);

  const mdFiles = convertFolderTreeToMD(folderTree, baseFolderPath);

  const sortedMDFiles = sortMDFiles(mdFiles);

  const formattedMDFiles = formatMDFiles(sortedMDFiles);

  return formattedMDFiles;
};

export const convertFolderTreeToMD = (
  mainFolderTree: FolderTree[],
  baseFolderPath: string
): MDFile[] =>
  mainFolderTree.map(({ header, subHeaders, folderTree }) => {
    const files = subHeaders.map((subHeader) => {
      const filePath = path.join(baseFolderPath, header, subHeader);
      // eslint-disable-next-line camelcase
      const html = asciidoctor.convertFile(filePath, { to_file: false }) as string;
      // Remove the file extension
      const subHeaderWithoutExtension = subHeader.split('.').slice(0, -1).join('.');
      return { subHeader: subHeaderWithoutExtension, html };
    });
    const directories = convertFolderTreeToMD(folderTree, path.join(baseFolderPath, header));
    return { header, files, directories };
  });
