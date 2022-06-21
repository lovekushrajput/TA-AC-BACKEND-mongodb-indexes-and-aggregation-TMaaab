let mongoose = require('mongoose')
let Schema = mongoose.Schema

let userSchema = new Schema({
    name: String,
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    address: {
        city: String,
        state: String,
        country: String,
        pin: Number
    }
})

//compound index on address 
userSchema.index({ 'address.state': 1, 'address.city': 1 })

module.exports = mongoose.model('User', userSchema)