const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog.js");


// Yeni Blog Oluşturma
router.post("/", async (req, res) => {
  try {
    const { name, img , description1 , descriptionö , description3 } = req.body;

    const newBlog = new Blog({ name, img , description1 , descriptionö , description3});
    await newBlog.save();

    res.status(201).json(newBlog);
  } catch (error) {
    console.log(error);
  }
});


// Tüm Blogları Getirme (Read-All)
router.get("/", async (req, res) => {
  try {
    const categories = await Blog.find();

    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});


// Belirli bir Blog getirme (Read - Single)
router.get("/:BlogId", async (req, res) => {
  try {
    const BlogId = req.params.BlogId;
    

    try {
      const Blog = await Blog.findById(BlogId);

      res.status(200).json(Blog);
    } catch (error) {
      console.log(error);
      res.status(404).json({ error: "Blog not found." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

router.put("/:BlogId", async (req, res) => {
    try {
      const BlogId = req.params.BlogId;
      const updates = req.body;
  
      const existingBlog = await Blog.findById(BlogId);
  
      if (!existingBlog) {
        return res.status(404).json({ error: "Blog not found." });
      }
  
      const updatedBlog = await Blog.findByIdAndUpdate(
        BlogId,
        updates,
        { new: true }
      );
  
      res.status(200).json(updatedBlog);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error." });
    }
  });
// Blog silme (Delete)
router.delete("/:BlogId", async (req, res) => {
  try {
    const BlogId = req.params.BlogId;

    const deletedBlog = await Blog.findOneAndDelete(BlogId);

    if (!deletedBlog) {
      return res.status(404).json({ error: "Blog not found." });
    }

    res.status(200).json(deletedBlog);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;
