# 02. Truthy and Falsy
**이 문서는 JavaScript에서 Truthy 와 Falsy 개념을 설명합니다.**

Truthy 와 Falsy의 차이

조건문에서 Truthy 와 Falsy 활용법

!, &&, || 연산자와 함께 사용하기

---

### Truthy and Falsy
값을 논리적으로 평가할 때, 값이 참(true)처럼 동작하면 Truthy, 거짓(false)처럼 동작하면 Falsy

### Truthy한 값들
`Truthy` : true 같은 값
```js
console.log(!3);            // false
console.log(!'hello');      // false
console.log(!['array?']);   // false
console.log(![]);           // false
console.log(!{ value: 1 }); // false
```

### Falsy한 값들 
`Falsy` : false 같은 값
```js
console.log(!undefined);  // true
console.log(!null);       // true
console.log(!0);          // true
console.log(!'');         // true
console.log(!NaN);        // true
```

### 조건문에서 Truthy/Falsy 활용
```js
const value = { a: 1 };

if (value) {
  console.log('value 가 Truthy 하네요.');
} else {
  console.log('value 가 Falsy 하네요.');
}
```

### 삼항 연산자로 Truthy/Falsy 활용
```js
const value = { a: 1 };
const truthy = value ? true : false; 
console.log(truthy); // true
```