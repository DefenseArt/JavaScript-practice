# day13

## arguments
함수에는 arguments라는 변수에 담긴 숨겨진 유사 배열이 있다. 이 배열은 함수를 호출할 때 입력한 인자가 담겨져있다.
```js
function sum() {
    var i, _sum = 0;
    for(i = 0; i < arguments.length; i++) {
        document.write(i+' : ' + arguments[i] + '<br/>');
        _sum += arguments[i];
    }
    return _sum;
}

document.write('result : ' + sum(1,2,3,4));
```
위의 예제에 함수 sum은 인자에 대한 정의가 없다. 하지만 마지막 라인에서는 4개의 인자를 함수 sum에 전달하고 있다. 이러한 구조가 가능한 이유는 arguments라는 특수한 배열이 있기 때문이다.

## 매개변수의 수
매개변수와 관련된 두가지 수가 있다. 하나는 함수 `.length`, 다른 하나는 `arguments.length`이다. `arguments.length`는 함수로 전달된 실제 인자의 수를 의미하고, 함수 `.legth`는 함수에 정의된 인자의 수를 의미한다.

```js 
function zero(){
    console.log(
        'zero.length', zero.length,
        'arguments', arguments.length
    );
}
function one(arg1){
    console.log(
        'one.length', one.length,
        'arguments', arguments.length
    );
}
function two(arg1, arg2){
    console.log(
        'two.length', two.length,
        'arguments', arguments.length
    );
}
zero(); // zero.length 0 arguments 0 
one('val1', 'val2');  // one.length 1 arguments 2 
two('val1');  // two.length 2 arguments 1
```
