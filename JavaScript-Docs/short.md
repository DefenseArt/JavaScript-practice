# 03. 단축 평가 논리 계산법

### 단축 평가 논리 계산법
`논리 연산자(&&, ||)` 를 사용하여 조건을 간단하게 표현하는 방법

### &&(AND) 연산자로 단축 평가
A && B를 사용할 때: A가 Truthy(참)이면 → B 반환
```js
const dog = {
  name: '멍멍이'
};

function getName(animal) {
  return animal && animal.name;
}

const name = getName();
console.log(name); // undefined

const name1 = getName(dog);
console.log(name); // 멍멍이
```

### && 연산자의 원리
Falsy 값이면 A를 반환하고, Truthy 값이면 B 반환
```js
console.log(true && 'hello');    // 'hello' (true니까 다음 값 반환)
console.log(false && 'hello');   // false (false니까 여기서 멈춤)
console.log('hello' && 'bye');   // 'bye' ('hello'는 Truthy니까 다음 값 반환)
console.log(null && 'hello');    // null (Falsy니까 그대로 반환)
console.log(undefined && 'hello'); // undefined (Falsy니까 그대로 반환)
console.log('' && 'hello');      // '' (Falsy니까 그대로 반환)
console.log(0 && 'hello');       // 0 (Falsy니까 그대로 반환)
console.log(1 && 'hello');       // 'hello' (Truthy니까 다음 값 반환)
console.log(1 && 1);             // 1 (Truthy니까 다음 값 반환)
```

### ||(OR) 연산자로 기본 값 설정
`A || B` 를 사용할 때: A가 Truthy(참)이면 → A 반환
```js
const namelessDog = {
  name: ''
};

function getName(animal) {
  const name = animal && animal.name;
  return name || '이름이 없는 동물입니다.';
}

const name = getName(namelessDog);
console.log(name); // 이름이 없는 동물입니다.
```

### || 연산자의 원리
Falsy 값이면 B를 반환하고, Truthy 값이면 A 반환
```js
console.log(false || 'hello');   // 'hello' (false니까 다음 값 반환)
console.log('hi' || 'hello');    // 'hi' (Truthy니까 다음 값 반환 안 함)
console.log(null || 'hello');    // 'hello' (Falsy니까 다음 값 반환)
console.log(undefined || 'hello'); // 'hello' (Falsy니까 다음 값 반환)
console.log('' || 'hello');      // 'hello' (Falsy니까 다음 값 반환)
console.log(0 || 'hello');       // 'hello' (Falsy니까 다음 값 반환)
console.log(1 || 'hello');       // 1 (Truthy니까 다음 값 반환 안 함)
console.log('wow' || 'hello');   // 'wow' (Truthy니까 다음 값 반환 안 함)
```