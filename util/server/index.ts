import { promises as fs } from 'fs';
import path from 'path';

import type { TitleDescriptionList } from 'custom-types';

export const getStartingFile = async (fileRelPath: string): Promise<string> => {
  const splitRelFilePath = fileRelPath.split('/');
  const absFilePath = path.join(process.cwd(), ...splitRelFilePath);
  const startingFile = await fs.readFile(absFilePath, 'utf8');
  return startingFile;
};

export const getTitleDescriptionList = async (
  fileRelPath: string
): Promise<TitleDescriptionList> => {
  const splitRelFilePath = fileRelPath.split('/');
  const absFilePath = path.join(process.cwd(), ...splitRelFilePath);
  const TitleDescriptionListUnparsed = await fs.readFile(absFilePath, 'utf8');
  const titleDescriptionList = JSON.parse(TitleDescriptionListUnparsed) as TitleDescriptionList;
  return titleDescriptionList;
};

export const getDescriptionList = async (fileRelPath: string): Promise<string[]> => {
  const splitRelFilePath = fileRelPath.split('/');
  const absFilePath = path.join(process.cwd(), ...splitRelFilePath);
  const descriptionListUnparsed = await fs.readFile(absFilePath, 'utf8');
  const descriptionList = JSON.parse(descriptionListUnparsed) as string[];
  return descriptionList;
};
