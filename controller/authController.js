require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../model/userModel");
const login = (req,res) => {
    const {username, password} = req.body;
     User.findUser(username,password,(err,user)=> {
        if(err){
            console.error("DB error :",err);
            return res.status(500).json({message : "Internal server error..."});
        }
        if(!user){
            return res.status(401).json({message : "Invalid credentials"});
        }
        
        const token = jwt.sign(
            {id:user.id,username:user.username}, // payload
            process.env.SECRET_KEY, //signature
            {expiresIn: "1h"}
        );
        res.json({token});
    });
};

module.exports = {login}