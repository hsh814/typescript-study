import {writeCsvFormat} from './fake';
import {getFileNameAndNumber} from './util/getFileNameAndNumber';

const [filename, numberOfFakeData] = getFileNameAndNumber('./data/fake', 1);
const csvFilename = `${filename}-${numberOfFakeData}.csv`;
writeCsvFormat(csvFilename, numberOfFakeData)
  .then(result => console.log(result))
  .catch((e: Error) => console.log(e.message));
