const mongoose = require('mongoose')

const User = mongoose.Schema({
    name : {type: String},
    password : {type: String},
},
{collection: 'user-data'});

module.exports = mongoose.model('User', User);

