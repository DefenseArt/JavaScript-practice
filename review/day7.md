# day7

## 모듈
모듈을 사용하면 코드의 재활용성을 높이고, 유지보수를 쉽게 만든다.

## 모듈이 없다면 
모듈이 없는 애플리케이션을 하나 만들어보자. 파일의 이름은 main.html 이다.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
</head>
<body>
    <script>
        function welcome(){
            return 'Hello world'
        }
        alert(welcome());
    </script>
</body>
</html>
```
위의 코드는 아무런 문제가 없다. 하지만 welcome 함수가 자주 사용되는 것이라고 가정을 해보자. 이런 경우 필요할 때마다 이 함수를 정의해서 사용하는 것은 유지보수도 어렵고 낭비가 된다. 이럴 때 모듈이 필요하다. 함수 welcome을 모듈로 만들어보자

## 모듈의 사용
새로운 파일을 만든다. 이름은 greeting.js다. 자바 스크립트 파일은 확장자로 js를 사용한다.

### greeting.js
```js
function welcome() {
    return 'Hello World';
}
```

### main.html
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <script src="greeting.js"></script>
</head>
<body>
    <script>
        alert(welcome());
    </script>
</body>
</html>
```
이전 예제와 비교했을 때 결과는 같다. 하지만 차이점은 함수 welcome을 main.html의 외부 파일로 분리했다.

### \<script src="greeting.js"></script>
JavaScript와 HTML은 완전히 다른 문법을 가진 언어이지만, HTML 문서 안에는 JavaScript와 HTML이 동시에 표현된다. 따라서 브라우저에게 JavaScript와 HTML인지를 구분을 명확히 알려줘야한다. 이 역할을 하는 HTML태그가 script 태그다. 그런데 위의 코드는 컨텐츠 대신에 src 속성이 있다. 브라우저는 src 속성에 있는 파일을 다운로드해서 실행시킨다. 
 
## 라이브러리
라이브러리는 모듈과 비슷한 개념이다. 모듈이 프로그램을 구성하는 작은 부품으로서의 로직을 의미한다면 라이브러리는 자주 사용되는 로직을 재사용하기 편리하도록 잘 정리한 일련의 코드들의 집합을 의미한다.

## 라이브러리의 사용
유명 라이브러리인 jQuery를 사용해보자

jQuery 홈페이지에서 파일을 다운로드 받는다. 

http://jquery.com/

jQuery 메뉴얼을 이용해서 사용법을 파악한다.

http://api.jquery.com/

아래 예제는 jQuery를 사용한 예제이다.
```html
<!DOCTYPE html>
<html>
<head>
    <script src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
</head>
<body>
    <ul id="list">
        <li>empty</li>
        <li>empty</li>
        <li>empty</li>
        <li>empty</li>
    </ul>
    <input id="execute_btn" type="button" value="execute" />
    <script type="text/javascript">
     $('#execute_btn').click(function(){
        $('#list li').text('coding everybody');
     })
    </script>
</body>
</html>
```

다음은 jQuery를 이용하지 않고 동일한 기능을 구현한 예제이다.
```html
<!DOCTYPE html>
<html>
<body>
    <ul id="list">
        <li>empty</li>
        <li>empty</li>
        <li>empty</li>
        <li>empty</li>
    </ul>
    <input id="execute_btn" type="button" value="execute" />
    <script type="text/javascript">
    function addEvent(target, eventType,eventHandler, useCapture) {
        if (target.addEventListener) { // W3C DOM
            target.addEventListener(eventType,eventHandler,useCapture?useCapture:false);
        } else if (target.attachEvent) {  // IE DOM
            var r = target.attachEvent("on"+eventType, eventHandler);
        }
    }
    function clickHandler(event) {
        var nav = document.getElementById('list');
        for(var i = 0; i < nav.childNodes.length; i++) {
            var child = nav.childNodes[i];
            if(child.nodeType==3)
                continue;
            child.innerText = 'Coding everybody';
        }
    }
    addEvent(document.getElementById('execute_btn'), 'click', clickHandler);
    </script>
</body>
</html>
```

두 개의 예제를 보고 나면 jQuery를 사용하지 않은 예제의 코드가 더 길어진 것을 확인할 수 있다. 
