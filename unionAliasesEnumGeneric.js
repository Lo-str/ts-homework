/*********************************/
/* 1. Union Types ( | means OR ) */
/*********************************/
const showID = (id) => {
    console.log(`Your ID is: ${id}`);
};
showID(98765);
showID("ABC-123");
const eatFruit = (fruit1, fruit2) => {
    console.log("You ate an " + fruit1 + " and an " + fruit2 + "!");
};
eatFruit("apple", "orange");
const printResult = (value) => {
    value ? console.log("Pass") : console.log("Fail");
};
printResult(true);
printResult(false);
const describeBook = (book) => {
    console.log(`The book ${book.title} has ${book.pages} pages.`);
};
describeBook({
    title: "Rouge Brésil",
    pages: 500
});
const printTeacherInfo = (teacher) => {
    console.log(`${teacher.name} teaches ${teacher.subject}. ID: ${teacher.id}. Email: ${teacher.email}`);
};
printTeacherInfo({
    name: "Michelle",
    subject: "Front End Dev",
    id: 1,
    email: "awesometeacher@codemaniac.lets"
});
const printCar = (car) => {
    console.log(`Brand: ${car.brand}, Year: ${car.year}`);
};
printCar({
    brand: "Fiat Panda 4x4",
    year: 1980
});
/************************************/
/* 3. Enums (fixed list of options) */
/************************************/
// Exercise 1:
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
const showColor = (color) => {
    console.log(`You chose: ${color}`);
};
showColor(Color.Red);
showColor(Color.Green);
showColor(Color.Blue);
// Exercise 2: 
var PizzaSize;
(function (PizzaSize) {
    PizzaSize["Small"] = "small";
    PizzaSize["Medium"] = "medium";
    PizzaSize["Large"] = "large";
})(PizzaSize || (PizzaSize = {}));
const orderPizza = (size) => {
    console.log(`You ordered a ${size} pizza.`);
};
orderPizza(PizzaSize.Small);
orderPizza(PizzaSize.Medium);
orderPizza(PizzaSize.Large);
// Exercise 3: 
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
const printRole = (role) => {
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
printRole(Role.Admin);
printRole(Role.User);
printRole(Role.Guest);
/**************************************************/
/* 4. Generics ( <T> means reusable placeholder ) */
/**************************************************/
// Exercise 1: 
const wrapInArray = (item) => {
    return [item];
};
console.log(wrapInArray("dog"));
// Exercise 2: 
const firstItem = (arr) => {
    return arr[0];
};
console.log(firstItem([1, 2, 3]));
console.log(firstItem(["a", "b", "c"]));
// Exercise 3: 
const swap = (a, b) => {
    return [b, a];
};
console.log(swap("loop", "pool"));
console.log(swap("23", "32"));
export {};
//# sourceMappingURL=unionAliasesEnumGeneric.js.map