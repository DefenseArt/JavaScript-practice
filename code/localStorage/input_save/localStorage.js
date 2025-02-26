const display = document.getElementById("display");
const saveBtn = document.getElementById("saveBtn");
const loadBtn = document.getElementById("loadBtn");
const saveinput = document.getElementById("saveinput");

saveBtn.addEventListener("click", () => {
    const userInput = saveinput.value; // input 입력 값 받기
    localStorage.setItem("key", userInput); // input 입력 값 저장
    saveinput.value = ""; // 입력 필드 초기화 
});

loadBtn.addEventListener("click", () => {
    const savedText =  localStorage.getItem("key") || "저장된 값이 없습니다."; 
    display.innerText = savedText;

});
