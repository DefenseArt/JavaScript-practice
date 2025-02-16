const inputField = document.getElementById("inputField"); 
const addButton = document.getElementById("addButton"); 
const todoList = document.getElementById("todoList"); 

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
