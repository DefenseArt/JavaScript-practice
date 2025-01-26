# 04. 함수

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
