export type FileNameAndNumber = [string, number];
export const getFileNameAndNumber = (defaultFilename: string,
  defaultNumber: number): FileNameAndNumber => {
    const [bin, node, filename, numberOfFakeData] = process.argv;
    return [filename || defaultFilename, 
      numberOfFakeData ? parseInt(numberOfFakeData, 10) : defaultNumber];
  }