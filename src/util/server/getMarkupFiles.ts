import type { MarkupFile, FolderTree, MarkupFileChild } from 'custom-types';
import { getFolderTree, formatMarkupFiles, sortMarkupFiles } from '@src/util/server';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import Asciidoctor from 'asciidoctor';
import hljs from 'highlight.js';
import { JSDOM } from 'jsdom';
import { FSTypes } from '@src/enums';

const asciidoctor = Asciidoctor();
// asciidoctor.SyntaxHighlighter = Test;

export const getMarkupFiles = async (relPath: string): Promise<MarkupFile[]> => {
  const splitRelPath = relPath.split('/');
  const markupFilePath = path.join(process.cwd(), ...splitRelPath);
  const headers = await fs.readdir(markupFilePath, 'utf8');
  const folderTrees = await getFolderTree(markupFilePath, headers);

  const markupFiles = convertFolderTreeToMarkup(folderTrees, markupFilePath);

  const sortedMarkupFiles = sortMarkupFiles(markupFiles);

  const formattedMarkupFiles = formatMarkupFiles(sortedMarkupFiles);

  return formattedMarkupFiles;
};

export const convertFolderTreeToMarkup = (folderTrees: FolderTree[], _path: string): MarkupFile[] =>
  folderTrees.map((folderTree) => {
    const markupFile: MarkupFile = {
      header: folderTree.header,
      children: [],
      html: '',
    };

    markupFile.children = folderTree.children.reduce((fileSystem, v) => {
      // Only two possible cases
      // eslint-disable-next-line default-case
      switch (v.type) {
        case FSTypes.FILE:
          // Remove the file extension
          const subHeader = v.container.split('.').slice(0, -1).join('.');

          const filePath = path.join(_path, folderTree.header, v.container);
          const html = getHtml(filePath);

          if (subHeader === 'index') {
            markupFile.html = html;
          } else {
            fileSystem.push({ type: FSTypes.FILE, container: { subHeader, html } });
          }

          break;

        case FSTypes.DIRECTORY:
          const markupFiles = convertFolderTreeToMarkup(
            [v.container],
            path.join(_path, folderTree.header),
          );

          // Only 1 element is returned
          fileSystem.push({ type: FSTypes.DIRECTORY, container: markupFiles[0] });
          break;
      }

      return fileSystem;
    }, [] as MarkupFileChild[]);

    return markupFile;
  });

const getHtml = (filePath: string): string => {
  const html = asciidoctor.convertFile(filePath, {
    // eslint-disable-next-line camelcase
    to_file: false,
    safe: 'safe',
  }) as string;

  const dom = new JSDOM(html);

  hljs.configure({ ignoreUnescapedHTML: true });

  dom.window.document.querySelectorAll('pre.highlight > code').forEach((el) => {
    hljs.highlightElement(el as HTMLElement);
  });

  return dom.window.document.documentElement.innerHTML;
};
