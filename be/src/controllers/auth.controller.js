const bcrypt = require('bcrypt');
const Account = require('../models/Account');
const auth = require('../utils/auth');

const login = (req, res) => {
    const { username, password } = req.body;
    Account.findOne({ username: username })
        .exec()
        .then(data => {
            if (data) {
                const result = bcrypt.compareSync(password, data.password);
                if (!result) {
                    return res.status(400).json({
                        errorMessage: "bad credentical"
                    });
                } else {
                    return res.json({
                        token: auth.generateToken(data),
                        user: data
                    })
                }
            }else {
                return res.json({
                    token: auth.generateToken(data),
                    user: data
                })
            }
        })
        .catch(err => {
            console.error(err);
            res.status(400).json(err);
        })
}

const createAccount = (req, res) => {
    const { username, password } = req.body;
    const account = new Account({
        username,
        password: bcrypt.hashSync(password, 12)
    });
    account.save()
        .then(result => {
            return res.json(result);
        })
        .catch(err => {
            return res.status(400).json(err);
        })
}

module.exports = {
    login,
    createAccount
}