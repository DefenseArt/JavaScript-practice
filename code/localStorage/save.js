const display = document.getElementById("display");
const saveBtn = document.getElementById("saveBtn");
const loadBtn = document.getElementById("loadBtn");

saveBtn.addEventListener("click", () => {
    localStorage.setItem("key", "Hello, World!");
});

loadBtn.addEventListener("click", () => {
    const savedText =  localStorage.getItem("key");
    display.innerText = savedText;

});
