
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
        let insertQuery = `insert into employees(employee_id, name, age,phone_no, email,status,dept_id,admin_id)
                           values(${employees.employee_id}, '${employees.name}', '${employees.age}', '${employees.phone_no}', '${employees.email}', '${employees.status}', '${employees.dept_id}', '${employees.admin_id}')`
    
        client.query(insertQuery, (err, result)=>{
            if(!err){
                res.send('Insertion was successful')
            }
            else{ console.log(err.message) }
        })
        client.end;
    }


exports.updateEmployee= (req, res)=> {
    const employees = req.body;
        let updateQuery = `update employees
                           set name = '${employees.name}',
                           age = '${employees.age}',
                           email = '${employees.email}'
                           where employee_id = ${employees.employee_id}`
    
        client.query(updateQuery, (err, result)=>{
            if(!err){
                res.send('Update was successful')
            }
            else{ console.log(err.message) }
        })
        client.end;
    }


 exports.deleteEmployee=(req, res)=> {
        let insertQuery = `delete from employees where employee_id=${req.params.id}`
    
        client.query(insertQuery, (err, result)=>{
            if(!err){
                res.send('Deletion was successful')
            }
            else{ console.log(err.message) }
        })
        client.end;
    }   


    