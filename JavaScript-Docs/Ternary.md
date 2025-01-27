# 01. 삼항 연산자

### 삼항 연산자
조건문에 기반하여 다른 두 개의 값 중 하나를 선택하는 연산자
```js
조건 ? true일때 : false일때
```

다음과 같이 작성
```js
const array = [];
let text = array.length === 0 ? '배열이 비어있습니다.' : '배열이 비어있지 않습니다.';

console.log(text); //배열이 비어있습니다. 출력
```