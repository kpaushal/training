//map()
//1.doubling each element in array
const numbers =[1,2,3,4];
const doubled = numbers.map(num=> num*2);
console.log(doubled);//[2,4,4,8]

//2.extracting a property from an array of object
const users =[{name:'alice'},{name:'bob'},{name:'tillu'}];
const a = users.map(user=>user.name);
console.log(a);//['alice','bob','tillu']

//3.converting array element to string
const arr =[23,43,234];
const str = arr.map(num => String(num));
console.log(str);//['23','43','234']

//4.adding a constant to each element
const x = numbers.map(num => num+10);
console.log(x);//[11,12,13,14]

//5.returning an array of boolean values based on condition
const y= numbers.map(num => num%2===0);
console.log(y);//[false,true,false,true]

// filter()
// 1: Filtering even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

//2: Filtering based on object property
const people = [
    { name: 'tarun', age: 30 },{ name: 'brajnam', age: 15 },{ name: 'paushal', age: 20 }];
const adults = people.filter(person => person.age >= 18);
console.log(adults); // [{ name: 'Alice', age: 30 }, { name: 'Charlie', age: 20 }]

//3: Removing falsy values from an array
const arr4 = [0, 'hello', false, 42, '', null];
const values = arr4.filter(Boolean);
console.log(values); // ['hello', 42]

//4: Filtering words with more than 3 letters
const words = ['cat', 'deer', 'dog', 'tiger'];
const long = words.filter(word => word.length > 3);
console.log(long); // ['deer', 'tiger']

//5: Filtering array of numbers greater than a threshold
const greater = numbers.filter(num => num > 2);
console.log(greater); // [3, 4]

// Reduce()
//1: Summing an array of numbers
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 10

//2: Finding the maximum value in an array
const max = numbers.reduce((max, current) => current > max ? current : max, 0);
console.log(max); // 4

//3: Concatenating strings
const names = ['tarun', 'brajnam', 'paushal'];
const con = names.reduce((acc, name) => acc + ', ' + name);
console.log(con); // 'tarun, brajnam, paushal'

//4: Flattening an array of arrays
const arr3 = [[2, 3], [4, 5], [6, 7]];
const flat = arr3.reduce((acc, val) => acc.concat(val), []);
console.log(flat); // [2, 3, 4, 5, 6, 7]

// Example 5: Counting occurrences of elements in an array
const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const Count = items.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
}, {});
console.log(Count); // { apple: 3, banana: 2, orange: 1 }

// forEach()
//1: Logging each element to the console
numbers.forEach(num => console.log(num)); // 1 2 3 4

// 2: Modifying array elements (note: doesn't return a new array)
numbers.forEach((num, index, arr) => arr[index] = num * 2);
console.log(numbers); // [2, 4, 6, 8]

//3: Summing elements without returning
let total = 0;
numbers.forEach(num => total += num);
console.log(total); // 20

//4: Logging array of objects
people.forEach(person => console.log(person.name, person.age));
// Output: tarun 30, brajnam 15, paushal 20

//5: Performing operations based on conditions
numbers.forEach(num => {
    if (num % 2 === 0) {
        console.log(`${num} is even`);
    }
});
// Output: 2 is even, 4 is even
