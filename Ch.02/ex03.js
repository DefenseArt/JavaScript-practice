// && 연산자로 코드 단축
const dog = {
    name: '멍멍이'
  };
  
  function getName(animal) {
    return animal && animal.name;
  }
  
  const name = getName();
  console.log(name); // undefined
  const name1 = getName(dog);
  console.log(name1); // 멍멍이

// || 연산자로 코드 단축
const namelessDog = {
    name: ''
  };
  
  function getName(animal) {
    const name = animal && animal.name;
    if (!name) {
      return '이름이 없는 동물입니다';
    }
    return name;
  }
  
  const name3 = getName(namelessDog);
  console.log(name3); // 이름이 없는 동물입니다.