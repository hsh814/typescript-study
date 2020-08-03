import {getFileNameAndNumber} from './util';
import {csvFileReaderGenerator} from './csv/csvFileReaderGenerator';

const [filename] = getFileNameAndNumber('./data/fake-100000.csv', 1);

let line = 1;
for(let obj of csvFileReaderGenerator(filename)) {
  console.log(`${line}: ${JSON.stringify(obj)}`);
  line++;
}
console.log('\n read complete');