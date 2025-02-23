const memoInput = document.getElementById("memoInput");
const addBtn = document.getElementById("addMemoBtn");
const memoList = document.getElementById("memoList");
const clearBtn = document.getElementById("clearMemoBtn");



memoInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") addBtn.click();
});

addBtn.addEventListener("click", () => {
  if (memoInput.value.trim() === "") return; // 빈 값 방지

  let memos = JSON.parse(localStorage.getItem("memos")) || [];
  memos.push(memoInput.value);
  localStorage.setItem("memos", JSON.stringify(memos));

  renderMemos();
  memoInput.value = ""; // 입력 창 초기화
});

clearBtn.addEventListener("click", () => {
  localStorage.clear();  // 모든 데이터 삭제
  memoList.innerHTML = ""; // 화면에서도 즉시 삭제
});

function renderMemos() {
  memoList.innerHTML = "";
  const memos = JSON.parse(localStorage.getItem("memos")) || [];

  memos.forEach((memo, index) => {
    const li = document.createElement("li");
    li.innerText = memo;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "삭제";

    deleteButton.onclick = () => {
      li.classList.add("fade-out"); // 애니메이션 효과 추가
      setTimeout(() => {
        const updatedMemos = memos.filter((_, i) => i !== index);
        localStorage.setItem("memos", JSON.stringify(updatedMemos));
        renderMemos();
      }, 500); // 0.5초 후 삭제
    };

    li.appendChild(deleteButton);
    memoList.appendChild(li);
  });
}

clearBtn.addEventListener("click", () => {
  localStorage.clear();
  memoList.innerHTML = "";
});

document.addEventListener("DOMContentLoaded", renderMemos);
