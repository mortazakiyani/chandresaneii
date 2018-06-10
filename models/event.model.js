var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var examSchema = new Schema({

    id: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
    date: {
        type: Date,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    description:{
        type: String,
    }



});

module.exports = mongoose.model('exam', examSchema);