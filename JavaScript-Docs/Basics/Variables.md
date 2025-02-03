# 01. 변수
**이 문서는 JavaScript의 변수 선언 방법(`var`, `let`, `const`)과 차이점을 설명합니다.**

변수 선언 방식 및 기본 문법

`var`, `let`, `const`의 차이점 및 사용법

데이터 타입 (숫자, 문자열, Boolean, null, undefined)

---

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