import fs from 'node:fs';
import path from 'node:path';

export interface DebugOptions {
  version: string;
  configurations: {
    name: string;
    request: string;
    type: string;
    webRoot: string;
    port?: number;
    url?: string;
    runtimeArgs?: string[];
  }[];
}

const debugOptions: DebugOptions = {
  version: '0.2.0',
  configurations: [
    {
      name: 'Launch Chrome',
      request: 'launch',
      type: 'pwa-chrome',
      url: 'http://localhost:3000',
      // eslint-disable-next-line no-template-curly-in-string
      webRoot: '${workspaceFolder}',
      runtimeArgs: [],
    },
    {
      // run chrome with 'google-chrome --remote-debugging-port=9222' so the debug port is open
      name: 'Attach to Chrome',
      port: 9222,
      request: 'attach',
      type: 'pwa-chrome',
      // eslint-disable-next-line no-template-curly-in-string
      webRoot: '${workspaceFolder}',
    },
  ],
};

/*
 * Extensions for Google Chrome to add in debug mode
 * 1: React Developer Tools
 */
const extensions = ['/Extensions/fmkadmapgofadopljbjfkapdkoienihi'];

const main = (): void => {
  let appDataPath = '';

  if (process.env.APPDATA) {
    appDataPath = `${process.env.HOME ?? ''}/AppData/Local/Google/Chrome/User Data/Default`;
  } else if (process.platform === 'darwin') {
    appDataPath = `${process.env.HOME ?? ''}/Library/Application Support/Google/Chrome/Default`;
  } else {
    appDataPath = `${process.env.HOME ?? ''}/.config/google-chrome/default`;
  }

  // Regex for / or \
  const regex = /\/|\\/;

  try {
    const folderPath = path.join(...appDataPath.split(regex));

    extensions.forEach((ext) => {
      const extPath = path.join(folderPath, ...ext.split(regex));
      const version = fs.readdirSync(extPath, 'utf-8')[0];

      debugOptions.configurations[0].runtimeArgs?.push(
        `--load-extension=${path.join(extPath, version)}`,
      );
    });
  } catch {
    throw new Error('There was an error trying to add Google Chrome extensions to the debug mode');
  } finally {
    fs.writeFileSync('./.vscode/launch.json', JSON.stringify(debugOptions));
  }
};

main();
