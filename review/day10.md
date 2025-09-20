# day10

## 유효범위
유효범위(Scope)는 변수의 수명을 의미한다. 아래의 예제를 보자. 결과는 global이다.
```JavaScript
var vscope = 'global';
function fscope() {
    alert(vscope);
}
fscope();
```

함수 밖에서 변수를 선언하면 그 변수는 전역변수이다. 전역변수는 애플리케이션 전역에서 접근이 가능한 변수다. 다시 말하면 어떤 함수 안에서도 그 변수에 접근 할 수 있다. 다른 예제를 보자

```Js
var vscope = 'global';
function fscope(){
    var vscope = 'local';
    alert('함수안 '+vscope);
}
fscope();
alert('함수밖 '+ vscope);
```
이 예제를 보면 함수 안 local 과 함수 밖 global이 출력된다. 전역변수의 유효범위는 에플리케이션 전역인데, 같은 이름의 지역변수와 전역변수가 동시에 정의되어 있다면 지역변수가 우선한다는 것을 알 수 있다.

## 유효범위의 효용

### 지역변수의 사용
전역변수는 각기 다른 로직에서 사용하는 같은 이름의 변수값을 변경시켜서 의도하지 않은 문제를 발생시킨다.
```js
function a (){
    var i = 0;
}
for(var i = 0; i < 5; i++){
    a();
    document.write(i);
}

// 결과 : 01234
```

### 전역변수의 사용
```js
function a (){
    i = 0;
}
for(i = 0; i < 5; i++){
    a();
    document.write(i);
}

// 결과 : 무한반복
```

## 전역변수의 사용
불가피하게 전역변수를 사용해야 하는 경우는 하나의 객체를 전역변수로 만들고 객체의 속성으로 변수를 관리하는 방법을 사용한다.
```js
var MYAPP = {}
MYAPP.calculator = {
    'left' : null,
    'right' : null
}
MYAPP.coordinate = {
    'left' : null,
    'right' : null
}
 
MYAPP.calculator.left = 10;
MYAPP.calculator.right = 20;

function sum(){
    return MYAPP.calculator.left + MYAPP.calculator.right;
}

document.write(sum());
```
전역변수를 사용하고 싶지 않다면 아래와 같이 익명함수를 호출하면 된다.
```js
(function(){
    var MYAPP = {}
    MYAPP.calculator = {
        'left' : null,
        'right' : null
    }
    MYAPP.coordinate = {
        'left' : null,
        'right' : null
    }
    MYAPP.calculator.left = 10;
    MYAPP.calculator.right = 20;
    function sum(){
        return MYAPP.calculator.left + MYAPP.calculator.right;
    }
    document.write(sum());
}()) // 익명함수
```

## 유효범위의 대상 (함수)
자바스크립트는 함수에 대한 유효범위만을 제공한다. 많은 언어들이 블록(대체로 {,})에 대한 유효범위를 제공하는 것과 다른점이다.

```js
for(var i = 0; i < 1; i++){
    var name = 'coding everybody';
}
alert(name); // 결과 : coding everbody
```

자바에서는 아래의 코드는 허용되지 않는다. name은 지역변수로 for문 안에서 선언되었는데 이를 for문 밖에서 호출하고 있기 때문이다.
```js
for(int i = 0; i < 10; i++){
    String name = "egoing";
}
System.out.println(name);
```
자바스크립트의 지역변수는 함수에서만 유효하다.

## 정적 유효범위
자바스크립트는 함수가 선언된 시점에서의 유효범위를 갖는다. 이러한 유효범위의 방식을 정적 유효범위(static scoping) 혹은 렉시컬(lexical scoping)이라고 한다.
```js
var i = 5;
 
function a(){
    var i = 10;
    b();
}
 
function b(){
    document.write(i);
}
 
a(); // 결과 : 5
``` 
