# 01. 카운터
**이 문서는 버튼을 클릭하면 숫자가 올라가거나 내려가는 카운터를 학습하는 문서입니다.**

DOM 요소 선택 : `getElementById` 등을 활용한 HTML 요소 선택

이벤트 핸들링 : `onclick`을 이용하여 버튼 클릭 이벤트 추가

내장 함수 활용 : `parseInt()`를 사용하여 문자열을 숫자로 변환

최종 코드 작성 및 실행 화면 확인

---

### UI 만들기
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Parcel Sandbox</title>
    <meta charset="UTF-8" />
  </head>
  <body>
    <h2 id="number">0</h2>
    <div>
      <button id="increase">+1</button>
      <button id="decrease">-1</button>
    </div>
    <script src="src/index.js"></script>
  </body>
</html>
```
실행화면

![UI 만들기](/JavaScript-Docs/images/ex01.png)

h2 와 button 태그에 id 값을 설정해줌으로써 JavaScript에서 쉽게 해당 DOM 을 선택할 수 있음

여기서 DOM이란 ? 각 태그에 대한 정보를 지니고 있는 JavaScript 객체

### DOM 요소 선택하기
```js
const number = document.getElementById("number"); //숫자로 표시하는 <h2> 요소
const increase = document.getElementById("increase"); //+1 버튼 요소
const decrease = document.getElementById("decrease"); //-1 버튼 요소

console.log(number);  //<h2 id="number">0</h2>
console.log(increase); //<button id="increase">+1</button>
console.log(decrease); //<button id="decrease">-1</button>
```
![DOM요소 선택](/JavaScript-Docs/images/ex02.png)

### document.getElementById()
HTML 문서에서 특정 id 값을 가진 요소를 가져오는 역할

즉, HTML → JavaScript로 해당 요소를 가져와서 조작할 수 있게 하는 것
```js
document.getElementById("id")
```
  
### DOM 요소의 속성 확인하기
```js
console.log(number.innerText); //현재 화면에 표시된 숫자 값 
console.log(increase.offsetTop); //버튼의 위치 (Y 좌표)
console.log(decrease.id); //요소의 ID 값(decrease)
```
![DOM요소 속성 확인](/JavaScript-Docs/images/ex03.png)
여기서 사용된 속성들
- `ineerText` : HTML 요소 내부의 텍스트 값을 가져온다.
- `offsetTop` : 요소가 화면에서 얼마나 떨어져 있는지 확인한다.
- `id` : 해당 요소의 id 값을 가져온다.

### 이벤트 설정하기
DOM 이벤트를 설정해보자. 버튼들이 클릭 됐을 때 콘솔에 텍스트를 출력하는 이벤트를 설정
```js
increase.onclick = () => {
    console.log("increase 가 클릭됨");
};

decrease.onclick = () => {
    console.log("decrease 가 클릭됨");
};
```
![이벤트 설정](/JavaScript-Docs/images/ex04.png)

버튼들을 클랙했을 때 콘솔에 설정한 텍스트들이 출력 된다.

> DOM에 이벤트를 설정할 때에는 `on 이벤트이름` 값에 함수를 설정     
> `요소.onclick = () => { 실행할 코드 }` : 해당 요소를 클랙했을 때 실행할 동작을 설정한다.


이제 버튼들이 클릭될 때 숫자값이 올라가거나 내려가는 코드를 작성
```js
increase.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current + 1; //숫자를 증가시켜 화면에 표시
};

decrease.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current - 1; //숫자를 감소시켜 화면에 표시시
};
```
`parseInt` 는 문자열을 숫자로 변환해주는 함수
- `parseInt()` : 문자열을 숫자로 변환
- `10` : 10진수 숫자로 변환 (기본적으로 10진수지만, 명확하게 설정)

### 최종 코드 정리
```js
const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

increase.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current + 1;
};

decrease.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current - 1;
};
```
**최종 실행화면**

![최종 실행 화면](/JavaScript-Docs/images/ex.gif)