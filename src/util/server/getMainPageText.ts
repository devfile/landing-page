import { promises as fs } from 'fs';
import path from 'path';
import { is } from 'typescript-is';

import type { MainPageText } from 'custom-types';

export const getMainPageText = async (): Promise<MainPageText> => {
  const mainPageTextPath = path.join(process.cwd(), 'webpage_info', 'main-page-text.json');
  const mainPageTextUnparsed = await fs.readFile(mainPageTextPath, 'utf8');
  const mainPageText = JSON.parse(mainPageTextUnparsed) as MainPageText;

  if (!is<MainPageText>(mainPageText)) {
    throw TypeError('The main page text does not fit the schema');
  }

  return mainPageText;
};
