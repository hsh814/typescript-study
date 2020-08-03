import {mkdir} from '../fileApi/mkdir-p';

const makeDataDir = async(dirname: string) => {
  let result = await mkdir(dirname);
  console.log(`${result} dir created`);
}

makeDataDir('./data/today');