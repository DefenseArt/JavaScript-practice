//객체
const dog = {
    name: '멍멍이',
    age: 2
};

console.log(dog.name);
console.log(dog.age);

//객체 리터럴
const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨'
  };
  
  const captainAmerica = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카'
  };

  console.log(ironMan);
  console.log(captainAmerica);

  function print(hero) {
    const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`;
    console.log(text);
  }

print(ironMan);

//비구조화 할당
  function print(hero) {
    const { alias, name, actor } = hero;
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
  }
  
  print(ironMan);
  print(captainAmerica);

//객체 안에 함수 넣기
const dog1 = {
    name: '멍멍이',
    sound: '멍멍!',
    say: function say() {
        console.log(this.sound); //this는 자신이 속해있는 객체를 가르침
    }
};

dog1.say();

//Getter / Setter
const numbers = {
    a: 1,
    b: 2,
    get sum() {
        console.log('sum 함수가 실행됩니다!');
        return this.a + this.b;
    }
};

console.log(numbers.sum);
numbers.b = 5
console.log(numbers.sum);

const numbers1 = {
    _a: 1,
    _b: 2,
    sum: 3,
    calculate() {
      console.log('calculate');
      this.sum = this._a + this._b;
    },
    get a() {
      return this._a;
    },
    get b() {
      return this._b;
    },
    set a(value) {
      console.log('a가 바뀝니다.');
      this._a = value;
      this.calculate();
    },
    set b(value) {
      console.log('b가 바뀝니다.');
      this._b = value;
      this.calculate();
    }
  };
  
  console.log(numbers1.sum);
  numbers1.a = 5;
  numbers1.b = 7;
  numbers1.a = 9;
  console.log(numbers1.sum);
  console.log(numbers1.sum);
  console.log(numbers1.sum);