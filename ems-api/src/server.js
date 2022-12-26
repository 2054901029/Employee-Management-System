
const client = require('./dao/dao.js')
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: '*'
}));

//Routes Imports
const employee = require('./routes/employee');
const department = require('./routes/department');


// Running the Server 
const server = app.listen(3300, () => {
    console.log("Server is now listening at port 3300");
})

// Connect to DB Client
client.connect().then(() => {
    console.log("Postgresql is Connected!");
}).catch((err) => {
    console.log(err);
    server.close();
});

// Routes
app.get('/employee/list', employee.getEmployeeList);
app.get('/employee/:id', employee.getEmployeeById);

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post('/employee/insert', employee.insertEmployee);
app.put('/employee/:id', employee.updateEmployee);
app.delete('/employee/:id', employee.deleteEmployee);



app.get('/department/list', department.getDepartmentList);
app.get('/department/:id', department.getDepartmentById);
app.post('/department/insert', department.insertDepartment);
app.put('/department/:id', department.updateDepartment);
app.delete('/department/:id', department.deleteDepartment);

