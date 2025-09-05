const User = require("../model/userModel");

const getUsers = (req, res) =>{
    User.getAllUsers((err,users)=>{
        if(err){
            console.log("DB ERROR..",err);
            return res.status(500).json({message:"Internal Server Error.."});
        }
        console.log("ALL users got..");
        res.json(users);
    });
};

const deleteUser = (req,res) =>{
    const {id} = req.params;
    User.deleteUser(id, (err,result)=>{
if (err) {
  console.error("DB error:", err);
  return res.status(500).json({ message: "Internal server error" });
}
if (result.affectedRows === 0) {
  return res.status(404).json({ message: "User not found" });
}
console.log("user deleted..");
return res.json({ message: "User deleted successfully" });
    });
};
module.exports = {getUsers,deleteUser};