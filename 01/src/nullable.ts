type nullab = null | undefined;

type IPerson = {name: string, age: number}

interface IFunctor<T> {
  map<U>(fn: (value: T) => U): any;
}
interface IValueable<T> {
  getOrElse(defaultValue: T): T;
}
class Some<T> implements IValueable<T>, IFunctor<T> {
  constructor(private value: T) {}
  getOrElse(defaultValue: T) {
    return this.value ?? defaultValue;
  }
  map<U>(fn: (x:T) => U): Some<U> {
    return new Some<U>(fn(this.value));
  }
}
class None implements IFunctor<nullab>, IValueable<nullab> {
  getOrElse<T>(defaultValue: T | nullab) {
    return defaultValue;
  }
  map<U>(fn: (T) => U) {
    return new None;
  }
}
export const nullable = () => {
  console.log('nullable');
  let anna: IPerson = {name: 'anna', age: 21};
  let elsa: IPerson;
  //console.log(anna, elsa.name);

}