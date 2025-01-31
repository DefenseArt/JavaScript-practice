//특정 값이 여러 값 중 하나인지 확인할 때
function isAnimal(name) {
    const animals = ['고양이', '개', '거북이', '너구리'];
    return animals.includes(name);
}
console.log(isAnimal('개')); //true
console.log(isAnimal('노트북')); //false

//화살표 함수 이용

const isAnimal1 = name => ['고양이', '개', '거북이', '너구리'].includes(name);

console.log(isAnimal1('개')); // true
console.log(isAnimal1('노트북')); // false

//값에 따라 다른 결과물을 반환
function getSound(animal) {
    const sounds = {
      개: '멍멍!',
      고양이: '야옹~',
      참새: '짹짹',
      비둘기: '구구 구 구'
    };
    return sounds[animal] || '...?';
  }
  
  console.log(getSound('개')); // 멍멍!
  console.log(getSound('비둘기')); // 구구 구 구
  
  //값에 따라 실행해야한 코드 
  function makeSound(animal) {
    const tasks = {
      개() {
        console.log('멍멍');
      },
      고양이() {
        console.log('고양이');
      },
      비둘기() {
        console.log('구구 구 구');
      }
    };
    if (!tasks[animal]) {
      console.log('...?');
      return;
    }
    tasks[animal]();
  }
  
  makeSound('개');
  makeSound('비둘기');