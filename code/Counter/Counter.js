const number  = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

increase.onclick = () => {
    const sum = parseInt(number.innerText, 10);
    number.innerText = sum + 1;
};

decrease.onclick = () => {
    const sum = parseInt(number.innerText, 10);
    number.innerText = sum - 1;
};
