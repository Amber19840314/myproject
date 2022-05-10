'use strict';
const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

const BearSchema   = new Schema({
    name: String,
	sex: String,
	age: Number
});

module.exports = mongoose.model('Bear', BearSchema);
