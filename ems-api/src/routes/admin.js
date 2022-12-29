
const express = require('express');
const queryExecutor = require('../dao/queryExecutor')
const client = require('../dao/dao')
const router = express.Router()

exports.authorizeEmployee = (req, res) => {

    console.log(req.body);

    client.query(`select * from admin where username='${req.body.username}' and password='${req.body.password}'`, (err, result) => {
        if (!err) {
            if (result.rows.length > 0) {
                console.log(result.rows);
                res.send({ status: true, statusCode: 200, message: `Authenticated User!`, data: result.rows[0] });
            } else {
                res.send({ status: false, statusCode: 400, message: `Authentication Failed!` });
            }
        } else {
            res.send({ status: false, statusCode: 400, message: err.message });
        }
    });

    client.end;
}
