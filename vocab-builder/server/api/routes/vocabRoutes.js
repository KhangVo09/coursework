const vocabBuilder = require('../controllers/vocabController');
module.exports = app => {
    app
    .route('/words')
    .get(vocabBuilder.list_all_words)
    .post(vocabBuilder.create_a_word);
  app

     .route('/words/:wordId')
     .get(vocabBuilder.read_a_word)
     .put(vocabBuilder.update_a_word)
     .delete(vocabBuilder.delete_a_word);


};
// this file is router file for the app, define all Api path for vocabulary source
//It uses all functions in vocabcontroller to solve GET, POST, PUT, and DELETE.
