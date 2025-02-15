# JavaScript 학습 피드백
**이 문서는 JavaScript 를 공부하면서 부족했던 점과 보완할 내용을 정리하는 문서입니다.**


---
## 실습 프로젝트 피드백 및 개념 보완

### 1. 카운터 프로젝트
**기능 :** 버튼을 클릭하면 숫자가 증가/감소

관련 문서: [Counter](/JavaScript-Docs/Web_Interaction/Counter.md)

### 부족했던 개념 및 피드백 
> 1. [화살표 함수](/JavaScript-Docs/Basics/function.md/#화살표-함수) : 화살표 기준 좌측에는 함수의 파라미터, 우측에는 코드 블록     
> 사용법 : `const add = ( 파라미터 ) => { 코드 }`

> 2. [`getElementById`](/JavaScript-Docs/Web_Interaction/Counter.md/#documentgetelementbyid): HTML 문서에서 특정 id 값을 가진 요소를 가져오는 역할        
> 사용법 : `const number = document.getElementById("id명");`

> 3. [`onClick`](/JavaScript-Docs/Web_Interaction/Counter.md/) : 해당 요소를 클랙했을 때 실행할 동작을 설정     
> 사용법 : `요소.onclick = () => { 코드 }`

> 4. [`parseInt()`](/JavaScript-Docs/Web_Interaction/Counter.md/): 문자열을 숫자로 변환해주는 함수   
> 사용법: 두번째 자리에 `10`이 들어가는데 그 의미는 10진수를 출력하라는 의미

> 5. `innerText` :  HTML 요소 내부의 텍스트 값을 가져옴     
> 사용법: `변수.innerText`

### 주요 코드 (요약)
```js
// HTML 문서에서 특정 id 값을 가진 요소를 가져옴 
const number  = document.getElementById("number"); 
const increase = document.getElementById("increase"); 
const decrease = document.getElementById("decrease"); 

// const number = document.getElementById("HTML id 명");
// - " " 부분 HTML id를 넣어 가져옴

// 해당 요소를 클릭하면 실행할 동작을 설정
increase.onclick = () => {
    const sum = parseInt(number.innerText, 10); 
    number.innerText = sum + 1; 
};

decrease.onclick = () => {
    const sum = parseInt(number.innerText, 10); 
    number.innerText = sum - 1;
};

// parseInt(number.innerText, 10);
// - number의 텍스트 값을 가져와 숫자로 변환 (10진수 기준)
// - 기존의 innerText 값이 문자열이므로 변환이 필요함

// number.innerText = sum + 1; 
// - 변환된 숫자 값에 1을 추가한 후 다시 HTML 요소에 반영
// - 감소도 같음
```

### 실행 화면 및 코드
![카운터 프로젝트 실행화면](./images/ex.gif)

**[JavaScript](/code/Counter/Counter.js)**

**[HTML](/code/Counter/index.html)**

--- 

### 2. 배경색 변경

**기능 :** 버튼을 클릭하면 배경색이 변경됨

관련 문서: [Style](/JavaScript-Docs/Web_Interaction/DOM-Event-Basics.md#style)

### 부족했던 개념 및 피드백 
> 1. `Math.floor` : 숫자를 내림하여 정수로 만드는 함수     
> 사용법 : `console.log(Math.floor(4.9)); // 4  (소수점 버림)`


### 주요 코드 (요약)
```js
const backcolor = document.getElementById("backcolor"); // 버튼 요소 가져오기

backcolor.addEventListener("click", () => {
  const color = ["red", "green", "blue", "yellow"]; // 색상 배열

  const random = Math.floor(Math.random() * color.length); // 0 ~ 3 사이의 랜덤 숫자 생성

  document.body.style.backgroundColor = color[random]; // 랜덤 색상 적용
});
```

### 실행 화면 및 코드
![배경색 변경 화면](./images/backgroundcolor_random.gif)

**[JavaScript](/code/randomcolor/backrandomcolor.js)**

**[HTML](/code/randomcolor/index.html)**

--- 
