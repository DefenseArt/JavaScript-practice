# 06. 배열
**이 문서는 JavaScript에서 배열을 선언하고 다루는 방법을 설명합니다**

배열 생성 및 기본 연산 

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