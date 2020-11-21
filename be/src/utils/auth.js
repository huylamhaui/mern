const jwt = require('jsonwebtoken');

const SECRET = "kldfiLKJFE(***O)";

const authMiddleware = (req, res, next) => {
    const token = req.headers['token'];
    if (token) {
        jwt.verify(token, SECRET, (err, data) => {
            if (err)
                return res.json(err);
            req.user = data;
        })
    }
    next()
}

const generateToken = (userData) => {
    return jwt.sign({userData}, SECRET, { expiresIn: 200 });
}



module.exports = {
    authMiddleware,
    generateToken
}