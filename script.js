const number = document.querySelector(".number");
const btn = document.querySelector(".generator");

// JAVASCRIPT ES6
const generateNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10 + 1)
    number.innerHTML = randomNumber
}

btn.addEventListener("click", generateNumber)

generateNumber()