const jwt = require("jsonwebtoken");

const isAuthenticated = async(req, res, next)=>{
    //!Get the token from the header
    const header = req.headers;
    const token = header.authorization.split(' ')[1];
    //Verify the token
    const verifyToken = jwt.verify(token, 'anyKey', (err, decoded)=>{
        if(err){
            return false;
        }else{
            return decoded;
        }
    });
    
    if(verifyToken){
        //save the user into req.body
        req.user = verifyToken.id;
        next();
    }else{
        const err = new Error("Token expired please login again");
        next(err);
    }
};

module.exports = isAuthenticated;