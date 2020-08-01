const numArray = [1,2,3,4,5];






export const myGenerator = (): void => {
  console.log('generator');
  for(let value of numArray) {
    console.log(value);
  }

}