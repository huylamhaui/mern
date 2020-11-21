const Account = require('../models/Account');
const auth = require('../utils/auth');

const login = (req, res) => {
    const { username, password } = req.body;
    Account.findOne({
        username
    }).then(data => {
        console.log(data);
        const token = auth.generateToken(data);
        res.json({ token });
    }).catch(err => {
        console.error(err);
        res.status(400).json(err);
    })
}

module.exports = {
    login
}