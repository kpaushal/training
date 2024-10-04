// Handling this Keyword

const obj = {
    name: "A",
    showName: function() {
        console.log(this.name);
    }
};
obj.showName(); // "A"

// Arrow Function
const obj = {
    name: "arrow ",
    showName: () => {
        console.log(this.name);
    }
};
obj.showName(); // undefined


// normal function
function normalFunction() {
    console.log(arguments); // Logs all arguments
}
normalFunction(5, 21, 6); // [5, 21, 6]


// arrowFun
const arrowFunction = () => {
    console.log(arguments); // ReferenceError: arguments is not defined
};


// normal fun as constructoe
function Person(name) {
    this.name = name;
}
const john = new Person("John");
console.log(john.name); // "John"


// Arrow Function
const Person = (name) => {
    this.name = name;
};
const john = new Person("John"); // TypeError: Person is not a constructor
