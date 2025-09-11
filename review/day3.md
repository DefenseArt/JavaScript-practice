# Day 3

## 조건문
주어진 조건에 따라서 애플리케이션을 다르게 동작하도록 하는 것

## Boolean
비교 연산의 결과로 참(true)이나 거짓(false)을 얻을 수 있다.
여기서 참과 거짓은 문자처럼 언어에서 제공하는 데이터형이다.

이를 Boolean(불린)이라고 부르고 올 수 있는 값은 true, false 두가지 밖에 없다.

## if
조건문은 if로 시작하며, if뒤 조건이 오고 조건이 될 수 있는 값은 Boolean이다. Boolean의 값이 true라면 if문이 실행된다.

```JavaScript
if(true) { // if문이 참이니 실행
    alert('result : true'); // 결과 : result : true
}

if(false) { // if문이 거짓이니 실행 X
    alert('result : true'); // 결과 : 아무것도 출력하지 않음
}
```

## else
if문만 사용하면 복잡한 상황을 처리하는데 부족하다. else는 if문의 조건이 false라면 실행된다.

```JavaScript
if(true) { //if문이 참이니 if 블록이 실행
    alert(1);
}
else {
    alert(2);
}

if(true) { //if문이 거짓이니 else 블록이 실행
    alert(1);
}
else {
    alert(2);
}
```

## else if 
else if 를 이용하면 좀 더 다양한 케이스의 조건을 검사할 수 있는 기회를 제공함.
else if의 특징은 if나 else와 다르게 여러개가 사용 가능하다.
```JavaScript
if(false){ // if가 false이므로 다음 else if로 넘어감
    alert(1);
} 
else if(false) { // false이므로 다음 else if로 넘어감
    alert(2);
} 
else if(true) { // true 이므로 이 블록이 실행
    alert(3);
} 
else {
    alert(4);
}
```
## 변수와 비교 연산자
앞서 배운 변수와 비교 연산자, 조건문을 결합하여 ID 값으로 egoing을 입력해보고 다른 값도 입력해보자
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
</head>
<body>
    <script>
        id = prompt('아이디를 입력해주세요.')
        if(id=='egoing'){
            alert('아이디가 일치 합니다.')
        } else {
            alert('아이디가 일치하지 않습니다.')
        }
    </script>
</body>
</html>
```

## 조건문의 중첩
위의 예제에서 아이디와 비밀번호를 모두 검증해야한다면 어떻게 해야할까 ?
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
</head>
<body>
    <script>
        id = prompt('아이디를 입력해주세요.');
        if(id=='egoing'){
            password = prompt('비밀번호를 입력해주세요.');
            if(password==='111111'){
                alert('인증 했습니다.');
            } else {
                alert('인증에 실패 했습니다.');
            }
        } else {
            alert('인증에 실패 했습니다.');
        }
    </script>
</body>
</html>
```

## 논리 연산자
논리 연산자는 조건문을 간결하고 다양한 방법으로 구사할 수 있도록 도와준다.

|연산자|값|의미|
|--|--|--|
|and|`&&`|왼쪽 값과 오른쪽 값이 모두 참(true)일때 참(true)
|or|`\|\|`|양쪽 값이 하나라도 참(true)일때 참(true)
|not|`!`| 참(true)를 거짓(false)으로 거짓(false)를 참(true)

## && 
왼쪽 값과 오른쪽 값이 모두 참(true)일때 참(true)
```JavaScript
// && 결과는 1을 실행
if(true && true){
    alert(1);
}
if(true && false){
    alert(2);
}
if(false && true){
    alert(3);
}
if(false && false){
    alert(4);
}

// and 연산자를 이용하여 이전 예제를 개선
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
</head>
<body>
    <script>
        id = prompt('아이디를 입력해주세요.');
        password = prompt('비밀번호를 입력해주세요.');
        if(id=='egoing' && password=='111111'){
            alert('인증 했습니다.');
        } else {
            alert('인증에 실패 했습니다.');
        }
    </script>
</body>
</html>
```

## ||
양쪽 값이 하나라도 참(true)일때 참(true)
```JavaScript
// || 결과는 1, 2, 3을 실행
if(true || true){
    alert(1);
}
if(true || false){
    alert(2);
}
if(false || true){
    alert(3);
}
if(false || false){
    alert(4);
}

// or 연산자를 이용하여 id 값으로 egoing, k8805, sorialgi 중의 하나를 입력하면 '인증했습니다'가 출력되는 예제
id = prompt('아이디를 입력해주세요.');
if(id==='egoing' || id==='k8805' || id==='sorialgi'){
    alert('인증 했습니다.');
} else {
    alert('인증에 실패 했습니다.');
}
```

## !
참(true)를 거짓(false)으로 거짓(false)를 참(true)
```JavaScript
// ! 결과는 4을 실행
if(!true && !true){
    alert(1);
}
if(!false && !true){
    alert(2);
}
if(!true && !false){
    alert(3);
}
if(!false && !false){
    alert(4);
}
```

## 참과 거짓으로 간주되는 값
조건문에 사용될 수 있는 데이터 형이 Boolean 말고도 0, 1이 있다. 0은 거짓(false) 1은 참(true)로 간주된다.
```JavaScript
// 결과 2를 출력
if(0) {
    alert(1);
}
if(1) {
    alert(2);
}
```

## 기타 false로 간주되는 데이터 형
false와 0 외에 false로 간주되는 데이터형의 리스트이다. if문의 조건으로 !(부정) 연산자를 사용했기 때문에 첫번째 블록이 실행되는 것은 주어진 값이 false이기 때문이다.
```JavaScript
if(!''){
    alert('빈 문자열')
}
if(!undefined){
    alert('undefined');
}
var a;
if(!a){
    alert('값이 할당되지 않은 변수'); 
}
if(!null){
    alert('null');
}
if(!NaN){
    alert('NaN');
}
```

## 반복문 
만약 반복문이 없다면, 똑같은 코드를 여러 번 수동으로 작성해야 합니다. 데이터의 양이 많아질수록 반복문의 효율성이 더욱 부각됩니다.

## 반복문의 중첩
반복문 안에는 반복문을 넣을 수 있다. 반복문의 진가는 배열과 결합했을 때 나타난다. 
```JavaScript
// 0부터 9까지 변수 i에 순차적으로 값을 할당        
for(var i = 0; i < 10; i++){
    // 0부터 9까지의 변수를 j의 값에 순차적으로 할당
    for(var j = 0; j < 10; j++){    
        // i와 j의 값을 더한 후에 출력
        // String은 숫자인 i와 j의 데이터 타입을 문자로 형태를 변환하는 명령이다. 
        // String()을 제거하고 실행해보면 의미가 좀 더 분명하게 드러날 것이다.
        document.write(String(i)+String(j)+'<br />');
    }
}
```

## while
while문은 조건이 참(true)이면 코드 구간을 반복적으로 실행하고 거짓(false)면 반복문이 실행되지 않음
```JavaScript
while(조건) {
    반복해서 실행할 코드
}
```

## 반복조건
```JavaScript 
var i = 0;
// 종료조건으로 i의 값이 10보다 작다면 true, 같거나 크다면 false가 된다.
while(i < 10){
    // 반복이 실행될 때마다 coding everybody <br />이 출력된다. <br /> 줄바꿈을 의미하는 HTML 태그
    document.write('coding everybody <br />');
    // i의 값이 1씩 증가한다.
    i++
}
```

## for
for문은 제일 먼저 초기화를 한다. 그 다음 '반복조건'이 실행되고 반복 조건이 참이면 반복문이 실행된다. 반복문이 실행이 끝나면 '반복이 될 때마다 실행되는 코드'가 실행된다.
```JavaScript
for(초기화; 반복조건; 반복이 될 때마다 실행되는 코드) {
    반복해서 실행될 코드
}

for(var i = 0; i < 10; i++){
    document.write('coding everybody'+i+'<br />');
}
```

## 반복문의 제어

## break
반복작업을 중간에 중단 시키고 싶다면 break를 사용하면 된다. 반복문 안에서 break가 실행되면 반복문을 즉시 종료시킨다.
```JavaScript
for(var i = 0; i < 10; i++){ // coding everybody 5까지 출력
    if(i === 5) {
        break;
    }
    document.write('coding everybody'+i+'<br />');
}
```

## continue
이전 예제와 다르게 결과가 달라진다. ii의 값이 5가 되었을 때 continue 문이 실행되어 현재 반복을 건너뛰고 바로 다음 반복(i가 6일 때)으로 넘어갑니다. 따라서 coding everybody 5는 출력되지 않습니다.
```JavaScript
for(var i = 0; i < 10; i++){ // coding everybody 5가 출력되지 않고 나머지만 출력
    if(i === 5) {
        continue;
    }
    document.write('coding everybody'+i+'<br />');
}
```

