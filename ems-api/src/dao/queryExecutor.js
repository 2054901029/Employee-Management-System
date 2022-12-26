const client = require('./dao')

exports.queryExecutor = async (sql) => {
    client.query(sql, (err, result) => {
        if (!err) {
            console.log(result.rows);
            return result.rows;
        } else {
            return err.message;
        }
    });

    client.end;
}