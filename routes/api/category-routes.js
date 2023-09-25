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
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
