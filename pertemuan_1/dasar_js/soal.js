const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 32 },
  { name: 'Charlie', age: 28 },
  { name: 'Gama', age: 16 },
  { name: 'Siti', age: 29 }
];

const sumReduce = people.reduce((accumulator, currentValue) => accumulator + currentValue.age, 0);
console.log(sumReduce);
