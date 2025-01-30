# 04. 함수의 기본 파라미터

### 함수의 기본 파라미터
함수에서 파라미터가 주어지지 않았을 때 기본값으로 설정할 수 있다.
기본적으로 파라미터를 전달하지 않으면 `undefined` 가 되므로, 이를 방지하는 역할을 함

### 기본 값이 없을 때 발생하는 문제
파라미터를 넣지 않으면 `undefined * undefined` 가 되어 `NaN`  출력
```js
function calculateCircleArea(r) {
  return Math.PI * r * r;
}

console.log(calculateCircleArea()); //NaN = Not a Number라는 의미
```
### ES5 VS ES6
ES5 방식 (`||` 연산자 사용)
```js
function calculateCircleArea(r) {
  const radius = r || 1; //r이 없으면 1을 기본값으로 사용
  return Math.PI * radius * radius;
}

const area = calculateCircleArea();
console.log(area); // 3.141592653589793
```

ES6 (기본 파라미터 설정)
ES6에서는 기본 값을 r = 1처럼 바로 설정할 수 있음
```js
function calculateCircleArea(r = 1) { 
  return Math.PI * r * r;
}

const area = calculateCircleArea();
console.log(area); // 3.141592653589793
```

### 화살표 함수 이용
화살표 함수를 이용하면 코드가 간결해짐
```js
const calculateCircleArea = (r = 1) => Math.PI * r * r;

console.log(calculateCircleArea()); // 3.141592653589793
```
