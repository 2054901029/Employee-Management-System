const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const error = document.getElementById("error");


// async function printData() {
//     await fetch('http://localhost:3300/employee/list').then((res) => {
//         console.log(res)
//     })
// }


form.addEventListener("submit", (e) => {

    let message = [];

    if (!isNaN(name.value)) {
        message.push("Please type Character")

    }

    if (password.value.length < 6) {
        message.push(" Password Must Be Atleast 6 Digits")

    }

    if (message.length > 0) {
        e.preventDefault();
        error.innerText = message;
    }
})