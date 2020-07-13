const { Schema, model } = require("mongoose");
const postSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  text: {
    type: String,
    required: true,
  },
  name: String,
  avatar: String,
  likes: [
    {
      user: {
        type: ScSchema.Types.ObjectId,
        ref: "users",
      },
    },
  ],
  comments: [
    {
      user: {
        type: ScSchema.Types.ObjectId,
        ref: "users",
      },
      text: {
        type: String,
        required: true,
      },
      name: String,
      avatar: String,
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

module.exports = model("post", postSchema);
