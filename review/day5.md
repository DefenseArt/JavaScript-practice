# day5

## 배열
연관된 데이터를 모아서 통으로 관리하기 위해서 사용하는 데이터 타입이다. 변수는 하나의 데이터를 저장하기 위한 것이라면 배열은 여러개의 데이터를 하나의 변수에 저장하기 위한 것이다.

## 배열이 없다면 ?
여러 개의 연관된 데이터를 반환하거나 관리할 때 비효율적입니다. 예를 들어, 여러 멤버 이름을 반환하고 싶다면 아래처럼 각각의 함수를 만들어야 합니다. 함수는 한 번에 하나의 값만 반환(return)할 수 있기 때문이다.

```JavaScript
function get_member1(){
    return 'egoing';
}
document.write(get_member1());
 
function get_member2(){
    return 'k8805';
}
document.write(get_member2());
 
 
function get_member3(){
    return 'sorialgi'
}
document.write(get_member3());
```

아래의 코드를 보자. 위와 같이 멤버를 담고 있는 배열을 반환하고 있지만, 위 코드보다 더 간단하게 나온다.

```JavaScript
function get_members(){
    return ['egoing', 'k8805', 'sorialgi'];
}
var members = get_members();
document.write(members[0]);
document.write(members[1]);
document.write(members[2]);
```

## 배열의 생성
배열의 생성 방법은 대괄호(`[]`)을 사용하여 만든다. 대괄호 안에 데이터를 콤마(`,`)로 구분하여 나열한다. 하나의 변수에 3개의 데이터를 담았다. 각각의 데이터를 원소(Element)라고 부른다.

```JavaScript
var member = ['egoing', 'k8805', 'sorialgi']
```

## 배열의 호출
위 예제처럼 3개의 데이터를 하나의 변수에 담아뒀다. 배열에 담겨있는 값을 가져올 때는 대괄호 안에 숫자를 넣는다. 이 숫자는 색인(index)라고 부르고 0부터 시작한다.

```JavaScript
var member = ['egoing', 'k8805', 'sorialgi']

alert(member[0]); // 결과 : egoing
alert(member[1]); // 결과 : k8805
alert(member[2]); // 결과 : sorialgi 
```

즉 첫번째 원소(eoging)를 가져오려면 대괄호에 0을 넣고 두번째는 1, 세번째는 2를 입력한다. 이를 사용하여 배열에 저장된 값을 출력할 수 있다.

## 배열의 사용
배열의 진가는 반복문과 결합했을 때 나타난다. 반복문으로 리스트에 담긴 정보를 하나씩 꺼내서 처리가 가능하기 때문이다.

```JavaScript
function get_members(){
    return ['egoing', 'k8805', 'sorialgi'];
}
members = get_members();
// members.length는 배열에 담긴 값의 숫자를 알려준다. 
for(i = 0; i < members.length; i++){
    // members[i].toUpperCase()는 members[i]에 담긴 문자를 대문자로 변환해준다.
    document.write(members[i].toUpperCase());   
    document.write('<br />');
}
```

## 배열의 제어
배열은 복수의 데이터를 효율적으로 관리, 전달하기 위한 목적으로 고안된 데이터 타입이다. 따라서 추가/수정/삭제와 같은 일을 편리하게 할 수 있도록 돕는 다양한 기능을 가지고 있다.

## 배열의 크기
아래와 같은 방법으로 배열의 크기를 알아낼 수 있다.
```JavaScript
var arr = [1, 2, 3, 4, 5];
alert(arr.length);
```

## 배열의 조작
 
## 추가
배열의 끝에 원소를 추가하는 방법이다. `push`는 인자로 전달된 값을 배열(li)에 추가하는 명령이다. 

### push
```JavaScript
var li = ['a', 'b', 'c', 'd', 'e'];
li.push('f'); // 배열의 끝에 'f'가 추가된다.
alert(li);
```

### concat
복수의 원소를 배열에 추가하는 방법 `concat`은 인자로 전달된 값을 기존 배열에 추가한 새로운 배열을 반환합니다.
```JavaScript
var li = ['a', 'b', 'c', 'd', 'e'];
li = li.concat(['f', 'g']); // 배열의 끝에 'f', 'g'가 추가된다.
alert(li);
```

### unshift
배열의 사직점에 원소를 추가하는 방법 `unshift`는 인자로 전달한 값을 배열의 첫번째 원소로 추가하고 배열의 기존 값들의 색인(index)를 1씩 증가시킨다.
```JavaScript
var li = ['a', 'b', 'c', 'd', 'e'];
li.unshift('z'); // 배열의 앞에 'z'가 추가된다.
alert(li);
```

### splice
두번째 인덱스 뒤에 원소를 추가하는 방법 `splice`는 배열의 특정 위치에 원소를 추가하거나 제거하는 방법입니다. `li.splice(2, 0, 'B');`는 "인덱스 2번('c')부터 0개의 원소를 삭제하고, 그 자리에 'B'를 추가"하는 의미입니다.
```JavaScript
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// start : 배열의 변경을 시작할 색인(index)
// deleteCount : 배열에서 제거할 요소의 수
// item1, item2, ... : 배열에 추가할 요소, 생략할 경우 요소를 제거하기만 함

```

```JavaScript
var li = ['a', 'b', 'c', 'd', 'e'];
li.splice(2, 0, 'B'); // 배열의 2번째 인덱스에 'B'가 추가된다.
alert(li);
```

## 제거

### shift
배열의 첫번째 원소를 제거하는 방법이다. 
```JavaScript
var li = ['a', 'b', 'c', 'd', 'e'];
li.shift(); // 배열의 첫번째 원소'a'가 제거된다.
alert(li);
```

### pop
배열 끝점의 원소를 제거하는 방법이다.
```JavaScript
var li = ['a', 'b', 'c', 'd', 'e'];
li.pop(); // 배열의 끝점의 원소인 'e'가 제거된다
alert(li);
```

## 정렬

### sort
배열의 원소들을 알파벳 순서 또는 사전에 정의된 기준에 따라 정렬한다.
```JavaScript
var li = ['c', 'e', 'a', 'b', 'd'];
li.sort(); // a, b, c, d, e로 정렬된다.
alert(li);
```

### reverse
배열의 원소들을 역순으로 정렬하는 방법이다.
```JavaScript
var li = ['c', 'e', 'a', 'b', 'd']; 
li.reverse(); // e, d, c, b, a로 정렬된다.
alert(li);
```
