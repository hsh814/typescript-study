import * as fs from 'fs';

export const writeFile = (filename: string, data: any): Promise<any> => (
  new Promise((resolve, reject) => {
    fs.writeFile(filename, data, 'utf8', (error: Error | null) => {
      error ? reject(error) : resolve(data);
    });
  })
);