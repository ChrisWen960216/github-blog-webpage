const mongoose = require('mongoose');
const $dataModel = mongoose.Schema({title: 'string', content: 'string', date: 'date'});

// mongoose.model(collection's name,schema);
exports.$dataModel = mongoose.model('Blog', $dataModel);
