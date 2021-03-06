const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  provider: String,
  provider_id: String,
  provider_img: String,
  token: String,
  followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  following: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
})

UserSchema.methods.addFollower = (follower) => {
  this.followers.push(follower) 
}

module.exports = mongoose.model('User', UserSchema)