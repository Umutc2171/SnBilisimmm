const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    description1: { type: String, required: true },
    descriptionö: { type: String, required: true },
    description3: { type: String, required: true },



  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog;