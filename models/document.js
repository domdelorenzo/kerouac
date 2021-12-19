const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Document = new Schema(
  {
    name: { type: String, required: true },
    userID: { type: String, required: true },
    content: { type: Object, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('documents', Document);
