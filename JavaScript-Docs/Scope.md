# Scope 이해

### Scope
변수 혹은 함수를 선언하게 될 때 해당 변수 또는 함수가 유효한 범위를 의미

### 3가지 종류

**1. Global (전역) Scope** : 코드의 모든 범위에서 사용 가능

**2. Function (함수) Scope** : 함수 안에서만 사용 가능

**3. Block (블록) Scope** : if, for, switch 등 특정 블록 내부에서만 사용 가능

### 예시를 통한 Scope 이해
```js
const value = 'hello!'; //Global Scope

function myFunction() {
  console.log('myFunction: ');
  console.log(value);
}

function otherFunction() {
  console.log('otherFunction: ');
  const value = 'bye!'; //Function Scope
  console.log(value);
}

myFunction();
otherFunction();

console.log('global scope: ');
console.log(value);
```
이렇게 값을 설정한다고 해서 기존 Global Scope 로 선언된 value 값이 바뀌지는 않음 

Function Scope는 Function 내부에서만 유효한 값

또 다른 예시
```js
const value = 'hello!'; //Global Scope

function myFunction() {
  const value = 'bye!'; //Function Scope
  const anotherValue = 'world'; //Function Scope
  function functionInside() {
    console.log('functionInside: ');
    console.log(value);
    console.log(anotherValue);
  }
  functionInside();
}


myFunction()
console.log('global scope: ');
console.log(value); //hello! 출력
console.log(anotherValue); //조회 불가
```

다른 예시 
```js
const value = 'hello!'; //Global Scope

function myFunction() {
  const value = 'bye!'; //Function Scope
  if (true) {
    const value = 'world'; //Block Scope
    console.log('block scope: ');
    console.log(value);
  }
  console.log('function scope: ');
  console.log(value);
}

myFunction();
console.log('global scope: ');
console.log(value); //hello! 출력
```
`const` 로 선언한 값은 항상 Block Scope를 가진다

즉, `{}` 내부에서 선언되면 해당 블록에서만 유효하다

함수 내부에서 선언되면 함수 전체에서 접근 가능하기 때문에 Function Scope로도 동작 (`let` 또한 마찬가지)

```js
var value = 'hello!';

function myFunction() {
  var value = 'bye!';
  if (true) {
    var value = 'world';
    console.log('block scope: ');
    console.log(value); //world
  }
  console.log('function scope: ');
  console.log(value); //world
}

myFunction();
console.log('global scope: ');
console.log(value); //hello!
```

`var` 는 Block Scope가 없기 때문에 (if, for, switch 등)문 내부에서 선언해도 함수 전체에서 접근이 가능하지만, 함수 바깥에서는 접근할 수 없다


### const, let, var 스코프 차이 정리
| 키워드 | 블록 스코프(Block Scope) | 함수 스코프(Function Scope) | 전역 접근 가능 여부 | 
|--------|----------------|----------------|----------------|
| `var`  | 없음 | 있음 | O (전역에서 선언 시 접근 가능) 
| `let`  | 있음 | 있음 | X (블록 및 함수 바깥에서는 접근 불가) 
| `const`| 있음 | 있음 | X (블록 및 함수 바깥에서는 접근 불가) 


### Hoisting 이해하기 
자바스크립트에서 아직 선언되지 않은 함수/변수를 "끌어올려서" 사용할 수 있는 자바 스크립트의 작동 방식

```js
myFunction();

function myFunction() {
  console.log('hello world!');
}

console.log(a); //undefined
var a = 10;

console.log(b); //오류 (Cannot access 'b' before initialization)
let b = 20;

```
위 코드에서는 myFunction 함수를 선언하기 전에 호출하였지만 정상적으로 작동하지만

`var`로 선언한 변수는 `undefined`로 초기화되고,  

`let`과 `const`는 TDZ(Temporal Dead Zone) 때문에 선언 전에 접근하면 오류가 발생한다.

### Hoisting 정리

| 키워드  | Hoisting 여부 | 초기화 상태 |
|---------|-------------|------------|
| `var`   | 호이스팅됨 | `undefined`로 초기화됨 |
| `let`   | 호이스팅됨 | TDZ(Temporal Dead Zone)로 인해 선언 전 접근 불가 |
| `const` | 호이스팅됨 | TDZ(Temporal Dead Zone)로 인해 선언 전 접근 불가 |

**즉, `var`는 선언 전에 접근하면 `undefined`, `let`과 `const`는 TDZ 때문에 접근하면 오류가 발생**

