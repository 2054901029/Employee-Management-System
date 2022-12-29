const form = document.getElementById("form");
const error = document.getElementById("error");

const username = document.getElementById("username");
const password = document.getElementById("password");

var results;

async function login() {
    var res = await fetch('http://localhost:3300/admin/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username.value, password: password.value })
    });
    results = await res.json();
    console.log(results.status);
    if (results.status == true) {
        var delayInMilliseconds = 1000;
        document.getElementById("msg").innerHTML = results.message;
        setTimeout(function () {
            window.location.replace("./html/success.html");
        }, delayInMilliseconds);
    } else {
        document.getElementById("msg").innerHTML = results.message;
    }
}

// form.addEventListener("submit", (e) => {

//     let message = [];

//     if (!isNaN(name.value)) {
//         message.push("Please type Character")

//     }

//     if (password.value.length < 6) {
//         message.push(" Password Must Be Atleast 6 Digits")

//     }

//     if (message.length > 0) {
//         e.preventDefault();
//         error.innerText = message;
//     }
// })