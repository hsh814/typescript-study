import {removeFile} from '../fileApi/removeFile';
import {rmdir} from '../fileApi/rm-r';

const deleteTest = async (filename: string) => {
  const result = await removeFile(filename);
  console.log(`delete file: ${result} from ${filename}`);
}
Promise.all([deleteTest('./data/hello.txt'), deleteTest('./data/test.json')])
  .then(s => rmdir('./data'))
  .then(dirname => console.log(`delete ${dirname}`))
  .catch((e: Error) => console.log(e.message));
