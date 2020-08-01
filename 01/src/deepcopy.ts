const deepcopy = (): void => {
  console.log('nothing.');
  const oArray = [1,2,3,4];
  const deepCopied = [...oArray];
  console.log(oArray);
  deepCopied[0] = 5;
  console.log(oArray, deepCopied);

  let unsorted = [1,7, 3, 2, -1, 6];
  console.log(unsorted, pureSort(unsorted));
}

export default deepcopy;

export const pureSort = <T>(array: readonly T[]): T[] => {
  let deepCopied = [...array];
  return deepCopied.sort();
}