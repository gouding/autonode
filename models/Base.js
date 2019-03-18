const config = require('../config/config')
const mongoose = require('mongoose')
const { ip } = config;
mongoose.connect(ip);
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId; //获取ObjectId类型，以便快捷使用

exports.mongoose = mongoose;
exports.Schema = Schema;
exports.ObjectId = ObjectId



