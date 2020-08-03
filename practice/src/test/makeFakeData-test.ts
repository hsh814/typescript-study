import {IFake, makeFakeData} from '../fake/makeFakeData';

const data: IFake = makeFakeData();
console.log(data);
const keys = Object.keys(data);
console.log('keys: ', keys);
const values = Object.values(data);
console.log('values: ', values);
