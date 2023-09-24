const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const affirmationSchema = Schema(
  {
    affirmation: {
      type: String,
      required: [true, 'Comment is required'],
      minlength: 1,
    },
    author: {
      type: String,  // Change the type to String to store the username
      required: [true, 'Author is required'],
    },
  },
  // Add the timestamps option here
  { timestamps: true }
);

const Affirmation = mongoose.model("Affirmation", affirmationSchema);
module.exports = Affirmation