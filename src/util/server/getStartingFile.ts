import { promises as fs } from 'fs';
import path from 'path';

export const getStartingFile = async (fileRelPath: string): Promise<string> => {
  const splitRelFilePath = fileRelPath.split('/');
  const absFilePath = path.join(process.cwd(), ...splitRelFilePath);
  const startingFile = await fs.readFile(absFilePath, 'utf8');
  return startingFile;
};
