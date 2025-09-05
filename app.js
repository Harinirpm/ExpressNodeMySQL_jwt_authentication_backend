require("dotenv").config();
const express = require('express');
const app = express();
const authRouter = require("./routes/auth");
const userRoutes = require("./routes/user");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth",authRouter);    
app.use("/users",userRoutes);

app.get('/',(req,res)=>{
    res.send("<h1>Home Page</h1>")
})


const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server listen on port ${port}...`);
})