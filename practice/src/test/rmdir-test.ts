import {rmdir} from '../fileApi/rm-r';

const deleteDataDir = async(dir: string) => {
  const result = await rmdir(dir);
  console.log(`${result} dir deleted`);
}

deleteDataDir('./data/today');
