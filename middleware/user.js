const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");
function usermiddleware(req,res,next){
    const token = req.headers.authorization;
    const word = token.split(" ");
    const jwttoken = word[1];
    const decodedValue = jwt.verify(jwttoken, JWT_SECRET);

    if (decodedValue.username) {    
        req.username = decodedValue.username;
        req.randomData = "Adsadsadsadssd";
        next();
    } else {
        res.status(403).json({
            msg: "You are not authenticated"
        })
    }

}
module.exports = usermiddleware;