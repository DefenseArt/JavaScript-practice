# day9

## 정규표현식
문자열에서 특정한 문자를 찾아내는 도구

## 정규표현식 생성
정규표현식은 두가지 단계로 이루어진다. 컴파일(compile) 다른 하나는 실행(execution)

### 컴파일(compile)
검출하고자 하는 패턴을 만드는 일이다. 우선 정규표현식 객체를 만들어야한다. 객체를 만드는 방법은 두가지가 있다. a라는 텍스트를 찾아내는 정규표현식을 만들어보자.

### 정규표현식 리터럴
리터럴은 프로그래밍에서 고정된 값을 직접 표현하는 방식이다.
```JavaScript
var pattern = /a/;
```

### 정규표현식 객체 생성자
```JavaScript
var pattern = new RegExp('a');
```

## 정규표현식 메소드 실행

### RegExp.exec()
```JavaScript
console.log(pattern.exec('abcdef')); // 결과 : ["a"]

console.log(pattern.exec('bcdefg')); // 결과 : null
```

실행 결과는 문자열 a 값으로 하는 배열을 리턴하고 인자 'bcdefg'에는 a가 없기 때문에 null을 리턴한다.

### RegExp.test()
test는 인자 안에 패턴에 해당되는 문자열이 있으면 true, 없으면 false를 리턴한다.
```JavaScript
console.log(pattern.test('abcdef')); // 결과 : true

console.log(pattern.test('bcdefg')); // 결과 : false
```

## 문자열 메소드 실행
문자열 객체의 몇몇 메소드는 정규표현식을 사용할 수 있다.

### String.match()
RegExp.exec()와 비슷하다
```JavaScript
console.log('abcdef'.match(pattern)); // 결과 : ['a']

console.log('bcdefg'.match(pattern)); // 결과 : null
```

### String.replace()
문자열에서 패턴을 검색해서 이를 변경한 후에 변경된 값을 리턴한다.
```JavaScript
console.log('abcdef'.replace(pattern, 'A')); // 결과 : Abcdef
```

## 옵션
정규표현식 패턴을 만들 때 옵션을 설정할 수 있다. 옵션에 따라서 검출되는 데이터가 달라진다

### i 
i를 붙이면 대소문자를 구분하지 않는다.
```JavaScript
var xi = /a/;
console.log('Abcde'.match(xi)); // 결과 : null

var oi = /a/i;
console.log('Abcde'.match(oi)); // 결과 : ['A']
```

### g
g를 붙이면 검색된 모든 결과를 리턴한다.
```JavaScript
var xg = /a/;
console.log("abcdea".match(xg)); // 결과 : ["a"]

var og = /a/g;
console.log("abcdea".match(og)); // 결과 : ["a", "a"]
```

## 캡처
괄호안의 패턴은 마치 변수처럼 재사용이 가능하다. 이 때 기호를 $를 사용하는데 아래 코드는 coding과 everybody의 순서를 역전시킨다.

```JavaScript
var pattern = /(\w+)\s(\w_)/;
var str = "conding everybody";
var result = str.replace(pattern, "$2, $1");
console.log(result);
```

## 치환
아래 코드는 본문 중의 URL을 링크 html 태그로 교체한다
```JavaScript
var urlPattern = /\b(?:https?):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*/gim;
var content = '생활코딩 : http://opentutorials.org/course/1 입니다. 네이버 : http://naver.com 입니다. ';
var result = content.replace(urlPattern, function(url){
    return '<a href="'+url+'">'+url+'</a>';
});
console.log(result);
```
