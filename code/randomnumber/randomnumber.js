const inpnum = document.getElementById("inpnum"); // 숫자 입력
const numbut = document.getElementById("numbut"); // 버튼 누르면 값 비교
const text = document.getElementById("text"); 

const randomnumber = Math.floor(Math.random() * 100) + 1; // 랜덤 값 출력 1 ~ 100
console.log(randomnumber);

numbut.addEventListener("click", () => {
  const userInput = parseInt(inpnum.value);

  if (isNaN(userInput)) {
    text.innerText = " 숫자를 입력해주세요!";
    return;
  }

  if (userInput === randomnumber) {
    text.innerText = "정답입니다!";
    inpnum.value = "";
  }
  else if(userInput > randomnumber)
    text.innerText = "더 낮은 숫자를 입력하세요!";
  else
    text.innerText = "더 높은 숫자를 입력하세요!";
});
