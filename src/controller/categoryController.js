const Category = require('../model/category');

// Create a new category
exports.createCategory = async (req, res) => {
  try {
    const { name, email, age, city, profession } = req.body;

    const newCategory = new Category({
      name,
      email,
      age,
      city,
      profession
    });

    await newCategory.save();
    res.status(201).json({ message: 'Category created successfully', category: newCategory });
  } catch (err) {
    res.status(500).json({ message: 'Error creating category', error: err.message });
  }
};

// Get all categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    // console.log(categories);
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching categories', error: err.message });
  }
};

// Get category by ID
exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching category', error: err.message });
  }
};

// Update category by ID
exports.updateCategory = async (req, res) => {
  try {
    const { name, email, age, city, profession } = req.body;

    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      { name, email, age, city, profession },
      { new: true } // returns the updated document
    );

    if (!updatedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }

    res.status(200).json({ message: 'Category updated successfully', category: updatedCategory });
  } catch (err) {
    res.status(500).json({ message: 'Error updating category', error: err.message });
  }
};

// Delete category by ID
exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting category', error: err.message });
  }
};
