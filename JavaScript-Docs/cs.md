# 05. 조건문 더 스마트하게 쓰기

### 여러 값 중 하나인지 확인하기
기존 방식: 값을 하나하나 비교하는 조건문
```js
function isAnimal(text) {
  return (
    text === '고양이' || 
    text === '개' || 
    text === '거북이' || 
    text === '너구리'
  );
}

console.log(isAnimal('개')); // true
console.log(isAnimal('노트북')); // false
```

`includes()` : 배열에 특정 값이 포함되어 있는지 확인하는 함수

스마트한 방식: 배열과 `includes` 사용
```js
function isAnimal(name) {
  const animals = ['고양이', '개', '거북이', '너구리'];
  return animals.includes(name);
}

console.log(isAnimal('개')); // true
console.log(isAnimal('노트북')); // false
```

더 짧고 깔끔하게 (화살표 함수 사용)
```js
const isAnimal = name => ['고양이', '개', '거북이', '너구리'].includes(name);

console.log(isAnimal('개')); // true
console.log(isAnimal('노트북')); // false
```

### 값에 따라 다른 결과물을 반환
기존 방식 : if, switch

if
```js
function getSound(animal) {
  if (animal === '개') return '멍멍!';
  if (animal === '고양이') return '야옹~';
  if (animal === '참새') return '짹짹';
  if (animal === '비둘기') return '구구 구 구';
  return '...?';
}

console.log(getSound('개')); // 멍멍!
console.log(getSound('비둘기')); // 구구 구 구
```
switch문
```js
function getSound(animal) {
  switch (animal) {
    case '개':
      return '멍멍!';
    case '고양이':
      return '야옹~';
    case '참새':
      return '짹짹';
    case '비둘기':
      return '구구 구 구';
    default:
      return '...?';
  }
}

console.log(getSound('개')); // 멍멍!
console.log(getSound('비둘기')); // 구구 구 구
```

스마트한 방식: 객체로 깔끔하게 처리
```js
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
```

### 값에 따라 다른 행동을 실행해야 할 때
객체에 함수를 담아서 처리
```js
function makeSound(animal) {
  const tasks = {
    개() {
      console.log('멍멍');
    },
    고양이() {
      console.log('야옹');
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

makeSound('개'); // 멍멍
makeSound('비둘기'); // 구구 구 구
makeSound('토끼'); // ...?
```