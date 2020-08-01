export function makePerson(name: string, age: number) {
  return { name: name, age: age };
}
export function testMakePerson() {
  console.log(
    makePerson('anna', 18),
    makePerson("elsa", 21)
  );
}