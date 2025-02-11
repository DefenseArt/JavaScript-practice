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