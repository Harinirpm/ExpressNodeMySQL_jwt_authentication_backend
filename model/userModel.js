const db = require("../db");

const findUser = (username, password, callback) =>{
    const sql = "SELECT * FROM users WHERE username = ? AND password = ?";
    db.query(sql, [username,password],(err,results) => {
     if(err){
        return callback(err,null);
     }
     callback(null,results[0]);
    });
};

const getAllUsers = (callback) => {
    const sql = "SELECT id, username, password FROM users";
    db.query(sql,(err,results)=>{
        if(err) return callback(err,null); // if error, pass error to callback
        callback(null, results); //if success, pass results t0 controllers callback
    });
};

const deleteUser = (id,callback) => {
    const sql = "DELETE FROM users WHERE id = ?";
    db.query(sql, [id], (err,results)=>{
        if(err)return callback(err,null);
        callback(null,results);
    });
};
module.exports = {findUser,getAllUsers,deleteUser}