let n: undefined = undefined;
let b: boolean = true;
let s: string = `twilight is ${b}`;
let o: object = { name: "twilight", age: 21 };

console.log(n);
console.log(s);

interface IPerson {
  name: string;
  age: number;
}

let frankie: IPerson = { name: 'frankie', age: 23 };
console.log(frankie);

let ai: {
  name: string;
  age: number;
  etc?: boolean;
} = { name: 'starfire', age: 16 };

function printMe(me: { name: string, age: number, etc?: boolean }) {
  console.log(
    me.etc ?
      `${me.name}(${me.age}) - ${me.etc}` :
      `${me.name}(${me.age})`
  );
}
printMe(ai);

class Person {
  name: string;
  age: number;
  constructor(_name: string, _age: number) {
    this.name = _name; this.age = _age;
  }
}

let gwen: Person = new Person("gwen", 10);
console.log(gwen);

abstract class AbstractPerson {
  abstract name: string;
  constructor(public age?: number) { }
}

class Grown extends AbstractPerson {
  constructor(public name: string, age?: number) { 
    super();
    this.age = age;
  }
}

let sunset: Grown = new Grown('sunset', 25);
console.log(sunset);

class Company {
  name: string;
  code: string;
  price: number;
  constructor(name: string, code: string, price: number) {
    this.name = name;
    this.code = code;
    this.price = price;
  }
}

let amd: Company = new Company('amd', 'AMD', 60.11);

let { code, price } = amd;
console.log(`${code}: ${price}`);