
window.onload = function () {
    printData();
};

async function printData() {
    var results;
    var res = await fetch('http://localhost:3300/employee/list');

    results = await res.json();

    results.forEach(element => {

        document.querySelector("tbody").innerHTML =
            results.map(element =>
                `<tr >
                    <td id="emp_id">${element.employee_id}</td>
                    <td>${element.name}</td>
                    <td>${element.age}</td>
                    <td>${element.email}</td>
                    <td>${element.phone_no}</td>
                    <td>${element.status}</td>
                    <td>${element.dept_id}</td>
                    <td><button class="deletebtn" onclick="deleteEmployeeHtml()">Delete</button></td>
                </tr>`
            ).join('')
    });
}

async function addEmployeeHtml() {
    window.location.replace("../html/addEmployee.html");
}
async function updateEmployeeHtml() {
    window.location.replace("../html/updateEmployee.html");
}

async function deleteEmployeeHtml() {

    await fetch(`http://localhost:3300/employee/${parseInt(document.getElementById("emp_id").textContent)}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(() => {
        window.location.replace("../html/success.html");
    });

}

async function logout() {
    window.location.replace("../index.html");
}

