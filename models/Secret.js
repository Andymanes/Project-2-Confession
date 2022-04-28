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
    confessor: {
        type: String,
        // ref: 'User'
    },
    // username: {
    //     type: mongoose.Types.ObjectId,
    //     ref: 'User'
    // }
},
    {
        timestamps: true
    }
);

// mongoose.model(<mongodb collection name>, our schema)
const Secret = mongoose.model('Secret', secretSchema);

module.exports = Secret;