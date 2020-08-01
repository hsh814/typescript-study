export const mytuple = (): void => {
  console.log('tuple');
  type ResultType = [string, boolean];
  const doSomething = (): ResultType => {
    try {
      throw new Error('Something\'s wrong');
    } catch(e) {
      return [e.message, false];
    }
  }
  const [result, isErrorOccured] = doSomething();
  console.log(isErrorOccured, result);
}