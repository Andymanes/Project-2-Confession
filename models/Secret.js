const mongoose = require('mongoose');

const secretSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, 'name cannot be empty :('],
        maxlength: 500
    },
    category: {
        type: String,
        required: [true, 'category cannot be empty!']
    },
    username: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    comments: {
        type: [mongoose.Types.ObjectId],
        ref: 'Comments'
    }
},
    {
        timestamps: true
    }
);

// mongoose.model(<mongodb collection name>, our schema)
const Secret = mongoose.model('Secret', secretSchema);

module.exports = Secret;