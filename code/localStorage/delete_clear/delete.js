const display = document.getElementById("display");
const saveBtn = document.getElementById("saveBtn");
const loadBtn = document.getElementById("loadBtn");
const saveinput = document.getElementById("saveinput");
const deleteBtn = document.getElementById("deleteBtn");
const clearBtn = document.getElementById("clearBtn");

saveBtn.addEventListener("click", () => {
    const userInput = saveinput.value;
    localStorage.setItem("key", userInput); 
    saveinput.value = "";
});

loadBtn.addEventListener("click", () => {
    const savedText =  localStorage.getItem("key") || "저장된 값이 없습니다."; 
    display.innerText = savedText;

});

deleteBtn.addEventListener("click", () => {
    if(localStorage.getItem("key")) {
        localStorage.removeItem("key");
        display.innerHTML = "데이터가 삭제되었습니다.";
        display.innerText = "";
    }
    else 
        display.innerText = "삭제할 데이터가 없습니다.";
});

clearBtn.addEventListener("click", () => {
    localStorage.clear();
    saveinput.value = ""; // 입력 값 초기화

    if(localStorage.length === 0)
        display.innerHTML = "모든 데이터가 삭제되었습니다.";
});
