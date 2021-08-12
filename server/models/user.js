import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    role: {type: String, required: true},
    username: {type: String, required: true},
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    address: String
})

export default mongoose.model('user', userSchema);