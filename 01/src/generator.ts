const numArray = [1,2,3,4,5];

const createRangeIterable = (from: number, to: number) => {
  let currentValue = from;
  return {
    next() {
      const value = (
        currentValue < to ? currentValue : undefined
      );
      currentValue++;
      const done = value == undefined;
      return {value, done};
    }
  };
}

class RangeIterable {
  constructor(public from: number, public to: number) {}
  [Symbol.iterator]() {
    const that = this;
    let currentValue = that.from;
    return {
      next() {
        const value = currentValue < that.to ? currentValue++ : undefined;
        const done = value == undefined;
        return {value, done};
      }
    }
  }
}

function* gen() {
  console.log('..generate');
  let value = 1;
  while (value < 4) {
    yield value++;
  }
  console.log('generated...');
}

function* rangeGen(from: number, to: number) {
  let value = from;
  while(value < to) {
    yield value++;
  }
}

function* gen12() {
  yield 1;
  yield 2;
}
function* gen1to5() {
  yield* gen12();
  yield* [3,4];
  yield 5;
}

export const myGenerator = (): void => {
  console.log('generator');
  //const itor = createRangeIterable(1, 6);
  const itor = new RangeIterable(1, 5);
  for(let value of itor) {
    console.log(value);
  }
  for(let value of gen()){
    console.log(value);
  }
  const period = 1000;
  let count = 0;
  console.log('start!');
  const id = setInterval(() => {
    if(count >= 3) {
      clearInterval(id);
      console.log('finished...');
    } else {
      console.log(++count);
    }
  }, period);
  for(let value of gen1to5()) {  //rangeGen(1, 5)){
    console.log(value);
  }
}