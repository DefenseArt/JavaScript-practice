# day12

## 클로저
내부함수가 외부함수의 맥락(context)에 접근할 수 있는 것을 가르킨다. 클로저는 자바스크립트를 이용한 고난이도 테크닉을 구사하는데 필수적인 개념으로 활용된다.

### 내부함수
자바스크립트는 함수 안에서 또 다른 함수를 선언할 수 있다.
```js
function outter() {
    function inner() {
        var title = 'coding everybody';
        alert(title);
    }
    inner();
}
outter();
```
위의 예제에서 함수 outter의 내부에는 함수 inner가 정의 되어 있다. 함수 inner를 내부 함수라고 한다. 내부함수는 외부함수의 지역변수에 접근할 수 있다.

내부함수는 외부함수의 지역변수에 접근할 수 있따.
```js
function outter() {
    var title = 'coding everbody';
    function inner() {
        alert(title);
    }
    inner();
}
outter();
```
위의 예제는 내부함수 inner에서 title을 호출했을 때 외부함수인 outter의 지역변수에 접근할 수 있음을 보여주는 예시이다.

## 클로저
클로저(closure)는 내부함수와 밀접한 관계를 가지고 있는 주제다. 내부함수는 외부함수의 지역변수에 접근할 수 있는데 외부함수의 실행이 끝나서 외부함수가 소멸된 이후에도 내부함수가 외부함수의 변수에 접근 할 수 있다. 이러한 매커니즘을 클로저라고한다.

```js
function outter() {
    var title = 'codin everybody';
    return function() {
        alert(title);
    }
}
inner = outter();
inner();
```

## 클로저의 응용
