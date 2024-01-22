const jwt = require('jsonwebtoken');
//you can add this function to any route that you want to be private
//if token is verified add it on to the user object else send a message denying access
//when you successfully log in we add a token to the header
module.exports = function(req, res, next) {
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('Access Denied');

    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send('Invalid Token');
    }
}