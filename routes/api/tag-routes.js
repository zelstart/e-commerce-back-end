const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
// be sure to include its associated Product data
router.get('/', (req, res) => {
  Tag.findAll({
    attributes: ['id', 'tag_name'],
    include: [{
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }]
  })
  .then(tagData => {
    res.json(tagData);
  })
  .catch(err => {
    res.status(500).json(err)
  })
});

// find a single tag by its `id`
// be sure to include its associated Product data
router.get('/:id', (req, res) => {
  Tag.findByPk(req.params.id, {
    include: [{
      model: Product
    }]
  })
  .then(tagById => {
    if (!tagById) {
      res.status(404).json ({ message: 'No tag found with that id!'})
    } else {
      res.status(200).json(tagById)
    }
  })
  .catch(err => {
    res.status(500).json(err)
  })
});

// create a new tag
router.post('/', (req, res) => {
  Tag.create({ 
    tag_name: req.body.tag_name
  })
  .then((newTag) => 
  res.json(newTag))
  .catch((err) => {
    res.json(err)
  })
});

// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  Tag.update(
    { tag_name: req.body.tag_name },
    { where: { id: req.params.id }}
  )
  .then(updatedTag => {
    if (updatedTag[0] === 0) {
      res.status(404).json({ message: 'No tag found with that id!' })
    } else {
      res.status(200).json({ message: 'Tag updated successfully!' })
    }
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

// delete on tag by its `id` value
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(deletedTag => {
    if (deletedTag === 0) {
      res.status(404).json({ message: 'No tag found with that id!'})
    } else {
      res.status(500).json(err)
    }
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

module.exports = router;
