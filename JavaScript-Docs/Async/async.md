# 02. async/await
**이 문서는 비동기 처리를 더 쉽게 다루기 위한 async/await 문법을 설명합니다.**

콜백 지옥 문제를 해결

Promise.all(), Promise.race() 등을 활용

---

### async/await
ES8에 해당하는 문법으로서, [Promise](Promise.md#promise) 를 더욱 쉽게 사용할 수 있게함
```js
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function process() {
  console.log('안녕하세요!');
  await sleep(1000); // 1초쉬고
  console.log('반갑습니다!');
}

process();
```
1. 문법을 사용할 때에는, 함수를 선언할 때 함수의 앞 부분에 async 키워드를 붙힘
2. Promise의 앞부분에 await을 넣어주면 해당 프로미스가 끝날때까지 대기 후 다음 작업을 수행

### async
함수에서 async를 사용시, 해당 함수는 결과값으로 Promise 를 반환하게 됨
```js
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function process() {
  console.log('안녕하세요!');
  await sleep(1000); // 1초쉬고
  console.log('반갑습니다!');
}

process().then(() => {
  console.log('작업이 끝났어요!');
});
```

async 함수에서 에러를 발생 시킬때 ? throw를 사용하고, 에러를 잡아낼 때에는 try/catch 문을 사용
```js
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function makeError() {
  await sleep(1000);
  const error = new Error();
  throw error;
}

async function process() {
  try {
    await makeError();
  } catch (e) {
    console.error(e);
  }
}

process();
```

### 여러 개의 비동기 함수 실행하기 
```js
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
  await sleep(1000);
  return '멍멍이';
};

const getRabbit = async () => {
  await sleep(500);
  return '토끼';
};
const getTurtle = async () => {
  await sleep(3000);
  return '거북이';
};

async function process() {
  const dog = await getDog();
  console.log(dog);
  const rabbit = await getRabbit();
  console.log(rabbit);
  const turtle = await getTurtle();
  console.log(turtle);
}

process();
```
위 코드에서는 getDog 1초, getRabbit 0.5초, getTurtle은 3초가 걸려 총 4.5초가 걸린다

getDog -> getRabbit -> getTurtle 순서대로 실행이 되고 있는데 동시에 작업을 시작하고 싶다면 `Promise.all`을 사용해야함

`Promise.all` 를 사용할 때에는 등록한 Promise 중 하나라도 실패하면, 모든게 실패한 것으로 간주
```js
async function process() {
  const results = await Promise.all([getDog(), getRabbit(), getTurtle()]);
  console.log(results);
}

process();
```

만약에 여기서 배열 비구조화 할당 문법을 사용한다면 각 결과값을 따로 따로 추출해서 조회 가능
```js
async function process() {
  const [dog, rabbit, turtle] = await Promise.all([
    getDog(),
    getRabbit(),
    getTurtle()
  ]);
  console.log(dog);
  console.log(rabbit);
  console.log(turtle);
}

process();
```

`Promise.race` 는 `Promise.all` 과 달리 여러개의 Promise를 등록해서 실행했을 때 가장 빨리 끝난것 하나만의 결과값을 가져옴


`Promise.race` 의 경우엔 가장 다른 Promise가 먼저 성공하기 전에 가장 먼저 끝난 Promise가 실패하면 이를 실패로 간주
```js
async function process() {
  const first = await Promise.race([
    getDog(), //1초
    getRabbit(), //0.5초
    getTurtle() //3초
  ]);
  console.log(first);
}

process();
```
따라서 현재 위의 코드에서 getRabbit 에서 에러를 발생시킨다면 에러를 잡아낼 수 있지만, getTurtle, getDog에서 발생한 에러는 무시함