//Promise 
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
  
  myPromise.then(n => {
    console.log(n);
  });

//Promise 활용하여 비동기 함수 만들기
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