const Account = require('../models/Account');
const bcrypt = require('bcrypt');

const getAll = (req, res) => {
    const { pageSize, pageNumber, sort } = req.query;
    const listAccount = Account.find({})
        .sort(sort)
        .skip((pageNumber - 1) * pageSize)
        .limit(pageSize)
        .exec((data, err) => {
            if (err) {
                res.json(err);
            } else {
                res.json(data);
            }
        })

}

const createAccount = (req, res) => {
    let body = req.body;
    console.log(body);
    body = {
        ...body,
        password: encode(body.password)
    };
    const account = new Account(body);
    account.save({
        validateBeforeSave: true
    }).then(data => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    })
}


function encode(input) {
    const saltRound = 12;
    const salt = bcrypt.genSaltSync(saltRound);
    const hash = bcrypt.hashSync(input, 'salt');
    return hash;
}

function checkPassword(raw, hash) {
    return bcrypt.compareSync(raw, hash);
}

module.exports = {
    getAll,
    createAccount
}