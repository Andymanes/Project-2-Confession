const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
    },
    content: {
        type: String,
        required: [true, 'Comment goes here!'],
        maxlength: 250
        // character limit?
    },
    secret: {
        type: mongoose.Types.ObjectId,
        ref: 'Secret'
    },
    commentor:{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
        
},
    {
        timestamps: true
    }
)

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment