let id: number = 5;
id = 5; // OK
// console.log('ID', id)
let company: string = 'AND Digital';
let isBooked: boolean = true;
let x: any = 'Hello';

x = true;

let age: number;

let ids: number[] = [1, 2, 3, 4, 5];
// ids.push('hello')

// array
let array: any[] = [, 1, true, 'hello'];

// Tuple
let person: [number, string, boolean] = [1, 'david', true];

// tuple array
let employee: [number, string][];

employee = [
  [1, 'david'],
  [2, 'john'],
  [3, 'george'],
];

// Union
let pid: string | number;
pid = '22';

//enum
// enum cardType {
//   Hearts,
//   Spades,
//   Diamonds,
//   Jacks,
//   Clubs,
//   Queen,
//   King,
//   Ace,
// }
enum cardType2 {
  Hearts = 'one',
  Spades = 'two',
  Diamonds = 'three',
  Jacks = 'four',
  Clubs = 'five',
  Queen = 'six',
  King = 'seven',
  Ace = 'eight',
}

type User = {
  id: number;
  name: string;
};
// OBJECTS
const user: User = { id: 1, name: 'david' };
console.log({ user });
console.log(cardType2.Spades);

// type Asssertion
let cid: any = 1;
let customerId = <number>cid;
// let customerId = cid as number;
console.log({ customerId });

// FUNCTIONS
function addNumber(x: number, y: number): number {
  return x + y;
}
console.log(addNumber(5, 2));

//void function
function log(message: string | number): void {
  console.log(message);
}
// log(true);

// INTERFACES
interface Person {
  readonly name: string;
  age?: number;
}

const user1: Person = {
  age: 30,
  name: 'George of the Jungle',
};
// console.log(user1.name)

interface MathFunc {
  // x: number;
  // y: number;
  // r: number;

  (x: number, y: number, r: number) : number 
}

const add: MathFunc = (x: number, y: number, r: number): number => x + y + r;
const multiply: MathFunc = (x: number, y: number, r: number): number => (x + y) * r;
const divide = (x: number, y: number): number => x / y;

console.log(add(2, 2, 4)); //8
console.log(divide(2, 2)); //1
console.log(multiply(2, 2, 4)); //16

// CLASSES
class Animal {
    id: number;
    name: string;
    breed: string;

    constructor(id: number, name: string, breed: string) {
    this.id = id;
    this.name = name;
    this.breed = breed;
}

}
const dog = new Animal(1,'rust','labrador');
const cat = new Animal(2,'ruby', 'tabby');
const snake = new Animal(3, 'pi', 'python');
console.log(dog, cat, snake);

// GENERICS
// can use placeholders for creating reusable components with different data types
function genericArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numbArray = genericArray<number>([1, 2, 3, 4]);
console.log(genericArray<string>(['david', 'john', 'george']));
console.log({ numbArray });
numbArray.push(5);

// Type narrowing example
function joe(isokay: string | boolean) {
  if (typeof isokay === "string"){
  return isokay.toUpperCase()
  }
}