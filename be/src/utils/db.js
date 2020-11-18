const mongoose = require('mongoose');

const URL = 'mongodb://lamph11:open@35.247.133.74:27017/test';

mongoose.connect(
    URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        authSource: 'admin'
    }
).then(conn => {
    console.log('connected to mongodb ')
}).catch(err => {
    console.error('connect faild with error ' + err)
    console.log(err);
})


