const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);


const datacon = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'knot',
}

let authenticateUser = async (input) => {
    const connection = mysql.createConnection(datacon);
    await connection.connectAsync();

    let sql = "SELECT * FROM user WHERE email=? AND Password=?";
    const results = await connection.queryAsync(sql, [
        input.email,
        input.Password,
    ]);

    await connection.endAsync();

    if (results.length === 0) {
        throw new Error("Invalid Credentials");
    }
};

let adduser = async (input) => {

    const con = mysql.createConnection(datacon);
    await con.connectAsync();
    let sql = "INSERT INTO user (FirstName,email,mobile,Password) VALUES(?,?,?,?)"
    await con.queryAsync(sql, [
        input.FirstName,
        input.email,
        input.Password,
        input.mobile,
    ]);
    await con.endAsync();
};

let updateuser = async(input) => {


    const con = mysql.createConnection(datacon);

    await con.connectAsync();

    let sql = "UPDATE user  set password=? WHERE email=?"

    let results = await con.queryAsync(sql, [ input.Password,input.email]);

    await con.endAsync();

    return results;
}
module.exports = { authenticateUser, adduser,updateuser };






/*const Promise = require('bluebird');
const mysql = require('mysql');

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const db_config = {
    host: "localhost",
    user: "root",
    password: "",
    database: "knot",
};

let addUser = async(input) => {
    const connection = mysql.createConnection(db_config);
    await connection.connectAsync();

    let sql = "insert into user(FirstName,email,mobile,Password)values(?,?,?,?)";
    await connection.query(sql, [
        input.FirstName,
        input.email,
        input.mobile,
        input.Password,
    ]);
    await connection.endAsync();
};
let authenticateUser = async(input) => {
    const connection = mysql.createConnection(db_config);
    await connection.connectAsync();
    let sql = "select * from user where FirstName=? and Password = ?";
    const results = await connection.queryAsync(sql, [input.FirstName, input.Password]);
    await connection.endAsync();
    if (results.length =0) {
        throw new Error("Invalid Credential");
    }
}
module.exports = { addUser, authenticateUser };
*/
