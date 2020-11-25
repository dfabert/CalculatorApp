const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
