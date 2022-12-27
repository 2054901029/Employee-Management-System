
var results;

async function printData() {
    var res = await fetch('http://localhost:3300/employee/list');

    results = await res.json();

    console.log(results);

    results.forEach(element => {

        console.log(element);
        
        console.log(element.employee_id);
        
    });
}

