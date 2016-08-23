var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodejs');//指定Mongo的数据库名为nodejs
exports.mongoose = mongoose;