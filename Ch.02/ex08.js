//Scope
const value = 'hello!'; //Global Scope

function myFunction() {
  const value = 'bye!'; //Function Scope
  if (true) {
    const value = 'world'; //Block Scope
    console.log('block scope: ');
    console.log(value);
  }
  console.log('function scope: ');
  console.log(value);
}

myFunction();
console.log('global scope: ');
console.log(value); //hello! 출력

//Hoisting
myFunction();

function myFunction() {
  console.log('hello world!');
}