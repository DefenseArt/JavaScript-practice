# 02. 모달
**이 문서는 모달을 학습하는 문서입니다.**

HTML에서 모달 창 만들기

CSS로 모달 디자인하기

JavaScript로 모달 창을 열고 닫는 기능 구현

---

### 모달
기존의 내용을 가리고 나타나는 메시지박스 같은 형태의 UI를 의미

### 기본 틀 만들기

```html
<!DOCTYPE html>
<html>
  <head>
    <title>modal test</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <h1>안녕하세요!</h1>
    <p>내용</p>
    <button>버튼 열기</button>
    <script src="src/index.js"></script>
  </body>
</html>
```
실행화면

![html 실행 화면](/JavaScript-Docs/images/modal01.png)

버튼 아래 다음 내용을 작성
```html
<div class="modal-wrapper">
      <div class="modal">
        <div class="modal-title">안녕하세요</div>
        <p>모달 내용은 어쩌고 저쩌고..</p>
        <div class="close-wrapper">
          <button>닫기</button>
        </div>
      </div>
    </div>
```

![버튼 아래 내용 실행 화면](/JavaScript-Docs/images/modal02.png)

### CSS 사용을 하여 스타일링
```css
body {
  font-family: sans-serif;
}

.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  background: white;
  padding: 24px 16px;
  border-radius: 4px;
  width: 320px;
}

.modal-title {
  font-size: 24px;
  font-weight: bold;
}

.modal p {
  font-size: 16px;
}

.close-wrapper {
  text-align: right;
}
```

![CSS 적용 화면](/JavaScript-Docs/images/modal03.png)

### display 스타일을 사용하여 모달 열고 닫기

모달을 열고 닫는 기능을 구현해보자. 방법은 `display` 스타일을 사용하는 것입니다. 

우선 modal.html 를 다음과 같이 수정해보자 
```html
 <button id="open">버튼 열기</button>
    <div class="modal-wrapper" style="display: none;">
      <div class="modal">
        <div class="modal-title">안녕하세요</div>
        <p>모달 내용은 어쩌고 저쩌고..</p>
        <div class="close-wrapper">
          <button id="close">닫기</button>
        </div>
      </div>
    </div>
```
`.modal-wrapper` 쪽에는 인라인 스타일이 추가되었고, 각 버튼에 `id`가 붙음

`display: none;` 스타일을 사용하게 되면 해당 엘리먼트는 화면에서 숨겨짐

이제 jsmodal.js를 열어서 버튼과 모달의 DOM 을 선택해주고, 클릭 이벤트를 설정해보자
```js
import "./styles.css";

const open = document.getElementById("open"); //열기 버튼선택
const close = document.getElementById("close"); //닫기 버튼 선택
const modal = document.querySelector(".modal-wrapper"); //모달 창 선택

//모달 열기
open.onclick = () => {
  modal.style.display = "flex";  // 화면 중앙 정렬을 위해 flex 사용
};

//모달 닫기
close.onclick = () => {
  modal.style.display = "none"; 
};
```
`id`가 아닌 클래스로 DOM을 선택하고 싶을땐 `document.getElementByClassName` 또는 `document.querySelector` 를 사용하면 됨 

`getElementsByClassName()`
- CSS 선택자 문법을 사용하지 않음 (`class명`) 

`document.querySelector()` 
- `id`, `class`, `태그` 등 CSS 선택자로 요소를 찾을 수 있음
- CSS 선택자 문법을 따르기 때문에 `id` 를 선택할 때 `#id명`, `class` 를 선택할 때는 `.클래스명`

### 최종 실행 화면
![최종 실행 화면](/JavaScript-Docs/images/modal04.gif)