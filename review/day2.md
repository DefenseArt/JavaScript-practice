# Day 2 

## 변수
변수는 문자나 숫자 같은 값을 담는 컨테이너로 값을 유지할 필요가 있을 때 사용한다. 변수의 이름은 `$`, `_` 혹은 특수문자를 제외한 모든 문자를 사용 할 수 있다.

## 변수의 선언
JavaScript에서 변수는 `var`로 시작한다. `var`를 생략 할수도 있지만 그러면 유효범위라는 것에 영향을 미친다. 최근에는 `let`이나 `const`를 더 많이 사용하며, 이는 변수의 유효 범위와 관련이 있다.
```JavaScript
var a = 1;
alert(a+1); // 결과 : 2

var a = 2;
alert(a+1) // 결과 : 3

var first = "coding";
alert(first + "everybody"); // 결과 : coding everybody

var a = "coding", b = 'everybody';
alert(a); // 결과 : coding
alert(b); // 결과 : everybody
```

## 변수가 없다면 ?
변수는 코드의 재활용성을 높여준다. 

예를 들어 100에 10을 더하고, 10을 나눈 후에 다시 10을 빼고 거기에 10을 곱하면 ? 코드가 길어진다.
```JavaScript
alert(100+10);
alert((100+10)/10);
alert(((100+10)/10)-10);
alert((((100+10)/10)-10)*10);
```

하지만 변수를 사용하면 수정해야할 코드가 적어진다.

```JavaScript
a = 100;
a = a + 10;
alert(a);
a = a / 10;
alert(a);
a = a - 10;
alert(a);
a = a * 10;      
alert(a);
```

## 대입 연산자
아래 예제 중에서 `=`는 오른쪽 값의 값인 1을 왼쪽 값의 변수 `a`에 대입하는 `대입 연산자`
```JavaScript
a = 1;
```

## 비교 연산자
비교 연산자의 결과는 `true` 나 `false` 중의 하나다. 

|값|의미|
|---|---|
|`true`|참
|`false`|거짓|
|`==`|서로 값이 같다면 `true` 다르면 `false`
|`===`|왼쪽 값과 오른쪽 값이 정확하게 같을때 `true` 다르면 `false`
|`!=`|서로 값이 같다면 `false` 다르면 `true`
|`!==`|왼쪽 값과 오른쪽 값이 정확하게 같을때 `false` 다르면 `true`
|`>`|왼쪽 값이 오른쪽 값보다 크면 `true` 다르면 `false`
|`>=`|왼쪽 값이 오른쪽 값보다 크거나 같으면 `true` 다르면 `false`

```JavaScript
// ==
alert(1==2); // 결과 : false
alert(1==1); // 결과 : true
alert("one"=="two"); // 결과 : false
alert("one"=="one"); // 결과 : true

// ===
alert(1=='1'); // 결과 : true
alert(1==='1'); // 결과 : false
```

## 부정과 부등호
## !=
`!`는 부정을 의미한다. 이것을 기호로는 '!='로 표시한다. 
```JavaScript
alert(1!=2); // 결과 : true
alert(1!=1); // 결과 : false
alert("one"!="two"); // 결과 : true 
alert("one"!="one"); // 결과 : false
```

## !==
`!==`는 `===`와 `==`의 관계와 같다.

## >
왼쪽 값이 오른쪽 값보다 크면 참, 그렇지 않다면 거짓
```JavaScript
alert(10>20); // 결과 : false
alert(10>1); // 결과 : true
alert(10>10) // 결과 : false
```

## >=
왼쪽 값이 오른쪽 값보다 크거나 같다 `<=` 반대의 의미
```JavaScript
alert(10>=20); // 결과 : false
alert(10>=1); // 결과 : true
alert(10>=10) // 결과 : true
```
