  /*********************************/
 /* 1. Union Types ( | means OR ) */
/*********************************/

// Exercise 1: 
type IDType = number | string;

const showID = (id: IDType) => {
  console.log(`Your ID is: ${id}`);
};

showID(98765);
showID("ABC-123");


// Exercise 2: 
 type Fruit = "apple" | "apricot" | "orange"

 const eatFruit = (fruit1: Fruit, fruit2: Fruit) => {
    console.log("You ate an " + fruit1 + " and an "+ fruit2 + "!")
 }

 eatFruit("apple", "orange")

// Exercise 3: 
type Result = true | false

const printResult = (value: Result) => {
    value ? console.log("Pass") : console.log("Fail")
}

printResult(true)
printResult(false)

  /**************************************************/
 /* 2. Interfaces and Type Aliases ( & means AND ) */
/**************************************************/

// Exercise 1: 
 interface Book {
    title: string;
    pages: number;
 }

 const describeBook = (book: Book) => {
    console.log(`The book ${book.title} has ${book.pages} pages.` )
 }

 describeBook({
    title: "Rouge Brésil",
    pages: 500})

// Exercise 2: 
interface Teacher {
    name: string;
    subject: string
}

interface Employee {
    id: number;
    email: string
}
 
type SchoolTeacher = Teacher & Employee

const printTeacherInfo = (teacher: SchoolTeacher) => {
  console.log(`${teacher.name} teaches ${teacher.subject}. ID: ${teacher.id}. Email: ${teacher.email}`);
};

printTeacherInfo({
    name: "Michelle",
    subject: "Front End Dev",
    id: 1,
    email: "awesometeacher@codemaniac.lets"
})

// Exercise 3: 
interface Car {
    brand: string,
    year: number
}

const printCar = (car: Car) => {
    console.log(`Brand: ${car.brand}, Year: ${car.year}`)
}

printCar({
    brand: "Fiat Panda 4x4",
    year: 1980
})
  /************************************/
 /* 3. Enums (fixed list of options) */
/************************************/

// Exercise 1:
 enum Color {
    Red = "red",
    Green = "green",
    Blue = "blue"
 }

 const showColor = (color: Color) => {
    console.log(`You chose: ${color}`)

}

showColor(Color.Red)
showColor(Color.Green)
showColor(Color.Blue)

// Exercise 2: 
 enum PizzaSize {
    Small = "small",
    Medium = "medium",
    Large = "large"
 }

 const orderPizza = (size: PizzaSize) => {
    console.log(`You ordered a ${size} pizza.`);
 }

 orderPizza(PizzaSize.Small)
 orderPizza(PizzaSize.Medium)
 orderPizza(PizzaSize.Large)

// Exercise 3: 
enum Role {
  Admin,
  User,
  Guest
}

const printRole = (role: Role) => {
  switch (role) {
    case Role.Admin:
      console.log("You have full access");
      break;
    case Role.User:
      console.log("You have limited access");
      break;
    case Role.Guest:
      console.log("You have guest access");
      break;
  }
};

printRole(Role.Admin)
printRole(Role.User)
printRole(Role.Guest)

  /**************************************************/
 /* 4. Generics ( <T> means reusable placeholder ) */
/**************************************************/

// Exercise 1: 
const wrapInArray = <T>(item: T): T[] => {
    return [item]
}

wrapInArray("dog")
 
// Exercise 2: 
const firstItem = <T>(arr: T[]): T | undefined => {
    return arr[0]
}

console.log(firstItem([1, 2, 3]))
console.log(firstItem(["a", "b", "c"]))

// Exercise 3: 
const swap = <T>(a: T, b: T): [T, T] => {
    return [b, a]
}

console.log(swap("loop", "pool"))
console.log(swap("23", "32"))