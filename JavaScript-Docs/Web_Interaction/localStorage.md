### localStorage
`localStorage` 는 브라우저에 데이터를 저장하는 방법 중 하나로, 웹 페이지가 닫혀도 데이터가 유지됨

> 특징      
> 브라우저에 데이터 저장 (세션이 끝나도 유지됨)     
> 문자열 형태로만 저장 가능             
> 쿠키보다 더 많은 데이터 저장 가능 (약 5MB)        
> 보안이 중요할 경우 사용 주의 (사용자가 직접 개발자 도구에서 조작 가능)

**`localStorage` 사용법**

1. 데이터 저장 (`setItem`) 
```js
localStorage.setItem("key", "value"); 
```

**예제**
```js
localStorage.setItem("username", "JohnDoe"); 
```
`username` 이라는 key에 `"JohnDoe` 가 저장됨

2. 데이터 불러오기 (`getItem`)
```js
const data = localStorage.getItem("key");
```

**예제**
```js
const username = localStorage.getItem("username");
console.log(username); //JohnDoe
```
`localStorage` 에 저장된 `username` 값을 가져와 출력

3. 데이터 삭제 (`removeItem`)
```js
localStorage.removeItem("key");
```

**예제**
```js
localStorage.removeItem("username");
```
`username` 이라는 key의 데이터가 삭제됨

4. 모든 데이터 삭제 (`clear`)
```js
localStorage.clear();
```

`localStorage` 에 저장된 모든 데이터가 삭제됨
