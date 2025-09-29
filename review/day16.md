# day16

## 생성자와 new

## 객체
객체란 서로 연관된 변수와 함수를 그룹핑한 그릇이다. 객체 내의 변수를 프로퍼티(property) 함수를 메소드(method)라고 부른다.
```js
var person = {}
person.name = 'egoing';
person.introduce = function(){
    return 'My name is '+this.name;
}
document.write(person.introduce());
```

객체를 만드는 과정에 분산되어 있다. 객체를 정의 할 때 값을 셋팅하도록 코드를 바꿔보자.

```js
var person = {
    'name' : 'egoing',
    'introduce' : function(){
        return 'My name is '+this.name;
    }
}
document.write(person.introduce());
```

만약 다른 사람의 이름을 담을 객체가 필요하면 객체의 정의를 반복해야한다. 객체의 구조를 재활용할 수 있는 방법이 필요하다. 이때 사용하는 것이 생성자다.

## 생성자
생성자(constructor)는 객체를 만드는 역할을 하는 함수이다. 자바스크립트에서 함수는 재사용 가능한 로직의 묶음이 아니라 객체를 만드는 창조자이다.
```js
function Person(){}
var p = new Person();
p.name = 'egoing';
p.introduce = function(){
    return 'My name is '+this.name; 
}
document.write(p.introduce());
```

함수를 호출할 때 new를 붙이면 새로운 객체를 만든 후에 이를 리턴한다. 위의 코드는 새로운 객체를 변수 p에 담았다.

### 특징 
일반적인 객체지향 언어에서 생성자는 클래스의 소속이다. 하지만 자바스크립트에서 객체를 만드는 주체는 함수다. 함수에 new를 붙이는 것을 통해서 객체를 만들 수 있다는 점은 자바스크립트에서 함수의 위상을 암시하는 단서이면서 또 자바스크립트가 추구하는 자유로움을 보여주는 사례라고 할 수 있다.
