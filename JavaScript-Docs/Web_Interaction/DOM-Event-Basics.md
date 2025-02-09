# 03. DOM Event Basics
**이 문서는 Dom Event Basics 문서입니다.**



---

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