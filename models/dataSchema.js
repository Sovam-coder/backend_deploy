var mongoose = require('mongoose'); 

var resultSchema = mongoose.Schema({
    name: { type: String },
    score: { type: Number },
}, { timestamps: true });

module.exports = mongoose.model('result', resultSchema);