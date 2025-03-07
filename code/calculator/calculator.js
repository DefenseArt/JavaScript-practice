const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const add = document.getElementById("add");
const sub = document.getElementById("subtract");
const mul = document.getElementById("multiply");
const div = document.getElementById("divide");
const result = document.getElementById("result");

function getNumbers() {
  if (num1.value.trim() === "") {
    result.innerText = "첫 번째 입력 값이 비었는지 확인";
    return null;
  }
  if(num2.value.trim() === "")
  {
    result.innerText = "두 번째 입력 값이 비었는지 확인";
    return null;
  }
  return { num1, num2 };
}

//더하기
add.addEventListener("click", () => {
 
  const numbers = getNumbers();
  if (numbers)  result.innerText = "결과: " + (numbers.num1 + numbers.num2);
});

//빼기
sub.addEventListener("click", () => {
  const numbers = getNumbers();
  if (numbers)  result.innerText = "결과: " + (numbers.num1 - numbers.num2);
});

//곱하기
mul.addEventListener("click", () => { 
  const numbers = getNumbers();
  if (numbers) result.innerText = "결과: " + (numbers.num1 * numbers.num2);
});

//나누기
div.addEventListener("click", () => { 
  const numbers = getNumbers();
  if(numbers.num2 === 0)
    result.innerText = "0으로 나눌 수 없습니다.";
  if (numbers) result.innerText = "결과: " + (numbers.num1 / numbers.num2).toFixed(2);
});
