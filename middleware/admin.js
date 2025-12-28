const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../db");

function adminmiddleware(req,res,next){
    const token = req.headers.authorization;
    const word = token.split(" ");
    const jwttoken = word[1];
    const decodedValue = jwt.verify(jwttoken, JWT_SECRET);

    try{
        if(decodedValue.username){
            next();
        }else{
            res.status(403).json({
                msg:" Not Authenticate !!"
            })
        }
    }catch(e){
        res.json({
            msg:"Wrong Input !!"
        })
    }
}
module.exports= adminmiddleware;