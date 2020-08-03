import mkdirp from 'mkdirp';
import {fileExists} from './fileExists';
import { rejects } from 'assert';
import { resolve } from 'path';

export const mkdir = (dirname: string): Promise<string> => (
  new Promise(async (resolve, reject) => {
    const alreadyExists = await fileExists(dirname);
    alreadyExists ? resolve(dirname) : 
      mkdirp(dirname);
  })
);