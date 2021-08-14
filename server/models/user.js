import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    role: {
        type: String,
        default: 'user'
    },
    score: {
        type: Number,
        default: 0
    },
    username: {type: String, required: true},
    name: {type: String, required: true},
    email: String,
    password: {type: String, required: true},
    avatar: String 
})

export default mongoose.model('user', userSchema);