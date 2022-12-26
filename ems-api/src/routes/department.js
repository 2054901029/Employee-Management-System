const express = require('express');
const queryExecutor = require('../dao/queryExecutor')
const client = require('../dao/dao')
const router=express.Router()

exports.getDepartmentList =  (req, res) => {


    client.query(`Select * from department`, (err, result) => {
        if (!err) {
            console.log(result.rows);
            res.send(result.rows);
        }
    });

    client.end;


}





exports.getDepartmentById = (req, res) => {

    client.query(`Select * from department where dept_id=${req.params.id}`, (err, result) => {
        if (!err) {
            console.log(result.rows);
            res.send(result.rows);
        } else{
            res.send(err.message)
        }
    });

    client.end;
}

exports.insertDepartment = (req, res) => {
        const department = req.body;
        let insertQuery = `insert into department(dept_id, dept_name)
                           values(${department.dept_id}, '${department.dept_name}')`
    
        client.query(insertQuery, (err, result)=>{
            if(!err){
                res.send('Insertion was successful')
            }
            else{ console.log(err.message) }
        })
        client.end;
    }


exports.updateDepartment= (req, res)=> {
    const department = req.body;
        let updateQuery = `update department
                           set dept_name = '${department.dept_name}'
                           where dept_id = ${department.dept_id}`
    
        client.query(updateQuery, (err, result)=>{
            if(!err){
                res.send('Update was successful')
            }
            else{ console.log(err.message) }
        })
        client.end;
    }


 exports.deleteDepartment=(req, res)=> {
        let insertQuery = `delete from department where dept_id=${req.params.id}`
    
        client.query(insertQuery, (err, result)=>{
            if(!err){
                res.send('Deletion was successful')
            }
            else{ console.log(err.message) }
        })
        client.end;
    }   

    