const memoInput = document.getElementById("memoInput");
const addBtn = document.getElementById("addMemoBtn");
const memoList = document.getElementById("memoList");

memoInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") 
    addBtn.click();
});

addBtn.addEventListener("click", () => {
  if(memoInput.value.trim() === "") return; // 빈 값 방지

  const mlist = document.createElement("li");
  mlist.innerText = memoInput.value;
  
  memoList.appendChild(mlist);

  memoInput.value = ""; // 입력 창 초기화
});
