const mysql = require('mysql');
const { MY_SQL_CONFIG } = require('../config/MY_SQL_CONFIG')
//创建连接对象
const connection = mysql.createConnection(MY_SQL_CONFIG);
//开始连接
connection.connect();


function execSQL(sql) {
    const promise = new Promise((resolve, reject) => {
        connection.query(sql, (err, result) => {
            if (err) {
                reject(err);
                // console.error('error',error);
                return;
            }
            //console.log('result',result);
            resolve(result);
        })
    })
    return promise;
}
module.exports = {
    execSQL
}