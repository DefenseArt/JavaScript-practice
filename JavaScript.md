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