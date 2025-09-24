# day14

## 함수호출
함수에 대한 기본 수업에서 함수를 호출하는 방법을 알아봤다. 아래는 함수를 호출하는 가장 기본적인 방법이다.
```js
function func() {

}

func();
```

JavaScript는 함수를 호출하는 특별한 방법을 제공한다. 함수를 객체라고 본다. 위의 예제는 함수 func는 Function이라는 객체의 인스턴스다. 따라서 func는 객체 Function이 가지고 있는 메소드를 상속하고 있다. 지금 이야기하려는 메소드는 `Function.apply`과 `Function.call`이다.

```js
function sum(arg1, arg2) {
    return arg1 + arg2;
}

alert(sum.apply(null, [1, 2])) // 결과 : 3
```
함수 sum은 Function 객체의 인스턴스다. 그렇기 때문에 객체 Function의 메소드 apply를 호출 할 수 있다. apply 메소드는 this 인자를 첫번째 인자로 받고, 두번째 인자로는 배열을 받는다.

## apply의 사용
```js
o1 = {val1:1, val2:2, val3:3}
o2 = {v1:10, v2:50, v3:100, v4:25}
function sum(){
    var _sum = 0;
    for(name in this){
        _sum += this[name];
    }
    return _sum;
}
alert(sum.apply(o1)) // 6
alert(sum.apply(o2)) // 185
```

예제가 복잡해보이지만 하나씩 분해하면 어렵지 않다.

1. 두개의 객체를 만들었다. o1는 3개의 속성을 가지고 있다. 각각의 이름은 val1, val2, val3이다. o2는 4개의 속성을 가지고 있고 o1과 다른 속성 이름을 가지고 있고 속성의 수도 다르다.

2. 함수 sum을 만들었다. 이 함수는 객체의 속성을 열거할 때 사용하는 for in문을 이용하여 객체 자신(this)의 값을 열거한 후에 각 속성의 값을 지역변수 _sum에 저장한 후 리턴한다.

3. 객체 Function의 메소드 apply의 첫번째 인자는 함수가 실행될 맥락이다. `sum.apply(o1)`은 함수 sum을 객체 o1의 메소드로 만들고 sum을 호출한 후에 sum을 삭제한다.

4. sum의 o1 소속의 메소드가 된다는 것은 이렇게 바꿔 말할 수 있다. 함수 sum에서 this의 값이 전역객체가 아니라 o1이 된다는 의미다. 
