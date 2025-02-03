//객체 생성자
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
  
  dog.say();
  cat.say();

  //프로토타입
  function Animal1(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  
  Animal.prototype.say = function() {
    console.log(this.sound);
  };
  Animal.prototype.sharedValue = 1;
  
  const dog1 = new Animal('개', '멍멍이', '멍멍');
  const cat1 = new Animal('고양이', '야옹이', '야옹');
  
  dog.say();
  cat.say();
  
  console.log(dog1.sharedValue);
  console.log(cat1.sharedValue);

  //프로토타입 상속
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
  
  const dog2 = new Dog('멍멍이', '멍멍');
  const cat2 = new Cat('야옹이', '야옹');
  
  dog2.say();
  cat2.say();

  //클래스 

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
  
  const dog3 = new Animal('개', '멍멍이', '멍멍');
  const cat3 = new Animal('고양이', '야옹이', '야옹');
  
  dog3.say(); // 멍멍
  cat3.say(); // 야옹

//클래스 상속
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
  
  const dog4 = new Dog('멍멍이', '멍멍');
  const cat4 = new Cat('야옹이', '야옹');
  
  dog4.say(); // 멍멍
  cat4.say(); // 야옹