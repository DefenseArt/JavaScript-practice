## JavaScript 

## 목차

1. [자바 스크립트 입문](#1장-자바-스크립트-입문)

---

## 1장. 자바 스크립트 입문

### 변수
바뀔 수 있는 값

`let` 키워드를 사용
```js
let value = 1;
console.log(value);
let value = 2;
console.log(value);
```

### 상수 
값이 바뀌지 않는 값

`const` 키워드를 사용
```js
const a = 1;
```

### 데이터 타입

### 숫자(Number)

```js 
let value = 1;
```

### 문자열(String)
텍스트 형태의 값을 선언
```js
let text = 'hello';
```

### 참/거짓(Boolean)
참 혹은 거짓 두가지 종류의 값을 나타냄
```js
let good = true;
let loading = false;
```

### null/undefined
`null`: 값이 없다. 

`nudefined`: 값이 설정되지 않은 것
``` js
const fri = null;
let criminal;
console.log(criminal);
```

---

### 연산자

### 산술 연산자
사칙연산과 같은 작업을 하는 연산자

`+` : 덧셈

`-` : 뺄셈

`*` : 곱셈

`/` : 나눗셈

```js
let a = 1 + 2;
console.log(a);

let b = 1;
b++;
++b;
console.log(b);
```

### 대입 연산자
특정 값에 연산을 한 값을 바로 설정할때 사용

```js
let a = 1;
a += 3; //a = a + 3
a -= 3; //a = a - 3
a *= 3; //a = a * 3
a /= 3; //a = a / 3 
```

### 논리 연산자(NOT, AND, OR)
true/false를 위한 연산자

### 연산 순서
NOT → AND → OR

### NOT
true 는 false 로, false 는 true 로 바꿈

`!` 키워드를 사용

```js
const a = !true;
console.log(a); //a 값은 false

const b = !false;
console.log(b); //b 값은 true
```

### AND
양쪽의 값이 둘 다 true 일때만 true로 변환

`&&` 키워드를 사용

```js
const a = true && true;
console.log(a); //모두 true
```


### OR
양쪽의 값 중 하나라도 true 라면 true 로 변환, 두 값이 둘 다 false 일땐 false

`||` 키워드를 사용

```js 
let t = true || false;
console.log(t); //t 값은 true

let f = false || false;
console.log(f); //f 값은 false
```

### 비교 연산자

### 두 값이 일치하는지 확인

`===` : 타입 검사까지 해서 비교

```js
const a = 1;
const b = 1;
const equals = a === b;
console.log(equals); //일치한다면 true, 아닐시 false
```

`==` : 타입 검사는 하지 않음

숫자 1, 문자 `1` 을 동일한 값으로 간주
```js
const a = 1;
const b = '1';
const equals = a == b;
console.log(equals); //동일한 값으로 간주, true
```
0, false 값은 값으로 간주
```js
const a = 0;
const b = false;
const equals = a == b;
console.log(equals) //true
```

undefined, null 도 값은 값으로 간주
```js
const a = null;
const b = undefined;
const equals = a == b;
console.log(equals); //true
```

### 두 값이 일치하지 않는지 확인
`!==`  , `!=` : 위와 같이 `!=` 는 타입 검사를 하지 않음
```js
console.log(1 != '1'); //false
console.log(1 !== '1'); //true
```

### 크고 작음
두 값에서 무엇이 더 크고 작은지 비교
```js
const a = 10;
const b = 15;
const c = 15;

console.log(a < b); // true
console.log(b > a); // true
console.log(b >= c); // true
console.log(a <= c); // true
console.log(b < c); // false
```

### 문자열 붙이기
`+` 라는 키워드를 사용
```js
const a = '안녕';
const b = '하세요';
console.log(a + b); //안녕하세요
```

---

### 조건문

### if 
가장 기본적인 조건문
```js 
if (조건) {
    코드;
}
```

### if-else 
if 조건에 부합하지 않을 시 else를 실행
```js
const a = 10;
if (a > 15) {
    console.log('a가 15보다 큽니다.');
}
else {
    console.log('a가 15보다 크지 않습니다');
}
```

### if-else if
여러 조건에 따라 작업해야할 때 사용
```js
const a = 10;
if (a === 5) {
    console.log('5입니다!');
}
else if (a === 10) {
    console.log('10입니다!');
}
else {
    console.log('5도 아니고 10도 아닙니다.');
}
```

### switch/case
특정 값이 무엇이냐에 따라 다른 작업을 실행할 때 사용

`default` : 특정 값이 case 로 준비하지 않은 값일 경우 실행
```js
const device = 'iphone';

switch (device) {
    case 'iphone':
        console.log('아이폰');
        break;
    case 'ipad':
        console.log('아이패드');
        break;
    case 'galaxy note':
        console.log('갤럭시 노트');
        break;
    default:
        console.log('모르겠네요');
}
```

---

### 함수 
특정 코드를 하나의 명령으로 실행 할 수 있게 해주는 기능

`function` 를 사용하며, 함수에서 어떤 값을 받아올지 정해주는 것을 파라미터(매개변수)

```js
function add(a, b) {
    return a + b;
}

const sum = add(1, 2);
console.log(sum);
```

### 리터럴
```js
function hello(name) {
    console.log('Hello ' + name + '!');
} 
```
다음과 같은 함수를 리터럴을 이용해 구현하면 결과물은 다음과 같다

```js
function hello(name) {
    console.log(`Hello, ${name}!`);
} 
``` 
차이점은 리터럴을 사용 시 `''` 이 아닌 ` `` ` 를 사용

### 화살표 함수
함수를 선언하는 방식 중 또 다른 방법

`function` 대신 `=>` 문자를 사용하여 함수를 구현


화살표 기준 좌측에는 함수의 파라미터, 우측에는 코드 블록

```js 
const add = (a, b) => {
    return a + b;
}
``` 

코드 블록 내부에서 바로 return을 하는 경우 줄여서 쓸 수 있음

```js
const add = (a, b) => a + b;
```

---

### 객체
변수 혹은 상수를 사용할 때 하나의 이름에 여러 종류의 값을 넣을 수 있게 해주는 것

```js
const dog = {
    name: '멍멍이',
    age : 2
};
```

객체를 선언 할 때에는 `{ }` 문자 안에 원하는 값들을 넣어주면 됨
```js
키: 원하는 값
```

형태로 넣으며 키 해당 부분 공백이 없어야함, 만약 공백이 있어야하는 경우
```js
const sample = {
    'key with space' : true //따옴표로 감싸서 문자열로 넣으면 됨
};
```

### 함수에서 객체를 파라미터로 받기
```js
const dog = {
    name: '멍멍이',
    age: 2
};

function print(dogg) {
  const text = `강아지의 이름은 ${dogg.name}, 나이는 ${dogg.age}살 입니다.`; //리터럴 형식
  console.log(text);
}   

print(dog);
```

### 객체 비구조화 할당
```js
const dog = {
    name: '멍멍이',
    age: 2
};

function print(dogg) {
  const { name, age } = dogg; 
  const text = `강아지의 이름은 ${name}, 나이는 ${age}살 입니다.`; 
  console.log(text);
}   

print(dog);
```
결과는 위 코드와 같음

```js
const { name, age } = dogg;
```
이 코드가 객체에서 값들을 추출하여 새로운 상수로 선언해주는 것

더 나아가 파라미터 단계에서 객체 비구조화 할당도 가능
```js
const dog = {
    name: '멍멍이',
    age: 2
};

function print({name, age }) {
  const text = `강아지의 이름은 ${name}, 나이는 ${age}살 입니다.`; 
  console.log(text);
}   

print(dog);
```

### 객체 안에 함수 넣기
함수가 객체 안에 들어가게 되면, this 는 자신이 속해있는 객체를 가르키게 됨

```js
const dog = {
  name: '멍멍이',
  sound: '멍멍!',
  say: function say() { //함수를 선언 할 때에는 이름이 없어도 됨
    console.log(this.sound);
  }
};

dog.say();
```

### Getter/Setter

### Getter
속성을 조회할 때 자동으로 실행되는 함수

`get` 키워드를 사용

```js
const numbers = {
    a: 1,
    b: 2,
    get sum() {
        console.log('sum 함수가 실행됩니다.');
        return this.a + this.b;
    }
};

console.log(numbers.sum); //sum 함수 실행 → 3
numbers.b = 5;
console.log(number.sum); //sum 함수 실행 → 6
```

### Setter
속성을 변경할 때 자동으로 실행되는 함수

`set` 키워드를 사용


```js
const numbers = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log("calculate 실행!");
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    console.log("a가 바뀝니다:", value);
    this._a = value;
    this.calculate(); // sum 값을 다시 계산
  },
  set b(value) {
    console.log("b가 바뀝니다:", value);
    this._b = value;
    this.calculate(); // sum 값을 다시 계산
  }
};

console.log(numbers.sum); // 3
numbers.a = 5; // a가 바뀜 5 → calculate 실행
numbers.b = 7; // b가 바뀜: 7 → calculate 실행
numbers.a = 9; // a가 바뀜: 9 → calculate 실행
console.log(numbers.sum); // 16
```

---

### 배열

### 숫자 배열
숫자 배열 선언
```js
const array = [1, 2, 3, 4, 5];
```

### 객체 배열
객체 배열 선언 
```js
const objects = [{name: '멍멍이'}, {name: '야옹이'}];

console.log(objects);
console.log(objects[0]);
```

### 배열 조회
배열을 선언하고, n번째 항목을 조회할 때
```js
objects[n];
```

### 배열에 새 항목 추가
`push` 함수를 사용
```js
const objects = [{name: '멍멍이'}, {name: '야옹이'}];

objects.push({name: '멍뭉이'});

console.log(objects);
```

### 배열의 크기 
`length` 사용
```js
const objects = [{name: '멍멍이'}, {name: '야옹이'}];

console.log(objects.length);

objects.push({name: '멍뭉이'});

console.log(objects.length);
```

---

### 반복문

### for
가장 기본적인 반복문
```js
for (초기 구문; 조건 구문; 변화 구문;) {
  코드
}
```

### 배열과 for
```js
const names = ['멍멍이', '야옹이', '멍뭉이'];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
```

### while
특정 조건이 참이라면 계속해서 반복하는 반복문

```js
let i = 0;
while (i < 10) {
  console.log(i);
  i++
}
```

### for...of
배열에 관한 반복문을 돌리기 위해 만들어진 반복문
```js
let numbers = [10, 20, 30, 40, 50];
for (let number of numbers) { //let 변수 of 반복 가능한 객체
  console.log(number);
}
```

### 객체를 위한 반복문 for...in
```js
const doggy = {
  name: '멍멍이',
  sound: '멍멍',
  age: 2
};

console.log(Object.entries(doggy));
console.log(Object.keys(doggy));
console.log(Object.values(doggy));
```

`console.log(Object.entries(doggy));` : [[키, 값], [키, 값]] 형태의 배열로 변환

`console.log(Object.keys(doggy));` : [키, 키, 키] 형태의 배열로 변환

`console.log(Object.values(doggy));` : [값, 값, 값] 형태의 배열로 변환

### break/continue
`break` : 반복문에서 벗어날 때 사용

`continue` : 그 다음 루프를 돌게끔 하는 것

```js
for (let i = 0; i < 10; i+++) {
  if (i === 2) continue; //다음 루프를 실행
  console.log(i);
  if (i === 5) break; //반복문을 끝내기
}
```

---

### 배열 내장함수

### forEach

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

```js
const numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, current) => {
  console.log({ accumulator, current });
  return accumulator + current;
}, 0);

console.log(sum);
```

---