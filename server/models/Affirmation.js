const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const  affirmationSchema = Schema(
    {
      
      affirmation: {
        type: String,
        required: [true, 'Comment is required'],
        minlength: 1,
      },
      author: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: [true, 'Author is required'],
      },
    },
    // Add the timestamps option here
    { timestamps: true }
  );
  
const Affirmation = mongoose.model("Affirmation", affirmationSchema);
module.exports = Affirmation