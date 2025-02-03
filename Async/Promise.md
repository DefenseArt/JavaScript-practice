# 01. Promise

**이 문서는 비동기 처리를 쉽게 다루기 위한 Promise 개념을 설명합니다.**

비동기 처리 및 Promise 개념  

콜백 지옥(Callback Hell) 문제 해결  

`.then()`, `.catch()`를 활용한 Promise 체이닝  

`resolve`, `reject`를 활용한 비동기 흐름 제어  

--- 

### Promise
비동기 작업을 조금 더 편하게 처리할 수 있도록 ES6 에 도입된 기능

### 콜백 지옥 문제점
```js
function increaseAndPrint(n, callback) {
  setTimeout(() => {
    const increased = n + 1;
    console.log(increased);
    if (callback) {
      callback(increased);
    }
  }, 1000);
}

// 1초마다 1씩 증가시키는 코드
increaseAndPrint(0, n => {
  increaseAndPrint(n, n => {
    increaseAndPrint(n, n => {
      increaseAndPrint(n, n => {
        increaseAndPrint(n, n => {
          console.log('끝!');
        });
      });
    });
  });
});
```
이렇게 중첩된 콜백 구조는 유지보수가 어렵다. 

Promise를 사용하면 이를 해결할 수 있음

### Promise 만들기
```js
const myPromise = new Promise((resolve, reject) => {
    // 구현..
})
```
Promise는 두 가지 상태를 가진다.

1. resolve(성공) → 비동기 작업이 정상적으로 완료됨
2. reject(실패) → 에러 발생 시 실행

### Promise 성공
```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1); // 1초 후 성공
  }, 1000);
});

myPromise.then(n => {
  console.log(n); // 1
});
```
resolve(1)로 값이 전달되면, .then() 에서 해당 값을 받아 처리할 수 있음

### Promise 실패
```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("에러 발생!"));
  }, 1000);
});

myPromise
  .then(n => {
    console.log(n);
  })
  .catch(error => {
    console.error(error);
  });
```
에러가 발생하면 reject()를 호출하고, .catch()에서 처리할 수 있음 

### Promise를 활용한 비동기 함수 만들기
콜백 대신 Promise를 반환하는 함수를 만들어 체인 형태로 연결할 수 있음
```js
function increaseAndPrint(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) { // 5가 되면 에러 발생
        const error = new Error("ValueIsFiveError");
        reject(error);
        return;
      }
      console.log(value);
      resolve(value);
    }, 1000);
  });
}

// Promise 체인 사용하기
increaseAndPrint(0)
  .then(n => increaseAndPrint(n))
  .then(n => increaseAndPrint(n))
  .then(n => increaseAndPrint(n))
  .then(n => increaseAndPrint(n)) // 여기서 5가 되므로 에러 발생
  .catch(error => {
    console.error(error);
  });
```
에러가 발생하면 .catch()에서 처리됨

### Promise에 대한 궁금증
     
> **Q.** `resolve`, `reject`의 변수명을 바꿀 수 있나 ?      
> **A.** 바꿀 수 있다. 하지만 코드의 가독성을 위해 일반적으로 이름을 유지

> **Q.** Promise에서 성공하면 반드시 .then()에서 받아야하나 ?        
> **A.** 맞다. Promise의 성공 값은 .then()에서 처리

> **Q.** 그러면 Promise 실패 시 .catch()에서 처리하나 ?     
> **A.** 아니다. .catch()를 사용하지 않아도 되지만, 사용하지 않으면 에러가 처리되지 않는다.



