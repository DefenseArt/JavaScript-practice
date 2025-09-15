# day6

## 객체
인덱스로 문자를 사용하고 싶다면 객체(dictionary)를 사용해야한다. 다른 언어에서는 연관배열(associative array) 또는 맵(map), 딕셔너리(Dictionary)라는 데이터 타입이 객체에 해당된다.

## 객체의 생성
아래의 예제어서 egoing은 key가 되고, 10은 value가 된다. 객체를 만드는 방법은 이 방법 말고도 여러 방법을 쓸 수 있다.

```JavaScript
var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};

var grade = {};
grades['egoing'] = 10;
grades['k8805'] = 6;
grades['sorialgi'] = 80;


var grades = new Object();
grades['egoing'] = 10;
grades['k8805'] = 6;
grades['sorialgi'] = 80;
```

## 객체의 호출
객체를 만들었으니 필요한 값을 가져와보자. 다음은 sorialgi라는 이름(key)으로 저장된 값을 가져오는 법이다. 다른 방법으로도 객체의 속성에 접근이 가능하다.

```JavaScript
var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};
alert(grades['sorialgi']); // 결과 : 80


alert(grades.sorialgi);
```


## for in 문

variable : 반복문 내에서 현재 순회중인 속성(key)을 저장할 변수의 이름

object : 반복하고자 하는 이름(key)으로 순회할 수 있는 객체

```JavaScript
for (variable in object) {
    // 실행할 코드
}
```

## 객체와 반복문의 조우
반복문 내에서 `key`를 부르면 이름(key)을 호출하고, `grades[key]`를 부르면 값(value)을 나타낸다.

    객체에는 객체를 담을수도 있고, 함수도 담을 수 있다. 

```JavaScript
var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};
for(key in grades) {
    document.write("key : "+ key +" value : "+ grades[key] +"<br />");
}

// 결과
key :   egoing value : 10
key :   k8805 value : 6
key :   sorialgi value : 80
```

## 객체 지향 프로그래밍
객체 지향 프로그래밍 기법의 핵심이 되는 성질로 취지에 따라서 로직을 객체에 그룹핑해서 객체라는 부품을 조립하여 소프트웨어라는 완제품을 만들 수 있게 해준다. 

```JavaScript
var grades = {
    'list': {'egoing': 10, 'k8805': 6, 'sorialgi': 80},
    'show' : function(){
        for(var name in this.list){
            document.write(name+':'+this.list[name]+"<br />");
        }
    }
};
grades.show();
```
