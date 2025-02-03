# 06. 비구조화 할당 (구조분해) 문법
**이 문서는 JavaScript에서 객체와 배열의 비구조화 할당 문법을 설명합니다.**

객체 및 배열에서 값을 쉽게 추출하는 방법

기본 값 설정 및 깊은 값 비구조화

---

### 비구조화 할당 (구조분해) 문법
객체나 배열에서 데이터를 추출하여 변수나 상수로 개별적으로 할당하는 문법

1장 객체에서 배웠던 [비구조화 할당 문법](/JavaScript-Docs/Objects.md)을 활용함

비구조화 할당

```js
const object = { a: 1, b: 2 };

function print({ a, b }) {
  console.log(a);
  console.log(b);
}

print(object);
```

만약 여기서 b 값이 주어지지 않았다면 ?
```js
const object = { a: 1 };

function print({ a, b }) {
  console.log(a);
  console.log(b);
}

print(object);
// 1
// undefined
```
두번째 출력에서 undefined 출력

### 비구조화 할당시 기본 값 설정
이러한 상황에 b 값에 기본 값을 주고 싶으면 ?
```js
const object = { a: 1 };

function print({ a, b = 2 }) { //b = 2
  console.log(a);
  console.log(b);
}

print(object);
// 1
// 2
```
또 다른 방법
```js
const object = { a: 1 };

const { a, b = 2 } = object;

console.log(a); // 1
console.log(b); // 2
```

### 비구조화 할당시 이름 바꾸기
비구조화 할당하는 과정에서 선언 할 값의 이름을 바꾸는 방법

다음과 같은 코드가 있다고 가정
```js
const animal = {
  name: '멍멍이',
  type: '개'
};

const nickname = animal.name;

console.log(nickname); // 멍멍이
```
위 코드는 animal.name 값을 nickname 값에 담고 있음 


```js
const animal = {
  name: '멍멍이',
  type: '개'
};

const { name: nickname } = animal
console.log(nickname);
```
위 코드는 'animal 객체 안에 있는 name을 nickname 이라고 선언하겠다' 라는 의미

### 배열 비구조화 할당
객체에만 가능한 것이 아닌 배열에서도 가능

```js 
//예시 코드
const array = [1, 2];
const [one, two] = array;

console.log(one);
console.log(two);
```
이 문법은 배열 안에 있는 원소를 다른 이름으로 새로 선언해주고 싶을 때 사용하면 유용

객체 비구조화 할당과 마찬가지로 기본값 지정 가능
```js
const array = [1];
const [one, two = 2] = array; //기본값 지정

console.log(one);
console.log(two);
```

### 깊은 값 비구조화 할당
객체의 깊숙한 곳에 들어있는 값을 꺼내는 방법
```js
//예시코드
const deepObject = {
  state: {
    information: {
      name: 'velopert',
      languages: ['korean', 'english', 'chinese']
    }
  },
  value: 5
};
```
여기서 name, languages, value 값들을 밖으로 꺼내는 2가지 방법

### 첫번째 비구조화 할당 문법을 두번 사용
객체의 깊은 구조를 한꺼번에 추출하지 않고, 단계별로 나눠서 추출하는 방법
```js
const { name, languages } = deepObject.state.information;
const { value } = deepObject;

const extracted = {
  name,
  languages,
  value
};

console.log(extracted); // {name: "velopert", languages: Array[3], value: 5}
```
extracted 객체를 선언 할 때 
```js
const extracted = {
  name,
  languages,
  value
}
```
이 코드는 다음 코드와 똑같음
```js
const extracted = {
  name: name,
  languages: languages,
  value: value
}
```
### ES6 의 Object-shorthand 
key 이름으로 선언된 값이 존재하다면 바로 매칭시켜주는 문법

객체 속성의 key와 value 이름이 같으면 `name: name` → `name`처럼 축약할 수 있다




### 두번째 한 번에 모두 추출하는 방법
비구조화 할당을 한 번에 처리하는 방법
```js
const {
  state: {
    information: { name, languages }
  },
  value
} = deepObject;

const extracted = {
  name,
  languages,
  value
};

console.log(extracted);
```