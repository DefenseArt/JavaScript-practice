//forEach
const heroes = ['아이언맨', '캡틴 아메리카', '토르'];

heroes.forEach(hero => {
    console.log(hero);
});

//map 
const array = [1, 2, 3, 4, 5];

const square = n => n * n;
const squared = array.map(square);
console.log(squared);

//indexOf 몇번째 원소인지 찾아주는 함수
const index = heroes.indexOf('토르');
console.log(index);

//findIndext 
const todos = [
    {
      id: 1,
      text: '자바스크립트 입문',
      done: true
    },
    {
      id: 2,
      text: '함수 배우기',
      done: true
    },
    {
      id: 3,
      text: '객체와 배열 배우기',
      done: true
    },
    {
      id: 4,
      text: '배열 내장함수 배우기',
      done: false
    }
  ];
const findex = todos.findIndex(todo => todo.id === 3);
console.log(findex);

//find 
const tod = todos.find(tod => tod.id === 3);
console.log(tod);

//filter
const taskNotDone = todos.filter(to => to.done === false);
console.log(taskNotDone);

//splice 
const numbers = [10, 20, 30, 40];
const nidex = numbers.indexOf(30);
numbers.splice(nidex, 1);
console.log(numbers);

//slice 
const sliced = numbers.slice(0, 2) // 0부터 시작해서 2전까지
console.log(sliced);

//shift / pop
const value = numbers.shift();
console.log(value);

const palue = numbers.pop();
console.log(palue);

//unshift
numbers.unshift(5);
console.log(numbers);

//concat 
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1.concat(arr2);

console.log(concated);

//join 
const jrray = [1, 2, 3, 4, 5];
console.log(jrray.join());

//reduce 
let sum = array.reduce((accumulator, current) => accumulator +  current, 0);

console.log(sum);


//10보다 큰 숫자의 갯수를 반환하는 함수
function countBiggerThanTen(numbers) {
    let count = 0;
    numbers.forEach(n => {
        if(n > 10) {
            count++;
        }
    });
    return count;
}
const count = countBiggerThanTen([1, 2, 3, 4, 5, 10, 20, 30, 40, 50, 60]);
console.log(count);