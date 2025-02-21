const memoInput = document.getElementById("memoInput");
const addBtn = document.getElementById("addMemoBtn");
const memoList = document.getElementById("memoList");


memoInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") 
    addBtn.click();
});

addBtn.addEventListener("click", () => {
  if(memoInput.value.trim() === "") return; // 빈 값 방지

  let memos = JSON.parse(localStorage.getItem("memos")) || [];

  memos.push(memoInput.value);
  
  localStorage.setItem("memos", JSON.stringify(memos));

  renderMemos();

  memoInput.value = ""; // 입력 창 초기화
});

function renderMemos() {
  memoList.innerHTML = "";
  const memos = JSON.parse(localStorage.getItem("memos")) || [];

  memos.forEach((memo) => {
    const li =document.createElement("li");
    li.innerText = memo;
    memoList.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", renderMemos);
