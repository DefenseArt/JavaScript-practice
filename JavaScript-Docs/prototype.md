# 09. 프로토타입과 클래스

### 프로토타입과 클래스

### 객체 생성자
객체를 만들 때 함수를 이용하여 새로운 객체를 생성하는 방식

객체 생성자를 사용할 때는 함수의 이름을 대문자로 시작, 새로운 객체를 만들 때에는 `new`  키워드를 앞에 붙힘
```js
function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
  this.say = function() {
    console.log(this.sound);
  };
}

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');

dog.say(); // 멍멍
cat.say(); // 야옹
```

### 프로토타입
같은 함수를 여러 객체에서 공유할 수 있도록 해주는 방식

`.prototype.[원하는 키] = 코드` 를 입력하여 설정 
```js
function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}

Animal.prototype.say = function() {
  console.log(this.sound);
};

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');

dog.say(); // 멍멍
cat.say(); // 야옹
```

### 객체 생성자 상속받기(prototype 상속)
한 객체가 다른 객체의 기능을 상속받을 수 있도록 하는 방법

prototype 을 공유하기 때문에 상속받은 객체 생성자 함수를 만들고 prototype 값을 Animal.prototype 으로 설정
```js
function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}

Animal.prototype.say = function() {
  console.log(this.sound);
};
Animal.prototype.sharedValue = 1;

function Dog(name, sound) {
  Animal.call(this, '개', name, sound);
}
Dog.prototype = Animal.prototype;

function Cat(name, sound) {
  Animal.call(this, '고양이', name, sound);
}
Cat.prototype = Animal.prototype;

const dog = new Dog('멍멍이', '멍멍');
const cat = new Cat('야옹이', '야옹');

dog.say();
cat.say();
```

### 클래스
객체 생성자를 더 직관적으로 사용할 수 있도록 개선
```js
class Animal {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  say() {
    console.log(this.sound);
  }
}

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');

dog.say(); // 멍멍
cat.say(); // 야옹
```

### 클래스 상속
`extends` 키워드를 사용하여 Aniaml 클래스 확장

```js
class Animal {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  say() {
    console.log(this.sound);
  }
}

class Dog extends Animal {
  constructor(name, sound) {
    super('개', name, sound);
  }
}

class Cat extends Animal {
  constructor(name, sound) {
    super('고양이', name, sound);
  }
}

const dog = new Dog('멍멍이', '멍멍');
const cat = new Cat('야옹이', '야옹');

dog.say(); // 멍멍
cat.say(); // 야옹
```