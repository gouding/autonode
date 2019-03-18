const { Schema, mongoose, ObjectId, } = require('./Base')

let UserScheme = new Schema({
  userName: String,
  tel: String,
  password: String,
  lastLoginTime: Date,
  createTime: { type: DataCue, default: Date.now }
})
UserScheme.index({ tel: 1 }, { 'background': true })

mongoose.model('UserEntity', UserScheme, 'user')  //指定collection的表名为user
exports.UserEntity = UserEntity