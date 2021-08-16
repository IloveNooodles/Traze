import mongoose from 'mongoose';

const trashReport = mongoose.Schema({
    username: {type: String, required: true},
    title: {type: String, required: true},
    desc: String,
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    address: String,
    image: {type: String, required: true}
})

export default mongoose.model('trashReport', trashReport);