# JavaScript 복습

## JavaScript란 ?
  웹페이지를 동적으로, 프로그래밍적으로 제어하기 위해서 고안된 언어이며, HTML 위에서 동작하기때문에 HTML에 대한 지식도 필요하다.

## JavaScript로 할 수 있는 일들
- 웹페이지 스크립팅 - DOM
- 서버 측 스크립팅 - node.js

## 수의 표현
 큰 따옴표나 작은 따옴표가 붙지 않은 숫자는 숫자로 인식
```JavaScript
alert(1+1); // 결과 : 2

alert(1.2 + 1.3); // 결과 : 2.5

alert(2 * 5); // 결과 : 10

alert(6 / 2); // 결과 : 3
```
## 수의 연산

```JavaScript
Math.pow(3,2); // 결과 : 9, 3의 2승
Math.round(10.6); // 결과 : 11, 10.6을 반올림
Math.ceil(10.2); // 결과 : 11, 10.2을 올림
Math.floor(10.6); // 결과 : 10, 10.6을 내림
Math.sqrt(9); // 결과 : 3, 3의 제곱근
Math.random(); // 결과 0부터 1.0 사이의 랜덤한 숫자
```

## 문자의 표현(String)
문자는 "(큰 따옴표) 혹은 '(작은 따옴표) 중의 하나로 감싸야한다. 큰 따옴표로 시작하면 큰 따옴표로 끝나고, 작은 따옴표로 시작하면 작은 따옴표로 끝나야한다.

```JavaScript
alert("conding everybody");

alert('conding everybody');
```

## 데이터 타입 확인 : typeof 연산자

```JavaScript
// typeof는 값의 데이터 형을 알려주는 기능

alert(typeof "1"); // 결과 : String

alert(typeof 1); // 결과 : number
```
숫자로 따옴표로 감싸면 문자가 된다. 

## 문자열 안에 따옴표 사용하기
문자열 안에 따옴표를 사용하고 싶을 때는 따옴표 앞에 `\`(역슬래시)를 사용해야한다.
```JavaScript
alert('egoing\'s JavaScript');
```

## 줄바꿈
여러줄을 표시하기 위해서는 `\n`을 사용한다. 이는 줄바꿈을 의미하는 특수한 문자이다.
```JavaScript
alert("안녕하세요.\nJavaScript 세계에 오신 것을 환영합니다");
```

## 문자 연산 
문자와 문자를 더할 때는 아래와 같이 사용한다.
```JavaScript
alert("conding" + "everybody"); // 결과 : conding everybody

// 문자의 길이를 구할 때는 문자 뒤에 .length를 붙인다.
alert("conding everybody".length) // 결과 : 16
```
