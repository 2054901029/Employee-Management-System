
const express = require('express');
const queryExecutor = require('../dao/queryExecutor')
const client = require('../dao/dao')
const router=express.Router()


exports.getEmployeeList = async (req, res) => {

    // let sql = `Select * from employees`;

    // await queryExecutor.queryExecutor(sql).then((res)=>{
    //     console.log(res);

    // });


    client.query(`Select * from employees`, (err, result) => {
        if (!err) {
            console.log(result.rows);
            res.send(result.rows);
        }
    });

    client.end;


}

exports.getEmployeeById = (req, res) => {

    client.query(`Select * from employees where employee_id=${req.params.id}`, (err, result) => {
        if (!err) {
            console.log(result.rows);
            res.send(result.rows);
        } else{
            res.send(err.message)
        }
    });

    client.end;
}

exports.insertEmployee = (req, res) => {
        const employees = req.body;

        console.log(employees);

        let insertQuery = `insert into employees(employee_id, name, age,phone_no, email,status,dept_id)
                           values(${employees.employee_id}, '${employees.name}', '${employees.age}', '${employees.phone_no}', '${employees.email}', '${employees.status}', '${employees.dept_id}')`
    
        client.query(insertQuery, (err, result)=>{
            if(!err){
                res.send({ status: true, statusCode: 200, message: `Insertion succesfull`, data: result.rows[0] })
            }
            else{ console.log(err.message) }
        })
        client.end;
    }


exports.updateEmployee= (req, res)=> {

    console.log(req.body);
    const employees = req.body;
        let updateQuery = `update employees
                           set name = '${employees.name}',
                           age = '${employees.age}',
                           email = '${employees.email}',
                           phone_no= '${employees.phone_no}',
                           status = '${employees.status}',
                           dept_id = '${employees.dept_id}'
                           where employee_id = '${employees.employee_id}'`
    
        client.query(updateQuery, (err, result)=>{
            if(!err){
                res.send({ status: true, statusCode: 200, message: `Update succesfull`, data: result.rows[0] })
            }
            else{ console.log(err.message) }
        })
        client.end;
    }


 exports.deleteEmployee=(req, res)=> {
        let insertQuery = `delete from employees where employee_id=${req.params.id}`
    
        client.query(insertQuery, (err, result)=>{
            if(!err){
                res.send({ status: true, statusCode: 200, message: `Deletion succesfull`, data: result.rows[0] })
            }
            else{ console.log(err.message) }
        })
        client.end;
    }   


    