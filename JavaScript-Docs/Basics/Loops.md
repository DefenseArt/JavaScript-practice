# 07. 반복문
**이 문서는 JavaScript에서 반복문을 사용하는 방법을 설명합니다.**

for, while 루프 사용법


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
