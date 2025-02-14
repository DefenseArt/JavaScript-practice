# 03. DOM Event Basics
**이 문서는 Dom Event Basics 문서입니다.**



---

### getElementById() 
> `getElementById()`    
> 특정 `id` 값을 가진 요소를 선택할 때 사용하며 한 개의 요소만 선택 가능(id는 고유하기 때문)
```html
<h1 id="title">Hello, JavaScript!</h1>

<script>
  const title = document.getElementById("title");
  console.log(title.innerText); // "Hello, JavaScript!"
</script>
```
### querySelector() vs querySelectorAll()
> `querySelector()`   
> `CSS` 선택자로 요소 선택하며 `id`, `class`, `태그` 모두 선택 가능하다. (첫 번째 일치하는 요소 하나만 가져옴)
```html
<h1 class="title">첫 번째 제목</h1>
<h1 class="title">두 번째 제목</h1>

<script>
  const title = document.querySelector(".title"); // 첫 번째 .title 선택
  console.log(title.innerText); // "첫 번째 제목"
</script>
```

### querySelectorAll()
> `querySelectorAll()`    
> 여러개의 요소 선택하며 같은 클래스나 태그를 가진 여러 개의 요소를 선택할 때 사용
```html
<p class="text">첫 번째 문장</p>
<p class="text">두 번째 문장</p>

<script>
  const texts = document.querySelectorAll(".text"); // 모든 .text 선택
  console.log(texts[0].innerText); // "첫 번째 문장"
  console.log(texts[1].innerText); // "두 번째 문장"
</script>
```

### getElementsByClassName()
> `getElementsByClassName()`    
> 특정 `class` 값을 가진 모든 요소를 선택할 때 사용
```html
<div class="box">첫 번째 박스</div>
<div class="box">두 번째 박스</div>

<script>
  const boxes = document.getElementsByClassName("box");
  console.log(boxes[0].innerText); // "첫 번째 박스"
</script>
```

### getElementsByTagName()
> `getElementsByTagName()`    
> 특정 태그 이름을 가진 모든 요소 선택

```html
<p>첫 번째 문장</p>
<p>두 번째 문장</p>

<script>
  const paragraphs = document.getElementsByTagName("p");
  console.log(paragraphs[0].innerText); // "첫 번째 문장"
</script>
```

### innerText
> `ineerText`   
> 요소 내부의 텍스트를 변경 (HTML 태그 적용)

```html
<p id="text">안녕하세요!</p>
<button id="changeText">문장 변경</button>

<script>
  const text = document.getElementById("text");
  const button = document.getElementById("changeText");

  button.onclick = () => {
    text.innerText = "텍스트가 변경되었습니다!";
  };
</script>
```

### innerHTML
> `innerHTML`   
> 요소 내부의 HTML까지 변경 가능 (HTML 태그 적용)

```html
<p id="text">안녕하세요!</p>
<button id="changeHTML">HTML 변경</button>

<script>
  const text = document.getElementById("text");
  const button = document.getElementById("changeHTML");

  button.onclick = () => {
    text.innerHTML = "<b>굵은 글씨로 변경됨!</b>";
  };
</script>
```

### on 접두사 vs addEventListener
`on 접두사 속성` : 해당 이벤트에 관련해서 1개의 함수만 등록 가능

`addEventListener` : 동일한 이벤트 다수 등록 가능

> **on**        
> on 접두사 속성은 각 element 객체가 1개씩만 가지고 있으며, 함수는 1개씩만 등록된다.

```html 
<button id="btn">클릭하세요</button>
<script>
  const btn = document.getElementById("btn");

  btn.onclick = () => {
    alert("클릭 이벤트 발생 1");
  };

  btn.onclick = () => {
    alert("클릭 이벤트 발생 2");
  };
</script>
```
### 실행화면

![onclick 실행화면](/JavaScript-Docs/images/on.png)

위 코드처럼 `on`을 사용할 경우 두 번째 `onclick`이 첫 번째 `onclick`을 덮어써버림

### addEventListener 

> **addEventListener**      
> 이벤트 등록 시 사용되는 메서드



```html
<button id="btn">클릭하세요</button>
<script>
  const btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    alert("클릭 이벤트 발생 1");
  });

  btn.addEventListener("click", () => {
    alert("클릭 이벤트 발생 2");
  });
</script>
```

위 코드를 실행할 경우 `클릭 이벤트 발생 1`, `클릭 이벤트 발생 2` 두 개의 이벤트 핸들러가 모두 실행됨


### removeEventListener()

> `removeEventListener()`   
> `addEventListener()`로 추가한 이벤트를 제거하는 기능, 이벤트 리스너를 삭제하면 해당 이벤트는 더 이상 실행되지 않음

```js
const button = document.getElementById("myButton");

function sayHello() {
  console.log("안녕하세요!");
}

// 이벤트 추가
button.addEventListener("click", sayHello);

// 이벤트 제거
button.removeEventListener("click", sayHello);
```

주의할 점
```js
button.addEventListener("click", () => {
  console.log("안녕하세요!");
});

// removeEventListener가 작동하지 않음!
button.removeEventListener("click", () => {
  console.log("안녕하세요!");
});
```
익명 함수를 사용하면 기존 이벤트와 다르게 취급되므로 기존의 이벤트 리스너를 제거할 수 없음

### style

> `style`     
> `JavaScript`에서 요소의 CSS 스타일을 직접 변경할 수 있으며, HTML의 `style` 속성과 동일하지만, JS에서 `style`을 조작 가능

**사용법**
```js
element.style.속성 = "값";
```

**예제**
```js
const element = document.getElementById("text");
element.style.color = "blue"; // 글자 색상을 파란색으로 변경
element.style.fontSize = "20px"; // 글자 크기를 20px로 변경
element.style.backgroundColor = "yellow"; // 배경색을 노란색으로 변경
```
사용할 때 `-(하이픈)`을 제거 후 낙타 표기법을 사용해야함

**주의할 점**

`document`는 웹 페이지 전체(HTML 문서)를 나타내는 객체이므로, 우리가 JavaScript로 HTML의 요소를 조작하려면 항상 `document`에서 시작해야함

특정 요소를 나타내고 싶으면 ?     
`document`대신, 특정 요소를 선택
```js
  const text = document.getElementById("text");
  const button = document.getElementById("changeback");

  button.addEventListener("click", () => {
    text.style.backgroundColor = "yellow"; // 특정 요소의 배경색 변경
  });
```


### classList

> `classList`   
> `style`을 직접 변경하는 대신, CSS 클래스를 추가/제거하여 스타일을 변경하는 방법

**사용법**
```js
element.classList.add("클래스명");  // 클래스 추가
element.classList.remove("클래스명");  // 클래스 제거
element.classList.toggle("클래스명");  // 클래스 추가/제거 토글
```
CSS에서 스타일을 정의한 후, JS에서 해당 클래스를 추가/삭제하는 방식

`toggle()` : CSS에 해당 클래스가 있으면 제거하고, 없으면 추가하는 기능, 스위치처럼 ON/OFF 기능을 수행

### createElement()

> `createElement()`   
> 새로운 HTML 요소를 JavaSCript에서 생성, 생성된 요소는 아직 화면에 보이지 않음 (DOM에 추가해야 함)

**예제**
```js
// 새로운 p 태그 생성
const newParagraph = document.createElement("p");
newParagraph.innerText = "새로운 문장이 추가되었습니다!";
console.log(newParagraph); 
// <p>새로운 문장이 추가되었습니다!</p>
```
이 상태에선 아직 DOM에 추가되지 않음 (`appendChild()` 필요)

### appendChild()

> `appendChild()`   
> `부모요소.appendChild(추가할 요소)` 를 사용하여 생성한 요소를 DOM에 추가

**예제**
```html
<div id="container"></div>

<script>
  const container = document.getElementById("container"); // 부모 요소 선택
  const newParagraph = document.createElement("p"); // 새로운 요소 생성
  newParagraph.innerText = "새로운 문장이 추가되었습니다!";
  container.appendChild(newParagraph); // 부모 요소에 추가
</script>
```

### remove() 

> `remove()`    
> 기존에 추가된 요소를 삭제할 때 사용

```html
<p id="text">이 문장은 삭제될 예정입니다!</p>
<button id="removeBtn">삭제</button>

<script>
  const text = document.getElementById("text");
  const removeBtn = document.getElementById("removeBtn");

  removeBtn.addEventListener("click", () => {
    text.remove(); // 요소 삭제
  });
</script>
```

### .value

> `.value`    
> `<input>`, `<textarea>` 같은 입력 요소에서 사용자가 입력한 값을 가져옴 

**예제**
```html
<input type="text" id="inputBox" placeholder="여기에 입력하세요">
<button id="checkValue">확인</button>

<script>
  const input = document.getElementById("inputBox");
  const button = document.getElementById("checkValue");

  button.addEventListener("click", () => {
    console.log(input.value); // 사용자가 입력한 값 출력
  });
</script>
```