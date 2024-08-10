const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VocabSchema = new Schema(
{
    english: {
        type: String,
        required: 'English word cannot be blank'
    },
    german: {
        type: String,
        required: 'German word cannot be blank'
    },
    italian : {
        type: String,
        required: 'Italian word cannot be blank'
    }

},
{ collection: 'vocab' }
);

module.exports = mongoose.model('Vocab', VocabSchema);

//This file is to define and export model: Vocab, allow it
// to manage data for vocabulary(German,English and italian) in MongoDB data center
 






