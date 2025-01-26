# 05. 객체

### 객체
변수 혹은 상수를 사용할 때 하나의 이름에 여러 종류의 값을 넣을 수 있게 해주는 것

```js
const dog = {
    name: '멍멍이',
    age : 2
};
```

객체를 선언 할 때에는 `{ }` 문자 안에 원하는 값들을 넣어주면 됨
```js
키: 원하는 값
```

형태로 넣으며 키 해당 부분 공백이 없어야함, 만약 공백이 있어야하는 경우
```js
const sample = {
    'key with space' : true //따옴표로 감싸서 문자열로 넣으면 됨
};
```

### 함수에서 객체를 파라미터로 받기
```js
const dog = {
    name: '멍멍이',
    age: 2
};

function print(dogg) {
  const text = `강아지의 이름은 ${dogg.name}, 나이는 ${dogg.age}살 입니다.`; //리터럴 형식
  console.log(text);
}   

print(dog);
```

### 객체 비구조화 할당
```js
const dog = {
    name: '멍멍이',
    age: 2
};

function print(dogg) {
  const { name, age } = dogg; 
  const text = `강아지의 이름은 ${name}, 나이는 ${age}살 입니다.`; 
  console.log(text);
}   

print(dog);
```
결과는 위 코드와 같음

```js
const { name, age } = dogg;
```
이 코드가 객체에서 값들을 추출하여 새로운 상수로 선언해주는 것

더 나아가 파라미터 단계에서 객체 비구조화 할당도 가능
```js
const dog = {
    name: '멍멍이',
    age: 2
};

function print({name, age }) {
  const text = `강아지의 이름은 ${name}, 나이는 ${age}살 입니다.`; 
  console.log(text);
}   

print(dog);
```

### 객체 안에 함수 넣기
함수가 객체 안에 들어가게 되면, this 는 자신이 속해있는 객체를 가르키게 됨

```js
const dog = {
  name: '멍멍이',
  sound: '멍멍!',
  say: function say() { //함수를 선언 할 때에는 이름이 없어도 됨
    console.log(this.sound);
  }
};

dog.say();
```

### Getter/Setter

### Getter
속성을 조회할 때 자동으로 실행되는 함수

`get` 키워드를 사용

```js
const numbers = {
    a: 1,
    b: 2,
    get sum() {
        console.log('sum 함수가 실행됩니다.');
        return this.a + this.b;
    }
};

console.log(numbers.sum); //sum 함수 실행 → 3
numbers.b = 5;
console.log(number.sum); //sum 함수 실행 → 6
```

### Setter
속성을 변경할 때 자동으로 실행되는 함수

`set` 키워드를 사용


```js
const numbers = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log("calculate 실행!");
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    console.log("a가 바뀝니다:", value);
    this._a = value;
    this.calculate(); // sum 값을 다시 계산
  },
  set b(value) {
    console.log("b가 바뀝니다:", value);
    this._b = value;
    this.calculate(); // sum 값을 다시 계산
  }
};

console.log(numbers.sum); // 3
numbers.a = 5; // a가 바뀜 5 → calculate 실행
numbers.b = 7; // b가 바뀜: 7 → calculate 실행
numbers.a = 9; // a가 바뀜: 9 → calculate 실행
console.log(numbers.sum); // 16
```