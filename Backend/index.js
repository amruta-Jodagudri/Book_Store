const express = require('express')
const app = express()
const port =  5000
const cors = require('cors')
require('./DB/config');
const jwt = require('jsonwebtoken');
const jwtKey = 'bookstore';
const User = require('./DB/User')
const Book = require('./DB/Books')
const bodyParser = require('body-parser');

//hash password
const bcrypt = require('bcrypt');

app.get("/", (req, res) => {
    console.log(req.body);
    res.status(201).json({status: "done"});
})
app.use(bodyParser.json());
app.use(cors());


app.post('/register',async(req,resp)=>{
    const saltRounds = 10;
    console.log(req.body);
    let {data} = req.body;

    const salt = bcrypt.genSaltSync(saltRounds);
    const hashpassword = bcrypt.hashSync(data.password, salt);


    let user = new User({
        email: data.email,
        password: hashpassword
    });

    let result = await user.save();
    //return resp.status(201).json({user: result})
    result = result.toObject();
    delete result.password;
    jwt.sign({result},jwtKey,{expiresIn:'2h'},(err,token)=>{
        if(err){
            resp.send({result:"Something went wrong, Please try after some time."})
        }
        resp.send({result,auth:token});
    })
    console.log(result)
})

//Log in
app.post('/login',async (req,resp)=>{
    if(req.body.password && req.body.email){
        let user =await User.findOne(req.body).select("-password");
        if(user){
            jwt.sign({user},jwtKey,{expiresIn:'2h'},(err,token)=>{
                if(err){
                    resp.send({result:"Something went wrong, Please try after some time."})
                }
                resp.send({user,auth:token});
            })
        }else{
            resp.send({result:'No user Found'});
        }
    }else{
        resp.send({result:'No user Found'});
    }
})

// // middleware
// app.use(cors());
// app.use(express.json());

// app.get('/',(req,resp)=>{
//     resp.send("Hello World!")
// })

//port
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})