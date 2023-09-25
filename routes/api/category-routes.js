const router = require('express').Router();
const { Category, Product } = require('../../models');

  // find all categories
  // be sure to include its associated Products
router.get('/', (req, res) => {
  Category.findAll({
    attributes: ['id', 'category_name'],
    include: [{
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }]
  })
  .then(categoryData => {
    res.json(categoryData);
  })
  .catch(err => {
    res.status(500).json(err);
  });
});


  // find one category by its `id` value
  // be sure to include its associated Products
router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id, {
    include: [{
      model: Product
    }]
  })
  .then(categoryById => {
    if (!categoryById) {
      res.status(404).json({ message: 'No category found with that id!'})
    } else {
      res.status(200).json(categoryById);
    }
  })
  .catch(err => {
    res.status(500).json(err);
  });
});



router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
  .then((newCategory) =>
    res.json(newCategory))
  .catch((err) => {
    res.json(err)
  })
});


router.put('/:id', (req, res) => {
    // update a category by its `id` value
  Category.update(
    { category_name: req.body.category_name },
    { where: { id: req.params.id } } 
  )
  .then(updatedCategory => {
    if (updatedCategory[0] === 0) {
      res.status(404).json({ message: 'No category found with that id!' });
    } else {
      res.status(200).json({ message: 'Category updated successfully!' });
    }
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(deletedCategory => {
    if (deletedCategory === 0) {
      res.status(404).json({ message: 'No category found with that id!' });
    } else {
      res.status(200).json({ message: 'Category deleted successfully!' });
    }
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

module.exports = router;
