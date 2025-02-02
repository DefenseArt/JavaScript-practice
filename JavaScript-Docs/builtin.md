# 08. 배열 내장함수

### 배열 내장함수

### forEach
배열의 각 요소에 대해 주어진 함수를 실행하지만 값을 반환하지 않음.
```js 
const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

superheroes.forEach(hero => {
  console.log(hero);
});
```

### map
`map` 은 배열 안의 각 원소를 변환 할 때 사용
```js
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const square = n => n * n;
const squared = array.map(square);
console.log(squared);
```

### indexOf
`indexOf` : 원하는 항목이 몇번째 원소인지 찾아주는 함수
```js
const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];
const index = superheroes.indexOf('토르');
console.log(index); //결과 2 출력
```

### findIndex
```js
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

const index = todos.findIndex(todo => todo.id === 3);
console.log(index); //결과가 2 출력
```

### find
`fined` : 찾아낸 값 자체를 반환
```js
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

const todo = todos.find(todo => todo.id === 3);
console.log(todo); //결과가 {id: 3, text: "객체와 배열 배우기", done: true} 출력
```

### filter 
`filter` : 배열에서 특정 조건을 만족하는 값들만 따로 추출하여 새로운 배열을 만듬
```js
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

const tasksNotDone = todos.filter(todo => todo.done === false);
console.log(tasksNotDone);
```
결과
```js
[
  {
    id: 4,
    text: '배열 내장 함수 배우기',
    done: false
  }
];
```

### splice
`splice` : 배열에서 특정 항목을 제거할 때 사용
```js
const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
numbers.splice(index, 1);
console.log(numbers); //[10, 20, 40]
```

### slice 
`slice` 는 `splice` 와 비슷하지만 기존의 배열은 건들이지 않음
```js
const numbers = [10, 20, 30, 40];
const sliced = numbers.slice(0, 2); //0부터 시작해서 2전까지

console.log(sliced); //[10, 20]
console.log(numbers); //[10, 20, 30, 40]
```

### shift/pop
`shift` 와 `pop` 은 비슷하지만 조금 다름

`shift`: 첫번째 원소를 배열에서 추출 (추출하는 과정에서 배열에서 해당 원소는 사라짐)
```js
const numbers = [10, 20, 30, 40];
const value = numbers.shift();
console.log(value); //10
console.log(numbers); //[20, 30, 40]
```

```js
const numbers = [10, 20, 30, 40];
const value = numbers.pop();
console.log(value); //40
console.log(numbers); //[10, 20, 30]
```

### unshift
`unshift` 는 `shift` 의 반대

`unshift` : 배열의 맨 앞에 새 원소를 추가

```js
const numbers = [10, 20, 30, 40];
numbers.unshift(5);
console.log(numbers); //[5, 10, 20, 30, 40]
```

### concat
`concat` : 여러개의 배열을 하나의 배열로 합침

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1.concat(arr2);

console.log(concated); //[1, 2, 3, 4, 5, 6]
```

### join
`join` : 배열 안의 값들을 문자열 형태로합침

```js
const array = [1, 2, 3, 4, 5];
console.log(array.join()); // 1,2,3,4,5
console.log(array.join(' ')); // 1 2 3 4 5
console.log(array.join(', ')); // 1, 2, 3, 4, 5
```

### reduce
배열의 각 요소를 누적하여 하나의 값으로 축약

`reduce()`는 **배열의 모든 값을 하나의 결과값으로 합칠 때 사용**  

`accumulator`는 이전 값의 누적된 결과  

`current`는 현재 처리 중인 값  
```js
const numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, current) => {
  console.log({ accumulator, current });
  return accumulator + current;
}, 0);

console.log(sum);
```