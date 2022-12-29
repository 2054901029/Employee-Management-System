const employee_id = document.getElementById("employeeId");
const emp_name = document.getElementById("emp_name");
const age = document.getElementById("age");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const emp_status = document.getElementById("emp_status");
const department = document.getElementById("department");

var results;

async function updateEmployee() {
    var res = await fetch(`http://localhost:3300/employee/${parseInt(employee_id.value)}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ employee_id: parseInt(employee_id.value), name: emp_name.value, age: parseInt(age.value), email: email.value, phone_no: parseInt(phone.value), status: emp_status.value, dept_id: parseInt(department.value) })
    });
    results = await res.json();
    console.log(results);

    if (results.status == true) {
        var delayInMilliseconds = 1000;
        // document.getElementById("msg").innerHTML = results.message;
        setTimeout(function () {
            window.location.replace("../html/success.html");
        }, delayInMilliseconds);
    } else {
        // document.getElementById("msg").innerHTML = results.message;
    }
}

async function goBack() {
    window.location.replace("../html/success.html");
}

async function search() {
    var results;
    var res = await fetch(`http://localhost:3300/employee/${parseInt(employee_id.value)}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    results = await res.json();
    results = results[0];

    console.log(results);

    document.getElementById("emp_name").value = results.name;
    document.getElementById("age").value = results.age;
    document.getElementById("email").value = results.email;
    document.getElementById("phone").value = results.phone_no;
    document.getElementById("emp_status").value = results.status;
    document.getElementById("department").value = results.dept_id;
}

