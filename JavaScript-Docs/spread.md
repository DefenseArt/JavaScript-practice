# 07. spread 와 rest

### spread
객체 혹은 배열을 펼칠 수 있음

예를 들어서 다음과 같은 객체들이 있음
```js
const slime = {
  name: '슬라임'
};

const cuteSlime = {
  name: '슬라임',
  attribute: 'cute'
};

const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
```
위 코드에서 핵심은  기존의 객체를 건들지 않고 새로운 객체를 만든다. 이러한 상황에서 사용하는 문법이 spread 문법이다.

spread를 이용하면 ?
```js
const slime = {
  name: '슬라임'
};

const cuteSlime = {
  ...slime, //slime을 복사
  attribute: 'cute'
};

const purpleCuteSlime = {
  ...cuteSlime, //cuteslime을 복사
  color: 'purple'
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
```

### 배열에서 spread 사용

```js
const animals = ['개', '고양이', '참새'];
const anotherAnimals = [...animals, '비둘기']; //...animals를 이용하여 animals 복사
console.log(animals);
console.log(anotherAnimals);
```

배열에서 여러번 사용도 가능
```js
const numbers = [1, 2, 3, 4, 5];

const spreadNumbers = [...numbers, 1000, ...numbers];
console.log(spreadNumbers); // [1, 2, 3, 4, 5, 1000, 1, 2, 3, 4, 5]
```

### 함수 인자와 spread
함수에서 spread 연산자를 사용하면, 배열의 개별 인자로 변환하여 전달할 수 있다.

```js
function myFunction(a) { // 여기서 a 는 파라미터
  console.log(a); // 여기서 a 는 인자
}

myFunction('hello world'); // 여기서 'hello world' 는 인자

// spread와 함께 사용
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6
```
즉 `sum(...numbers)` 는 `sum(1, 2, 3)`과 동일하게 동작한다.

### rest
객체, 배열 그리고 함수 파라미터에서 사용 가능

객체와 배열에서 사용할 때는 비구조화 할당 문법과 함께 사용

rest의 변수명은 자유롭게 설정할 수 있다. (`객체`, `배열`, `함수` 파라미터에서 모두 적용)

### 객체에서의 rest
추출한 값의 이름이 꼭 rest일 필요는 없다.

 원하는 변수명을 사용할 수 있다
```js
const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
};

const { color, ...rest } = purpleCuteSlime; //...rest가 아닌 ...cuteslime도 가능
console.log(color); //purple
console.log(rest); //name: 슬라임, attribute: cute
```

만약 attribute 까지 없앤 새로운 객체를 만들고 싶다면 ?
```js
const { color, ...cuteSlime } = purpleCuteSlime;
console.log(color);
console.log(cuteSlime);

const { attribute, ...slime } = cuteslime;
console.log(attribute);
console.log(slime);
```

### 배열에서의 rest
배열 비구조화 할당을 통해 원하는 값을 밖으로 꺼내고, 나머지 값을 rest 안에 넣음
```js
const numbers = [0, 1, 2, 3, 4, 5, 6];

const [one, ...rest] = numbers;

console.log(one);
console.log(rest);
```

반면 이렇게는 불가능
```js
const numbers = [0, 1, 2, 3, 4, 5, 6];

const [..rest, last] = numbers;
```

### 함수 파리미터에서의 rest
함수의 파라미터가 몇개가 될 지 모르는 상황에서 rest 파라미터를 사용하면 매우 유용함
```js
function sum(...rest) {
  return rest;
}

const result = sum(1, 2, 3, 4, 5, 6);
console.log(result);
```

모두 더하는 함수를 만들면 ?
```js
function sum(...rest) {
  return rest.reduce((acc, current) => acc + current, 0);
}

const result = sum(1, 2, 3, 4, 5, 6);
console.log(result); // 21
```
`reduce((acc, current) => acc + current, 0)`는 배열의 모든 값을 하나로 합칠 때 사용된다.

`acc`는 누적값, `current`는 현재 처리 중인 값이다.

여기서 reduce 함수를 사용 했는데 잘 모르겠으면 [1장 섹션 8](./builtin.md#reduce)에 있음


