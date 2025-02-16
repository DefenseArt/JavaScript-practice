const inputField = document.getElementById("in"); 
const addButton = document.getElementById("but"); 
const todoList = document.getElementById("ui"); 

addButton.addEventListener("click", () => {
  if (inputField.value.trim() === "") return; 

  const listItem = document.createElement("li");
  listItem.innerText = inputField.value; 

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "삭제";
  deleteButton.onclick = () => listItem.remove(); 

  listItem.appendChild(deleteButton);
  todoList.appendChild(listItem);

  inputField.value = "";
});
