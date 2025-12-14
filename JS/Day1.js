//Part 1: Create Variables
let num1 = 1;
let num2 = 2;
let string1 = "Walter"
let string2 = "Canencia"
let isStudent = true;
let isCute = true;
let arr1 = [1,2,3,4,5];
let arr2 = ["a","b","c","d","e"];
let person1 = {
    string1: "Faith",
    num1: 23,
    isStudent: false,
    isCute: true,
};
let person2 = {
    string2: "Walter",
    num2: 25,
    isStudent: true,
    isCute: false
};

//Part 2: Update Variables
num1 = 69;
string1 = "Faith";

//Part 3: Math Operations
let sum = num1 + num2;
let diff = num1 - num2;
let prod = num1 * num2;
let quotient = num1/num2;
let modulo = num1 % num2;

//Part 4: String Operations
let concatenate = string1 +" "+ string2;
let backticks = `${string1} ${string2}`;

//Part 5: Arrays and Objects
console.log(arr1[1]);
console.log(person1.string1);

//Optional Challenge
console.log(`Hello Iam ${string1}. I am ${num1} yrs old. Am I a student? ${isStudent}. I love ${arr1}. Object is ${JSON.stringify(person1)}`);