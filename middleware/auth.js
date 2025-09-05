const jwt = require("jsonwebtoken");

function auth(req, res, next){
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; //Bearer token

    if(!token){
        return res.status(403).json({message : "Token required"});
    }

    jwt.verify(token, process.env.SECRET_KEY, (err,user) => {
        if(err) return res.status(403).json({message:"Invalid Token"});
        req.user = user;
        next();
    });
}
module.exports = auth;