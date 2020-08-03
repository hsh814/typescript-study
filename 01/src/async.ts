import {readFileSync, readFile} from 'fs';

const readFilePromise = (filename: string): Promise<string> => (
  new Promise<string>((resolve, reject) => {
    readFile(filename, (error: Error | null, buffer: Buffer) => {
      if(error) reject(error);
      else resolve(buffer.toString());
    })
  })
);



export const myasync = () => {
  console.log('async - read file');
  const buffer: Buffer = readFileSync('./package.json');
  console.log(`Read package.json sync ${buffer.toString()}`);

  readFile('./package.json', (error: Error | null, buffer_0: Buffer): void => {
    console.log('read package.json asynchronously');
    console.log(buffer_0.toString());
  });

  (async () => {
    const content = await readFilePromise('./package.json');
    console.log('read file by async, await');
    console.log(content);
  })();
}