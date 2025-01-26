# 03. 조건문

### 조건문

### if 
가장 기본적인 조건문
```js 
if (조건) {
    코드;
}
```

### if-else 
if 조건에 부합하지 않을 시 else를 실행
```js
const a = 10;
if (a > 15) {
    console.log('a가 15보다 큽니다.');
}
else {
    console.log('a가 15보다 크지 않습니다');
}
```

### if-else if
여러 조건에 따라 작업해야할 때 사용
```js
const a = 10;
if (a === 5) {
    console.log('5입니다!');
}
else if (a === 10) {
    console.log('10입니다!');
}
else {
    console.log('5도 아니고 10도 아닙니다.');
}
```

### switch/case
특정 값이 무엇이냐에 따라 다른 작업을 실행할 때 사용

`default` : 특정 값이 case 로 준비하지 않은 값일 경우 실행
```js
const device = 'iphone';

switch (device) {
    case 'iphone':
        console.log('아이폰');
        break;
    case 'ipad':
        console.log('아이패드');
        break;
    case 'galaxy note':
        console.log('갤럭시 노트');
        break;
    default:
        console.log('모르겠네요');
}
```

