const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const add = document.getElementById("add");
const sub = document.getElementById("subtract");
const mul = document.getElementById("multiply");
const div = document.getElementById("divide");
const result = document.getElementById("result");


function getNumbers() {
  const num1input = parseFloat(num1.value);
  const num2input = parseFloat(num2.value);

  if (isNaN(num1input) || isNaN(num2input)) {
    result.innerText = "숫자를 입력하세요!";
    return null;
  }
  return { num1input, num2input };
}

//더하기
add.addEventListener("click", () => {
 
  const numbers = getNumbers();
  if (numbers)  result.innerText = "결과: " + (numbers.num1input + numbers.num2input);
});

//빼기
sub.addEventListener("click", () => {
  const numbers = getNumbers();
  if (numbers)  result.innerText = "결과: " + (numbers.num1input - numbers.num2input);
});

//곱하기
mul.addEventListener("click", () => { 
  const numbers = getNumbers();
  if (numbers) result.innerText = "결과: " + (numbers.num1input * numbers.num2input);
});

//나누기
div.addEventListener("click", () => { 
  const numbers = getNumbers();
  if (numbers) result.innerText = "결과: " + (numbers.num1input / numbers.num2input);
});
