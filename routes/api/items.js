const express = require("express");

const router = express.Router();

// Item Model
const Item = require("../../models/Item");

// @route   GET api/items
// @desc    GET all items
// @access  Public
router.get("/", async (req, res) => {
  const items = await Item.find().sort({ date: -1 });

  return res.status(200).json(items);
});

// @route   POST api/items
// @desc    Create An item
// @access  Public
router.post("/", async (req, res) => {
  const newItem = { name: req.body.name };
  const item = await Item.create(newItem);
  return res.status(201).json(item);
});

// @route   DELETE api/items/:id
// @desc    Delete A item
// @access  Public
router.delete("/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({
        success: false,
        error: "No Transaction Found",
      });
    }

    await item.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
});

module.exports = router;
